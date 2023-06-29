import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';
import { AllstocksComponent } from './allstocks/allstocks.component';
import { SearchstockComponent } from './searchstock/searchstock.component';
import { FormsModule,ReactiveFormsModule }    from '@angular/forms';

import { NewsComponent } from './news/news.component';
import { DetailsComponent } from './details/details.component';
import { DatePipe } from '@angular/common';
//import { HomeComponent } from './home/home.component';
import { ChartComponent } from './chart/chart.component';
import { Chart, registerables } from 'chart.js';
import { CreateportfolioComponent } from './createportfolio/createportfolio.component';
import { ShowportfoliosComponent } from './showportfolios/showportfolios.component';

@NgModule({
  declarations: [
    AppComponent,
    AllstocksComponent,
    SearchstockComponent,
   
    NewsComponent,
     DetailsComponent,
       // HomeComponent,
      
         ChartComponent,
       CreateportfolioComponent,
       ShowportfoliosComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgChartsModule,
    HttpClientModule,
    FormsModule,
    NgChartsModule,
    ReactiveFormsModule
  
    
    ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
