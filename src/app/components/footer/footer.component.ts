import{Component} from '@angular/core';

@Component({
    selector:'footer',
    templateUrl:'./footer.component.html'
})

export class Footer{
    menu:string[]= ["Portada", "Centro", "Departamentos", "Alumnado y familias" ]
}