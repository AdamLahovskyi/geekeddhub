import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TracksService } from './tracks.service';
import { TracksController } from './tracks.controller';
import { Track } from './entities/track.entity';
import { Album } from '../albums/entities/album.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Track, Album])],
  controllers: [TracksController],
  providers: [TracksService],
})
export class TracksModule {}