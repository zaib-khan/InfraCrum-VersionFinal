import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { BaseModel } from './base.model.js';
import { Tasks } from './tasks.js';
import { User } from './user.js';

@Entity('Project')
export class Project extends BaseModel {
    @PrimaryGeneratedColumn('increment')
  public id!: number;

    @Column()
    public name!: string;

    // @Column()
    // public description?: string;

    // @Column()
    // public beginingDate!: string;

    // @Column()
    // public finishedDate!: string;

    // @Column()
    // public status!: string;

    // @Column()
    // public priority!: string;

    @ManyToOne(() => User, user => user.projectadmin)
    public useradmin!: User;

    @ManyToMany(() => User, user => user.projects)
    @JoinTable()
    public users?: User[];

    @OneToMany(() => Tasks, task => task.project)
    public tasks?: Tasks[];
}
