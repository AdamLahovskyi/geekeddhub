import { IsString, IsNumber, IsBoolean } from 'class-validator';

export class CreateTrackDto {
    @IsNumber()
    album_id: number;

    @IsString()
    title: string;

    @IsString()
    cover_image_url: string;

    @IsNumber()
    duration: number;

    @IsBoolean()
    explicit: boolean;
}