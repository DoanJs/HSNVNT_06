import { Field, InputType } from '@nestjs/graphql';
import { BaoCaoPHQHInput } from 'src/baocaoPHQHs/type/BaoCaoPHQH.input';

@InputType()
export class SP_CHANGE_BAOCAOPHQH_Input {
  @Field({ nullable: true })
  Type?: string;

  @Field({ nullable: true })
  MaBCPHQH?: number;

  @Field({ nullable: true })
  BaoCaoPHQHInput?: BaoCaoPHQHInput;
}
