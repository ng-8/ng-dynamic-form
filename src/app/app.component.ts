import { Component }       from '@angular/core';
import { QuestionService } from './question.service';

@Component({
  selector: 'my-app',
  template: `
    <div>
      <h2>Ng App</h2>
      <dynamic-form [questions]="questions"></dynamic-form>
    </div>

   
  `,
  providers:  [QuestionService]
})
export class AppComponent {
  questions: any[];
  posts: Posts[];

    constructor(service: QuestionService) {
    this.questions = service.getQuestions();
  }
}

interface Posts {
  id: number;
  title: string;
  body: string;
}
