import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateAlbumTypeDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    name: string;
}