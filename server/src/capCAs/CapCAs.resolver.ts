import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { CATTPvaTD } from 'src/caTTPvaTD/CATTPvaTD.model';
import { UtilsParamsInput } from 'src/utils/type/UtilsParams.input';
import { CapCA } from './CapCA.model';
import { CapCAsService } from './CapCAs.service';

@Resolver(() => CapCA)
export class CapCAsResolver {
  constructor(private capCAsService: CapCAsService) {}

  @Query((returns) => [CapCA])
  capCAs(@Args('utilsParams') utilsParams: UtilsParamsInput): Promise<CapCA[]> {
    return this.capCAsService.capCAs(utilsParams);
  }

  @Query((returns) => CapCA)
  capCA(@Args('id') id: number): Promise<CapCA> {
    return this.capCAsService.capCA(id);
  }

  @Mutation((returns) => CapCA)
  createCapCA(@Args('capCA') capCA: string): Promise<CapCA> {
    return this.capCAsService.createCapCA(capCA);
  }

  @Mutation((returns) => CapCA)
  editCapCA(
    @Args('capCA') capCA: string,
    @Args('id') id: number,
  ): Promise<CapCA> {
    return this.capCAsService.editCapCA(capCA, id);
  }

  @Mutation((returns) => CapCA)
  deleteCapCA(@Args('id') id: number): Promise<CapCA> {
    return this.capCAsService.deleteCapCA(id);
  }

  //ResolveField

  @ResolveField((returns) => [CATTPvaTD])
  CATTPvaTDs(@Parent() capCA: CapCA): Promise<CATTPvaTD[]> {
    return this.capCAsService.CATTPvaTDs(capCA.MaCapCA);
  }
}
