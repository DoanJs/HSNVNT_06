import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UtilsParamsInput {
  @Field({ nullable: true })
  condition?: string;

  @Field({ nullable: true })
  skip?: number;

  @Field({ nullable: true })
  take?: number;
}
