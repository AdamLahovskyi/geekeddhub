import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './models/users/users.module';
import { RolesModule } from './models/roles/roles.module';
import { AlbumsModule } from './models/albums/albums.module';
import { AlbumTypesModule } from './models/album_types/album_types.module';
import { TracksModule } from './models/tracks/tracks.module';
import { ArtistsModule } from './models/artists/artists.module';
import {TrackGenresModule} from "./models/track_genres/track_genres.module";
import { TrackArtistsModule } from './models/track_artists/track_artists.module';
import {SavedAlbumsModule} from "./models/saved_albums/saved_albums.module";
import {PlaylistsModule} from "./models/playlists/playlists.module";
import {ArtistGenresModule} from "./models/artist_genres/artist_genres.module";
import { PlaylistTracksModule } from './models/playlist-tracks/playlist-tracks.module';
import { GenresModule } from './models/genres/genres.module';
import { AlbumArtistsModule } from './models/album_artists/album_artists.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'db',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'geekeddhub',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
      autoLoadEntities: true,
    }),
    UsersModule,
    RolesModule,
    AlbumsModule,
    AlbumTypesModule,
    TracksModule,
    ArtistsModule,
    TrackGenresModule,
    TrackArtistsModule,
    SavedAlbumsModule,
    PlaylistsModule,
    PlaylistTracksModule,
    GenresModule,
    ArtistGenresModule,
    AlbumArtistsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}