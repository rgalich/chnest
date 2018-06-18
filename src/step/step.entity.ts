import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Recipe } from '../recipe/recipe.entity';

@Entity()
export class Step {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: false,
    })
    description: string;

    @Column({
        nullable: false,
    })
    order: number;

    @ManyToOne(type => Recipe, recipe => recipe.steps, { nullable: false })
    recipe: Recipe;
}