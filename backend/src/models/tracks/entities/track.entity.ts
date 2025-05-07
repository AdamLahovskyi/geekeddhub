import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Album } from '../../albums/entities/album.entity';

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

}
