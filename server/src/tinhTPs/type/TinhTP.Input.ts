import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class TinhTPInput {
    @Field({ nullable: true })
    TinhTP?: string

    @Field({ nullable: true })
    Cap?: string
}