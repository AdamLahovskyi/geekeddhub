import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TrackGenre } from './entities/track_genre.entity';
import { CreateTrackGenreDto } from './dto/create-track_genre.dto';

@Injectable()
export class TrackGenresService {
  constructor(
      @InjectRepository(TrackGenre)
      private trackGenresRepository: Repository<TrackGenre>,
  ) {}

  create(createTrackGenreDto: CreateTrackGenreDto) {
    return this.trackGenresRepository.save(createTrackGenreDto);
  }

  findAll() {
    return this.trackGenresRepository.find({
      relations: ['track', 'genre']
    });
  }

  findByTrack(track_id: number) {
    return this.trackGenresRepository.find({
      where: { track_id },
      relations: ['genre']
    });
  }

  findByGenre(genre_id: number) {
    return this.trackGenresRepository.find({
      where: { genre_id },
      relations: ['track']
    });
  }

  remove(track_id: number, genre_id: number) {
    return this.trackGenresRepository.delete({ track_id, genre_id });
  }
}