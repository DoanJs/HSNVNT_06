import { UseGuards } from '@nestjs/common';
import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { GraphQLGuard } from 'src/authPassport/GraphQL.Guard';
import { BaoCaoKQGH } from 'src/baocaoKQGHs/BaoCaoKQGH.model';
import { BaoCaoKQXMDiaChi } from 'src/baocaoKQXMDiaChis/BaoCaoKQXMDiaChi.model';
import { BaoCaoKQXMQuanHe } from 'src/baocaoKQXMQuanHes/BaoCaoKQXMQuanHe.model';
import { BaoCaoPHQH } from 'src/baocaoPHQHs/BaoCaoPHQH.model';
import { CAQHvaTD } from 'src/caQHvaTD/CAQHvaTD.model';
import { CapBac } from 'src/capbacs/CapBac.model';
import { ChucVu } from 'src/chucvus/ChucVu.model';
import { DanhGiaTSTH } from 'src/danhgiaTSTHs/DanhGiaTSTH.model';
import { DanToc } from 'src/dantocs/DanToc.model';
import { DeNghiTSNT } from 'src/denghiTSNTs/DeNghiTSNT.model';
import { DiaChiNV } from 'src/diachiNVs/DiaChiNV.model';
import { Doi } from 'src/dois/Doi.model';
import { KeHoachTSNT } from 'src/kehoachTSNTs/KeHoachTSNT.model';
import { LLDB } from 'src/lldbs/LLDB.model';
import { LucLuongThamGiaKH } from 'src/lltgKeHoachs/LucLuongThamGiaKH.model';
import PhuongTienNV from 'src/phuongtienNVs/PhuongTienNV.model';
import { QuocTich } from 'src/quoctichs/QuocTich.model';
import { QuyetDinhTSNT } from 'src/quyetdinhTSNTs/QuyetDinhTSNT.model';
import { TonGiao } from 'src/tongiaos/TonGiao.model';
import { TramCT } from 'src/tramCTs/TramCT.model';
import { UtilsParamsInput } from 'src/utils/type/UtilsParams.input';
import { CBCS } from './CBCS.model';
import { CBCSsService } from './CBCSs.service';
import { CBCSInput } from './type/CBCS.Input';
import { InsertGuard } from 'src/authPassport/authorization/insert.guard';
import { ReadGuard } from 'src/authPassport/authorization/read.guard';

@Resolver(() => CBCS)
@UseGuards(GraphQLGuard)
export class CBCSsResolver {
  constructor(private cbcssService: CBCSsService) {}

  @Query((returns) => [CBCS])
  @UseGuards(ReadGuard)
  cbcss(@Args('utilsParams') utilsParams: UtilsParamsInput): Promise<CBCS[]> {
    return this.cbcssService.cbcss(utilsParams);
  }

  @Query((returns) => CBCS)
  cbcs(@Args('id') id: number): Promise<CBCS> {
    return this.cbcssService.cbcs(id);
  }

  @Mutation((returns) => CBCS)
  createCBCS(@Args('cbcsInput') cbcsInput: CBCSInput): Promise<CBCS> {
    return this.cbcssService.createCBCS(cbcsInput);
  }

  @Mutation((returns) => CBCS)
  editCBCS(
    @Args('cbcsInput') cbcsInput: CBCSInput,
    @Args('id') id: number,
  ): Promise<CBCS> {
    return this.cbcssService.editCBCS(cbcsInput, id);
  }

  @Mutation((retursn) => CBCS)
  deleteCBCS(
    @Args('cbcsInput') cbcsInput: CBCSInput,
    @Args('id') id: number,
  ): Promise<CBCS> {
    return this.cbcssService.deleteCBCS(cbcsInput, id);
  }

  // ResolveField

  @ResolveField((returns) => QuocTich)
  QuocTich(@Parent() cbcs: CBCS): Promise<QuocTich> {
    return this.cbcssService.QuocTich(cbcs);
  }

  @ResolveField((returns) => DanToc)
  DanToc(@Parent() cbcs: CBCS): Promise<DanToc> {
    return this.cbcssService.DanToc(cbcs);
  }

  @ResolveField((returns) => TonGiao)
  TonGiao(@Parent() cbcs: CBCS): Promise<TonGiao> {
    return this.cbcssService.TonGiao(cbcs);
  }

