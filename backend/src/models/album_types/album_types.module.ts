import { Module } from '@nestjs/common';
import { AlbumTypesService } from './album_types.service';
import { AlbumTypesController } from './album_types.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AlbumType } from './entities/album_type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AlbumType])],
  controllers: [AlbumTypesController],
  providers: [AlbumTypesService],
})
export class AlbumTypesModule {}