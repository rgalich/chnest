import { ApiModelProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IngredientListDto } from '../../IngredientList/dtos/ingredientListDto';

export class CreateRecipeDto {

    @ApiModelProperty()
    readonly name: string;

    @ApiModelProperty()
    @Type(() => IngredientListDto)
    readonly ingredientLists: IngredientListDto[];
}