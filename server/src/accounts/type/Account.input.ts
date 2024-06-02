import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class AccountInput {
  @Field({ nullable: true })
  Username?: string;

  @Field({ nullable: true })
  Password?: string;

  @Field({ nullable: true })
  Role?: string;

  @Field({ nullable: true })
  Position?: string;
}
