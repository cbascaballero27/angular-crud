import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Routes, RouterModule } from '@angular/router';
import { PerroObj } from '../../interfaz/perro';
@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  PerroObj : PerroObj ;
  constructor( private route:ActivatedRoute) { 
    this.PerroObj = new PerroObj();
    this.route.params.subscribe((res)=>{
      this.PerroObj.Perroid = res['id']
    })
  }

  ngOnInit(): void {
    const oldRecords = localStorage.getItem('buscar');
    if(oldRecords !== null){
      const buscar = JSON.parse(oldRecords);
      const currentPerro = buscar.find((m:any) => m.Perroid == this.PerroObj.Perroid);
      if(currentPerro !== undefined ){
        this.PerroObj.PerroNombre = currentPerro.PerroNombre;
        this.PerroObj.PerroFecha = currentPerro.PerroFecha;
       
      }
    }
  }

  
  editarperro(){
    debugger;
    const oldRecords = localStorage.getItem('buscar');
    if(oldRecords !== null){
      const buscar = JSON.parse(oldRecords);
      buscar.splice(buscar.findIndex((b:any)=>b.Perroid == this.PerroObj.Perroid),1);
      buscar.push(this.PerroObj);
      localStorage.setItem('buscar',JSON.stringify(buscar));
    }
  
  }
}
