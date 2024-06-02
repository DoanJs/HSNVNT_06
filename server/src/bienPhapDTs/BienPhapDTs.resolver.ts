import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { DoiTuong } from 'src/doituongs/DoiTuong.model';
import { UtilsParamsInput } from 'src/utils/type/UtilsParams.input';
import { BienPhapDT } from './BienPhapDT.model';
import { BienPhapDTsService } from './BienPhapDTs.service';

@Resolver(() => BienPhapDT)
export class BienPhapDTsResolver {
  constructor(private bienPhapDTsService: BienPhapDTsService) {}

  @Query((returns) => [BienPhapDT])
  bienPhapDTs(
    @Args('utilsParams') utilsParams: UtilsParamsInput,
  ): Promise<BienPhapDT[]> {
    return this.bienPhapDTsService.bienPhapDTs(utilsParams);
  }

  @Query((returns) => BienPhapDT)
  bienPhapDT(@Args('id') id: number): Promise<BienPhapDT> {
    return this.bienPhapDTsService.bienPhapDT(id);
  }

  @Mutation((returns) => BienPhapDT)
  createBienPhapDT(
    @Args('bienPhapDT') bienPhapDT: string,
  ): Promise<BienPhapDT> {
    return this.bienPhapDTsService.createBienPhapDT(bienPhapDT);
  }

  @Mutation((returns) => BienPhapDT)
  editBienPhapDT(
    @Args('bienPhapDT') bienPhapDT: string,
    @Args('id') id: number,
  ): Promise<BienPhapDT> {
    return this.bienPhapDTsService.editBienPhapDT(bienPhapDT, id);
  }

  @Mutation((returns) => BienPhapDT)
  deleteBienPhapDT(@Args('id') id: number): Promise<BienPhapDT> {
    return this.bienPhapDTsService.deleteBienPhapDT(id);
  }

  //ResolveField
  @ResolveField(() => [DoiTuong])
  DoiTuongs(@Parent() bienPhapDT: BienPhapDT): Promise<DoiTuong[]> {
    return this.bienPhapDTsService.DoiTuongs(bienPhapDT.MaBPDT);
  }
}
