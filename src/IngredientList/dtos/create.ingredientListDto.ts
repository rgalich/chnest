import { ApiModelProperty } from '@nestjs/swagger';
import { IngredientDto } from '../../ingredient/dtos/ingredientDto';
import { UnitDto } from '../../unit/dtos/unitDto';
import { RecipeDto } from '../../recipe/dtos/recipeDto';

export class CreateIngredientListDto {
    @ApiModelProperty()
    public name: string;

    @ApiModelProperty()
    public amount: number;

    @ApiModelProperty()
    public ingredient: IngredientDto;

    @ApiModelProperty()
    public unit: UnitDto;

    @ApiModelProperty()
    public recipe: RecipeDto;
}