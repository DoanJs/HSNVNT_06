import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CATTPvaTDInput {
    @Field({ nullable: true })
    CATTPvaTD?: string

    @Field({ nullable: true })
    MaCapCA?: number
}