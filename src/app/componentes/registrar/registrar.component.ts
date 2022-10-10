import { Component, OnInit } from '@angular/core';
import { PerroObj } from '../../interfaz/perro';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

 
   PerroObj : PerroObj ;
  constructor( ) { 
    this.PerroObj = new PerroObj();
  }

  ngOnInit(): void {
   
  }

  getPerroid(){
    debugger;
    const oldRecords = localStorage.getItem('buscar');
    if(oldRecords !== null){
      const buscar = JSON.parse(oldRecords);
      return buscar.length + 1;
    }else {
      return 1
    }
  }
  guardarperro(){
    debugger;
    const ultimoid = this.getPerroid();
    this.PerroObj.Perroid = ultimoid;
    const oldRecords = localStorage.getItem('buscar');
    if(oldRecords !== null){
      const buscar = JSON.parse(oldRecords);
      buscar.push(this.PerroObj);
      localStorage.setItem('buscar',JSON.stringify(buscar));
    }else{
      const perroArr = [];
      perroArr.push(this.PerroObj);
      localStorage.setItem('buscar',JSON.stringify(perroArr));
    }
  }
}
