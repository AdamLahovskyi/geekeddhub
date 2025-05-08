import { PartialType } from '@nestjs/mapped-types';
import { CreateArtistGenreDto } from './create-artist_genre.dto';

export class UpdateArtistGenreDto extends PartialType(CreateArtistGenreDto) {}
