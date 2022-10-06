import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-films',
  templateUrl: './films.page.html',
  styleUrls: ['./films.page.scss'],
})
export class FilmsPage implements OnInit {

  constructor(private navController: NavController, private router: Router, private http: HttpClient) { }

  films: Observable<any>;
  
  ngOnInit() {
    this.films = this.http.get('https://swapi.dev/api/films');
    // this.films.subscribe((data) => {
    // console.log('my data: ', data);
    // });
  }

  // openDetails() {
  //   // Both of these would work!
  //   // But the standard Router is recommended.
  //   // this.navController.navigateForward(`/tabs/films/42`);
  //   this.router.navigateByUrl(`/tabs/films/42`);
  // }
 
  // goToPlanets() {
  //   this.navController.navigateRoot(`/tabs/planets`)
  // }

  openDetails(film) {
    let split = film.url.split('/');
    let filmId = split[split.length-2];
    this.router.navigateByUrl(`/tabs/films/${filmId}`);
    }

}
