import { Field, InputType } from '@nestjs/graphql';
import { CBCSInput } from 'src/cbcss/type/CBCS.Input';

InputType();
export class SP_CHANGE_CBCS_Input {
  @Field({ nullable: true })
  Type?: string;

  @Field({ nullable: true })
  MaCBCS?: number;

  @Field({ nullable: true })
  CBCSInput?: CBCSInput;
}
