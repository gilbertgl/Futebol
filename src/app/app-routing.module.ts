import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetLocalComponent } from './local/get-local/get-local.component';
import { GetAllLocalComponent } from './local/getAll-local/getAll-local.component';
import { SetLocalComponent } from './local/set-local/set-local.component';

const routes: Routes = [
  {
    path: "",
    component: GetLocalComponent
  },
  {
    path: "cadastro",
    component: SetLocalComponent
  },
  {
    path: "editar",
    component: GetAllLocalComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
