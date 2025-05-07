import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Track } from './entities/track.entity';
import { Album } from '../albums/entities/album.entity';
import { TracksService } from './tracks.service';
import { TracksController } from './tracks.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Track, Album])],
  providers: [TracksService],
  controllers: [TracksController],
})
export class TracksModule {}