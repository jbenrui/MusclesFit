import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(valor: any,texto: string): any {
    console.log(valor)
    return valor;
  }

}
