import { Field, InputType } from "@nestjs/graphql";
import { TramCTInput } from "src/tramCTs/type/TramCT.input";

@InputType()
export class SP_CHANGE_TRAMCT_Input {
    @Field({ nullable: true })
    Type?: string;
  
    @Field({ nullable: true })
    MaTramCT?: number;
  
    @Field({ nullable: true })
    TramCTInput?: TramCTInput;
}