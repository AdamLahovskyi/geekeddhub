import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TrackGenresService } from './track_genres.service';
import { TrackGenresController } from './track_genres.controller';
import { TrackGenre } from './entities/track_genre.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TrackGenre])],
  controllers: [TrackGenresController],
  providers: [TrackGenresService]
})
export class TrackGenresModule {}