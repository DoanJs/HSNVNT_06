import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { LLDB } from 'src/lldbs/LLDB.model';
import { UtilsParamsInput } from 'src/utils/type/UtilsParams.input';
import { LoaiLLDB } from './LoaiLLDB.model';
import { LoaiLLDBsService } from './LoaiLLDBs.service';
import { LoaiLLDBInput } from './type/LoaiLLDB.Input';

@Resolver(() => LoaiLLDB)
export class LoaiLLDBsResolver {
  constructor(private loaiLLDBsService: LoaiLLDBsService) { }
  @Query((returns) => [LoaiLLDB])
  loaiLLDBs(
    @Args('utilsParams') utilsParams: UtilsParamsInput,
  ): Promise<LoaiLLDB[]> {
    return this.loaiLLDBsService.loaiLLDBs(utilsParams);
  }

  @Query((returns) => LoaiLLDB)
  loaiLLDB(@Args('id') id: number): Promise<LoaiLLDB> {
    return this.loaiLLDBsService.loaiLLDB(id);
  }

  @Mutation((returns) => LoaiLLDB)
  createLoaiLLDB(
    @Args('loaiLLDBInput') loaiLLDBInput: LoaiLLDBInput,
  ): Promise<LoaiLLDB> {
    return this.loaiLLDBsService.createLoaiLLDB(loaiLLDBInput);
  }

  @Mutation((returns) => LoaiLLDB)
  editLoaiLLDB(
    @Args('loaiLLDBInput') loaiLLDBInput: LoaiLLDBInput,
    @Args('id') id: number,
  ): Promise<LoaiLLDB> {
    return this.loaiLLDBsService.editLoaiLLDB(loaiLLDBInput, id);
  }

  @Mutation((returns) => LoaiLLDB)
  deleteLoaiLLDB(@Args('id') id: number): Promise<LoaiLLDB> {
    return this.loaiLLDBsService.deleteLoaiLLDB(id);
  }

  // ResolveField

  @ResolveField(returns => [LLDB])
  LLDBs(@Parent() loaiLLDB: LoaiLLDB): Promise<LLDB[]> {
    return this.loaiLLDBsService.LLDBs(loaiLLDB.MaLoaiLLDB)
  }
}
