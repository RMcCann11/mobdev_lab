import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.page.html',
  styleUrls: ['./film-details.page.scss'],
})
export class FilmDetailsPage implements OnInit {

  //filmId = null;
  film : any;

  // constructor(private activatedRoute: ActivatedRoute, private http: HttpClient) { }
  constructor(private activatedRoute: ActivatedRoute, private api: ApiService) { }

  ngOnInit() {
    //this.filmId = this.activatedRoute.snapshot.paramMap.get('id');
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    // this.http.get(`https://swapi.dev/api/films/${id}`).subscribe((res) => {
    //   this.film = res;
    // });
    this.api.getFilm(id).subscribe((res) => {
      this.film = res;
    });
  }

}
