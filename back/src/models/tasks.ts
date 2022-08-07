import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { BaseModel } from './base.model.js';
import type { Project } from './project.js';
import { User } from './user.js';

@Entity()

export class Tasks extends BaseModel {
   @PrimaryGeneratedColumn('increment')
  public id!: number;

   @Column()
   public taskName!: string;

   @Column()
   public description?: string;

   @Column()
   public deadline!: string;

   @Column()
   public time!: string;

   // @Column()
   // public endDate!: string;

   @Column()
   public status!: string;

   // @Column()
   // public document?: string;

   // @Column()
   // public priority!: string;

   @ManyToMany(() => User, user => user.tasks)
   @JoinTable()
   public users?: User[];

   @ManyToOne('Project', 'tasks')
   public project!: Project;
}
