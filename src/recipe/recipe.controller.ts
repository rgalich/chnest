import { Controller, Get, Post, Body } from '@nestjs/common';
import { RecipeService } from './recipe.service';
import { ApiUseTags, ApiBearerAuth, ApiResponse, ApiOperation } from '@nestjs/swagger';

@ApiUseTags('recipe')
@Controller('recipe')
export class RecipeController {
    constructor(private readonly recipeService: RecipeService) {}

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
