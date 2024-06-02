import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class KyDuyet_DNInput {
    @Field({ nullable: true })
    MaDN?: number

    @Field({ nullable: true })
    MaDaiDienCATTPvaTD?: number

    @Field({ nullable: true })
    MaDaiDienDonViDN?: number

    @Field({ nullable: true })
    MaDaiDienDonViTSNT?: number
}