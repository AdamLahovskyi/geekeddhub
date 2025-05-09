import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { Album } from '../../albums/entities/album.entity';
import {TrackArtist} from "../../track_artists/entities/track_artist.entity";
import {TrackGenre} from "../../track_genres/entities/track_genre.entity";
import {PlaylistTrack} from "../../playlist-tracks/entities/playlist-track.entity";


@Entity('tracks')
export class Track {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Album, album => album.tracks)
    @JoinColumn({ name: 'album_id' })
    album: Album;

    @Column()
    title: string;

    @Column()
    cover_image_url: string;

    @Column()
    duration: number;

    @Column()
    explicit: boolean;

    @Column()
    created_at: Date;

    @Column()
    updated_at: Date;

    @OneToMany(() => TrackArtist, trackArtist => trackArtist.track)
    track_artists: TrackArtist[];

    @OneToMany(() => TrackGenre, trackGenre => trackGenre.track)
    track_genres: TrackGenre[];

    @OneToMany(() => PlaylistTrack, playlistTrack => playlistTrack.track)
    playlist_tracks: PlaylistTrack[];
}
