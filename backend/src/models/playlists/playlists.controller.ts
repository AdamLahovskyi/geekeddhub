import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PlaylistsService } from './playlists.service';
import { CreatePlaylistDto } from './dto/create-playlist.dto';
import { UpdatePlaylistDto } from './dto/update-playlist.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Playlist } from './entities/playlist.entity';

@ApiTags('playlists')
@Controller('playlists')
export class PlaylistsController {
  constructor(private readonly playlistsService: PlaylistsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new playlist' })
  @ApiResponse({ status: 201, type: Playlist })
  create(@Body() createPlaylistDto: CreatePlaylistDto) {
    return this.playlistsService.create(createPlaylistDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all playlists' })
  @ApiResponse({ status: 200, type: [Playlist] })
  findAll() {
    return this.playlistsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get playlist by ID' })
  @ApiResponse({ status: 200, type: Playlist })
  findOne(@Param('id') id: string) {
    return this.playlistsService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update playlist' })
  @ApiResponse({ status: 200, type: Playlist })
  update(@Param('id') id: string, @Body() updatePlaylistDto: UpdatePlaylistDto) {
    return this.playlistsService.update(+id, updatePlaylistDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete playlist' })
  @ApiResponse({ status: 200 })
  remove(@Param('id') id: string) {
    return this.playlistsService.remove(+id);
  }
}