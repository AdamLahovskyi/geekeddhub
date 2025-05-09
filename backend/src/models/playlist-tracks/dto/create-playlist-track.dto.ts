import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsNotEmpty } from 'class-validator';

export class CreatePlaylistTrackDto {
    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    playlist_id: number;

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    track_id: number;

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    position: number;
}