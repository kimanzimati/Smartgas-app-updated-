import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ReportStolenItemPage } from './report-stolen-item.page';

const routes: Routes = [
  {
    path: '',
    component: ReportStolenItemPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ReportStolenItemPage]
})
export class ReportStolenItemPageModule {}
