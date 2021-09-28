import{Component} from '@angular/core';
import{ActivatedRoute} from '@angular/router'


@Component({
    selector: 'ciclo',
    templateUrl: './ciclos.component.html'
})
export class Ciclos{
      private ciclos:any[]=[
        
{
        nombre:"Administracion y gestión",
        ciclos:[{id:"ADM", nombre:"Administracion"},
                {id:"ADM", nombre:"Comercializacion"}],
        foto:"../../../assets/img/spiderman.jpeg", 
        texto:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec."
},
{
        nombre:"Edificación y obra civil",
        ciclos:[{id:"EDC", nombre:"Materiales"},
                {id:"EDC", nombre:"Edificacion"}],
        foto:"../../../assets/img/superman.jpeg", 
        texto:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec."
},
{
        nombre:"Electricidad y Electronica",
        ciclos:[{id:"ELC", nombre:"Baja tension"},
                {id:"ELC", nombre:"Electrotecnia"}],
        foto:"../../../assets/img/hulk.jpeg", 
        texto:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec."
},
{
        nombre:"Formacion y Orientacion Laboral",
        ciclos:[{id:"FOL", nombre:"Empresas"},
                {id:"FOL", nombre:"Derechos del trabajador"}],
        foto:"../../../assets/img/batman.jpg", 
        texto:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec."
},

{       nombre:"Informatica",
        ciclos:[{id:"DAW", nombre:"Desarrollo de aplicaciones web"},
                {id:"DAW", nombre:"Desarrollo de aplicaciones multimedia"}],
        foto:"../../../assets/img/america.jpeg", 
        texto:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec."
        
}]

constructor(private route: ActivatedRoute ){}

id=parseInt(this.route.snapshot.paramMap.get('id'));


 departamento = this.ciclos[this.id];

 modulos = this.departamento.ciclos;
}
        




