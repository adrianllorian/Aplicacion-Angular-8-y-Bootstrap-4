import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'miPipe'
})
export class MiPipePipe implements PipeTransform {

  transform(value: String, opcion:number): String {
    let salida:String = "";
    if (opcion == 1){
      
      var array = value.split(" ",value.length);
      for (let index = 0; index < array.length; index++) {
        salida +=array[index].charAt(0).toUpperCase() + array[index].slice(1) + " ";
      }
    
    }
  else if(opcion == 2){
   salida = value.charAt(0).toUpperCase() + value.slice(1);
    
  }
  return salida;
  }
}
