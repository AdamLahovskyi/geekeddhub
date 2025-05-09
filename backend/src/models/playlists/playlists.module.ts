import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlaylistsService } from './playlists.service';
import { PlaylistsController } from './playlists.controller';
import { Playlist } from './entities/playlist.entity';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Playlist]),
    UsersModule
  ],
  controllers: [PlaylistsController],
  providers: [PlaylistsService]
})
export class PlaylistsModule {}