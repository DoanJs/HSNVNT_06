import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { CBCS } from 'src/cbcss/CBCS.model';
import { DoiTuong } from 'src/doituongs/DoiTuong.model';
import { QuocTich } from 'src/quoctichs/QuocTich.model';
import { UtilsParamsInput } from 'src/utils/type/UtilsParams.input';
import { DanToc } from './DanToc.model';
import { DanTocsService } from './DanTocs.service';
import { DanTocInput } from './type/DanToc.Input';

@Resolver(() => DanToc)
export class DanTocsResolver {
  constructor(private dantocsService: DanTocsService) {}
  @Query((returns) => [DanToc])
  dantocs(
    @Args('utilsParams') utilsParams: UtilsParamsInput,
  ): Promise<DanToc[]> {
    return this.dantocsService.dantocs(utilsParams);
  }

  @Query((returns) => DanToc)
  dantoc(@Args('id') id: number): Promise<DanToc> {
    return this.dantocsService.dantoc(id);
  }

  @Mutation((returns) => DanToc)
  createDanToc(@Args('danTocInput') danTocInput: DanTocInput): Promise<DanToc> {
    return this.dantocsService.createDanToc(danTocInput);
  }

  @Mutation((returns) => DanToc)
  editDanToc(
    @Args('danTocInput') danTocInput: DanTocInput,
    @Args('id') id: number,
  ): Promise<DanToc> {
    return this.dantocsService.editDanToc(danTocInput, id);
  }

  @Mutation((returns) => DanToc)
  deleteDanToc(@Args('id') id: number): Promise<DanToc> {
    return this.dantocsService.deleteDanToc(id);
  }

  //ResolveField

  @ResolveField((returns) => QuocTich)
  QuocTich(@Parent() dantoc: DanToc): Promise<QuocTich> {
    return this.dantocsService.QuocTich(dantoc);
  }

  @ResolveField((returns) => [DoiTuong])
  DoiTuongs(@Parent() dantoc: DanToc): Promise<DoiTuong[]> {
    return this.dantocsService.DoiTuongs(dantoc.MaDT);
  }

  @ResolveField(() => [CBCS])
  CBCSs(@Parent() danToc: DanToc): Promise<CBCS[]> {
    return this.dantocsService.CBCSs(danToc.MaDT);
  }
}
