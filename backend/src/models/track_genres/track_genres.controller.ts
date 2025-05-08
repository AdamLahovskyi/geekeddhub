import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { TrackGenresService } from './track_genres.service';
import { CreateTrackGenreDto } from './dto/create-track_genre.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { TrackGenre } from './entities/track_genre.entity';

@ApiTags('track-genres')
@Controller('track-genres')
export class TrackGenresController {
  constructor(private readonly trackGenresService: TrackGenresService) {}

  @Post()
  @ApiOperation({ summary: 'Create track genre relation' })
  @ApiResponse({ status: 201, type: TrackGenre })
  create(@Body() createTrackGenreDto: CreateTrackGenreDto) {
    return this.trackGenresService.create(createTrackGenreDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all track genre relations' })
  @ApiResponse({ status: 200, type: [TrackGenre] })
  findAll() {
    return this.trackGenresService.findAll();
  }

  @Get('track/:track_id')
  @ApiOperation({ summary: 'Get genres by track ID' })
  @ApiResponse({ status: 200, type: [TrackGenre] })
  findByTrack(@Param('track_id') track_id: number) {
    return this.trackGenresService.findByTrack(track_id);
  }

  @Get('genre/:genre_id')
  @ApiOperation({ summary: 'Get tracks by genre ID' })
  @ApiResponse({ status: 200, type: [TrackGenre] })
  findByGenre(@Param('genre_id') genre_id: number) {
    return this.trackGenresService.findByGenre(genre_id);
  }

  @Delete(':track_id/:genre_id')
  @ApiOperation({ summary: 'Delete track genre relation' })
  @ApiResponse({ status: 200 })
  remove(
      @Param('track_id') track_id: number,
      @Param('genre_id') genre_id: number
  ) {
    return this.trackGenresService.remove(track_id, genre_id);
  }
}