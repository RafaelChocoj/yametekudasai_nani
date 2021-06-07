import { Injectable } from '@angular/core';

/*agreago ini*/
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Router } from '@angular/router';
/*agreago fin*/

@Injectable({
  providedIn: 'root'
})
export class CatalogoService {

  /*agreago ini*/
  //private URL = 'http://localhost:3000';
  private URL = 'http://18.117.146.15:5000';
  /*agreago fin*/

  /*agreago ini*/
  constructor(private http: HttpClient, private router: Router) { }

  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  })

  /*read ini*/
  getPersonasCovid() {
    //const url = this.URL + '/cat/getPersonas'; //prueba
    const url = this.URL + '/'; //este
    return this.http.get(url);
  }
  /*read fin*/

  /*create ini*/
  savePersonaCovid(dpi:string, age:string, locations:string, fullname:string, vaccine_type:string) {

    //var url = this.URL + '/cat/add' //prueba
    var url = this.URL + '/add' //este
    return this.http.post(
      url,
      {
        "dpi": dpi,
        "age": age,
        "locations": locations,
        "fullname": fullname,
        "vaccine_type": vaccine_type
        
      },
      { headers: this.headers }
    ).pipe(map(data => data));
  }
  /*create fin*/

  /*update ini*/
  getMyPersonaCovid(iddpi:string) {
    //const url = this.URL + '/cat/getitem/'+iddpi; //prueba
    const url = this.URL + '/getitem/'+iddpi; //este
    return this.http.get(url);
  }

  ActualizarPersonaCovid(dpi:string, age:string, locations:string, fullname:string, vaccine_type:string) {

    //var url = this.URL + '/cat/update' //prueba
    var url = this.URL + '/update' //este
    return this.http.put(
      url,
      {
        "dpi": dpi,
        "age": age,
        "locations": locations,
        "fullname": fullname,
        "vaccine_type": vaccine_type
        
      },
      { headers: this.headers }
    ).pipe(map(data => data));
  }

  /*update fin*/

  /*delete ini*/
  eliminarPersonaCovid(iddpi: string) {
    //const url = this.URL + '/cat/delete/' + iddpi; //prueba
    const url = this.URL + '/delete/' + iddpi; //este
    return this.http.delete(url).pipe(map(data => data));
  }
  /*delete fin*/


  /*agreago fin*/
}
