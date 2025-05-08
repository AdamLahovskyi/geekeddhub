import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { TrackArtistsService } from './track_artists.service';
import { CreateTrackArtistDto } from './dto/create-track_artist.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { TrackArtist } from './entities/track_artist.entity';

@ApiTags('track-artists')
@Controller('track-artists')
export class TrackArtistsController {
  constructor(private readonly trackArtistsService: TrackArtistsService) {}

  @Post()
  @ApiOperation({ summary: 'Create track artist relation' })
  @ApiResponse({ status: 201, type: TrackArtist })
  create(@Body() createTrackArtistDto: CreateTrackArtistDto) {
    return this.trackArtistsService.create(createTrackArtistDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all track artist relations' })
  @ApiResponse({ status: 200, type: [TrackArtist] })
  findAll() {
    return this.trackArtistsService.findAll();
  }

  @Get('track/:track_id')
  @ApiOperation({ summary: 'Get artists by track ID' })
  @ApiResponse({ status: 200, type: [TrackArtist] })
  findByTrack(@Param('track_id') track_id: number) {
    return this.trackArtistsService.findByTrack(track_id);
  }

  @Get('artist/:artist_id')
  @ApiOperation({ summary: 'Get tracks by artist ID' })
  @ApiResponse({ status: 200, type: [TrackArtist] })
  findByArtist(@Param('artist_id') artist_id: number) {
    return this.trackArtistsService.findByArtist(artist_id);
  }

  @Delete(':track_id/:artist_id')
  @ApiOperation({ summary: 'Delete track artist relation' })
  @ApiResponse({ status: 200 })
  remove(
      @Param('track_id') track_id: number,
      @Param('artist_id') artist_id: number
  ) {
    return this.trackArtistsService.remove(track_id, artist_id);
  }
}