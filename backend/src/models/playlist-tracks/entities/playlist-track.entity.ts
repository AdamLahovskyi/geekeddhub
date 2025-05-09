import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Playlist } from '../../playlists/entities/playlist.entity';
import { Track } from '../../tracks/entities/track.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('playlist_tracks')
export class PlaylistTrack {
    @ApiProperty()
    @PrimaryColumn()
    playlist_id: number;

    @ApiProperty()
    @PrimaryColumn()
    track_id: number;

    @ApiProperty()
    @Column()
    position: number;

    @ManyToOne(() => Playlist, playlist => playlist.playlist_tracks, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'playlist_id' })
    playlist: Playlist;

    @ManyToOne(() => Track, track => track.playlist_tracks)
    @JoinColumn({ name: 'track_id' })
    track: Track;
}