import { Field, InputType } from "@nestjs/graphql"
import { ApiProperty } from "@nestjs/swagger"
import { IsString } from "class-validator"

@InputType()
export class Credentials {
    @ApiProperty({
        required: true,
        type: String,
    })
    @IsString()
    @Field(() => String, { nullable: false })
    username!: string

    @ApiProperty({
        required: true,
        type: String,
    })
    @IsString()
    @Field(() => String, { nullable: false })
    password!: string
}

@InputType()
export class SignupCredentials {
    @ApiProperty({
        required: true,
        type: String,
    })
    @IsString()
    @Field(() => String, { nullable: false })
    username!: string

    @ApiProperty({
        required: true,
        type: String,
    })
    @IsString()
    @Field(() => String, { nullable: false })
    password!: string

    @ApiProperty({
        required: true,
        type: String,
    })
    @IsString()
    @Field(() => String, { nullable: false })
    firstName!: string

    @ApiProperty({
        required: true,
        type: String,
    })
    @IsString()
    @Field(() => String, { nullable: false })
    lastName!: string
}

@InputType()
export class CheckUser {
    @ApiProperty({
        required: true,
        type: String,
    })
    @IsString()
    @Field(() => String, { nullable: false })
    email!: string
}
