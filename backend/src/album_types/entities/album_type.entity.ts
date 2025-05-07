import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Album } from '../../albums/entities/album.entity';

@Entity('album_types')
export class AlbumType {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(() => Album, album => album.album_type)
    albums: Album[];

    @Column()
    created_at: Date;

    @Column()
    updated_at: Date;
}