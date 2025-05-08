import { PartialType } from '@nestjs/mapped-types';
import { CreateTrackGenreDto } from './create-track_genre.dto';

export class UpdateTrackGenreDto extends PartialType(CreateTrackGenreDto) {}
