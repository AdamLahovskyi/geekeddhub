import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TrackArtist } from './entities/track_artist.entity';
import { CreateTrackArtistDto } from './dto/create-track_artist.dto';

@Injectable()
export class TrackArtistsService {
  constructor(
      @InjectRepository(TrackArtist)
      private trackArtistsRepository: Repository<TrackArtist>,
  ) {}

  create(createTrackArtistDto: CreateTrackArtistDto) {
    return this.trackArtistsRepository.save(createTrackArtistDto);
  }

  findAll() {
    return this.trackArtistsRepository.find({
      relations: ['track', 'artist']
    });
  }

  findByTrack(track_id: number) {
    return this.trackArtistsRepository.find({
      where: { track_id },
      relations: ['artist']
    });
  }

  findByArtist(artist_id: number) {
    return this.trackArtistsRepository.find({
      where: { artist_id },
      relations: ['track']
    });
  }

  remove(track_id: number, artist_id: number) {
    return this.trackArtistsRepository.delete({ track_id, artist_id });
  }
}