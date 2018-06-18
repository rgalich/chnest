import { Controller, Get, Post, Body } from '@nestjs/common';
import { StepService } from './step.service';
import { ApiUseTags, ApiBearerAuth, ApiResponse, ApiOperation } from '@nestjs/swagger';

@ApiUseTags('step')
@Controller('step')
export class StepController {
    constructor(private readonly stepService: StepService) {}

    // @Get()
    // @ApiOperation({ title: 'Find all unit' })
    // @ApiResponse({
    //     status: 200,
    //     description: 'The record has been successfully',
    //   })
    // async findAll(): Promise<UnitDto[]> {
    //     return this.unitService.findAll();
    // }
}
