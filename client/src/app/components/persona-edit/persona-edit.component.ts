import { Component, OnInit } from '@angular/core';

/*agreago ini*/
import { CatalogoService } from '../../services/catalogo.service';
import { Router, ActivatedRoute } from '@angular/router';
/*agreago fin*/


@Component({
  selector: 'app-persona-edit',
  templateUrl: './persona-edit.component.html',
  styleUrls: ['./persona-edit.component.css']
})
export class PersonaEditComponent implements OnInit {

  percov_ob: any = {
    dpi: "",
    age: "",
    locations: "",
    fullname: "",
    vaccine_type: ""
  };

  idppi_ac = "";
  constructor(private catalogService: CatalogoService, private activatedRoute: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    params.iddpi

    this.idppi_ac = params.iddpi

    this.getMyPersonaCovid(this.idppi_ac)
  }

  getMyPersonaCovid(idpai_ac:string){
    this.catalogService.getMyPersonaCovid(idpai_ac)
      .subscribe(
        (res:any)=> {
          console.log(res.data)
        this.percov_ob = res.data[0];
        },
        err => {
          console.error(err)
          //this.modificar = false
          alert(err.error);
        }
      );
  }


  ActualizarPersonaCovid() { 

    this.catalogService.ActualizarPersonaCovid(this.percov_ob.dpi, this.percov_ob.age, this.percov_ob.locations,
      this.percov_ob.fullname, this.percov_ob.vaccine_type)
  .subscribe(
    res => {
      console.log(res);
      alert(res);
      location.reload();
    },
    err => { console.error(err)
      alert(err.Error)
    }
  )
  }

}
