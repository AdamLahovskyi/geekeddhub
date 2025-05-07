import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsNumber, IsBoolean, IsDate } from 'class-validator';

export class CreateAlbumDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    title: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    release_date: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    cover_url: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    record_label: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    album_type_id: string;

    @ApiProperty()
    @IsNumber()
    total_tracks: number;

    @ApiProperty()
    @IsBoolean()
    explicit: boolean;
}