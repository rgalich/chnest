import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { IngredientList } from '../IngredientList/ingredientList.entity';

@Entity()
export class Unit {
  @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: false,
        unique: true,
    })
    name: string;

    @OneToMany(type => IngredientList, ingredientLists => ingredientLists.ingredient)
    ingredientLists: IngredientList[]
}