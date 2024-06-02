import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { CBCS } from 'src/cbcss/CBCS.model';
import { UtilsParamsInput } from 'src/utils/type/UtilsParams.input';
import { CapBac } from './CapBac.model';
import { CapBacsService } from './CapBacs.service';

@Resolver(() => CapBac)
export class CapBacsResolver {
  constructor(private capbacsService: CapBacsService) { }
  @Query((returns) => [CapBac])
  capbacs(
    @Args('utilsParams') utilsParams: UtilsParamsInput,
  ): Promise<CapBac[]> {
    return this.capbacsService.capbacs(utilsParams);
  }

  @Query((returns) => CapBac)
  capbac(@Args('id') id: number): Promise<CapBac> {
    return this.capbacsService.capbac(id);
  }

  @Mutation((returns) => CapBac)
  createCapBac(@Args('capBac') capBac: string): Promise<CapBac> {
    return this.capbacsService.createCapBac(capBac);
  }

  @Mutation((returns) => CapBac)
  editCapBac(
    @Args('capBac') capBac: string,
    @Args('id') id: number,
  ): Promise<CapBac> {
    return this.capbacsService.editCapBac(capBac, id);
  }

  @Mutation((returns) => CapBac)
  deleteCapBac(@Args('id') id: number): Promise<CapBac> {
    return this.capbacsService.deleteCapBac(id);
  }

  //ResolveField





  @ResolveField(returns => [CBCS])
  CBCSs(@Parent() capbac: CapBac): Promise<CBCS[]> {
    return this.capbacsService.CBCSs(capbac.MaCB);
  }
}
