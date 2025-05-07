import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToOne } from 'typeorm';
import {User} from "../../users/entities/user.entity";

@Entity('artists')
export class Artist {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => User)
    @JoinColumn({ name: 'user_id' })
    user: User;

    @Column()
    name: string;

    @Column()
    bio: string;

    @Column()
    pfp_url: string;

    @Column()
    created_at: Date;
}
