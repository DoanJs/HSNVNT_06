import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { BaoCaoKQGH } from 'src/baocaoKQGHs/BaoCaoKQGH.model';
import { BaoCaoPHQH } from 'src/baocaoPHQHs/BaoCaoPHQH.model';
import { DanhGiaTSTH } from 'src/danhgiaTSTHs/DanhGiaTSTH.model';
import { DDNB } from 'src/ddnbs/DDNB.model';
import { DiaChiNV } from 'src/diachiNVs/DiaChiNV.model';
import { KeHoachTSNT } from 'src/kehoachTSNTs/KeHoachTSNT.model';
import PhuongTienNV from 'src/phuongtienNVs/PhuongTienNV.model';
import { TinhTP } from 'src/tinhTPs/TinhTP.model';
import { UtilsParamsInput } from 'src/utils/type/UtilsParams.input';
import { KetQuaTSNT } from './KetQuaTSNT.model';
import { KetQuaTSNTsService } from './KetQuaTSNTs.service';
import { KetQuaTSNTInput } from './type/KetQuaTSNT.input';
import { QuyetDinhTSNT } from 'src/quyetdinhTSNTs/QuyetDinhTSNT.model';
import { BaoCaoKTDN } from 'src/baocaoKTDNs/BaoCaoKTDN.model';

@Resolver(() => KetQuaTSNT)
export class KetQuaTSNTsResolver {
  constructor(private ketquaTSNTsService: KetQuaTSNTsService) { }
  @Query((returns) => [KetQuaTSNT])
  ketquaTSNTs(
    @Args('utilsParams') utilsParams: UtilsParamsInput,
  ): Promise<KetQuaTSNT[]> {
    return this.ketquaTSNTsService.ketquaTSNTs(utilsParams);
  }

  @Query((returns) => KetQuaTSNT)
  ketquaTSNT(@Args('id') id: number): Promise<KetQuaTSNT> {
    return this.ketquaTSNTsService.ketquaTSNT(id);
  }

  @Mutation((returns) => KetQuaTSNT)
  createKetQuaTSNT(
    @Args('ketquaTSNTInput') ketquaTSNTInput: KetQuaTSNTInput,
  ): Promise<KetQuaTSNT> {
    return this.ketquaTSNTsService.createKetQuaTSNT(ketquaTSNTInput);
  }

  @Mutation((returns) => KetQuaTSNT)
  editKetQuaTSNT(
    @Args('id') id: number,
    @Args('ketquaTSNTInput') ketquaTSNTInput: KetQuaTSNTInput,
  ): Promise<KetQuaTSNT> {
    return this.ketquaTSNTsService.editKetQuaTSNT(ketquaTSNTInput, id);
  }

  @Mutation((returns) => KetQuaTSNT)
  deleteKetQuaTSNT(
    @Args('id') id: number,
  ): Promise<KetQuaTSNT> {
    return this.ketquaTSNTsService.deleteKetQuaTSNT(id);
  }

  // ResolveField

  @ResolveField(returns => KeHoachTSNT)
  KeHoachTSNT(@Parent() ketquaTSNT: KetQuaTSNT): Promise<KeHoachTSNT> {
    return this.ketquaTSNTsService.KeHoachTSNT(ketquaTSNT)
  }

  @ResolveField(returns => QuyetDinhTSNT)
  QuyetDinhTSNT(@Parent() ketquaTSNT: KetQuaTSNT): Promise<QuyetDinhTSNT> {
    return this.ketquaTSNTsService.QuyetDinhTSNT(ketquaTSNT)
  }

  @ResolveField(returns => [TinhTP])
  PhamViTSs(@Parent() ketquaTSNT: KetQuaTSNT): Promise<TinhTP[]> {
    return this.ketquaTSNTsService.PhamViTSs(ketquaTSNT.MaKQ)
  }

  @ResolveField(returns => [DDNB])
  DDNBs(@Parent() ketquaTSNT: KetQuaTSNT): Promise<DDNB[]> {
    return this.ketquaTSNTsService.DDNBs(ketquaTSNT.MaKQ)
  }

  @ResolveField(returns => [DanhGiaTSTH])
  DanhGiaTSTHs(@Parent() ketquaTSNT: KetQuaTSNT): Promise<DanhGiaTSTH[]> {
    return this.ketquaTSNTsService.DanhGiaTSTHs(ketquaTSNT.MaKQ)
  }

  @ResolveField(returns => BaoCaoKTDN)
  BaoCaoKTDN(@Parent() ketquaTSNT: KetQuaTSNT): Promise<BaoCaoKTDN> {
    return this.ketquaTSNTsService.BaoCaoKTDN(ketquaTSNT.MaKQ)
  }

  @ResolveField(returns => [BaoCaoPHQH])
  BaoCaoPHQHs(@Parent() ketquaTSNT: KetQuaTSNT): Promise<BaoCaoPHQH[]> {
    return this.ketquaTSNTsService.BaoCaoPHQHs(ketquaTSNT.MaKQ)
  }

  @ResolveField(returns => [BaoCaoKQGH])
  BaoCaoKQGHs(@Parent() ketquaTSNT: KetQuaTSNT): Promise<BaoCaoKQGH[]> {
    return this.ketquaTSNTsService.BaoCaoKQGHs(ketquaTSNT.MaKQ)
  }

  @ResolveField(returns => [DiaChiNV])
  DiaChiNVs(@Parent() ketquaTSNT: KetQuaTSNT): Promise<DiaChiNV[]> {
    return this.ketquaTSNTsService.DiaChiNVs(ketquaTSNT.MaKQ)
  }

  @ResolveField(returns => [PhuongTienNV])
  PhuongTienNVs(@Parent() ketquaTSNT: KetQuaTSNT): Promise<PhuongTienNV[]> {
    return this.ketquaTSNTsService.PhuongTienNVs(ketquaTSNT.MaKQ)
  }
}
