import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexModule } from './pages/index/index.module';
import { CardComponent } from './pages/portfolio/card/card.component';
import { TitleComponent } from './pages/index/title/title.component';

const routes: Routes = [
  {path:'', component: TitleComponent, pathMatch: 'full'},
  {path:'portfolio', component: CardComponent, children: [
    {path:':id', component: CardComponent},
    {path:':id/:token', component: CardComponent},
  ]},
  {path:'**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }