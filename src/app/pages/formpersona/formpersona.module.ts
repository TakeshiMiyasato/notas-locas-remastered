import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormpersonaPageRoutingModule } from './formpersona-routing.module';

import { FormpersonaPage } from './formpersona.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormpersonaPageRoutingModule
  ],
  declarations: [FormpersonaPage]
})
export class FormpersonaPageModule {}
