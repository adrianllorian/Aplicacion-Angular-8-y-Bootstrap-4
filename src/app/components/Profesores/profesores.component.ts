import{Component} from '@angular/core';
import{ProfesoresBean} from '../../clases/profesores.model';
@Component({
    selector:'profesores',
    templateUrl:'./profesores.component.html'
})

export class Profesores{
    
    profesora:ProfesoresBean=new ProfesoresBean(0, 'Manolo', 1200,new Date(1988, 5, 23));
    


    array:any =[
    new ProfesoresBean(0, 'Manolo', 1200,new Date(1988, 5, 23)),
    new ProfesoresBean(1, 'Pedro', 1300,new Date(1974, 7, 3)),
    new ProfesoresBean(2, 'Maria', 1400,new Date(1967, 9, 10)),
    new ProfesoresBean(3, 'Pedro', 1100,new Date(1994, 7, 3))
    ];
    
    titulo="Profesores";

    cadenaPipe:string="hola a todos";

    

}
