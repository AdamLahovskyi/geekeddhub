import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TrackArtistsService } from './track_artists.service';
import { TrackArtistsController } from './track_artists.controller';
import { TrackArtist } from './entities/track_artist.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TrackArtist])],
  controllers: [TrackArtistsController],
  providers: [TrackArtistsService]
})
export class TrackArtistsModule {}