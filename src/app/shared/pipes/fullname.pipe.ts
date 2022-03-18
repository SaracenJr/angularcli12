import { Pipe, PipeTransform } from '@angular/core';
import {ICard} from "../components/component-card/interfaces/card.interface";

@Pipe({
  name: 'fullname'
})
export class FullnamePipe implements PipeTransform {

  transform(
      name: string,
      ...args: any): string {

    return name.split(', ')[1] + ' ' + name.split(', ')[0];
  }

}