  @ResolveField((returns) => CAQHvaTD)
  CAQHvaTD(@Parent() cbcs: CBCS): Promise<CAQHvaTD> {
    return this.cbcssService.CAQHvaTD(cbcs);
  }

  @ResolveField((returns) => CapBac)
  CapBac(@Parent() cbcs: CBCS): Promise<CapBac> {
    return this.cbcssService.CapBac(cbcs);
  }

  @ResolveField((returns) => ChucVu)
  ChucVu(@Parent() cbcs: CBCS): Promise<ChucVu> {
    return this.cbcssService.ChucVu(cbcs);
  }

  @ResolveField((returns) => Doi)
  Doi(@Parent() cbcs: CBCS): Promise<Doi> {
    return this.cbcssService.Doi(cbcs);
  }

  @ResolveField((returns) => [DeNghiTSNT])
  LanhDaoDVDN_DeNghiTSNTs(@Parent() cbcs: CBCS): Promise<DeNghiTSNT[]> {
    return this.cbcssService.LanhDaoDVDN_DeNghiTSNTs(cbcs.MaCBCS);
  }

  @ResolveField((returns) => [DeNghiTSNT])
  CBPhuTrachDN_DeNghiTSNTs(@Parent() cbcs: CBCS): Promise<DeNghiTSNT[]> {
    return this.cbcssService.CBPhuTrachDN_DeNghiTSNTs(cbcs.MaCBCS);
  }

  @ResolveField((returns) => [DeNghiTSNT])
  LanhDaoCapTren_DeNghiTSNTs(@Parent() cbcs: CBCS): Promise<DeNghiTSNT[]> {
    return this.cbcssService.LanhDaoCapTren_DeNghiTSNTs(cbcs.MaCBCS);
  }

  @ResolveField((returns) => [DeNghiTSNT])
  DaiDienDonViTSNT_DeNghiTSNTs(@Parent() cbcs: CBCS): Promise<DeNghiTSNT[]> {
    return this.cbcssService.DaiDienDonViTSNT_DeNghiTSNTs(cbcs.MaCBCS);
  }

  @ResolveField((returns) => [QuyetDinhTSNT])
  LanhDaoQD_QuyetDinhTSNTs(@Parent() cbcs: CBCS): Promise<QuyetDinhTSNT[]> {
    return this.cbcssService.LanhDaoQD_QuyetDinhTSNTs(cbcs.MaCBCS);
  }

  @ResolveField((returns) => [KeHoachTSNT])
  LanhDaoPD_KeHoachTSNTs(@Parent() cbcs: CBCS): Promise<KeHoachTSNT[]> {
    return this.cbcssService.LanhDaoPD_KeHoachTSNTs(cbcs.MaCBCS);
  }

  @ResolveField((returns) => [KeHoachTSNT])
  BanChiHuy_KeHoachTSNTs(@Parent() cbcs: CBCS): Promise<KeHoachTSNT[]> {
    return this.cbcssService.BanChiHuy_KeHoachTSNTs(cbcs.MaCBCS);
  }

  @ResolveField((returns) => [LucLuongThamGiaKH])
  LucLuongThamGiaKHs(@Parent() cbcs: CBCS): Promise<LucLuongThamGiaKH[]> {
    return this.cbcssService.LucLuongThamGiaKHs(cbcs.MaCBCS);
  }

  @ResolveField((returns) => [DanhGiaTSTH])
  DanhGiaTSTHs(@Parent() cbcs: CBCS): Promise<DanhGiaTSTH[]> {
    return this.cbcssService.DanhGiaTSTHs(cbcs.MaCBCS);
  }

  @ResolveField((returns) => [BaoCaoPHQH])
  TSThucHien_BaoCaoPHQHs(@Parent() cbcs: CBCS): Promise<BaoCaoPHQH[]> {
    return this.cbcssService.TSThucHien_BaoCaoPHQHs(cbcs.MaCBCS);
  }

  @ResolveField((returns) => [PhuongTienNV])
  TSThucHien_PhuongTienNVs(@Parent() cbcs: CBCS): Promise<PhuongTienNV[]> {
    return this.cbcssService.TSThucHien_PhuongTienNVs(cbcs.MaCBCS);
  }

  @ResolveField((returns) => [DiaChiNV])
  TSThucHien_DiaChiNVs(@Parent() cbcs: CBCS): Promise<DiaChiNV[]> {
    return this.cbcssService.TSThucHien_DiaChiNVs(cbcs.MaCBCS);
  }

