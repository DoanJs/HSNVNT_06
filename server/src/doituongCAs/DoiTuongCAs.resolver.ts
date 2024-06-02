import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { ChuyenAn } from 'src/chuyenans/ChuyenAn.model';
import { DoiTuong } from 'src/doituongs/DoiTuong.model';
import { UtilsParamsInput } from 'src/utils/type/UtilsParams.input';
import { DoiTuongCA } from './DoiTuongCA.model';
import { DoiTuongCAsService } from './DoiTuongCAs.service';
import { DoiTuongCAInput } from './type/DoiTuongCA.input';

@Resolver(() => DoiTuongCA)
export class DoiTuongCAsResolver {
  constructor(private doituongCAsService: DoiTuongCAsService) { }
  @Query((returns) => [DoiTuongCA])
  doituongCAs(
    @Args('utilsParams') utilsParams: UtilsParamsInput,
  ): Promise<DoiTuongCA[]> {
    return this.doituongCAsService.doituongCAs(utilsParams);
  }

  // @Query((returns) => [DoiTuongCA])
  // doituongCAsOpen(
  //   @Args('conditionCol') conditionCol: string,
  //   @Args('value') value: string,
  // ): Promise<DoiTuongCA[]> {
  //   return this.doituongCAsService.doituongCAsOpen(conditionCol, value);
  // }

  @Query((returns) => DoiTuongCA)
  doituongCA(@Args('id') id: number): Promise<DoiTuongCA> {
    return this.doituongCAsService.doituongCA(id);
  }

  @Mutation((returns) => DoiTuongCA)
  createDoiTuongCA(
    @Args('doituongCAInput') doituongCAInput: DoiTuongCAInput,
  ): Promise<DoiTuongCA> {
    return this.doituongCAsService.createDoiTuongCA(doituongCAInput);
  }

  @Mutation((returns) => DoiTuongCA)
  editDoiTuongCA(
    @Args('doituongCAInput') doituongCAInput: DoiTuongCAInput,
    @Args('id') id: number,
  ): Promise<DoiTuongCA> {
    return this.doituongCAsService.editDoiTuongCA(doituongCAInput, id);
  }

  @Mutation((returns) => DoiTuongCA)
  deleteDoiTuongCA(@Args('id') id: number): Promise<DoiTuongCA> {
    return this.doituongCAsService.deleteDoiTuongCA(id);
  }

  // ResolveField

  @ResolveField((returns) => ChuyenAn)
  ChuyenAn(@Parent() doituongCA: DoiTuongCA): Promise<ChuyenAn> {
    return this.doituongCAsService.ChuyenAn(doituongCA);
  }

  @ResolveField((returns) => DoiTuong)
  DoiTuong(@Parent() doituongCA: DoiTuongCA): Promise<DoiTuong> {
    return this.doituongCAsService.DoiTuong(doituongCA);
  }
}
