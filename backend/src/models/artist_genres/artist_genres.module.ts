import { Module } from '@nestjs/common';
import { ArtistGenresService } from './artist_genres.service';
import { ArtistGenresController } from './artist_genres.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import {ArtistGenre} from "./entities/artist_genre.entity";

@Module({
  imports: [TypeOrmModule.forFeature([ArtistGenre])],
  controllers: [ArtistGenresController],
  providers: [ArtistGenresService],
  exports: [ArtistGenresService],
})
export class ArtistGenresModule {}