  @ResolveField((returns) => [BaoCaoPHQH])
  LanhDaoPD_BaoCaoPHQHs(@Parent() cbcs: CBCS): Promise<BaoCaoPHQH[]> {
    return this.cbcssService.LanhDaoPD_BaoCaoPHQHs(cbcs.MaCBCS);
  }

  @ResolveField((returns) => [BaoCaoPHQH])
  ToTruongTS_BaoCaoPHQHs(@Parent() cbcs: CBCS): Promise<BaoCaoPHQH[]> {
    return this.cbcssService.ToTruongTS_BaoCaoPHQHs(cbcs.MaCBCS);
  }

  @ResolveField((returns) => [BaoCaoKQGH])
  TSThucHien_BaoCaoKQGHs(@Parent() cbcs: CBCS): Promise<BaoCaoKQGH[]> {
    return this.cbcssService.TSThucHien_BaoCaoKQGHs(cbcs.MaCBCS);
  }

  @ResolveField((returns) => [BaoCaoKQGH])
  LanhDaoPD_BaoCaoKQGHs(@Parent() cbcs: CBCS): Promise<BaoCaoKQGH[]> {
    return this.cbcssService.LanhDaoPD_BaoCaoKQGHs(cbcs.MaCBCS);
  }

  @ResolveField((returns) => [TramCT])
  TSXayDung_TramCTs(@Parent() cbcs: CBCS): Promise<TramCT[]> {
    return this.cbcssService.TSXayDung_TramCTs(cbcs.MaCBCS);
  }

  @ResolveField((returns) => [TramCT])
  LanhDaoPD_TramCTs(@Parent() cbcs: CBCS): Promise<TramCT[]> {
    return this.cbcssService.LanhDaoPD_TramCTs(cbcs.MaCBCS);
  }

  @ResolveField((returns) => [BaoCaoKQXMQuanHe])
  TSXacMinh_BaoCaoKQXMQuanHes(
    @Parent() cbcs: CBCS,
  ): Promise<BaoCaoKQXMQuanHe[]> {
    return this.cbcssService.TSXacMinh_BaoCaoKQXMQuanHes(cbcs.MaCBCS);
  }

  @ResolveField((returns) => [BaoCaoKQXMQuanHe])
  LanhDaoPD_BaoCaoKQXMQuanHes(
    @Parent() cbcs: CBCS,
  ): Promise<BaoCaoKQXMQuanHe[]> {
    return this.cbcssService.LanhDaoPD_BaoCaoKQXMQuanHes(cbcs.MaCBCS);
  }

  @ResolveField((returns) => [BaoCaoKQXMQuanHe])
  BanChiHuy_BaoCaoKQXMQuanHes(
    @Parent() cbcs: CBCS,
  ): Promise<BaoCaoKQXMQuanHe[]> {
    return this.cbcssService.BanChiHuy_BaoCaoKQXMQuanHes(cbcs.MaCBCS);
  }

  @ResolveField((returns) => [BaoCaoKQXMDiaChi])
  TSXacMinh_BaoCaoKQXMDiaChis(
    @Parent() cbcs: CBCS,
  ): Promise<BaoCaoKQXMDiaChi[]> {
    return this.cbcssService.TSXacMinh_BaoCaoKQXMDiaChis(cbcs.MaCBCS);
  }

  @ResolveField((returns) => [BaoCaoKQXMDiaChi])
  LanhDaoPD_BaoCaoKQXMDiaChis(
    @Parent() cbcs: CBCS,
  ): Promise<BaoCaoKQXMDiaChi[]> {
    return this.cbcssService.LanhDaoPD_BaoCaoKQXMDiaChis(cbcs.MaCBCS);
  }

  @ResolveField((returns) => [BaoCaoKQXMDiaChi])
  BanChiHuy_BaoCaoKQXMDiaChis(
    @Parent() cbcs: CBCS,
  ): Promise<BaoCaoKQXMDiaChi[]> {
    return this.cbcssService.BanChiHuy_BaoCaoKQXMDiaChis(cbcs.MaCBCS);
  }

  @ResolveField((returns) => [LLDB])
  TSQuanLy_LLDBs(@Parent() cbcs: CBCS): Promise<LLDB[]> {
    return this.cbcssService.TSQuanLy_LLDBs(cbcs.MaCBCS);
  }
}
