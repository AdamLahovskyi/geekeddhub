import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SavedAlbumsService } from './saved_albums.service';
import { SavedAlbumsController } from './saved_albums.controller';
import { SavedAlbum } from './entities/saved_album.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SavedAlbum])],
  controllers: [SavedAlbumsController],
  providers: [SavedAlbumsService]
})
export class SavedAlbumsModule {}