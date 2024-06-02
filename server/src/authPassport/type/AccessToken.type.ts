import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class AccessTokenType {
    @Field()
    access_token: string
}