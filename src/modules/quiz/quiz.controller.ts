import { Body, Controller, Get, HttpCode, Post } from "@nestjs/common";
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
   CreateQuiz(@Body() quizDto: CreateQuizDto){
    return this.quizService.create(quizDto)
   }
    
}
