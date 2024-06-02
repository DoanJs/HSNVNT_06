import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { DoiTuong } from 'src/doituongs/DoiTuong.model';
import { UtilsParamsInput } from 'src/utils/type/UtilsParams.input';
import { LoaiDT } from './LoaiDT.model';
import { LoaiDTsService } from './LoaiDTs.service';

@Resolver(() => LoaiDT)
export class LoaiDTsResolver {
  constructor(private loaiDTsService: LoaiDTsService) { }
  @Query((returns) => [LoaiDT])
  loaiDTs(
    @Args('utilsParams') utilsParams: UtilsParamsInput,
  ): Promise<LoaiDT[]> {
    return this.loaiDTsService.loaiDTs(utilsParams);
  }

  @Query((returns) => LoaiDT)
  loaiDT(@Args('id') id: number): Promise<LoaiDT> {
    return this.loaiDTsService.loaiDT(id);
  }

  @Mutation((returns) => LoaiDT)
  createLoaiDT(@Args('loaiDT') loaiDT: string): Promise<LoaiDT> {
    return this.loaiDTsService.createLoaiDT(loaiDT);
  }

  @Mutation((returns) => LoaiDT)
  editLoaiDT(
    @Args('loaiDT') loaiDT: string,
    @Args('id') id: number,
  ): Promise<LoaiDT> {
    return this.loaiDTsService.editLoaiDT(loaiDT, id);
  }

  @Mutation((returns) => LoaiDT)
  deleteLoaiDT(@Args('id') id: number): Promise<LoaiDT> {
    return this.loaiDTsService.deleteLoaiDT(id);
  }

  // ResolveField

  @ResolveField(returns => [DoiTuong])
  DoiTuongs(@Parent() loaiDT: LoaiDT): Promise<DoiTuong[]> {
    return this.loaiDTsService.DoiTuongs(loaiDT.MaLoaiDT)
  }
}
