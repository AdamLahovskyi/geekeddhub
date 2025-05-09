import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PlaylistTrack } from './entities/playlist-track.entity';
import { CreatePlaylistTrackDto } from './dto/create-playlist-track.dto';

@Injectable()
export class PlaylistTracksService {
  constructor(
      @InjectRepository(PlaylistTrack)
      private playlistTracksRepository: Repository<PlaylistTrack>,
  ) {}

  create(createPlaylistTrackDto: CreatePlaylistTrackDto) {
    return this.playlistTracksRepository.save(createPlaylistTrackDto);
  }

  findAll() {
    return this.playlistTracksRepository.find({
      relations: ['playlist', 'track']
    });
  }

  findByPlaylist(playlist_id: number) {
    return this.playlistTracksRepository.find({
      where: { playlist_id },
      relations: ['track'],
      order: { position: 'ASC' }
    });
  }

  findByTrack(track_id: number) {
    return this.playlistTracksRepository.find({
      where: { track_id },
      relations: ['playlist']
    });
  }

  remove(playlist_id: number, track_id: number) {
    return this.playlistTracksRepository.delete({ playlist_id, track_id });
  }
}