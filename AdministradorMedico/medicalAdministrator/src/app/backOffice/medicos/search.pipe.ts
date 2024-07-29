import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultMedicos = [];
    for (const data of value) {
      const nombre = data.nombre.toLowerCase().indexOf(arg.toLowerCase()) > -1;
      const especialidad = data.especialidad?.toLowerCase().indexOf(arg.toLowerCase()) > -1;
      const matricula = data.matricula?.toString().toLowerCase().indexOf(arg.toLowerCase()) > -1;
      
      if (nombre || especialidad || matricula ) {
        resultMedicos.push(data);
      }
    }
    return resultMedicos;
  }

}
