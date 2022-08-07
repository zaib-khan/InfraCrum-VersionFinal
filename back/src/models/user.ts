import { compare, hash } from 'bcrypt';
import { BeforeInsert, Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
// import { EnterpriseModel } from './enterprise.js';
// import type { EnterpriseModel as EnterpriseModelType } from './enterprise.js';
import { BaseModel } from './base.model.js';
import { Project } from './project.js';
import { Tasks } from './tasks.js';

@Entity('User')
export class User extends BaseModel {
   @PrimaryGeneratedColumn('increment')
  public id!: number;

   @Column({ nullable: false, unique: true })
   public email!: string;

   @Column({ nullable: false, length: 1024, select: false })
   public password!: string;

   @Column()
   public phonenumber!:string;

   @Column()
   public firstname!:string;

   @Column()
   public lastname!:string;

   @Column()
   public entreprise?:string;

   @Column()
   public img?:string;

    @BeforeInsert()
   async hashPassword () {
     const hashed = await hash(this.password, 10);
     this.password = hashed;
   }

    public verifyPassword (password: string): Promise<boolean> {
      return compare(password, this.password);
    }

    @OneToMany(() => Project, project => project.useradmin)
    public projectadmin!: Project[];

    @ManyToMany(() => Project, project => project.users)
    public projects?: Project[];

    @ManyToMany(() => Tasks, task => task.users)
    public tasks?: Tasks[];
  //* Le 1er argument => le modèle étranger, 2e argument la propriété dans le modèle étranger qui permet de faire la liaison *//
  //  @OneToMany(() => Comment, (comment) => comment.article)
  //  public comment!: Comment[];
}
