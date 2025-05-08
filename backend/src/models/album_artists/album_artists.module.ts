import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AlbumArtistsService } from './album_artists.service';
import { AlbumArtistsController } from './album_artists.controller';
import { AlbumArtist } from './entities/album_artist.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AlbumArtist])],
  controllers: [AlbumArtistsController],
  providers: [AlbumArtistsService]
})
export class AlbumArtistsModule {}