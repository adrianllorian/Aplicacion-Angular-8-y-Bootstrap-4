import{Component} from '@angular/core';
import {Router} from '@angular/router';
import {Depart} from '../../clases/mock/mock.component';
import { fromEvent } from 'rxjs';

@Component({
    selector:'departamentos',
    templateUrl:'./depart.component.html'
})

export class Departamentos{
    titulo='Componente Departamentos';
    departamento = Depart;
    

    constructor(private router:Router){}
obtenerDatos(array){
this.router.navigate(["/DEPARTAMENTOS/ciclosFP", array.id]);
}

}