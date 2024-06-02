import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class KetQuaXMDiaChiInput {
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
    MaDC?: number

    @Field({ nullable: true })
    MaLanhDaoPD?: number
}