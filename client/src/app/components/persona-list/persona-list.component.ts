import { Component, OnInit } from '@angular/core';

/*agreago ini*/
import { CatalogoService } from '../../services/catalogo.service';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
/*agreago fin*/

@Component({
  selector: 'app-persona-list',
  templateUrl: './persona-list.component.html',
  styleUrls: ['./persona-list.component.css']
})
export class PersonaListComponent implements OnInit {

  /*agreago ini*/
  displayedColumns: string[] = ['dpi', 'age', 'locations', 'fullname', 'vaccine_type', 'actionsboton'];
  dataSource = new MatTableDataSource();
  /*agreago fin*/
  constructor(private catService: CatalogoService, private router: Router) { }

  /*read ini*/
  personacov_list: any = [];
  /*read fin*/
  
  ngOnInit(): void {
    /*read ini*/
    this.getPersonasCovid();
    /*read fin*/
  }

  /*read ini*/
  getPersonasCovid() { 
    this.catService.getPersonasCovid()
      .subscribe(
        res => {
          this.personacov_list = res;
          this.dataSource.data = this.personacov_list;
          console.log(this.personacov_list);
        },
        err => console.error(err.error)
      );
  }
  /*read fin*/

  /*create ini*/
  addPersonaCovid() {
    this.router.navigate(['/persona/add']);
  }
  /*create fin*/

  /*delete ini*/
  eliminarPersonaCovid(iddpi: string, per:string) {
    var mensaje = confirm("¿Desea Eliminar Persona "+per +"?");
    //Detectamos si el usuario acepto el mensaje
    if (mensaje) {
    } else {
      return;
    }

    this.catService.eliminarPersonaCovid(iddpi)
      .subscribe(
        res => {
          //console.log(res);
          alert(res)
          location.reload()
        },
        err => {console.error(err)
          alert(err.error)
        }
      )
  }
  /*delete fin*/

}
