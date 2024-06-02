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
import { CBCS } from 'src/cbcss/CBCS.model';
import { Doi } from 'src/dois/Doi.model';
import { DoiTuong } from 'src/doituongs/DoiTuong.model';
import { KetQuaTSNT } from 'src/ketquaTSNTs/KetQuaTSNT.model';
import { UtilsParamsInput } from 'src/utils/type/UtilsParams.input';
import { BaoCaoKQGH } from './BaoCaoKQGH.model';
import { BaoCaoKQGHsService } from './BaoCaoKQGHs.service';
import { BaoCaoKQGHInput } from './type/BaoCaoKQGH.input';

@Resolver(() => BaoCaoKQGH)
@UseGuards(GraphQLGuard)
export class BaoCaoKQGHsResolver {
  constructor(private baocaoKQGHsService: BaoCaoKQGHsService) {}
  @Query((returns) => [BaoCaoKQGH])
  baocaoKQGHs(
    @Args('utilsParams') utilsParams: UtilsParamsInput,
  ): Promise<BaoCaoKQGH[]> {
    return this.baocaoKQGHsService.baocaoKQGHs(utilsParams);
  }

  @Query((returns) => BaoCaoKQGH)
  baocaoKQGH(@Args('id') id: number): Promise<BaoCaoKQGH> {
    return this.baocaoKQGHsService.baocaoKQGH(id);
  }

  @Mutation((returns) => BaoCaoKQGH)
  createBaoCaoKQGH(
    @Args('baocaoKQGHInput') baocaoKQGHInput: BaoCaoKQGHInput,
  ): Promise<BaoCaoKQGH> {
    return this.baocaoKQGHsService.createBaoCaoKQGH(baocaoKQGHInput);
  }

  @Mutation((returns) => BaoCaoKQGH)
  editBaoCaoKQGH(
    @Args('baocaoKQGHInput') baocaoKQGHInput: BaoCaoKQGHInput,
    @Args('id') id: number,
  ): Promise<BaoCaoKQGH> {
    return this.baocaoKQGHsService.editBaoCaoKQGH(baocaoKQGHInput, id);
  }

  @Mutation((retursn) => BaoCaoKQGH)
  deleteBaoCaoKQGH(
    @Args('baocaoKQGHInput') baocaoKQGHInput: BaoCaoKQGHInput,
    @Args('id') id: number,
  ): Promise<BaoCaoKQGH> {
    return this.baocaoKQGHsService.deleteBaoCaoKQGH(baocaoKQGHInput, id);
  }

  // ResolveField

  @ResolveField((returns) => KetQuaTSNT)
  KetQuaTSNT(@Parent() baocaoKQGH: BaoCaoKQGH): Promise<KetQuaTSNT> {
    return this.baocaoKQGHsService.KetQuaTSNT(baocaoKQGH);
  }

  @ResolveField((returns) => CAQHvaTD)
  CAQHvaTD(@Parent() baocaoKQGH: BaoCaoKQGH): Promise<CAQHvaTD> {
    return this.baocaoKQGHsService.CAQHvaTD(baocaoKQGH);
  }

  @ResolveField((returns) => Doi)
  Doi(@Parent() baocaoKQGH: BaoCaoKQGH): Promise<Doi> {
    return this.baocaoKQGHsService.Doi(baocaoKQGH);
  }

  @ResolveField((returns) => [CBCS])
  TSThucHiens(@Parent() baocaoKQGH: BaoCaoKQGH): Promise<CBCS[]> {
    return this.baocaoKQGHsService.TSThucHiens(baocaoKQGH.MaBCKQGH);
  }  


  @ResolveField((returns) => DoiTuong)
  DoiTuong(@Parent() baocaoKQGH: BaoCaoKQGH): Promise<DoiTuong> {
    return this.baocaoKQGHsService.DoiTuong(baocaoKQGH);
  }

  @ResolveField((returns) => CBCS)
  LanhDaoPD(@Parent() baocaoKQGH: BaoCaoKQGH): Promise<CBCS> {
    return this.baocaoKQGHsService.LanhDaoPD(baocaoKQGH);
  }
}
