import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateArtistDto {
    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    user_id: number;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    bio: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    pfp_url: string;
}