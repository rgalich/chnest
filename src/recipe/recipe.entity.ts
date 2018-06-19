import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { IngredientList } from 'ingredientList/ingredientList.entity';
import { Step } from '../step/step.entity';

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

    @OneToMany(type => Step, step => step.recipe)
    steps: Step[];
}