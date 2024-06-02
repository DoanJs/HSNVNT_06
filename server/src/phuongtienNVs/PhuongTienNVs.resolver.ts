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
import PhuongTienNV from './PhuongTienNV.model';
import { PhuongTienNVsService } from './PhuongTienNVs.service';
import { PhuongTienNVInput } from './type/PhuongTienNV.input';
import { CBCS } from 'src/cbcss/CBCS.model';
import { UseGuards } from '@nestjs/common';
import { GraphQLGuard } from 'src/authPassport/GraphQL.Guard';

@Resolver(() => PhuongTienNV)
@UseGuards(GraphQLGuard)
export class PhuongTienNVsResolver {
  constructor(private phuongtienNVsService: PhuongTienNVsService) { }
  @Query((returns) => [PhuongTienNV])
  phuongtienNVs(
    @Args('utilsParams') utilsParams: UtilsParamsInput,
  ): Promise<PhuongTienNV[]> {
    return this.phuongtienNVsService.phuongtienNVs(utilsParams);
  }

  @Query((returns) => PhuongTienNV)
  phuongtienNV(@Args('id') id: number): Promise<PhuongTienNV> {
    return this.phuongtienNVsService.phuongtienNV(id);
  }

  @Mutation((returns) => PhuongTienNV)
  createPhuongTienNV(
    @Args('phuongtienNVInput') phuongtienNVInput: PhuongTienNVInput,
  ): Promise<PhuongTienNV> {
    return this.phuongtienNVsService.createPhuongTienNV(phuongtienNVInput);
  }

  @Mutation((returns) => PhuongTienNV)
  editPhuongTienNV(
    @Args('phuongtienNVInput') phuongtienNVInput: PhuongTienNVInput,
    @Args('id') id: number,
  ): Promise<PhuongTienNV> {
    return this.phuongtienNVsService.editPhuongTienNV(phuongtienNVInput, id);
  }

  @Mutation((returns) => PhuongTienNV)
  deletePhuongTienNV(
    @Args('phuongtienNVInput') phuongtienNVInput: PhuongTienNVInput,
    @Args('id') id: number,
  ): Promise<PhuongTienNV> {
    return this.phuongtienNVsService.deletePhuongTienNV(phuongtienNVInput, id);
  }

  // ResolveField

  @ResolveField((returns) => KetQuaTSNT)
  KetQuaTSNT(@Parent() phuongtienNV: PhuongTienNV): Promise<KetQuaTSNT> {
    return this.phuongtienNVsService.KetQuaTSNT(phuongtienNV);
  }
  
  @ResolveField((returns) => [CBCS])
  TSThucHiens(@Parent() phuongtienNV: PhuongTienNV): Promise<CBCS[]> {
    return this.phuongtienNVsService.TSThucHiens(phuongtienNV.MaPT);
  }
}
