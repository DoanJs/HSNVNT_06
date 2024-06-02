import { Field, InputType } from '@nestjs/graphql';
import { DeNghiTSNTInput } from 'src/denghiTSNTs/type/DeNghiTSNT.input';

@InputType()
export class SP_CHANGE_DENGHITSNT_Input {
  @Field({ nullable: true })
  Type?: string;

  @Field({ nullable: true })
  MaDN?: number;

  @Field({ nullable: true })
  DeNghiTSNTInput?: DeNghiTSNTInput;
}
