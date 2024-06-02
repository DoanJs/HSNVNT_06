import { Field, InputType } from "@nestjs/graphql";
import { DoiTuongInput } from "src/doituongs/type/DoiTuong.input";

@InputType()
export class SP_CHANGE_DOITUONG_Input {
    @Field({ nullable: true })
    Type?: string;
  
    @Field({ nullable: true })
    MaDoiTuong?: number;
  
    @Field({ nullable: true })
    DoiTuongInput?: DoiTuongInput;
}