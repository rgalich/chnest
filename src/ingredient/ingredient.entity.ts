import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { IngredientList } from 'ingredientList/ingredientList.entity';

@Entity()
export class Ingredient {
  @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: false,
        unique: true,
    })
    name: string;

    @OneToMany(type => IngredientList, ingredientLists => ingredientLists.ingredient)
    ingredientLists: IngredientList[];
}