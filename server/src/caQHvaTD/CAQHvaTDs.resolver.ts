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
import { CATTPvaTD } from 'src/caTTPvaTD/CATTPvaTD.model';
import { CBCS } from 'src/cbcss/CBCS.model';
import { DeNghiTSNT } from 'src/denghiTSNTs/DeNghiTSNT.model';
import { Doi } from 'src/dois/Doi.model';
import { KeHoachTSNT } from 'src/kehoachTSNTs/KeHoachTSNT.model';
import { QuyetDinhTSNT } from 'src/quyetdinhTSNTs/QuyetDinhTSNT.model';
import { TramCT } from 'src/tramCTs/TramCT.model';
import { UtilsParamsInput } from 'src/utils/type/UtilsParams.input';
import { CAQHvaTD } from './CAQHvaTD.model';
import { CAQHvaTDsService } from './CAQHvaTDs.service';
import { CAQHvaTDInput } from './type/CAQHvaTD.Input';

@Resolver(() => CAQHvaTD)
export class CAQHvaTDsResolver {
  constructor(private caQHvaTDsService: CAQHvaTDsService) {}
  @Query((returns) => [CAQHvaTD])
  caQHvaTDs(
    @Args('utilsParams') utilsParams: UtilsParamsInput,
  ): Promise<CAQHvaTD[]> {
    return this.caQHvaTDsService.caQHvaTDs(utilsParams);
  }

  @Query((returns) => CAQHvaTD)
  caQHvaTD(@Args('id') id: number): Promise<CAQHvaTD> {
    return this.caQHvaTDsService.caQHvaTD(id);
  }

  @Mutation((returs) => CAQHvaTD)
  createCAQHvaTD(
    @Args('caQHvaTDInput') caQHvaTDInput: CAQHvaTDInput,
  ): Promise<CAQHvaTD> {
    return this.caQHvaTDsService.createCAQHvaTD(caQHvaTDInput);
  }

  @Mutation((returns) => CAQHvaTD)
  editCAQHvaTD(
    @Args('caQHvaTDInput') caQHvaTDInput: CAQHvaTDInput,
    @Args('id') id: number,
  ): Promise<CAQHvaTD> {
    return this.caQHvaTDsService.editCAQHvaTD(caQHvaTDInput, id);
  }

  @Mutation((returns) => CAQHvaTD)
  deleteCAQHvaTD(@Args('id') id: number): Promise<CAQHvaTD> {
    return this.caQHvaTDsService.deleteCAQHvaTD(id);
  }

  // ResolveField

  @ResolveField((returns) => CATTPvaTD)
  CATTPvaTD(@Parent() caQHvaTD: CAQHvaTD): Promise<CATTPvaTD> {
    return this.caQHvaTDsService.CATTPvaTD(caQHvaTD);
  }

  @ResolveField((returns) => [Doi])
  Dois(@Parent() caQHvaTD: CAQHvaTD): Promise<Doi[]> {
    return this.caQHvaTDsService.Dois(caQHvaTD.MaCAQHvaTD);
  }

  @ResolveField((returns) => [DeNghiTSNT])
  DeNghiTSNTs(@Parent() CAQHvaTD: CAQHvaTD): Promise<DeNghiTSNT[]> {
    return this.caQHvaTDsService.DeNghiTSNTs(CAQHvaTD.MaCAQHvaTD);
  }

  @ResolveField((returns) => [CBCS])
  CBCSs(@Parent() CAQHvaTD: CAQHvaTD): Promise<CBCS[]> {
    return this.caQHvaTDsService.CBCSs(CAQHvaTD.MaCAQHvaTD);
  }

  @ResolveField((returns) => [QuyetDinhTSNT])
  QuyetDinhTSNTs(@Parent() CAQHvaTD: CAQHvaTD): Promise<QuyetDinhTSNT[]> {
    return this.caQHvaTDsService.QuyetDinhTSNTs(CAQHvaTD.MaCAQHvaTD);
  }

  @ResolveField((returns) => [TramCT])
  TramCTs(@Parent() CAQHvaTD: CAQHvaTD): Promise<TramCT[]> {
    return this.caQHvaTDsService.TramCTs(CAQHvaTD.MaCAQHvaTD);
  }

  @ResolveField((returns) => [BaoCaoPHQH])
  BaoCaoPHQHs(@Parent() CAQHvaTD: CAQHvaTD): Promise<BaoCaoPHQH[]> {
    return this.caQHvaTDsService.BaoCaoPHQHs(CAQHvaTD.MaCAQHvaTD);
  }

  @ResolveField((returns) => [BaoCaoKQGH])
  BaoCaoKQGHs(@Parent() CAQHvaTD: CAQHvaTD): Promise<BaoCaoKQGH[]> {
    return this.caQHvaTDsService.BaoCaoKQGHs(CAQHvaTD.MaCAQHvaTD);
  }

  @ResolveField((returns) => [BaoCaoKQXMQuanHe])
  BaoCaoKQXMQuanHes(@Parent() CAQHvaTD: CAQHvaTD): Promise<BaoCaoKQXMQuanHe[]> {
    return this.caQHvaTDsService.BaoCaoKQXMQuanHes(CAQHvaTD.MaCAQHvaTD);
  }

  @ResolveField((returns) => [BaoCaoKQXMDiaChi])
  BaoCaoKQXMDiaChis(@Parent() CAQHvaTD: CAQHvaTD): Promise<BaoCaoKQXMDiaChi[]> {
    return this.caQHvaTDsService.BaoCaoKQXMDiaChis(CAQHvaTD.MaCAQHvaTD);
  }

  @ResolveField((returns) => [KeHoachTSNT])
  KeHoachTSNTs(@Parent() CAQHvaTD: CAQHvaTD): Promise<KeHoachTSNT[]> {
    return this.caQHvaTDsService.KeHoachTSNTs(CAQHvaTD.MaCAQHvaTD);
  }
}
