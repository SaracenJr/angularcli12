import { Pipe, PipeTransform } from '@angular/core';
import {ICard} from "../components/component-card/interfaces/card.interface";

@Pipe({
  name: 'fullname'
})
export class FullnamePipe implements PipeTransform {

  transform(
      card: ICard,
      ...args: any): string {

    return card.firstName +', '+ card.lastName;
  }

}
