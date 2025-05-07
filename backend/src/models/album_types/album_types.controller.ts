import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AlbumTypesService } from './album_types.service';
import { CreateAlbumTypeDto } from './dto/create-album_type.dto';
import { UpdateAlbumTypeDto } from './dto/update-album_type.dto';

@Controller('album-types')
export class AlbumTypesController {
  constructor(private readonly albumTypesService: AlbumTypesService) {}

  @Post()
  create(@Body() createAlbumTypeDto: CreateAlbumTypeDto) {
    return this.albumTypesService.create(createAlbumTypeDto);
  }

  @Get()
  findAll() {
    return this.albumTypesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.albumTypesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAlbumTypeDto: UpdateAlbumTypeDto) {
    return this.albumTypesService.update(+id, updateAlbumTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.albumTypesService.remove(+id);
  }
}
