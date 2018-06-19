import { ApiModelProperty } from '@nestjs/swagger';
import { RecipeDto } from 'recipe/dtos/recipeDto';

export class StepDto {

    @ApiModelProperty()
    public id: number;

    @ApiModelProperty()
    public description: string;

    @ApiModelProperty()
    public order: number;

    @ApiModelProperty()
    public recipe: RecipeDto;
}