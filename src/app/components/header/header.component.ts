import {Component} from '@angular/core';

@Component({
selector: 'header',
templateUrl: './header.component.html',
styleUrls: ['./header.component.css']
})

export class Header{
menu:any[]= [
    {nombre:"Portada", enlace:"/"},
    {nombre: "Centro", enlace:"/buscar"}, 
    {nombre:"Departamentos", enlace:"/DEPARTAMENTOS"}, 
    {nombre:"Profesores", enlace:"/profesores"} 
];
}
