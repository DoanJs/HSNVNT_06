import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { CBCS } from 'src/cbcss/CBCS.model';
import { KetQuaTSNT } from 'src/ketquaTSNTs/KetQuaTSNT.model';
import { UtilsParamsInput } from 'src/utils/type/UtilsParams.input';
import { DanhGiaTSTH } from './DanhGiaTSTH.model';
import { DanhGiaTSTHsService } from './DanhGiaTSTHs.service';
import { DanhGiaTSTHInput } from './type/DanhGiaTSTH.input';

@Resolver(() => DanhGiaTSTH)
export class DanhGiaTSTHsResolver {
  constructor(private danhgiaTSTHsService: DanhGiaTSTHsService) {}
  @Query((returns) => [DanhGiaTSTH])
  danhgiaTSTHs(
    @Args('utilsParams') utilsParams: UtilsParamsInput,
  ): Promise<DanhGiaTSTH[]> {
    return this.danhgiaTSTHsService.danhgiaTSTHs(utilsParams);
  }

  @Query((returns) => DanhGiaTSTH)
  danhgiaTSTH(@Args('id') id: number): Promise<DanhGiaTSTH> {
    return this.danhgiaTSTHsService.danhgiaTSTH(id);
  }

  @Mutation((returns) => DanhGiaTSTH)
  createDanhGiaTSTH(
    @Args('danhgiaTSTHInput') danhgiaTSTHInput: DanhGiaTSTHInput,
  ): Promise<DanhGiaTSTH> {
    return this.danhgiaTSTHsService.createDanhGiaTSTH(danhgiaTSTHInput);
  }

  @Mutation((returns) => DanhGiaTSTH)
  editDanhGiaTSTH(
    @Args('danhgiaTSTHInput') danhgiaTSTHInput: DanhGiaTSTHInput,
    @Args('id') id: number,
  ): Promise<DanhGiaTSTH> {
    return this.danhgiaTSTHsService.editDanhGiaTSTH(danhgiaTSTHInput, id);
  }

  @Mutation((returns) => DanhGiaTSTH)
  deleteDanhGiaTSTH(@Args('id') id: number): Promise<DanhGiaTSTH> {
    return this.danhgiaTSTHsService.deleteDanhGiaTSTH(id);
  }

  // ResolveField
  @ResolveField((returns) => KetQuaTSNT)
  KetQuaTSNT(@Parent() danhgiaTSTH: DanhGiaTSTH): Promise<KetQuaTSNT> {
    return this.danhgiaTSTHsService.KetQuaTSNT(danhgiaTSTH);
  }

  @ResolveField((returns) => CBCS)
  CBCS(@Parent() danhgiaTSTH: DanhGiaTSTH): Promise<CBCS> {
    return this.danhgiaTSTHsService.CBCS(danhgiaTSTH);
  }
}
