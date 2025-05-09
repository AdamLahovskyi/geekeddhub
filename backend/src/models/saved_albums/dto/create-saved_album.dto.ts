import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsNotEmpty } from 'class-validator';

export class CreateSavedAlbumDto {
    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    user_id: number;

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    album_id: number;
}