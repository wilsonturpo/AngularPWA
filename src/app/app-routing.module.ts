import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePersonasComponent } from './components/create-personas/create-personas.component';
import { ListPersonasComponent } from './components/list-personas/list-personas.component';

const routes: Routes = [
  {path: '', redirectTo: 'list-personas', pathMatch: 'full'},
  {path: 'list-personas', component: ListPersonasComponent},
  {path: 'create-persona', component: CreatePersonasComponent},
  {path: '**', redirectTo: 'list-personas', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
