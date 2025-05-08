import { Entity, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Track } from '../../tracks/entities/track.entity';
import { Artist } from '../../artists/entities/artist.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('track_artists')
export class TrackArtist {
    @ApiProperty()
    @PrimaryColumn()
    track_id: number;

    @ApiProperty()
    @PrimaryColumn()
    artist_id: number;

    @ManyToOne(() => Track, track => track.track_artists)
    @JoinColumn({ name: 'track_id' })
    track: Track;

    @ManyToOne(() => Artist, artist => artist.track_artists)
    @JoinColumn({ name: 'artist_id' })
    artist: Artist;
}