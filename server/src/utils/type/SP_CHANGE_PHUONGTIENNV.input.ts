import { Field, InputType } from "@nestjs/graphql";
import { PhuongTienNVInput } from "src/phuongtienNVs/type/PhuongTienNV.input";

@InputType()
export class SP_CHANGE_PHUONGTIENNV_Input {
    @Field({ nullable: true })
    Type?: string;
  
    @Field({ nullable: true })
    MaPT?: number;
  
    @Field({ nullable: true })
    PhuongTienNVInput?: PhuongTienNVInput;
}