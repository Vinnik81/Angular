import { Component } from '@angular/core';

interface Question {
  question: string;
  answers: string[];
  correctAnswerIndex: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MillionerGame';
  
  questions: Question[] = [
    {
      question: 'Какой цвет у неба?',
      answers: ['a) красный', 'b) синий', 'c) зеленый', 'd) желтый'],
      correctAnswerIndex: 1
    },
    {
      question: 'Сколько дней в неделе?',
      answers: ['a) 1', 'b) 6', 'c) 7', 'd) 8'],
      correctAnswerIndex: 2
    },
    {
      question: 'Как изменится сила тока, протекающего по проводнику, если напряжение на его концах и площадь поперечного сечения увеличить в 2 раза?',
      answers: ['a) увеличится в 4 раза', 'b) уменьшится в 4 раза', 'c) уменьшится в 2 раза', 'd) не изменится'],
      correctAnswerIndex: 0
    },
    {
      question: 'Перемещение  это?',
      answers: ['a) скалярная величина', 'b) векторная величина', 'c) магнитная величина', 'd) правильного ответа нет'],
      correctAnswerIndex: 1
    },
    {
      question: 'Сколько составляет сумма углов треугольника?',
      answers: ['a) 450 градусов', 'b) 270 градусов', 'c) 360 градусов', 'd) 180 градусов'],
      correctAnswerIndex: 3
    }
  ];

  currentQuestionIndex: number = 0;
  winnings: number = 0;
  gameOver: boolean = false;
  result: string = '';
  isButtonClicked: boolean = false;
  styles: any = {
    'background-color': '#ffffff'
  }
  pobeda: string = '';
  timer: any;

  chooseAnswer(answerIndex: number) {
      if (answerIndex === this.questions[this.currentQuestionIndex].correctAnswerIndex) {
        this.winnings++;
        this.result = 'Верно!';
        if (this.currentQuestionIndex === this.questions.length - 1) {
          this.endGame();
        }
        else {
          this.currentQuestionIndex++;
        }
      }
      else {
        this.result = 'Неверно!';
        this.gameOver = true;
      }
    }

  endGame() {
    this.gameOver = true;
    this.pobeda = 'Поздравляем! Вы ответили правильно на ' + this.winnings + ' вопросов из ' + this.questions.length;
    switch (this.winnings) {
      case 1: {
        this.pobeda += ' Вы выиграли 5000 рублей!';
        break;
      }
      case 2: {
        this.pobeda += ' Вы выиграли 50000 рублей!';
        break;
      }
      case 3: {
        this.pobeda += ' Вы выиграли 100000 рублей!';
        break;
      }
      case 4: {
        this.pobeda += ' Вы выиграли 500000 рублей!';
        break;
      }
      case 5: {
        this.pobeda += ' Вы стали миллионером!';
        break;
      }
    }
  }
  startGame() {
    this.gameOver = false;
    this.currentQuestionIndex = 0;
    this.winnings = 0;
    this.result = '';
    this.pobeda = '';
  }
  }
  
