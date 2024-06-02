import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class LoaiLLDBInput {
    @Field({ nullable: true })
    TenLLDB?: string

    @Field({ nullable: true })
    KyHieu?: string
}