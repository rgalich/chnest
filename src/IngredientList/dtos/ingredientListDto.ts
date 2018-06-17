import { ApiModelProperty } from '@nestjs/swagger';
import { IngredientDto } from '../../ingredient/dtos/ingredientDto';
import { UnitDto } from '../../unit/dtos/unitDto';

export class IngredientListDto {
    @ApiModelProperty()
    readonly id: number;

    @ApiModelProperty()
    readonly name: string;

    @ApiModelProperty()
    readonly ingredient: IngredientDto;

    @ApiModelProperty()
    readonly unit: UnitDto;
}