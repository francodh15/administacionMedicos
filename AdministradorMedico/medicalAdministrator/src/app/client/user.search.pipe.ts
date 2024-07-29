import { Pipe, PipeTransform } from '@angular/core';
import { Person } from '../interface/person';

@Pipe({
  name: 'searchClient'
})
export class userSearchPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultMedicos = [];
    for (const data of value) {
      const nombre = data.nombre.toLowerCase().indexOf(arg.toLowerCase()) > -1;
      const dni = data.dni?.toString().toLowerCase().indexOf(arg.toLowerCase()) > -1;
      
      if (nombre || dni ) {
        resultMedicos.push(data);
      }
    }
    return resultMedicos;
  }

}
