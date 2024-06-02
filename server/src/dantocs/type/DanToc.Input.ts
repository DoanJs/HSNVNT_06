import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class DanTocInput {
  @Field({ nullable: true })
  TenDT?: string;

  @Field({ nullable: true })
  MaQT?: number;
}
