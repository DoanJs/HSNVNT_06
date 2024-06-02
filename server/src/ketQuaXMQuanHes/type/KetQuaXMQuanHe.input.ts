import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class KetQuaXMQuanHeInput {
    @Field({ nullable: true })
    So?: string

    @Field({ nullable: true })
    Ngay?: string

    @Field({ nullable: true })
    MaCATTPvaTD?: number

    @Field({ nullable: true })
    MaCAQHvaTD?: number

    @Field({ nullable: true })
    MaDoiTuong?: number

    @Field({ nullable: true })
    MaQD?: number

    @Field({ nullable: true })
    MaDN?: number

    @Field({ nullable: true })
    MaLanhDaoPD?: number

    @Field({ nullable: true })
    MaBCPHQH?: number
}