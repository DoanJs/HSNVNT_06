import { Field, InputType } from '@nestjs/graphql';
import { BaoCaoKTDNInput } from 'src/baocaoKTDNs/type/BaoCaoKTDN.input';

@InputType()
export class SP_CHANGE_BAOCAOKTDN_Input {
  @Field({ nullable: true })
  Type?: string;

  @Field({ nullable: true })
  MaBCKTDN?: number;

  @Field({ nullable: true })
  BaoCaoKTDNInput?: BaoCaoKTDNInput;
}
