import { Component } from '@angular/core';

import {MenuItem} from 'primeng/primeng';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})




export class AppComponent {
  title = 'Bien!';
  // para el datetimepicker
  value: Date;
  color: string;

  //para el carrusel
  Tecnologias: any[];
  msgs: any[];

  // para las imagenes
  images: any[];
  items: MenuItem[];



   availableCars: any[];
    
    selectedCars: any[];
    
    draggedCar: any;

    Mostrar: boolean = false;

    mostrarDialogo() {
        this.Mostrar = true;
    }

 constructor() {
        this.msgs = [];
        this.Tecnologias = [
            {tecnologia: 'telefonia', nombre: 'Red 2G', imagen: '2g', tipo: 'comunicacion'},
            {tecnologia: 'telefonia', nombre: 'Red 3G', imagen: '3g', tipo: 'comunicacion'},
            {tecnologia: 'telefonia', nombre: 'Red 4G', imagen: '4g', tipo: 'comunicacion'},
            {tecnologia: 'sistema operativo', nombre: 'S.O. firefox', imagen: 'firefox', tipo: 'S.O.'},
            {tecnologia: 'sistema operativo', nombre:'S.O. ios', imagen: 'ios', tipo: 'S.O.'},
            {tecnologia: 'sistema operativo', nombre: 'S.O. tizen', imagen: 'tizen', tipo: 'S.O.'},
            {tecnologia: 'sistema operativo', nombre: 'S.O. Windows 10', imagen: 'w8', tipo: 'S.O.'}
        ];
     }

    SeleccionDeElemento(elemento: any) {
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'elemento seleccionado', detail: 'Tecnologia:' + elemento.tecnologia +" " +elemento.nombre});
    }
    ngOnInit() {

       this.images = [];
        this.images.push({source:'assets/fotos/foto1.jpg', alt:'hoy examen', title:'Alegria!!!'});
        this.images.push({source:'assets/fotos/foto2.jpg', alt:'estudiando un dia antes', title:'a Full!!!'});
        this.images.push({source:'assets/fotos/foto3.jpg', alt:'Reglas claras ...', title:'estricto'});
        this.images.push({source:'assets/fotos/foto4.jpg', alt:'Tiempos añorados', title:'Buen teclado'});
         this.images.push({source:'assets/fotos/foto5.jpg', alt:'Auchan', title:'siglo pasado'});
        this.items = [
            {
                label: 'File',
                icon: 'fa-file-o',
                items: [{
                        label: 'New', 
                        icon: 'fa-plus',
                        items: [
                            {label: 'Project'},
                            {label: 'Other'},
                        ]
                    },
                    {label: 'Open'},
                    {label: 'Quit'}
                ]
            },
            {
                label: 'Edit',
                icon: 'fa-edit',
                items: [
                    {label: 'Undo', icon: 'fa-mail-forward'},
                    {label: 'Redo', icon: 'fa-mail-reply'}
                ]
            },
            {
                label: 'Help',
                icon: 'fa-question',
                items: [
                    {
                        label: 'Contents'
                    },
                    {
                        label: 'Search', 
                        icon: 'fa-search', 
                        items: [
                            {
                                label: 'Text', 
                                items: [
                                    {
                                        label: 'Workspace'
                                    }
                                ]
                            },
                            {
                                label: 'File'
                            }
                    ]}
                ]
            },
            {
                label: 'Actions',
                icon: 'fa-gear',
                items: [
                    {
                        label: 'Edit',
                        icon: 'fa-refresh',
                        items: [
                            {label: 'Save', icon: 'fa-save'},
                            {label: 'Update', icon: 'fa-save'},
                        ]
                    },
                    {
                        label: 'Other',
                        icon: 'fa-phone',
                        items: [
                            {label: 'Delete', icon: 'fa-minus'}
                        ]
                    }
                ]
            }
        ];
    }
}

