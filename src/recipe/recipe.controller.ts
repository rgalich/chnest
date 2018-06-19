import { Controller, Get, Post, Body, Put } from '@nestjs/common';
import { RecipeService } from './recipe.service';
import { ApiUseTags, ApiBearerAuth, ApiResponse, ApiOperation } from '@nestjs/swagger';
import { RecipeDto } from './dtos/recipeDto';

@ApiUseTags('recipe')
@Controller('recipe')
export class RecipeController {
    constructor(private readonly recipeService: RecipeService) {}

    @Post()
    @ApiOperation({ title: 'create recipe' })
    async create(@Body() recipe: RecipeDto): Promise<RecipeDto> {
        return await this.recipeService.create(recipe);
    }

    @Put()
    @ApiOperation({ title: 'update recipe' })
    async update(@Body() recipe: RecipeDto): Promise<RecipeDto> {
        return await this.recipeService.update(recipe);
    }
}
