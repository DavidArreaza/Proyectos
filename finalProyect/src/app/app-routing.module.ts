import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import { MenulateralComponent } from './menulateral/menulateral.component';
import { ContentmainComponent } from './contentmain/contentmain.component';

const routes: Routes = [
  {path: '', component: ContentmainComponent},
 // {path: 'sidebar', component: MenulateralComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
