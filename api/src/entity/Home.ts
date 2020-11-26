import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Home {

    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    cep: string;

    @Column()
    numero: number;

    @Column({type: 'float'})
    longitude: number;
    
    @Column({type: 'float'})
    latitude: number;

    @Column()
    residentes: number;

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    createdAt: Date;

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
    updatedAt: Date;

}
