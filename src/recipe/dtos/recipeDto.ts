import { ApiModelProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { StepDto } from 'step/dtos/stepDto';
import { IngredientListDto } from 'IngredientList/dtos/ingredientListDto';

export class RecipeDto {
    @ApiModelProperty()
    public id: number;

    @ApiModelProperty()
    public name: string;

    @ApiModelProperty({ type: IngredientListDto, isArray: true })
    @Type(() => IngredientListDto)
    public ingredientLists: IngredientListDto[];

    @ApiModelProperty({ type: StepDto, isArray: true })
    @Type(() => StepDto)
    public steps: StepDto[];
}