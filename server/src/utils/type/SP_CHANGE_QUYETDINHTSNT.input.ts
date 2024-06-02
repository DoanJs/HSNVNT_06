import { Field, InputType } from "@nestjs/graphql";
import { QuyetDinhTSNTInput } from "src/quyetdinhTSNTs/type/QuyetDinhTSNT.input";

@InputType()
export class SP_CHANGE_QUYETDINHTSNT_Input {
    @Field({ nullable: true })
    Type?: string;
  
    @Field({ nullable: true })
    MaQD?: number;
  
    @Field({ nullable: true })
    QuyetDinhTSNTInput?: QuyetDinhTSNTInput;
}