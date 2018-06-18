import { ApiModelProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IngredientListDto } from '../../IngredientList/dtos/ingredientListDto';

export class RecipeDto {
    @ApiModelProperty()
    readonly id: number;

    @ApiModelProperty()
    readonly name: string;

    @ApiModelProperty()
    @Type(() => IngredientListDto)
    readonly ingredientLists: IngredientListDto[];
}