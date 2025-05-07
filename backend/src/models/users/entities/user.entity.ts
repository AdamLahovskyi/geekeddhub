import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToOne} from 'typeorm';
import { Role } from '../../roles/entities/role.entity';
import {Artist} from "../../artists/entities/artist.entity";

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    email: string;

    @Column()
    password_hash: string;

    @Column()
    bio: string;

    @Column()
    pfp_url: string;

    @Column({ nullable: true })
    role_id: number;

    @ManyToOne(() => Role, { onDelete: 'SET NULL' })
    @JoinColumn({ name: 'role_id' })
    role: Role;

    @OneToOne(() => Artist, artist => artist.user)
    artist: Artist;

    @Column()
    created_at: Date;

    @Column()
    updated_at: Date;
}
