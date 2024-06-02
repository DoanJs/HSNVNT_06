import {
  Args,
  Mutation,
  Resolver
} from '@nestjs/graphql';
import { TKNhanh } from './TKNhanh.model';
import { TKNhanhsService } from './TKNhanhs.service';
import { UseGuards } from '@nestjs/common';
import { GraphQLGuard } from 'src/authPassport/GraphQL.Guard';

@Resolver(() => TKNhanh)
@UseGuards(GraphQLGuard)
export class TKNhanhsResolver {
  constructor(private TKNhanhsService: TKNhanhsService) { }
  @Mutation((returns) => [TKNhanh])
  getData_searchFast(
    @Args('keySearch') keySearch: string,
  ): Promise<TKNhanh[]> {
    return this.TKNhanhsService.getData_searchFast(keySearch);
  }
}
