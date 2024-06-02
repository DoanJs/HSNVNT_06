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
import { ChucVu } from './ChucVu.model';
import { ChucVusService } from './ChucVus.service';

@Resolver(() => ChucVu)
export class ChucVusResolver {
  constructor(private chucvusService: ChucVusService) {}

  @Query((returns) => [ChucVu])
  chucvus(
    @Args('utilsParams') utilsParams: UtilsParamsInput,
  ): Promise<ChucVu[]> {
    return this.chucvusService.chucVus(utilsParams);
  }

  @Query((returns) => ChucVu)
  chucvu(@Args('id') id: number): Promise<ChucVu> {
    return this.chucvusService.chucVu(id);
  }

  @Mutation((returns) => ChucVu)
  createChucVu(@Args('chucVu') chucVu: string): Promise<ChucVu> {
    return this.chucvusService.createChucVu(chucVu);
  }

  @Mutation((returns) => ChucVu)
  editChucVu(
    @Args('chucVu') chucVu: string,
    @Args('id') id: number,
  ): Promise<ChucVu> {
    return this.chucvusService.editChucVu(chucVu, id);
  }

  @Mutation((returns) => ChucVu)
  deleteChucVu(@Args('id') id: number): Promise<ChucVu> {
    return this.chucvusService.deleteChucVu(id);
  }

  //ResolveField

  @ResolveField((returns) => [CBCS])
  CBCSs(@Parent() chucVu: ChucVu): Promise<CBCS[]> {
    return this.chucvusService.CBCSs(chucVu.MaCV);
  }
}
