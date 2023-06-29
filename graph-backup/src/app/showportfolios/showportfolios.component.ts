import { Component, OnInit } from '@angular/core';
import { portfolio } from '../Models/portfolio';
import { HttpClient } from '@angular/common/http';
import { PortfolioService } from '../portfolio.service';

@Component({
  selector: 'app-showportfolios',
  templateUrl: './showportfolios.component.html',
  styleUrls: ['./showportfolios.component.css']
})
export class ShowportfoliosComponent implements OnInit{
    portfolios:Array<portfolio>=[]
    constructor(private portfolioservice:PortfolioService){

    }
    ngOnInit(): void {
      this.getPortfolios()
    }

    getPortfolios(){
      this.portfolioservice.getPortfolio().subscribe(res=>{
        this.portfolios=res
      })
    }
}
