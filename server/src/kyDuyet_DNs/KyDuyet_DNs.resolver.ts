import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver
} from '@nestjs/graphql';
import { UtilsParamsInput } from 'src/utils/type/UtilsParams.input';
import { KyDuyet_DN } from './KyDuyet_DN.model';
import { KyDuyet_DNsService } from './KyDuyet_DNs.service';
import { KyDuyet_DNInput } from './type/KyDuyet_DN.Input';
import { DeNghiTSNT } from 'src/denghiTSNTs/DeNghiTSNT.model';
import { CBCS } from 'src/cbcss/CBCS.model';

@Resolver(() => KyDuyet_DN)
export class KyDuyet_DNsResolver {
  constructor(private kyDuyet_DNsService: KyDuyet_DNsService) { }

  @Query((returns) => [KyDuyet_DN])
  kyDuyet_DNs(
    @Args('utilsParams') utilsParams: UtilsParamsInput,
  ): Promise<KyDuyet_DN[]> {
    return this.kyDuyet_DNsService.kyDuyet_DNs(utilsParams);
  }

  @Query((returns) => KyDuyet_DN)
  kyDuyet_DN(@Args('id') id: number): Promise<KyDuyet_DN> {
    return this.kyDuyet_DNsService.kyDuyet_DN(id);
  }

  @Mutation((returns) => KyDuyet_DN)
  createKyDuyet_DN(@Args('kyDuyet_DNInput') kyDuyet_DNInput: KyDuyet_DNInput): Promise<KyDuyet_DN> {
    return this.kyDuyet_DNsService.createKyDuyet_DN(kyDuyet_DNInput);
  }

  @Mutation((returns) => KyDuyet_DN)
  editKyDuyet_DN(
    @Args('kyDuyet_DNInput') kyDuyet_DNInput: KyDuyet_DNInput,
    @Args('id') id: number,
  ): Promise<KyDuyet_DN> {
    return this.kyDuyet_DNsService.editKyDuyet_DN(kyDuyet_DNInput, id);
  }

  @Mutation((returns) => KyDuyet_DN)
  deleteKyDuyet_DN(@Args('id') id: number): Promise<KyDuyet_DN> {
    return this.kyDuyet_DNsService.deleteKyDuyet_DN(id);
  }

  //ResolveField

  @ResolveField(returns => DeNghiTSNT)
  DeNghiTSNT(@Parent() kyduyet_DNInput: KyDuyet_DNInput): Promise<DeNghiTSNT> {
    return this.kyDuyet_DNsService.DeNghiTSNT(kyduyet_DNInput)
  }
  @ResolveField(returns => CBCS)
  DaiDienCATTPvaTD(@Parent() kyduyet_DNInput: KyDuyet_DNInput): Promise<CBCS> {
    return this.kyDuyet_DNsService.DaiDienCATTPvaTD(kyduyet_DNInput)
  }
  @ResolveField(returns => CBCS)
  DaiDienDonViDN(@Parent() kyduyet_DNInput: KyDuyet_DNInput): Promise<CBCS> {
    return this.kyDuyet_DNsService.DaiDienDonViDN(kyduyet_DNInput)
  }
  @ResolveField(returns => CBCS)
  DaiDienDonViTSNT(@Parent() kyduyet_DNInput: KyDuyet_DNInput): Promise<CBCS> {
    return this.kyDuyet_DNsService.DaiDienDonViTSNT(kyduyet_DNInput)
  }
}
