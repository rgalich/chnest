import { ApiModelProperty } from '@nestjs/swagger';

export class IngredientDto {
    @ApiModelProperty()
    readonly id: number;

    @ApiModelProperty()
    readonly name: string;
}