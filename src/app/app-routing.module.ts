import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AccordionComponent } from './accordion/accordion.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    title: 'CFR 1907 Cluj',
    children: [
      {path: '', component: AccordionComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
