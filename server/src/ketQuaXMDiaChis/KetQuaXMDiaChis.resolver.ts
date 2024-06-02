import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver
} from '@nestjs/graphql';
import { UtilsParamsInput } from 'src/utils/type/UtilsParams.input';
import { KetQuaXMDiaChi } from './KetQuaXMDiaChi.model';
import { KetQuaXMDiaChisService } from './KetQuaXMDiaChis.service';
import { KetQuaXMDiaChiInput } from './type/KetQuaXMDiaChi.input';
import { DiaChiNV } from 'src/diachiNVs/DiaChiNV.model';
import { DeNghiTSNT } from 'src/denghiTSNTs/DeNghiTSNT.model';
import { CATTPvaTD } from 'src/caTTPvaTD/CATTPvaTD.model';
import { QuyetDinhTSNT } from 'src/quyetdinhTSNTs/QuyetDinhTSNT.model';
import { CAQHvaTD } from 'src/caQHvaTD/CAQHvaTD.model';
import { DoiTuong } from 'src/doituongs/DoiTuong.model';
import { CBCS } from 'src/cbcss/CBCS.model';

@Resolver(() => KetQuaXMDiaChi)
export class KetQuaXMDiaChisResolver {
  constructor(private ketQuaXMDiaChisService: KetQuaXMDiaChisService) { }

  @Query((returns) => [KetQuaXMDiaChi])
  ketQuaXMDiaChis(
    @Args('utilsParams') utilsParams: UtilsParamsInput,
  ): Promise<KetQuaXMDiaChi[]> {
    return this.ketQuaXMDiaChisService.ketQuaXMDiaChis(utilsParams);
  }

  @Query((returns) => KetQuaXMDiaChi)
  ketQuaXMDiaChi(@Args('id') id: number): Promise<KetQuaXMDiaChi> {
    return this.ketQuaXMDiaChisService.ketQuaXMDiaChi(id);
  }

  @Mutation((returns) => KetQuaXMDiaChi)
  createKetQuaXMDiaChi(@Args('ketQuaXMDiaChiInput') ketQuaXMDiaChiInput: KetQuaXMDiaChiInput): Promise<KetQuaXMDiaChi> {
    return this.ketQuaXMDiaChisService.createKetQuaXMDiaChi(ketQuaXMDiaChiInput);
  }

  @Mutation((returns) => KetQuaXMDiaChi)
  editKetQuaXMDiaChi(
    @Args('ketQuaXMDiaChiInput') ketQuaXMDiaChiInput: KetQuaXMDiaChiInput,
    @Args('id') id: number,
  ): Promise<KetQuaXMDiaChi> {
    return this.ketQuaXMDiaChisService.editKetQuaXMDiaChi(ketQuaXMDiaChiInput, id);
  }

  @Mutation((returns) => KetQuaXMDiaChi)
  deleteKetQuaXMDiaChi(@Args('id') id: number): Promise<KetQuaXMDiaChi> {
    return this.ketQuaXMDiaChisService.deleteKetQuaXMDiaChi(id);
  }

  //ResolveField
  @ResolveField(returns => DiaChiNV)
  DiaChiNV(@Parent() ketquaXMDiaChi: KetQuaXMDiaChi): Promise<DiaChiNV> {
    return this.ketQuaXMDiaChisService.DiaChiNV(ketquaXMDiaChi)
  }

  @ResolveField(returns => DeNghiTSNT)
  DeNghiTSNT(@Parent() ketquaXMDiaChi: KetQuaXMDiaChi): Promise<DeNghiTSNT> {
    return this.ketQuaXMDiaChisService.DeNghiTSNT(ketquaXMDiaChi)
  }

  @ResolveField(returns => CATTPvaTD)
  CATTPvaTD(@Parent() ketquaXMDiaChi: KetQuaXMDiaChi): Promise<CATTPvaTD> {
    return this.ketQuaXMDiaChisService.CATTPvaTD(ketquaXMDiaChi)
  }

  @ResolveField(returns => QuyetDinhTSNT)
  QuyetDinhTSNT(@Parent() ketquaXMDiaChi: KetQuaXMDiaChi): Promise<QuyetDinhTSNT> {
    return this.ketQuaXMDiaChisService.QuyetDinhTSNT(ketquaXMDiaChi)
  }

  @ResolveField(returns => CAQHvaTD)
  CAQHvaTD(@Parent() ketquaXMDiaChi: KetQuaXMDiaChi): Promise<CAQHvaTD> {
    return this.ketQuaXMDiaChisService.CAQHvaTD(ketquaXMDiaChi)
  }

  @ResolveField(returns => DoiTuong)
  DoiTuong(@Parent() ketquaXMDiaChi: KetQuaXMDiaChi): Promise<DoiTuong> {
    return this.ketQuaXMDiaChisService.DoiTuong(ketquaXMDiaChi)
  }

  @ResolveField(returns => CBCS)
  LanhDaoPD(@Parent() ketquaXMDiaChi: KetQuaXMDiaChi): Promise<CBCS> {
    return this.ketQuaXMDiaChisService.LanhDaoPD(ketquaXMDiaChi)
  }
}
