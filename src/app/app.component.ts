import { Component, OnInit } from '@angular/core';
import { BeerService } from './beer.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent implements OnInit {
  beers: any[] = [];
  filteredBeers: any[] = [];
  searchTerm: string = '';

  constructor(private beerService: BeerService) {}

  ngOnInit(): void {
    this.beerService.getBeers().subscribe(
      (data: any[]) => {
        this.beers = data;
        this.filterBeers();
      },
    );
  }

  filterBeers(): void {
    this.filteredBeers = this.beers.filter(beer => {
      return beer.name.toLowerCase().includes(this.searchTerm.toLowerCase());
    });
  }

  search(): void {
    this.filterBeers();
  }
}