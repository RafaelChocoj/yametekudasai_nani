import { Component, OnInit } from '@angular/core';

/*agreago ini*/
import { CatalogoService } from '../../services/catalogo.service';
import { Router } from '@angular/router';
/*agreago fin*/

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  vaccine_type:string = "";
  fullname:string = "";
  locations:string = "";
  age:string = "";
  dpi:string = "";
  constructor(private catalogService: CatalogoService, private router: Router) { }

  ngOnInit(): void {
  }

  savePersonaCovid() {
 
        this.catalogService.savePersonaCovid(this.dpi, this.age, this.locations, this.fullname, this.vaccine_type)
        .subscribe(
          res => {
            console.log(res);
            alert(res);
            this.router.navigate(['/personalist']);
          },
          err => { console.error(err)
            alert(err.Error)
          }
        )
  }

}
