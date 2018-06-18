import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Ingredient } from '../ingredient/ingredient.entity';
import { Unit } from '../unit/unit.entity';
import { Recipe } from '../recipe/recipe.entity';

@Entity()
export class IngredientList {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: false})
    amount: number;

    @ManyToOne(type => Ingredient, ingredient => ingredient.ingredientLists, {nullable: false})
    ingredient: Ingredient;

    @ManyToOne(type => Unit, unit => unit.ingredientLists, {nullable: false})
    unit: Unit;

    @ManyToOne(type => Recipe, recipe => recipe.ingredientLists, {nullable: false})
    recipe: Recipe;
}