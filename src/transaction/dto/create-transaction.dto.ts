import { IsNotEmpty, IsNumber, IsString, MinLength } from 'class-validator'
import { Category } from 'src/category/entities/category.entity'

export class CreateTransactionDto {
    @IsNotEmpty()
    title: string

    @IsNotEmpty()
    @IsNumber()
    amount: number

    @IsString()
    @MinLength(6)
    type: 'expense' | 'income'

    @IsNotEmpty()
    category: Category
}
