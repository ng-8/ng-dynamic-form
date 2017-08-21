"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SectionGrouping = (function () {
    function SectionGrouping() {
    }
    SectionGrouping.prototype.transform = function (items, conditions) {
        if (items !== undefined) {
            return items.filter(function (item) {
                for (var field in conditions) {
                    if (item[field] !== conditions[field]) {
                        return false;
                    }
                }
                return true;
            });
        }
    };
    return SectionGrouping;
}());
SectionGrouping = __decorate([
    core_1.Pipe({
        name: 'sectionGrouping',
        pure: false
    })
], SectionGrouping);
exports.SectionGrouping = SectionGrouping;
//# sourceMappingURL=section.pipe.js.map