import {
  CreateDateColumn,
  DeleteDateColumn,
  UpdateDateColumn,
} from 'typeorm';

export class BaseModel {
    // Date de création automatique de notre utilisator
    @CreateDateColumn()
  public creationDate!: Date;

    // Date de modification de l'entité
    @UpdateDateColumn()
    public updateDate!: Date;

    // date de suppression => SOFT DELETE
    @DeleteDateColumn()
    public deletionDate?: Date;
}
