import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UtilsParamsInput } from 'src/utils/type/UtilsParams.input';
import { BaoCaoKTDN } from './BaoCaoKTDN.model';
import { BaoCaoKTDNsService } from './BaoCaoKTDNs.service';
import { BaoCaoKTDNInput } from './type/BaoCaoKTDN.input';

@Resolver(() => BaoCaoKTDN)
export class BaoCaoKTDNsResolver {
  constructor(private baocaoKTDNsService: BaoCaoKTDNsService) {}

  @Query((returns) => [BaoCaoKTDN])
  baoCaoKTDNs(
    @Args('utilsParams') utilsParams: UtilsParamsInput,
  ): Promise<BaoCaoKTDN[]> {
    return this.baocaoKTDNsService.baoCaoKTDNs(utilsParams);
  }

  @Query((returns) => BaoCaoKTDN)
  baoCaoKTDN(@Args('id') id: number): Promise<BaoCaoKTDN> {
    return this.baocaoKTDNsService.baoCaoKTDN(id);
  }

  @Mutation((returns) => BaoCaoKTDN)
  createBaoCaoKTDN(
    @Args('baocaoKTDNInput') baocaoKTDNInput: BaoCaoKTDNInput,
  ): Promise<BaoCaoKTDN> {
    return this.baocaoKTDNsService.createBaoCaoKTDN(baocaoKTDNInput);
  }

  @Mutation((returns) => BaoCaoKTDN)
  editBaoCaoKTDN(
    @Args('baocaoKTDNInput') baocaoKTDNInput: BaoCaoKTDNInput,
    @Args('id') id: number,
  ): Promise<BaoCaoKTDN> {
    return this.baocaoKTDNsService.editBaoCaoKTDN(baocaoKTDNInput, id);
  }

  @Mutation((returns) => BaoCaoKTDN)
  deleteBaoCaoKTDN(
    @Args('baocaoKTDNInput') baocaoKTDNInput: BaoCaoKTDNInput,
    @Args('id') id: number,
  ): Promise<BaoCaoKTDN> {
    return this.baocaoKTDNsService.deleteBaoCaoKTDN(baocaoKTDNInput, id);
  }

  //ResolveField
}
