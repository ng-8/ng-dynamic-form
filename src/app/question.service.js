"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var question_dropdown_1 = require("./question-dropdown");
var question_textbox_1 = require("./question-textbox");
var QuestionService = (function () {
    function QuestionService() {
    }
    // Todo: get from a remote source of question metadata
    // Todo: make asynchronous
    QuestionService.prototype.getQuestions = function () {
        var questions = [
            new question_dropdown_1.DropdownQuestion({
                key: 'brave',
                label: 'Bravery Rating - Section A',
                options: [
                    { key: 'solid', value: 'Solid' },
                    { key: 'great', value: 'Great' },
                    { key: 'good', value: 'Good' },
                    { key: 'unproven', value: 'Unproven' }
                ],
                order: 3,
                section: 'section A'
            }),
            new question_textbox_1.TextboxQuestion({
                key: 'firstName',
                label: 'First name - Section A',
                value: 'Bombasto',
                required: true,
                order: 1,
                section: 'section A'
            }),
            new question_textbox_1.TextboxQuestion({
                key: 'emailAddress',
                label: 'Email - Section A',
                type: 'email',
                order: 2,
                section: 'section A'
            }),
            new question_dropdown_1.DropdownQuestion({
                key: 'braveB',
                label: 'Bravery RatingB - Section B',
                options: [
                    { key: 'solid', value: 'Solid' },
                    { key: 'great', value: 'Great' },
                    { key: 'good', value: 'Good' },
                    { key: 'unproven', value: 'Unproven' }
                ],
                order: 1,
                section: 'section B'
            }),
        ];
        return questions.sort(function (a, b) { return a.order - b.order; });
    };
    return QuestionService;
}());
QuestionService = __decorate([
    core_1.Injectable()
], QuestionService);
exports.QuestionService = QuestionService;
//# sourceMappingURL=question.service.js.map