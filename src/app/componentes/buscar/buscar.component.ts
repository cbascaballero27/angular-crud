import { Component, OnInit } from '@angular/core';
import { PerroObj } from '../../interfaz/perro';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {
  buscar: PerroObj [];

  constructor() { 
    this.buscar =[];
  }

  ngOnInit(): void {
    debugger;
   const records = localStorage.getItem('buscar');
   if (records !== null){
    this.buscar = JSON.parse(records)  ;
   }
      
  }

  eliminar(id:any ){
    debugger;
    const oldRecords = localStorage.getItem('buscar');
    if(oldRecords !== null){
      const buscar = JSON.parse(oldRecords);
      buscar.splice(buscar.findIndex((a:any)=>a.Perroid == id),1)
   
      localStorage.setItem('buscar',JSON.stringify(buscar));
    }
    const records = localStorage.getItem('buscar');
    if (records !== null){
     this.buscar = JSON.parse(records)  ;
    }
  }
}



