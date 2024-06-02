import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CAQHvaTDInput {
  @Field({ nullable: true })
  CAQHvaTD?: string;

  @Field({ nullable: true })
  KyHieu?: string;

  @Field({ nullable: true })
  MaCATTPvaTD?: number;
}
