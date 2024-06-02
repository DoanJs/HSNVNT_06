import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { KetQuaTSNT } from 'src/ketquaTSNTs/KetQuaTSNT.model';
import { UtilsParamsInput } from 'src/utils/type/UtilsParams.input';
import { DDNB } from './DDNB.model';
import { DDNBsService } from './DDNBs.service';

@Resolver(() => DDNB)
export class DDNBsResolver {
  constructor(private ddnbsService: DDNBsService) {}
  @Query((returns) => [DDNB])
  ddnbs(@Args('utilsParams') utilsParams: UtilsParamsInput): Promise<DDNB[]> {
    return this.ddnbsService.ddnbs(utilsParams);
  }

  @Query((returns) => DDNB)
  ddnb(@Args('id') id: number): Promise<DDNB> {
    return this.ddnbsService.ddnb(id);
  }

  @Mutation((returns) => DDNB)
  createDDNB(@Args('ddnb') ddnb: string): Promise<DDNB> {
    return this.ddnbsService.createDDNB(ddnb);
  }

  @Mutation((returns) => DDNB)
  editDDNB(@Args('ddnb') ddnb: string, @Args('id') id: number): Promise<DDNB> {
    return this.ddnbsService.editDDNB(ddnb, id);
  }

  @Mutation((returns) => DDNB)
  deleteDDNB(@Args('id') id: number): Promise<DDNB> {
    return this.ddnbsService.deleteDDNB(id);
  }

  //ResolveField

  @ResolveField((returns) => [KetQuaTSNT])
  KetQuaTSNTs(@Parent() ddnb: DDNB): Promise<KetQuaTSNT[]> {
    return this.ddnbsService.KetQuaTSNTs(ddnb.MaDDNB);
  }
}
