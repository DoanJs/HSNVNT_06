import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { GraphQLGuard } from 'src/authPassport/GraphQL.Guard';
import { BaoCaoKQXMQuanHe } from 'src/baocaoKQXMQuanHes/BaoCaoKQXMQuanHe.model';
import { CAQHvaTD } from 'src/caQHvaTD/CAQHvaTD.model';
import { CBCS } from 'src/cbcss/CBCS.model';
import { Doi } from 'src/dois/Doi.model';
import { DoiTuong } from 'src/doituongs/DoiTuong.model';
import { KetQuaXMQuanHe } from 'src/ketQuaXMQuanHes/KetQuaXMQuanHe.model';
import { KetQuaTSNT } from 'src/ketquaTSNTs/KetQuaTSNT.model';
import { UtilsParamsInput } from 'src/utils/type/UtilsParams.input';
import { BaoCaoPHQH } from './BaoCaoPHQH.model';
import { BaoCaoPHQHsService } from './BaoCaoPHQHs.service';
import { BaoCaoPHQHInput } from './type/BaoCaoPHQH.input';

@Resolver(() => BaoCaoPHQH)
@UseGuards(GraphQLGuard)
export class BaoCaoPHQHsResolver {
  constructor(private baocaoPHQHsService: BaoCaoPHQHsService) { }
  @Query((returns) => [BaoCaoPHQH])
  baocaoPHQHs(@Args('utilsParams') utilsParams: UtilsParamsInput): Promise<BaoCaoPHQH[]> {
    return this.baocaoPHQHsService.baocaoPHQHs(utilsParams);
  }

  @Query((returns) => BaoCaoPHQH)
  baocaoPHQH(@Args('id') id: number): Promise<BaoCaoPHQH> {
    return this.baocaoPHQHsService.baocaoPHQH(id);
  }

  @Mutation((returns) => BaoCaoPHQH)
  createBaoCaoPHQH(@Args('baocaoPHQHInput') baocaoPHQHInput: BaoCaoPHQHInput): Promise<BaoCaoPHQH> {
    return this.baocaoPHQHsService.createBaoCaoPHQH(baocaoPHQHInput);
  }

  @Mutation((returns) => BaoCaoPHQH)
  editBaoCaoPHQH(
    @Args('baocaoPHQHInput') baocaoPHQHInput: BaoCaoPHQHInput,
    @Args('id') id: number,
  ): Promise<BaoCaoPHQH> {
    return this.baocaoPHQHsService.editBaoCaoPHQH(baocaoPHQHInput, id);
  }

  @Mutation((retursn) => BaoCaoPHQH)
  deleteBaoCaoPHQH(
    @Args('baocaoPHQHInput') baocaoPHQHInput: BaoCaoPHQHInput,
    @Args('id') id: number,
  ): Promise<BaoCaoPHQH> {
    return this.baocaoPHQHsService.deleteBaoCaoPHQH(baocaoPHQHInput, id);
  }

  // ResolveField
  @ResolveField(returns => KetQuaTSNT)
  KetQuaTSNT(@Parent() baocaoPHQH: BaoCaoPHQH): Promise<KetQuaTSNT> {
    return this.baocaoPHQHsService.KetQuaTSNT(baocaoPHQH)
  }

  @ResolveField(returns => [CBCS])
  TSThucHiens(@Parent() baocaoPHQH: BaoCaoPHQH): Promise<CBCS[]> {
    return this.baocaoPHQHsService.TSThucHiens(baocaoPHQH.MaBCPHQH)
  }

  @ResolveField(returns => CBCS)
  LanhDaoPD(@Parent() baocaoPHQH: BaoCaoPHQH): Promise<CBCS> {
    return this.baocaoPHQHsService.LanhDaoPD(baocaoPHQH)
  }

  @ResolveField(returns => CAQHvaTD)
  DonVi(@Parent() baocaoPHQH: BaoCaoPHQH): Promise<CAQHvaTD> {
    return this.baocaoPHQHsService.DonVi(baocaoPHQH)
  }

  @ResolveField(returns => Doi)
  Doi(@Parent() baocaoPHQH: BaoCaoPHQH): Promise<Doi> {
    return this.baocaoPHQHsService.Doi(baocaoPHQH)
  }

  @ResolveField(returns => CBCS)
  ToTruongTS(@Parent() baocaoPHQH: BaoCaoPHQH): Promise<CBCS> {
    return this.baocaoPHQHsService.ToTruongTS(baocaoPHQH)
  }

  @ResolveField(returns => DoiTuong)
  DoiTuong(@Parent() baocaoPHQH: BaoCaoPHQH): Promise<DoiTuong> {
    return this.baocaoPHQHsService.DoiTuong(baocaoPHQH)
  }

  @ResolveField(returns => BaoCaoKQXMQuanHe)
  BaoCaoKQXMQuanHe(@Parent() baocaoPHQH: BaoCaoPHQH): Promise<BaoCaoKQXMQuanHe> {
    return this.baocaoPHQHsService.BaoCaoKQXMQuanHe(baocaoPHQH.MaBCPHQH)
  }

  @ResolveField(returns => KetQuaXMQuanHe)
  KetQuaXMQuanHe(@Parent() baocaoPHQH: BaoCaoPHQH): Promise<KetQuaXMQuanHe> {
    return this.baocaoPHQHsService.KetQuaXMQuanHe(baocaoPHQH.MaBCPHQH)
  }
}
