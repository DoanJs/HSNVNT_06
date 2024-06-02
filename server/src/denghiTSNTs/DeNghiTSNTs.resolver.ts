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
import { CAQHvaTD } from 'src/caQHvaTD/CAQHvaTD.model';
import { CATTPvaTD } from 'src/caTTPvaTD/CATTPvaTD.model';
import { CBCS } from 'src/cbcss/CBCS.model';
import { DoiTuong } from 'src/doituongs/DoiTuong.model';
import { HinhThucHD } from 'src/hinhthucHDs/HinhThucHD.model';
import { KeHoachTSNT } from 'src/kehoachTSNTs/KeHoachTSNT.model';
import { QuyetDinhTSNT } from 'src/quyetdinhTSNTs/QuyetDinhTSNT.model';
import { TinhTP } from 'src/tinhTPs/TinhTP.model';
import { UtilsParamsInput } from 'src/utils/type/UtilsParams.input';
import { DeNghiTSNT } from './DeNghiTSNT.model';
import { DeNghiTSNTsService } from './DeNghiTSNTs.service';
import { DeNghiTSNTInput } from './type/DeNghiTSNT.input';

@Resolver(() => DeNghiTSNT)
@UseGuards(GraphQLGuard)
export class DeNghiTSNTsResolver {
  constructor(private denghiTSNTsService: DeNghiTSNTsService) {}
  @Query((returns) => [DeNghiTSNT])
  denghiTSNTs(
    @Args('utilsParams') utilsParams: UtilsParamsInput,
  ): Promise<DeNghiTSNT[]> {
    return this.denghiTSNTsService.denghiTSNTs(utilsParams);
  }

  @Query((returns) => DeNghiTSNT)
  denghiTSNT(@Args('id') id: number): Promise<DeNghiTSNT> {
    return this.denghiTSNTsService.denghiTSNT(id);
  }

  @Mutation((returns) => DeNghiTSNT)
  createDeNghiTSNT(
    @Args('denghiTSNTInput') denghiTSNTInput: DeNghiTSNTInput,
  ): Promise<DeNghiTSNT> {
    return this.denghiTSNTsService.createDeNghiTSNT(denghiTSNTInput);
  }

  @Mutation((returns) => DeNghiTSNT)
  editDeNghiTSNT(
    @Args('id') id: number,
    @Args('denghiTSNTInput') denghiTSNTInput: DeNghiTSNTInput,
  ): Promise<DeNghiTSNT> {
    return this.denghiTSNTsService.editDeNghiTSNT(id, denghiTSNTInput);
  }

  @Mutation((returns) => DeNghiTSNT)
  deleteDeNghiTSNT(
    @Args('id') id: number,
    @Args('denghiTSNTInput') denghiTSNTInput: DeNghiTSNTInput,
  ): Promise<DeNghiTSNT> {
    return this.denghiTSNTsService.deleteDeNghiTSNT(id, denghiTSNTInput);
  }

  // ResolveField

  @ResolveField((returns) => CATTPvaTD)
  CATTPvaTD(@Parent() denghiTSNT: DeNghiTSNT): Promise<CATTPvaTD> {
    return this.denghiTSNTsService.CATTPvaTD(denghiTSNT);
  }

  @ResolveField((returns) => CAQHvaTD)
  CAQHvaTD(@Parent() denghiTSNT: DeNghiTSNT): Promise<CAQHvaTD> {
    return this.denghiTSNTsService.CAQHvaTD(denghiTSNT);
  }

  @ResolveField((returns) => [TinhTP])
  DiaBanDNs(@Parent() denghiTSNT: DeNghiTSNT): Promise<TinhTP[]> {
    return this.denghiTSNTsService.DiaBanDNs(denghiTSNT.MaDN);
  }

  @ResolveField((returns) => DoiTuong)
  DoiTuong(@Parent() denghiTSNT: DeNghiTSNT): Promise<DoiTuong> {
    return this.denghiTSNTsService.DoiTuong(denghiTSNT);
  }

  @ResolveField((returns) => CBCS)
  LanhDaoDVDN(@Parent() denghiTSNT: DeNghiTSNT): Promise<CBCS> {
    return this.denghiTSNTsService.LanhDaoDVDN(denghiTSNT);
  }

  @ResolveField((returns) => CBCS)
  CBPhuTrachDN(@Parent() denghiTSNT: DeNghiTSNT): Promise<CBCS> {
    return this.denghiTSNTsService.CBPhuTrachDN(denghiTSNT);
  }

  @ResolveField((returns) => CBCS)
  LanhDaoCapTren(@Parent() denghiTSNT: DeNghiTSNT): Promise<CBCS> {
    return this.denghiTSNTsService.LanhDaoCapTren(denghiTSNT);
  }

  @ResolveField((returns) => CBCS)
  DaiDienDonViTSNT(@Parent() denghiTSNT: DeNghiTSNT): Promise<CBCS> {
    return this.denghiTSNTsService.DaiDienDonViTSNT(denghiTSNT);
  }

  @ResolveField((returns) => CAQHvaTD)
  DonViDN(@Parent() denghiTSNT: DeNghiTSNT): Promise<CAQHvaTD> {
    return this.denghiTSNTsService.DonViDN(denghiTSNT);
  }

  @ResolveField((returns) => QuyetDinhTSNT)
  QuyetDinhTSNT(@Parent() denghiTSNT: DeNghiTSNT): Promise<QuyetDinhTSNT> {
    return this.denghiTSNTsService.QuyetDinhTSNT(denghiTSNT.MaDN);
  }

  @ResolveField((returns) => HinhThucHD)
  HinhThucHD(@Parent() denghiTSNT: DeNghiTSNT): Promise<HinhThucHD> {
    return this.denghiTSNTsService.HinhThucHD(denghiTSNT);
  }

  @ResolveField((returns) => KeHoachTSNT)
  KeHoachTSNT(@Parent() denghiTSNT: DeNghiTSNT): Promise<KeHoachTSNT> {
    return this.denghiTSNTsService.KeHoachTSNT(denghiTSNT.MaDN);
  }
}
