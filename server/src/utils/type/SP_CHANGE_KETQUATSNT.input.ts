import { Field, InputType } from "@nestjs/graphql";
import { KetQuaTSNTInput } from "src/ketquaTSNTs/type/KetQuaTSNT.input";

@InputType()
export class SP_CHANGE_KETQUATSNT_Input {
    @Field({ nullable: true })
    Type?: string;
  
    @Field({ nullable: true })
    MaKQ?: number;
  
    @Field({ nullable: true })
    KetQuaTSNTInput?: KetQuaTSNTInput;
}