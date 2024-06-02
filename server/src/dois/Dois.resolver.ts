import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { BaoCaoKQGH } from 'src/baocaoKQGHs/BaoCaoKQGH.model';
import { BaoCaoKQXMDiaChi } from 'src/baocaoKQXMDiaChis/BaoCaoKQXMDiaChi.model';
import { BaoCaoKQXMQuanHe } from 'src/baocaoKQXMQuanHes/BaoCaoKQXMQuanHe.model';
import { BaoCaoPHQH } from 'src/baocaoPHQHs/BaoCaoPHQH.model';
import { CAQHvaTD } from 'src/caQHvaTD/CAQHvaTD.model';
import { CBCS } from 'src/cbcss/CBCS.model';
import { KeHoachTSNT } from 'src/kehoachTSNTs/KeHoachTSNT.model';
import { QuyetDinhTSNT } from 'src/quyetdinhTSNTs/QuyetDinhTSNT.model';
import { TramCT } from 'src/tramCTs/TramCT.model';
import { UtilsParamsInput } from 'src/utils/type/UtilsParams.input';
import { Doi } from './Doi.model';
import { DoisService } from './Dois.service';
import { DoiInput } from './type/Doi.Input';

@Resolver(() => Doi)
export class DoisResolver {
  constructor(private doisService: DoisService) {}

  @Query((returns) => [Doi])
  dois(@Args('utilsParams') utilsParams: UtilsParamsInput): Promise<Doi[]> {
    return this.doisService.dois(utilsParams);
  }

  @Query((returns) => Doi)
  doi(@Args('id') id: number): Promise<Doi> {
    return this.doisService.doi(id);
  }

  @Mutation((returns) => Doi)
  createDoi(@Args('doiInput') doiInput: DoiInput): Promise<Doi> {
    return this.doisService.createDoi(doiInput);
  }

  @Mutation((returns) => Doi)
  editDoi(
    @Args('doiInput') doiInput: DoiInput,
    @Args('id') id: number,
  ): Promise<Doi> {
    return this.doisService.editDoi(doiInput, id);
  }

  @Mutation((returns) => Doi)
  deleteDoi(@Args('id') id: number): Promise<Doi> {
    return this.doisService.deleteDoi(id);
  }

  // ResolveField

  @ResolveField((returns) => CAQHvaTD)
  CAQHvaTD(@Parent() doi: Doi): Promise<CAQHvaTD> {
    return this.doisService.CAQHvaTD(doi);
  }

  @ResolveField((returns) => [QuyetDinhTSNT])
  QuyetDinhTSNTs(@Parent() doi: Doi): Promise<QuyetDinhTSNT[]> {
    return this.doisService.QuyetDinhTSNTs(doi.MaDoi);
  }

  @ResolveField((returns) => [CBCS])
  CBCSs(@Parent() doi: Doi): Promise<CBCS[]> {
    return this.doisService.CBCSs(doi.MaDoi);
  }

  @ResolveField((returns) => [KeHoachTSNT])
  KeHoachTSNTs(@Parent() doi: Doi): Promise<KeHoachTSNT[]> {
    return this.doisService.KeHoachTSNTs(doi.MaDoi);
  }

  @ResolveField((returns) => [TramCT])
  TramCTs(@Parent() doi: Doi): Promise<TramCT[]> {
    return this.doisService.TramCTs(doi.MaDoi);
  }

  @ResolveField((returns) => [BaoCaoPHQH])
  BaoCaoPHQHs(@Parent() doi: Doi): Promise<BaoCaoPHQH[]> {
    return this.doisService.BaoCaoPHQHs(doi.MaDoi);
  }

  @ResolveField((returns) => [BaoCaoKQGH])
  BaoCaoKQGHs(@Parent() doi: Doi): Promise<BaoCaoKQGH[]> {
    return this.doisService.BaoCaoKQGHs(doi.MaDoi);
  }

  @ResolveField((returns) => [BaoCaoKQXMQuanHe])
  BaoCaoKQXMQuanHes(@Parent() doi: Doi): Promise<BaoCaoKQXMQuanHe[]> {
    return this.doisService.BaoCaoKQXMQuanHes(doi.MaDoi);
  }

  @ResolveField((returns) => [BaoCaoKQXMDiaChi])
  BaoCaoKQXMDiaChis(@Parent() doi: Doi): Promise<BaoCaoKQXMDiaChi[]> {
    return this.doisService.BaoCaoKQXMDiaChis(doi.MaDoi);
  }
}
