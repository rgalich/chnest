import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { IngredientList } from '../IngredientList/ingredientList.entity';

@Entity()
export class Recipe {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: false,
    })
    name: string;

    @OneToMany(type => IngredientList, ingredientLists => ingredientLists.recipe)
    ingredientLists: IngredientList[];
}