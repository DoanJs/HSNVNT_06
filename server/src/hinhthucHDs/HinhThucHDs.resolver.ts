import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { DeNghiTSNT } from 'src/denghiTSNTs/DeNghiTSNT.model';
import { UtilsParamsInput } from 'src/utils/type/UtilsParams.input';
import { HinhThucHD } from './HinhThucHD.model';
import { HinhThucHDsService } from './HinhThucHDs.service';

@Resolver(() => HinhThucHD)
export class HinhThucHDsResolver {
  constructor(private hinhthucHDsService: HinhThucHDsService) { }

  @Query((returns) => [HinhThucHD])
  hinhthucHDs(
    @Args('utilsParams') utilsParams: UtilsParamsInput,
  ): Promise<HinhThucHD[]> {
    return this.hinhthucHDsService.hinhthucHDs(utilsParams);
  }

  @Query((returns) => HinhThucHD)
  hinhthucHD(@Args('id') id: number): Promise<HinhThucHD> {
    return this.hinhthucHDsService.hinhthucHD(id);
  }

  @Mutation((returs) => HinhThucHD)
  createHinhThucHD(
    @Args('hinhthuc') hinhthuc: string
  ): Promise<HinhThucHD> {
    return this.hinhthucHDsService.createHinhThucHD(hinhthuc);
  }

  @Mutation((returns) => HinhThucHD)
  editHinhThucHD(
    @Args('hinhthuc') hinhthuc: string,
    @Args('id') id: number,
  ): Promise<HinhThucHD> {
    return this.hinhthucHDsService.editHinhThucHD(hinhthuc, id);
  }

  @Mutation((returns) => HinhThucHD)
  deleteHinhThucHD(@Args('id') id: number): Promise<HinhThucHD> {
    return this.hinhthucHDsService.deleteHinhThucHD(id);
  }


  // ResolveField





  @ResolveField(returns => [DeNghiTSNT])
  DeNghiTSNTs(@Parent() hinhthucHD: HinhThucHD): Promise<DeNghiTSNT[]> {
    return this.hinhthucHDsService.DeNghiTSNTs(hinhthucHD.MaHTHD)
  }
}
