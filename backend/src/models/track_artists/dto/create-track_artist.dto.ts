import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsNotEmpty } from 'class-validator';

export class CreateTrackArtistDto {
    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    track_id: number;

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    artist_id: number;
}