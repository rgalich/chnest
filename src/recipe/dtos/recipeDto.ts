import { ApiModelProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { CreateIngredientListDto } from '../../IngredientList/dtos/create.ingredientListDto';

export class RecipeDto {
    @ApiModelProperty()
    public id: number;

    @ApiModelProperty()
    public name: string;

    @ApiModelProperty()
    @Type(() => CreateIngredientListDto)
    public ingredientLists: CreateIngredientListDto[];
}