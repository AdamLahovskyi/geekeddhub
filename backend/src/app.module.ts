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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}