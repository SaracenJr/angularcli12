import { Pipe, PipeTransform } from '@angular/core';
import {ICard} from "../components/component-card/interfaces/card.interface";

@Pipe({
  name: 'fullname'
})
export class FullnamePipe implements PipeTransform {

  transform(
      lastName: any,
      firstName?: any,
      ...args: any): string {

    return lastName + ', ' + firstName;
  }

}
