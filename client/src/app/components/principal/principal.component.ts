import { Component, OnInit } from '@angular/core';

/*agreago ini*/
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
/*agreago fin*/

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  /*agreago ini*/
  displayedColumns: string[] = ['Carnet', 'Apellidos', 'Nombres', 'Correo', 'github'];
  dataSource = new MatTableDataSource();
  /*agreago fin*/
  constructor() { }

  ngOnInit(): void {
    this.dataSource.data = TodosAlumnos;
  }

}

export interface Alumnos {
  Carnet: string;
  Apellidos: string;
  Nombres: string;
  Correo: string;
  github: string;
}

const TodosAlumnos: Alumnos[] = [
  {Carnet: '201314826', Apellidos: 'Chocoj Xinico', Nombres: 'Rafael Angel', Correo: 'rafaelcliveguitar', github: 'RafaelChocoj'},
  {Carnet: '123123', Apellidos: 'Rambo', Nombres: 'John', Correo: 'jonrambo@gmail.com', github: 'ramb1'},
];
