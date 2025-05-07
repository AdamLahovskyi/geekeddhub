import { Module } from '@nestjs/common';
import { AlbumsService } from './albums.service';
import { AlbumsController } from './albums.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Album } from './entities/album.entity';
import {AlbumType} from "../album_types/entities/album_type.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Album, AlbumType])],
  controllers: [AlbumsController],
  providers: [AlbumsService],
})
export class AlbumsModule {}
