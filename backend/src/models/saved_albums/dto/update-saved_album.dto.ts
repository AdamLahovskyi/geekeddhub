import { PartialType } from '@nestjs/mapped-types';
import { CreateSavedAlbumDto } from './create-saved_album.dto';

export class UpdateSavedAlbumDto extends PartialType(CreateSavedAlbumDto) {}
