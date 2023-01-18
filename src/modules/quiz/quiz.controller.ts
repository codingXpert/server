import { Body, Controller, Get, HttpCode, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { CreateQuizDto } from "./dto/create-quiz.dto";
import { QuizService } from "./quiz.service";

@Controller('quiz')
export class QuizController {
    constructor(private readonly quizService:QuizService){}

    @Get('/')
    get(){
   return this.quizService.getAll();
   }

   @Post()
   @HttpCode(200)
   @UsePipes(ValidationPipe)
   CreateQuiz(@Body() quizDto: CreateQuizDto){
    return this.quizService.createNewQuiz(quizDto)
   }
    
}
