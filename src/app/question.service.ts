import { Injectable }       from '@angular/core';

import { DropdownQuestion } from './question-dropdown';
import { QuestionBase }     from './question-base';
import { TextboxQuestion }  from './question-textbox';

@Injectable()
export class QuestionService {

  // Todo: get from a remote source of question metadata
  // Todo: make asynchronous
  getQuestions() {

    let questions: QuestionBase<any>[] = [

      new DropdownQuestion({
        key: 'brave',
        label: 'Bravery Rating - Section A',
        options: [
          {key: 'solid',  value: 'Solid'},
          {key: 'great',  value: 'Great'},
          {key: 'good',   value: 'Good'},
          {key: 'unproven', value: 'Unproven'}
        ],
        order: 3,
        section: 'section A'
      }),

      new TextboxQuestion({
        key: 'firstName',
        label: 'First name - Section A',
        value: 'Bombasto',
        required: true,
        order: 1,
        section: 'section A'
      }),

      new TextboxQuestion({
        key: 'emailAddress',
        label: 'Email - Section A',
        type: 'email',
        order: 2,
        section: 'section A'
      }),

      new DropdownQuestion({
        key: 'braveB',
        label: 'Bravery RatingB - Section B',
        options: [
          {key: 'solid',  value: 'Solid'},
          {key: 'great',  value: 'Great'},
          {key: 'good',   value: 'Good'},
          {key: 'unproven', value: 'Unproven'}
        ],
        order: 1,
        section: 'section B'
      }),

      /*
      new TextboxQuestion({
        key:'fileInput',
        label:'File',
        type: 'file',
        required: true,
        order: 2
      }),
      new CheckboxQuestion({
        key:'agree',
        label:'I Agree',
        type: 'checkbox',
        required: false,
        order: 3
      })
      */
    ];

    return questions.sort((a, b) => a.order - b.order);
  }

  
}
