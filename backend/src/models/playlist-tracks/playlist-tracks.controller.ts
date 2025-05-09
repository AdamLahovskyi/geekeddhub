import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { PlaylistTracksService } from './playlist-tracks.service';
import { CreatePlaylistTrackDto } from './dto/create-playlist-track.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { PlaylistTrack } from './entities/playlist-track.entity';

@ApiTags('playlist-tracks')
@Controller('playlist-tracks')
export class PlaylistTracksController {
  constructor(private readonly playlistTracksService: PlaylistTracksService) {}

  @Post()
  @ApiOperation({ summary: 'Add track to playlist' })
  @ApiResponse({ status: 201, type: PlaylistTrack })
  create(@Body() createPlaylistTrackDto: CreatePlaylistTrackDto) {
    return this.playlistTracksService.create(createPlaylistTrackDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all playlist tracks' })
  @ApiResponse({ status: 200, type: [PlaylistTrack] })
  findAll() {
    return this.playlistTracksService.findAll();
  }

  @Get('playlist/:playlist_id')
  @ApiOperation({ summary: 'Get tracks by playlist ID' })
  @ApiResponse({ status: 200, type: [PlaylistTrack] })
  findByPlaylist(@Param('playlist_id') playlist_id: number) {
    return this.playlistTracksService.findByPlaylist(playlist_id);
  }

  @Get('track/:track_id')
  @ApiOperation({ summary: 'Get playlists by track ID' })
  @ApiResponse({ status: 200, type: [PlaylistTrack] })
  findByTrack(@Param('track_id') track_id: number) {
    return this.playlistTracksService.findByTrack(track_id);
  }

  @Delete(':playlist_id/:track_id')
  @ApiOperation({ summary: 'Remove track from playlist' })
  @ApiResponse({ status: 200 })
  remove(
      @Param('playlist_id') playlist_id: number,
      @Param('track_id') track_id: number
  ) {
    return this.playlistTracksService.remove(playlist_id, track_id);
  }
}