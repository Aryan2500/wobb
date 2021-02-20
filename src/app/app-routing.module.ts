import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompaignComponent } from './compaign/compaign.component';


const routes: Routes = [
  {path:'compaign' , component:CompaignComponent},
  {path:'discovery' , component:CompaignComponent},
  {path:'pixel' , component:CompaignComponent},
  {path:'profile' , component:CompaignComponent},
  {path:'live-support' , component:CompaignComponent},
  {path:'logout' , component:CompaignComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
