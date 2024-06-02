import { UseGuards } from '@nestjs/common';
import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { GraphQLGuard } from 'src/authPassport/GraphQL.Guard';
import { DoiTuongCA } from 'src/doituongCAs/DoiTuongCA.model';
import { TinhChatDT } from 'src/tinhchatDTs/TinhChatDT.model';
import { UtilsParamsInput } from 'src/utils/type/UtilsParams.input';
import { ChuyenAn } from './ChuyenAn.model';
import { ChuyenAnsService } from './ChuyenAns.service';
import { ChuyenAnInput } from './type/ChuyenAn.input';

@Resolver(() => ChuyenAn)
@UseGuards(GraphQLGuard)
export class ChuyenAnsResolver {
  constructor(private chuyenansService: ChuyenAnsService) {}
  @Query((returns) => [ChuyenAn])
  chuyenans(
    @Args('utilsParams') utilsParams: UtilsParamsInput,
  ): Promise<ChuyenAn[]> {
    return this.chuyenansService.chuyenans(utilsParams);
  }

  @Query((returns) => ChuyenAn)
  chuyenan(@Args('id') id: number): Promise<ChuyenAn> {
    return this.chuyenansService.chuyenan(id);
  }

  @Mutation((returns) => ChuyenAn)
  createChuyenAn(
    @Args('chuyenanInput') chuyenanInput: ChuyenAnInput,
  ): Promise<ChuyenAn> {
    return this.chuyenansService.createChuyenAn(chuyenanInput);
  }

  @Mutation((returns) => ChuyenAn)
  editChuyenAn(
    @Args('chuyenanInput') chuyenanInput: ChuyenAnInput,
    @Args('id') id: number,
  ): Promise<ChuyenAn> {
    return this.chuyenansService.editChuyenAn(chuyenanInput, id);
  }

  @Mutation((returns) => ChuyenAn)
  deleteChuyenAn(
    @Args('chuyenanInput') chuyenanInput: ChuyenAnInput,
    @Args('id') id: number,
  ): Promise<ChuyenAn> {
    return this.chuyenansService.deleteChuyenAn(chuyenanInput, id);
  }

  // ResolveField

  @ResolveField((returns) => TinhChatDT)
  TinhChat(@Parent() chuyenan: ChuyenAn): Promise<TinhChatDT> {
    return this.chuyenansService.TinhChat(chuyenan);
  }

  @ResolveField((returns) => [DoiTuongCA])
  DoiTuongCAs(@Parent() chuyenan: ChuyenAn): Promise<DoiTuongCA[]> {
    return this.chuyenansService.DoiTuongCAs(chuyenan.MaCA);
  }
}
