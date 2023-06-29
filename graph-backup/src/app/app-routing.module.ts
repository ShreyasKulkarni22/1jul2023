import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllstocksComponent } from './allstocks/allstocks.component';
import { SearchstockComponent } from './searchstock/searchstock.component';
import { NewsComponent } from './news/news.component';
import { DetailsComponent } from './details/details.component';
import { ChartComponent } from './chart/chart.component';
import { CreateportfolioComponent } from './createportfolio/createportfolio.component';
import { ShowportfoliosComponent } from './showportfolios/showportfolios.component';
//import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path:'allstocks',
    component: AllstocksComponent
  },
  {
    path:'searchstocks',
    component: SearchstockComponent
  },
  {
    path:'news',
    component: NewsComponent
  },
  {
    path:'details',
    component: DetailsComponent
  },
  {
    path:'chart',
    component: ChartComponent
  },
  {
    path:'createportfolio',
    component:CreateportfolioComponent
  },
  {
    path:'yourportfolios',
    component:ShowportfoliosComponent
  }
 
 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
