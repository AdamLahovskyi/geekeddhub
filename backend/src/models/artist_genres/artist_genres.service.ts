import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ArtistGenre } from './entities/artist_genre.entity';
import {CreateArtistGenreDto} from "./dto/create-artist_genre.dto";
@Injectable()
export class ArtistGenresService {
  constructor(
      @InjectRepository(ArtistGenre)
      private artistGenresRepository: Repository<ArtistGenre>,
  ) {}

  create(createArtistGenreDto: CreateArtistGenreDto) {
    return this.artistGenresRepository.save(createArtistGenreDto);
  }

  findAll() {
    return this.artistGenresRepository.find({
      relations: ['artist', 'genre']
    });
  }

  findByArtist(artist_id: number) {
    return this.artistGenresRepository.find({
      where: { artist_id },
      relations: ['genre']
    });
  }

  findByGenre(genre_id: number) {
    return this.artistGenresRepository.find({
      where: { genre_id },
      relations: ['artist']
    });
  }

  remove(artist_id: number, genre_id: number) {
    return this.artistGenresRepository.delete({ artist_id, genre_id });
  }
}