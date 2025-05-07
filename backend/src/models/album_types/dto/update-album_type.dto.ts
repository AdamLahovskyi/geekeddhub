import { PartialType } from '@nestjs/swagger';
import { CreateAlbumTypeDto } from './create-album_type.dto';

export class UpdateAlbumTypeDto extends PartialType(CreateAlbumTypeDto) {}
