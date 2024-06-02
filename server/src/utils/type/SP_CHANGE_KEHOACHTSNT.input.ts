import { Field, InputType } from "@nestjs/graphql";
import { KeHoachTSNTInput } from "src/kehoachTSNTs/type/KeHoachTSNT.input";

@InputType()
export class SP_CHANGE_KEHOACHTSNT_Input {
    @Field({ nullable: true })
    Type?: string;
  
    @Field({ nullable: true })
    MaKH?: number;
  
    @Field({ nullable: true })
    KeHoachTSNTInput?: KeHoachTSNTInput;
}