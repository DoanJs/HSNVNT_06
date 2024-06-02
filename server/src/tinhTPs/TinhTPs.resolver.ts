import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { DeNghiTSNT } from 'src/denghiTSNTs/DeNghiTSNT.model';
import { KetQuaTSNT } from 'src/ketquaTSNTs/KetQuaTSNT.model';
import { QuyetDinhTSNT } from 'src/quyetdinhTSNTs/QuyetDinhTSNT.model';
import { UtilsParamsInput } from 'src/utils/type/UtilsParams.input';
import { TinhTP } from './TinhTP.model';
import { TinhTPsService } from './TinhTPs.service';
import { TinhTPInput } from './type/TinhTP.Input';

@Resolver(() => TinhTP)
export class TinhTPsResolver {
  constructor(private tinhTPsService: TinhTPsService) { }
  @Query((returns) => [TinhTP])
  tinhTPs(
    @Args('utilsParams') utilsParams: UtilsParamsInput,
  ): Promise<TinhTP[]> {
    return this.tinhTPsService.tinhTPs(utilsParams);
  }

  @Query((returns) => TinhTP)
  tinhTP(@Args('id') id: number): Promise<TinhTP> {
    return this.tinhTPsService.tinhTP(id);
  }

  @Mutation((returns) => TinhTP)
  createTinhTP(
    @Args('tinhTPInput') tinhTPInput: TinhTPInput,
  ): Promise<TinhTP> {
    return this.tinhTPsService.createTinhTP(tinhTPInput);
  }

  @Mutation((returns) => TinhTP)
  editTinhTP(
    @Args('tinhTPInput') tinhTPInput: TinhTPInput,
    @Args('id') id: number,
  ): Promise<TinhTP> {
    return this.tinhTPsService.editTinhTP(tinhTPInput, id);
  }

  @Mutation((returns) => TinhTP)
  deleteTinhTP(@Args('id') id: number): Promise<TinhTP> {
    return this.tinhTPsService.deleteTinhTP(id);
  }

  //  ResolveField

  @ResolveField(returns => [DeNghiTSNT])
  DeNghiTSNTs(@Parent() tinhTP: TinhTP): Promise<DeNghiTSNT[]> {
    return this.tinhTPsService.DeNghiTSNTs(tinhTP.MaTinhTP)
  }

  @ResolveField(returns => [QuyetDinhTSNT])
  QuyetDinhTSNTs(@Parent() tinhTP: TinhTP): Promise<QuyetDinhTSNT[]> {
    return this.tinhTPsService.QuyetDinhTSNTs(tinhTP.MaTinhTP)
  }

  @ResolveField(returns => [KetQuaTSNT])
  KetQuaTSNTs(@Parent() tinhTP: TinhTP): Promise<KetQuaTSNT[]> {
    return this.tinhTPsService.KetQuaTSNTs(tinhTP.MaTinhTP)
  }
}
