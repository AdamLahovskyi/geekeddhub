import { Entity, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Track } from '../../tracks/entities/track.entity';
import { Genre } from '../../genres/entities/genre.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('track_genres')
export class TrackGenre {
    @ApiProperty()
    @PrimaryColumn()
    track_id: number;

    @ApiProperty()
    @PrimaryColumn()
    genre_id: number;

    @ManyToOne(() => Track, track => track.track_genres)
    @JoinColumn({ name: 'track_id' })
    track: Track;

    @ManyToOne(() => Genre, genre => genre.track_genres)
    @JoinColumn({ name: 'genre_id' })
    genre: Genre;
}