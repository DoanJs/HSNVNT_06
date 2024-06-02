import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class DoiInput {
  @Field({ nullable: true })
  TenDoi?: string;

  @Field({ nullable: true })
  MaCAQHvaTD?: number;
}
