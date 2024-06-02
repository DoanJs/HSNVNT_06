import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { DeNghiTSNT } from 'src/denghiTSNTs/DeNghiTSNT.model';
import { QuyetDinhTSNT } from 'src/quyetdinhTSNTs/QuyetDinhTSNT.model';
import { UtilsParamsInput } from 'src/utils/type/UtilsParams.input';
import { CATTPvaTD } from './CATTPvaTD.model';
import { CATTPvaTDsService } from './CATTPvaTDs.service';
import { CATTPvaTDInput } from './type/CATTPvaTD.input';
import { CapCA } from 'src/capCAs/CapCA.model';
import { CAQHvaTD } from 'src/caQHvaTD/CAQHvaTD.model';

@Resolver(() => CATTPvaTD)
export class CATTPvaTDsResolver {
  constructor(private caTTPvaTDsService: CATTPvaTDsService) { }
  @Query((returns) => [CATTPvaTD])
  caTTPvaTDs(
    @Args('utilsParams') utilsParams: UtilsParamsInput,
  ): Promise<CATTPvaTD[]> {
    return this.caTTPvaTDsService.caTTPvaTDs(utilsParams);
  }

  @Query((returns) => CATTPvaTD)
  caTTPvaTD(
    @Args('id') id: number,
  ): Promise<CATTPvaTD> {
    return this.caTTPvaTDsService.caTTPvaTD(id);
  }

  @Mutation((returns) => CATTPvaTD)
  createCATTPvaTD(@Args('caTTPvaTDInput') caTTPvaTDInput: CATTPvaTDInput): Promise<CATTPvaTD> {
    return this.caTTPvaTDsService.createCATTPvaTD(caTTPvaTDInput);
  }

  @Mutation((returns) => CATTPvaTD)
  editCATTPvaTD(
    @Args('caTTPvaTDInput') caTTPvaTDInput: CATTPvaTDInput,
    @Args('id') id: number,
  ): Promise<CATTPvaTD> {
    return this.caTTPvaTDsService.editCATTPvaTD(caTTPvaTDInput, id);
  }

  @Mutation((returns) => CATTPvaTD)
  deleteCATTPvaTD(@Args('id') id: number): Promise<CATTPvaTD> {
    return this.caTTPvaTDsService.deleteCATTPvaTD(id);
  }

  // ResolveField

  @ResolveField(returns => CapCA)
  CapCA(@Parent() caTTPvaTD: CATTPvaTD): Promise<CapCA> {
    return this.caTTPvaTDsService.CapCA(caTTPvaTD)
  }

  @ResolveField(returns => [CAQHvaTD])
  CAQHvaTDs(@Parent() caTTPvaTD: CATTPvaTD): Promise<CAQHvaTD[]> {
    return this.caTTPvaTDsService.CAQHvaTDs(caTTPvaTD.MaCATTPvaTD)
  }

  //THE END!

  


  


  @ResolveField(returns => [DeNghiTSNT])
  DeNghiTSNTs(@Parent() caTTPvaTD: CATTPvaTD): Promise<DeNghiTSNT[]> {
    return this.caTTPvaTDsService.DeNghiTSNTs(caTTPvaTD.MaCATTPvaTD)
  }

  @ResolveField(returns => [QuyetDinhTSNT])
  QuyetDinhTSNTs(@Parent() caTTPvaTD: CATTPvaTD): Promise<QuyetDinhTSNT[]> {
    return this.caTTPvaTDsService.QuyetDinhTSNTs(caTTPvaTD.MaCATTPvaTD)
  }
}
