import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { CAQHvaTD } from 'src/caQHvaTD/CAQHvaTD.model';
import { CBCS } from 'src/cbcss/CBCS.model';
import { DeNghiTSNT } from 'src/denghiTSNTs/DeNghiTSNT.model';
import { Doi } from 'src/dois/Doi.model';
import { DoiTuong } from 'src/doituongs/DoiTuong.model';
import { KetQuaTSNT } from 'src/ketquaTSNTs/KetQuaTSNT.model';
import { LLDB } from 'src/lldbs/LLDB.model';
import { LucLuongThamGiaKH } from 'src/lltgKeHoachs/LucLuongThamGiaKH.model';
import { QuyetDinhTSNT } from 'src/quyetdinhTSNTs/QuyetDinhTSNT.model';
import { TramCT } from 'src/tramCTs/TramCT.model';
import { UtilsParamsInput } from 'src/utils/type/UtilsParams.input';
import { KeHoachTSNT } from './KeHoachTSNT.model';
import { KeHoachTSNTsService } from './KeHoachTSNTs.service';
import { KeHoachTSNTInput } from './type/KeHoachTSNT.input';

@Resolver(() => KeHoachTSNT)
export class KeHoachTSNTsResolver {
  constructor(private kehoachTSNTsService: KeHoachTSNTsService) { }
  @Query((returns) => [KeHoachTSNT])
  kehoachTSNTs(
    @Args('utilsParams') utilsParams: UtilsParamsInput,
  ): Promise<KeHoachTSNT[]> {
    return this.kehoachTSNTsService.kehoachTSNTs(utilsParams);
  }

  @Query((returns) => KeHoachTSNT)
  kehoachTSNT(@Args('id') id: number): Promise<KeHoachTSNT> {
    return this.kehoachTSNTsService.kehoachTSNT(id);
  }

  @Mutation((returns) => KeHoachTSNT)
  createKeHoachTSNT(
    @Args('kehoachTSNTInput') kehoachTSNTInput: KeHoachTSNTInput,
  ): Promise<KeHoachTSNT> {
    return this.kehoachTSNTsService.createKeHoachTSNT(kehoachTSNTInput);
  }

  @Mutation((returns) => KeHoachTSNT)
  editKeHoachTSNT(
    @Args('id') id: number,
    @Args('kehoachTSNTInput') kehoachTSNTInput: KeHoachTSNTInput,
  ): Promise<KeHoachTSNT> {
    return this.kehoachTSNTsService.editKeHoachTSNT(kehoachTSNTInput, id);
  }

  @Mutation((returns) => KeHoachTSNT)
  deleteKeHoachTSNT(
    @Args('id') id: number,
    @Args('kehoachTSNTInput') kehoachTSNTInput: KeHoachTSNTInput,
  ): Promise<KeHoachTSNT> {
    return this.kehoachTSNTsService.deleteKeHoachTSNT(kehoachTSNTInput, id);
  }

  // ResolveField

  @ResolveField((returns) => KetQuaTSNT)
  KetQuaTSNT(@Parent() kehoachTSNT: KeHoachTSNT): Promise<KetQuaTSNT> {
    return this.kehoachTSNTsService.KetQuaTSNT(kehoachTSNT.MaKH);
  }

  @ResolveField((returns) => TramCT)
  TramCT(@Parent() kehoachTSNT: KeHoachTSNT): Promise<TramCT> {
    return this.kehoachTSNTsService.TramCT(kehoachTSNT);
  }

  @ResolveField((returns) => [LLDB])
  LLDBs(@Parent() kehoachTSNT: KeHoachTSNT): Promise<LLDB[]> {
    return this.kehoachTSNTsService.LLDBs(kehoachTSNT.MaKH);
  }

  @ResolveField((returns) => CBCS)
  LanhDaoPD(@Parent() kehoachTSNT: KeHoachTSNT): Promise<CBCS> {
    return this.kehoachTSNTsService.LanhDaoPD(kehoachTSNT);
  }

  @ResolveField((returns) => CBCS)
  BCHPhuTrach(@Parent() kehoachTSNT: KeHoachTSNT): Promise<CBCS> {
    return this.kehoachTSNTsService.BCHPhuTrach(kehoachTSNT);
  }

  @ResolveField((returns) => DoiTuong)
  DoiTuong(@Parent() kehoachTSNT: KeHoachTSNT): Promise<DoiTuong> {
    return this.kehoachTSNTsService.DoiTuong(kehoachTSNT);
  }

  @ResolveField((returns) => [LucLuongThamGiaKH])
  LLTGKeHoachs(@Parent() kehoachTSNT: KeHoachTSNT): Promise<LucLuongThamGiaKH[]> {
    return this.kehoachTSNTsService.LLTGKeHoachs(kehoachTSNT.MaKH);
  }

  @ResolveField((returns) => DeNghiTSNT)
  DeNghiTSNT(@Parent() kehoachTSNT: KeHoachTSNT): Promise<DeNghiTSNT> {
    return this.kehoachTSNTsService.DeNghiTSNT(kehoachTSNT);
  }

  @ResolveField((returns) => QuyetDinhTSNT)
  QuyetDinhTSNT(@Parent() kehoachTSNT: KeHoachTSNT): Promise<QuyetDinhTSNT> {
    return this.kehoachTSNTsService.QuyetDinhTSNT(kehoachTSNT);
  }

  @ResolveField((returns) => CAQHvaTD)
  DonVi(@Parent() kehoachTSNT: KeHoachTSNT): Promise<CAQHvaTD> {
    return this.kehoachTSNTsService.DonVi(kehoachTSNT);
  }

  @ResolveField((returns) => Doi)
  Doi(@Parent() kehoachTSNT: KeHoachTSNT): Promise<Doi> {
    return this.kehoachTSNTsService.Doi(kehoachTSNT);
  }


}
