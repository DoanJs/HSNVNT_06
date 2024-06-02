import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { CBCS } from 'src/cbcss/CBCS.model';
import { KeHoachTSNT } from 'src/kehoachTSNTs/KeHoachTSNT.model';
import { UtilsParamsInput } from 'src/utils/type/UtilsParams.input';
import { LucLuongThamGiaKH } from './LucLuongThamGiaKH.model';
import { LucLuongThamGiaKHsService } from './LucLuongThamGiaKHs.service';
import { LucLuongThamGiaKHInput } from './type/LucLuongThamGiaKH.input';

@Resolver(() => LucLuongThamGiaKH)
export class LucLuongThamGiaKHsResolver {
  constructor(private lucluongthamgiaKHsService: LucLuongThamGiaKHsService) { }
  @Query((returns) => [LucLuongThamGiaKH])
  lucluongThamGiaKHs(
    @Args('utilsParams') utilsParams: UtilsParamsInput,
  ): Promise<LucLuongThamGiaKH[]> {
    return this.lucluongthamgiaKHsService.lucluongThamGiaKHs(utilsParams);
  }

  @Query((returns) => LucLuongThamGiaKH)
  lucluongThamGiaKH(@Args('id') id: number): Promise<LucLuongThamGiaKH> {
    return this.lucluongthamgiaKHsService.lucluongThamGiaKH(id);
  }

  @Mutation((returs) => LucLuongThamGiaKH)
  createLucLuongThamGiaKH(
    @Args('lucluongThamGiaKHInput')
    lucluongThamGiaKHInput: LucLuongThamGiaKHInput,
  ): Promise<LucLuongThamGiaKH> {
    return this.lucluongthamgiaKHsService.createLucLuongThamGiaKH(
      lucluongThamGiaKHInput,
    );
  }

  @Mutation((returns) => LucLuongThamGiaKH)
  editLucLuongThamGiaKH(
    @Args('lucluongThamGiaKHInput')
    lucluongThamGiaKHInput: LucLuongThamGiaKHInput,
    @Args('id') id: number,
  ): Promise<LucLuongThamGiaKH> {
    return this.lucluongthamgiaKHsService.editLucLuongThamGiaKH(
      lucluongThamGiaKHInput,
      id,
    );
  }

  @Mutation((returns) => LucLuongThamGiaKH)
  deleteLucLuongThamGiaKH(@Args('id') id: number): Promise<LucLuongThamGiaKH> {
    return this.lucluongthamgiaKHsService.deleteLucLuongThamGiaKH(id);
  }

  // ResolveField

  @ResolveField((returns) => KeHoachTSNT)
  KeHoachTSNT(@Parent() lucluongThamGiaKH: LucLuongThamGiaKH): Promise<KeHoachTSNT> {
    return this.lucluongthamgiaKHsService.KeHoachTSNT(lucluongThamGiaKH);
  }

  @ResolveField((returns) => CBCS)
  CBCS(@Parent() lucluongThamGiaKH: LucLuongThamGiaKH): Promise<CBCS> {
    return this.lucluongthamgiaKHsService.CBCS(lucluongThamGiaKH);
  }
}
