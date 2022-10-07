import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-people-details',
  templateUrl: './people-details.page.html',
  styleUrls: ['./people-details.page.scss'],
})
export class PeopleDetailsPage implements OnInit {

  person: any;

  //constructor(private activatedRoute: ActivatedRoute, private http: HttpClient) { }
  constructor (private activatedRoute: ActivatedRoute, private api: ApiService) {}

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.api.getPerson(id).subscribe(res => {
    this.person = res;
    });
    // this.http.get(`https://swapi.dev/api/people/${id}`).subscribe(res => {
    // this.person = res;
    // });
  }

}
