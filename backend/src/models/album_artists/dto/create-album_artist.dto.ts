import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsNotEmpty } from 'class-validator';

export class CreateAlbumArtistDto {
    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    album_id: number;

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    artist_id: number;
}