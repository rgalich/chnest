import { Controller, Get, Post, Body } from '@nestjs/common';
import { IngredientService } from './ingredient.service';
import { IngredientDto } from './dtos/ingredientDto';
import { ApiUseTags, ApiBearerAuth, ApiResponse, ApiOperation } from '@nestjs/swagger';

@ApiUseTags('ingredient')
@Controller('ingredient')
export class IngredientController {
    constructor(private readonly ingredientService: IngredientService) {}

    @Get()
    @ApiOperation({ title: 'Find all ingredient' })
    @ApiResponse({
        status: 200,
        description: 'The record has been successfully',
      })
    async findAll(): Promise<IngredientDto[]> {
        return this.ingredientService.findAll();
    }

    @Post()
    @ApiOperation({ title: 'create ingredient' })
    async create(@Body() ingredient: IngredientDto): Promise<IngredientDto> {
        const toto = new IngredientDto();
        console.log(toto);
        console.log(ingredient);
        return await this.ingredientService.create(ingredient);
    }
}
