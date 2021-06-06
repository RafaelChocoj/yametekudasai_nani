import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PrincipalComponent } from "./components/principal/principal.component";

import { PersonaComponent } from "./components/persona/persona.component";
import { PersonaListComponent } from "./components/persona-list/persona-list.component";
import { PersonaEditComponent } from "./components/persona-edit/persona-edit.component";

const routes: Routes = [{
  path: '',
  redirectTo: '/principal',
  pathMatch: 'full'
},
{
  path: 'principal',
  component: PrincipalComponent
},
{
  path: 'persona/add',
  component: PersonaComponent
}, 
{

  path: 'persona_edit/:iddpi',
  component: PersonaEditComponent
}, 
{
  path: 'personalist',
  component: PersonaListComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
