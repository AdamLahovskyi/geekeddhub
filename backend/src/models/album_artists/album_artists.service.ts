import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AlbumArtist } from './entities/album_artist.entity';
import { CreateAlbumArtistDto } from './dto/create-album_artist.dto';

@Injectable()
export class AlbumArtistsService {
  constructor(
      @InjectRepository(AlbumArtist)
      private albumArtistsRepository: Repository<AlbumArtist>,
  ) {}

  create(createAlbumArtistDto: CreateAlbumArtistDto) {
    return this.albumArtistsRepository.save(createAlbumArtistDto);
  }

  findAll() {
    return this.albumArtistsRepository.find({
      relations: ['album', 'artist']
    });
  }

  findByAlbum(album_id: number) {
    return this.albumArtistsRepository.find({
      where: { album_id },
      relations: ['artist']
    });
  }

  findByArtist(artist_id: number) {
    return this.albumArtistsRepository.find({
      where: { artist_id },
      relations: ['album']
    });
  }

  remove(album_id: number, artist_id: number) {
    return this.albumArtistsRepository.delete({ album_id, artist_id });
  }
}