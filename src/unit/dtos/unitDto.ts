import { ApiModelProperty } from '@nestjs/swagger';

export class UnitDto {
    @ApiModelProperty()
    readonly id: number;

    @ApiModelProperty()
    readonly name: string;
}