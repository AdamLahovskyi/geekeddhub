import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlaylistTracksService } from './playlist-tracks.service';
import { PlaylistTracksController } from './playlist-tracks.controller';
import { PlaylistTrack } from './entities/playlist-track.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PlaylistTrack])],
  controllers: [PlaylistTracksController],
  providers: [PlaylistTracksService]
})
export class PlaylistTracksModule {}