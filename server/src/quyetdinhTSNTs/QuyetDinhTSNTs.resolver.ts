import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { CAQHvaTD } from 'src/caQHvaTD/CAQHvaTD.model';
import { CATTPvaTD } from 'src/caTTPvaTD/CATTPvaTD.model';
import { CBCS } from 'src/cbcss/CBCS.model';
import { DeNghiTSNT } from 'src/denghiTSNTs/DeNghiTSNT.model';
import { Doi } from 'src/dois/Doi.model';
import { DoiTuong } from 'src/doituongs/DoiTuong.model';
import { KeHoachTSNT } from 'src/kehoachTSNTs/KeHoachTSNT.model';
import { KetQuaTSNT } from 'src/ketquaTSNTs/KetQuaTSNT.model';
import { TinhTP } from 'src/tinhTPs/TinhTP.model';
import { UtilsParamsInput } from 'src/utils/type/UtilsParams.input';
import { QuyetDinhTSNT } from './QuyetDinhTSNT.model';
import { QuyetDinhTSNTsService } from './QuyetDinhTSNTs.service';
import { QuyetDinhTSNTInput } from './type/QuyetDinhTSNT.input';
import { UseGuards } from '@nestjs/common';
import { GraphQLGuard } from 'src/authPassport/GraphQL.Guard';

@Resolver(() => QuyetDinhTSNT)
@UseGuards(GraphQLGuard)
export class QuyetDinhTSNTsResolver {
  constructor(private quyetdinhTSNTsService: QuyetDinhTSNTsService) { }
  @Query((returns) => [QuyetDinhTSNT])
  quyetdinhTSNTs(
    @Args('utilsParams') utilsParams: UtilsParamsInput,
  ): Promise<QuyetDinhTSNT[]> {
    return this.quyetdinhTSNTsService.quyetdinhTSNTs(utilsParams);
  }

  @Query((returns) => QuyetDinhTSNT)
  quyetdinhTSNT(@Args('id') id: number): Promise<QuyetDinhTSNT> {
    return this.quyetdinhTSNTsService.quyetdinhTSNT(id);
  }

  @Mutation((returns) => QuyetDinhTSNT)
  createQuyetDinhTSNT(
    @Args('quyetdinhTSNTInput') quyetdinhTSNTInput: QuyetDinhTSNTInput,
  ): Promise<QuyetDinhTSNT> {
    return this.quyetdinhTSNTsService.createQuyetDinhTSNT(quyetdinhTSNTInput);
  }

  @Mutation((returns) => QuyetDinhTSNT)
  editQuyetDinhTSNT(
    @Args('id') id: number,
    @Args('quyetdinhTSNTInput') quyetdinhTSNTInput: QuyetDinhTSNTInput,
  ): Promise<QuyetDinhTSNT> {
    return this.quyetdinhTSNTsService.editQuyetDinhTSNT(quyetdinhTSNTInput, id);
  }

  @Mutation((returns) => QuyetDinhTSNT)
  deleteQuyetDinhTSNT(
    @Args('id') id: number,
    @Args('quyetdinhTSNTInput') quyetdinhTSNTInput: QuyetDinhTSNTInput,
  ): Promise<QuyetDinhTSNT> {
    return this.quyetdinhTSNTsService.deleteQuyetDinhTSNT(
      quyetdinhTSNTInput,
      id,
    );
  }

  // ResolveField

  @ResolveField((returns) => DoiTuong)
  DoiTuong(@Parent() quyetdinhTSNT: QuyetDinhTSNT): Promise<DoiTuong> {
    return this.quyetdinhTSNTsService.DoiTuong(quyetdinhTSNT);
  }

  @ResolveField((returns) => DeNghiTSNT)
  DeNghiTSNT(@Parent() quyetdinhTSNT: QuyetDinhTSNT): Promise<DeNghiTSNT> {
    return this.quyetdinhTSNTsService.DeNghiTSNT(quyetdinhTSNT);
  }

  @ResolveField((returns) => CBCS)
  LanhDaoPD(@Parent() quyetdinhTSNT: QuyetDinhTSNT): Promise<CBCS> {
    return this.quyetdinhTSNTsService.LanhDaoPD(quyetdinhTSNT);
  }

  @ResolveField((returns) => Doi)
  Doi(@Parent() quyetdinhTSNT: QuyetDinhTSNT): Promise<Doi> {
    return this.quyetdinhTSNTsService.Doi(quyetdinhTSNT);
  }

  @ResolveField((returns) => KeHoachTSNT)
  KeHoachTSNT(@Parent() quyetdinhTSNT: QuyetDinhTSNT): Promise<KeHoachTSNT> {
    return this.quyetdinhTSNTsService.KeHoachTSNT(quyetdinhTSNT.MaQD);
  }

  @ResolveField((returns) => CATTPvaTD)
  CATTPvaTD(@Parent() quyetdinhTSNT: QuyetDinhTSNT): Promise<CATTPvaTD> {
    return this.quyetdinhTSNTsService.CATTPvaTD(quyetdinhTSNT);
  }

  @ResolveField((returns) => CAQHvaTD)
  CAQHvaTD(@Parent() quyetdinhTSNT: QuyetDinhTSNT): Promise<CAQHvaTD> {
    return this.quyetdinhTSNTsService.CAQHvaTD(quyetdinhTSNT);
  }

  @ResolveField((returns) => [TinhTP])
  PhamViTSs(@Parent() quyetdinhTSNT: QuyetDinhTSNT): Promise<TinhTP[]> {
    return this.quyetdinhTSNTsService.PhamViTSs(quyetdinhTSNT.MaQD);
  }

  @ResolveField((returns) => KetQuaTSNT)
  KetQuaTSNT(@Parent() quyetdinhTSNT: QuyetDinhTSNT): Promise<KetQuaTSNT> {
    return this.quyetdinhTSNTsService.KetQuaTSNT(quyetdinhTSNT.MaQD);
  }
}
