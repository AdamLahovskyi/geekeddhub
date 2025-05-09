import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsOptional, IsBoolean } from 'class-validator';

export class CreatePlaylistDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    title: string;

    @ApiProperty({ required: false })
    @IsString()
    @IsOptional()
    description?: string;

    @ApiProperty({ required: false })
    @IsString()
    @IsOptional()
    cover_url?: string;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    is_public?: boolean;

    @ApiProperty()
    @IsNotEmpty()
    created_by_user_id: number;
}