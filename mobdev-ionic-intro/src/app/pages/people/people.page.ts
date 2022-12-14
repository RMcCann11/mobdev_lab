import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
//import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.page.html',
  styleUrls: ['./people.page.scss'],
})
export class PeoplePage implements OnInit {

  people : Observable<any>;

  //constructor(private navController: NavController, private router: Router, private http: HttpClient) { }
  constructor(private navController: NavController, private router: Router, private api : ApiService) { }
  
  ngOnInit() {

    this.people = this.api.getPeople();

    //this.people = this.http.get('https://swapi.dev/api/people');
    // this.people.subscribe(data => {
    // console.log('my data: ', data);
    // });
  }

  openDetails(person) {
    let split = person.url.split('/');
    let personId = split[split.length-2];
    this.router.navigateByUrl(`/tabs/people/${personId}`);
    }

}
