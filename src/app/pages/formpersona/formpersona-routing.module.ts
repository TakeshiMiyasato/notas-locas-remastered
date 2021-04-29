import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormpersonaPage } from './formpersona.page';

const routes: Routes = [
  {
    path: '',
    component: FormpersonaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormpersonaPageRoutingModule {}
