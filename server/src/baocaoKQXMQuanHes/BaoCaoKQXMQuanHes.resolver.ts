import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { BaoCaoPHQH } from 'src/baocaoPHQHs/BaoCaoPHQH.model';
import { CAQHvaTD } from 'src/caQHvaTD/CAQHvaTD.model';
import { CBCS } from 'src/cbcss/CBCS.model';
import { Doi } from 'src/dois/Doi.model';
import { UtilsParamsInput } from 'src/utils/type/UtilsParams.input';
import { BaoCaoKQXMQuanHe } from './BaoCaoKQXMQuanHe.model';
import { BaoCaoKQXMQuanHesService } from './BaoCaoKQXMQuanHes.service';
import { BaoCaoKQXMQuanHeInput } from './type/BaoCaoKQXMQuanHe.input';

@Resolver(() => BaoCaoKQXMQuanHe)
export class BaoCaoKQXMQuanHesResolver {
  constructor(private baocaoKQXMQuanHesService: BaoCaoKQXMQuanHesService) {}
  @Query((returns) => [BaoCaoKQXMQuanHe])
  baocaoKQXMQuanHes(
    @Args('utilsParams') utilsParams: UtilsParamsInput,
  ): Promise<BaoCaoKQXMQuanHe[]> {
    return this.baocaoKQXMQuanHesService.baocaoKQXMQuanHes(utilsParams);
  }

  @Query((returns) => BaoCaoKQXMQuanHe)
  baocaoKQXMQuanHe(@Args('id') id: number): Promise<BaoCaoKQXMQuanHe> {
    return this.baocaoKQXMQuanHesService.baocaoKQXMQuanHe(id);
  }

  @Mutation((returns) => BaoCaoKQXMQuanHe)
  createBaoCaoKQXMQuanHe(
    @Args('baocaoKQXMQuanHeInput') baocaoKQXMQuanHeInput: BaoCaoKQXMQuanHeInput,
  ): Promise<BaoCaoKQXMQuanHe> {
    return this.baocaoKQXMQuanHesService.createBaoCaoKQXMQuanHe(
      baocaoKQXMQuanHeInput,
    );
  }

  @Mutation((returns) => BaoCaoKQXMQuanHe)
  editBaoCaoKQXMQuanHe(
    @Args('baocaoKQXMQuanHeInput') baocaoKQXMQuanHeInput: BaoCaoKQXMQuanHeInput,
    @Args('id') id: number,
  ): Promise<BaoCaoKQXMQuanHe> {
    return this.baocaoKQXMQuanHesService.editBaoCaoKQXMQuanHe(
      baocaoKQXMQuanHeInput,
      id,
    );
  }

  @Mutation((retursn) => BaoCaoKQXMQuanHe)
  deleteBaoCaoKQXMQuanHe(
    @Args('baocaoKQXMQuanHeInput') baocaoKQXMQuanHeInput: BaoCaoKQXMQuanHeInput,
    @Args('id') id: number,
  ): Promise<BaoCaoKQXMQuanHe> {
    return this.baocaoKQXMQuanHesService.deleteBaoCaoKQXMQuanHe(
      baocaoKQXMQuanHeInput,
      id,
    );
  }

  // ResolveField

  @ResolveField((returns) => CAQHvaTD)
  CAQHvaTD(@Parent() baocaoKQXMQuanHe: BaoCaoKQXMQuanHe): Promise<CAQHvaTD> {
    return this.baocaoKQXMQuanHesService.CAQHvaTD(baocaoKQXMQuanHe);
  }

  @ResolveField((returns) => Doi)
  Doi(@Parent() baocaoKQXMQuanHe: BaoCaoKQXMQuanHe): Promise<Doi> {
    return this.baocaoKQXMQuanHesService.Doi(baocaoKQXMQuanHe);
  }

  @ResolveField((returns) => CBCS)
  TSXacMinh(@Parent() baocaoKQXMQuanHe: BaoCaoKQXMQuanHe): Promise<CBCS> {
    return this.baocaoKQXMQuanHesService.TSXacMinh(baocaoKQXMQuanHe);
  }

  @ResolveField((returns) => CBCS)
  LanhDaoPD(@Parent() baocaoKQXMQuanHe: BaoCaoKQXMQuanHe): Promise<CBCS> {
    return this.baocaoKQXMQuanHesService.LanhDaoPD(baocaoKQXMQuanHe);
  }

  @ResolveField((returns) => CBCS)
  BanChiHuy(@Parent() baocaoKQXMQuanHe: BaoCaoKQXMQuanHe): Promise<CBCS> {
    return this.baocaoKQXMQuanHesService.BanChiHuy(baocaoKQXMQuanHe);
  }

  @ResolveField((returns) => BaoCaoPHQH)
  BaoCaoPHQH(
    @Parent() baocaoKQXMQuanHe: BaoCaoKQXMQuanHe,
  ): Promise<BaoCaoPHQH> {
    return this.baocaoKQXMQuanHesService.BaoCaoPHQH(baocaoKQXMQuanHe);
  }
}
