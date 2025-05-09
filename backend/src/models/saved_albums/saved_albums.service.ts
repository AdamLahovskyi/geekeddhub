import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SavedAlbum } from './entities/saved_album.entity';
import { CreateSavedAlbumDto } from './dto/create-saved_album.dto';

@Injectable()
export class SavedAlbumsService {
  constructor(
      @InjectRepository(SavedAlbum)
      private savedAlbumsRepository: Repository<SavedAlbum>,
  ) {}

  create(createSavedAlbumDto: CreateSavedAlbumDto) {
    const savedAlbum = this.savedAlbumsRepository.create({
      ...createSavedAlbumDto,
      saved_at: new Date()
    });
    return this.savedAlbumsRepository.save(savedAlbum);
  }

  findAll() {
    return this.savedAlbumsRepository.find({
      relations: ['user', 'album']
    });
  }

  findByUser(user_id: number) {
    return this.savedAlbumsRepository.find({
      where: { user_id },
      relations: ['album']
    });
  }

  findByAlbum(album_id: number) {
    return this.savedAlbumsRepository.find({
      where: { album_id },
      relations: ['user']
    });
  }

  remove(user_id: number, album_id: number) {
    return this.savedAlbumsRepository.delete({ user_id, album_id });
  }
}