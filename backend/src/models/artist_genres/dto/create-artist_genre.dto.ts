import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsNotEmpty } from 'class-validator';

export class CreateArtistGenreDto {
    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    artist_id: number;

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    genre_id: number;
}