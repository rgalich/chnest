import { ApiModelProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { CreateIngredientListDto } from 'IngredientList/dtos/create.ingredientListDto';

export class CreateRecipeDto {

    @ApiModelProperty()
    public name: string;

    @ApiModelProperty({ type: CreateIngredientListDto, isArray: true })
    @Type(() => CreateIngredientListDto)
    public ingredientLists: CreateIngredientListDto[];
}