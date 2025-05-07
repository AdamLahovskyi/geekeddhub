import { IsString, IsNotEmpty, IsEmail, IsNumber, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    username: string;

    @ApiProperty()
    @IsEmail()
    email: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    password: string;

    @ApiProperty({ required: false })
    @IsString()
    @IsOptional()
    pfp_url?: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    bio: string;

    @ApiProperty()
    @IsNumber()
    role_id: number;
}