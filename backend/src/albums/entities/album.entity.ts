import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import {AlbumType} from "../../album_types/entities/album_type.entity";

@Entity('albums')
export class Album {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    release_date: Date;

    @Column()
    cover_url: string;

    @Column()
    record_label: string;

    @ManyToOne(() => AlbumType, albumType => albumType.albums)
    @JoinColumn({ name: 'album_type_id' })
    album_type: AlbumType;

    @Column()
    total_tracks: number;

    @Column()
    explicit: boolean;

    @Column()
    created_at: Date;

    @Column()
    updated_at: Date;
}
