import { ApiModelProperty } from '@nestjs/swagger';

export class CreateIngredientDto {
    @ApiModelProperty()
    readonly name: string;
}