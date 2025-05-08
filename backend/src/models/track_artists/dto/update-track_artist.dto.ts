import { PartialType } from '@nestjs/mapped-types';
import { CreateTrackArtistDto } from './create-track_artist.dto';

export class UpdateTrackArtistDto extends PartialType(CreateTrackArtistDto) {}
