import { PartialType } from '@nestjs/mapped-types';
import { CreateAlbumArtistDto } from './create-album_artist.dto';

export class UpdateAlbumArtistDto extends PartialType(CreateAlbumArtistDto) {}
