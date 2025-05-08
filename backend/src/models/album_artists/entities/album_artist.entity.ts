import { Entity, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Album } from '../../albums/entities/album.entity';
import { Artist } from '../../artists/entities/artist.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('album_artists')
export class AlbumArtist {
    @ApiProperty()
    @PrimaryColumn()
    album_id: number;

    @ApiProperty()
    @PrimaryColumn()
    artist_id: number;

    @ManyToOne(() => Album, album => album.album_artists)
    @JoinColumn({ name: 'album_id' })
    album: Album;

    @ManyToOne(() => Artist, artist => artist.album_artists)
    @JoinColumn({ name: 'artist_id' })
    artist: Artist;
}