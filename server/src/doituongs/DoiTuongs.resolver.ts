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
import { BienPhapDT } from 'src/bienPhapDTs/BienPhapDT.model';
import { DanToc } from 'src/dantocs/DanToc.model';
import { DeNghiTSNT } from 'src/denghiTSNTs/DeNghiTSNT.model';
import { DoiTuongCA } from 'src/doituongCAs/DoiTuongCA.model';
import { KeHoachTSNT } from 'src/kehoachTSNTs/KeHoachTSNT.model';
import { LoaiDT } from 'src/loaiDTs/LoaiDT.model';
import { QuocTich } from 'src/quoctichs/QuocTich.model';
import { QuyetDinhTSNT } from 'src/quyetdinhTSNTs/QuyetDinhTSNT.model';
import { TinhChatDT } from 'src/tinhchatDTs/TinhChatDT.model';
import { TonGiao } from 'src/tongiaos/TonGiao.model';
import { UtilsParamsInput } from 'src/utils/type/UtilsParams.input';
import { DoiTuong } from './DoiTuong.model';
import { DoiTuongsService } from './DoiTuongs.service';
import { DoiTuongInput } from './type/DoiTuong.input';

@Resolver(() => DoiTuong)
@UseGuards(GraphQLGuard)
export class DoiTuongsResolver {
  constructor(private doituongsService: DoiTuongsService) {}

  @Query((returns) => [DoiTuong])
  doituongs(
    @Args('utilsParams') utilsParams: UtilsParamsInput,
  ): Promise<DoiTuong[]> {
    return this.doituongsService.doituongs(utilsParams);
  }

  @Query((returns) => DoiTuong)
  doituong(@Args('id') id: number): Promise<DoiTuong> {
    return this.doituongsService.doituong(id);
  }

  @Mutation((returns) => DoiTuong)
  createDoiTuong(
    @Args('doituongInput') doituongInput: DoiTuongInput,
  ): Promise<DoiTuong> {
    return this.doituongsService.createDoiTuong(doituongInput);
  }

  @Mutation((returns) => DoiTuong)
  editDoiTuong(
    @Args('doituongInput') doituongInput: DoiTuongInput,
    @Args('id') id: number,
  ): Promise<DoiTuong> {
    return this.doituongsService.editDoiTuong(doituongInput, id);
  }

  @Mutation((retursn) => DoiTuong)
  deleteDoiTuong(
    @Args('doituongInput') doituongInput: DoiTuongInput,
    @Args('id') id: number,
  ): Promise<DoiTuong> {
    return this.doituongsService.deleteDoiTuong(doituongInput, id);
  }

  // ResolveField

  @ResolveField((returns) => [BienPhapDT])
  BienPhapDTs(@Parent() doituong: DoiTuong): Promise<BienPhapDT[]> {
    return this.doituongsService.BienPhapDTs(doituong.MaDoiTuong);
  }

  @ResolveField((returns) => QuocTich)
  QuocTich(@Parent() doituong: DoiTuong): Promise<QuocTich> {
    return this.doituongsService.QuocTich(doituong);
  }

  @ResolveField((returns) => DanToc)
  DanToc(@Parent() doituong: DoiTuong): Promise<DanToc> {
    return this.doituongsService.DanToc(doituong);
  }

  @ResolveField((returns) => TonGiao)
  TonGiao(@Parent() doituong: DoiTuong): Promise<TonGiao> {
    return this.doituongsService.TonGiao(doituong);
  }

  @ResolveField((returns) => TinhChatDT)
  TinhChatDT(@Parent() doituong: DoiTuong): Promise<TinhChatDT> {
    return this.doituongsService.TinhChatDT(doituong);
  }

  @ResolveField((returns) => LoaiDT)
  LoaiDT(@Parent() doituong: DoiTuong): Promise<LoaiDT> {
    return this.doituongsService.LoaiDT(doituong);
  }

  @ResolveField((returns) => [DoiTuongCA])
  DoiTuongCAs(@Parent() doituong: DoiTuong): Promise<DoiTuongCA[]> {
    return this.doituongsService.DoiTuongCAs(doituong.MaDoiTuong);
  }

  @ResolveField((returns) => [QuyetDinhTSNT])
  QuyetDinhTSNTs(@Parent() doituong: DoiTuong): Promise<QuyetDinhTSNT[]> {
    return this.doituongsService.QuyetDinhTSNTs(doituong.MaDoiTuong);
  }

  @ResolveField((returns) => [DeNghiTSNT])
  DeNghiTSNTs(@Parent() doituong: DoiTuong): Promise<DeNghiTSNT[]> {
    return this.doituongsService.DeNghiTSNTs(doituong.MaDoiTuong);
  }

  @ResolveField((returns) => [KeHoachTSNT])
  KeHoachTSNTs(@Parent() doituong: DoiTuong): Promise<KeHoachTSNT[]> {
    return this.doituongsService.KeHoachTSNTs(doituong.MaDoiTuong);
  }

  @ResolveField((returns) => [BaoCaoKQGH])
  BaoCaoKQGHs(@Parent() doituong: DoiTuong): Promise<BaoCaoKQGH[]> {
    return this.doituongsService.BaoCaoKQGHs(doituong.MaDoiTuong);
  }
}
