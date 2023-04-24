import { Component, OnInit } from '@angular/core';
import { Serie } from './serie';
import {SeriesService} from './series.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  series: Array<Serie> = [];

  constructor(private seriesService: SeriesService) { }

  getSeries(){
   this.seriesService.getSeries().subscribe(
    series => {this.series = series;});
  }

   seasonsAverage = () : number => {

    let totalSeasons:number = 0;
    let numOfSeries:number = this.series.length;

    this.series.forEach(serie => {
        totalSeasons += serie.seasons;
    });

    return totalSeasons/numOfSeries;}

  ngOnInit() {
    this.getSeries();
  }

}
