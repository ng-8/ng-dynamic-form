import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sectionGrouping',
  pure: false
})

export class SectionGrouping implements PipeTransform {

  transform(items: Array<any>, conditions: {[field: string]: any}): Array<any> {
    if (items !== undefined) {
      return items.filter(item => {
        for (let field in conditions) {
          if (item[field] !== conditions[field]) {
            return false;
          }
        }
        return true;
      });
    }
  }
}