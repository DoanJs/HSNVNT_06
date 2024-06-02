import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { CBCS } from 'src/cbcss/CBCS.model';
import { DanToc } from 'src/dantocs/DanToc.model';
import { DoiTuong } from 'src/doituongs/DoiTuong.model';
import { UtilsParamsInput } from 'src/utils/type/UtilsParams.input';
import { QuocTich } from './QuocTich.model';
import { QuocTichsService } from './QuocTichs.service';

@Resolver(() => QuocTich)
export class QuocTichsResolver {
  constructor(private quoctichsService: QuocTichsService) { }
  @Query((returns) => [QuocTich])
  quocTichs(
    @Args('utilsParams') utilsParams: UtilsParamsInput,
  ): Promise<QuocTich[]> {
    return this.quoctichsService.quocTichs(utilsParams);
  }

  @Query((returns) => QuocTich)
  quocTich(@Args('id') id: number): Promise<QuocTich> {
    return this.quoctichsService.quocTich(id);
  }

  @Mutation((returns) => QuocTich)
  createQuocTich(@Args('tenQT') tenQT: string): Promise<QuocTich> {
    return this.quoctichsService.createQuocTich(tenQT);
  }

  @Mutation((returns) => QuocTich)
  editQuocTich(
    @Args('tenQT') tenQT: string,
    @Args('id') id: number,
  ): Promise<QuocTich> {
    return this.quoctichsService.editQuocTich(tenQT, id);
  }

  @Mutation((returns) => QuocTich)
  deleteQuocTich(@Args('id') id: number): Promise<QuocTich> {
    return this.quoctichsService.deleteQuocTich(id);
  }

  // ResolveField

  @ResolveField((returns) => [DanToc])
  DanTocs(@Parent() quoctich: QuocTich): Promise<DanToc[]> {
    return this.quoctichsService.DanTocs(quoctich.MaQT);
  }





  @ResolveField((returns) => [DoiTuong])
  DoiTuongs(@Parent() quoctich: QuocTich): Promise<DoiTuong[]> {
    return this.quoctichsService.DoiTuongs(quoctich.MaQT);
  }

  @ResolveField((returns) => [CBCS])
  CBCSs(@Parent() quoctich: QuocTich): Promise<CBCS[]> {
    return this.quoctichsService.CBCSs(quoctich.MaQT);
  }
}
