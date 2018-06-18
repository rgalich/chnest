import { Controller, Get, Post, Body } from '@nestjs/common';
import { RecipeService } from './recipe.service';
import { ApiUseTags, ApiBearerAuth, ApiResponse, ApiOperation } from '@nestjs/swagger';
import { CreateRecipeDto } from './dtos/create.recipeDto';
import { RecipeDto } from './dtos/recipeDto';

@ApiUseTags('recipe')
@Controller('recipe')
export class RecipeController {
    constructor(private readonly recipeService: RecipeService) {}

    @Post()
    @ApiOperation({ title: 'create recipe' })
    async create(@Body() recipe: CreateRecipeDto): Promise<RecipeDto> {
        return await this.recipeService.create(recipe);
    }
}
