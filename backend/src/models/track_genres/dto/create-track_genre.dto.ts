import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsNotEmpty } from 'class-validator';

export class CreateTrackGenreDto {
    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    track_id: number;

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    genre_id: number;
}