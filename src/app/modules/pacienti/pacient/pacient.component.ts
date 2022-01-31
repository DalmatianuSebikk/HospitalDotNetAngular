import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {PacientiService} from "../../../services/pacienti.service";

@Component({
  selector: 'app-pacient',
  templateUrl: './pacient.component.html',
  styleUrls: ['./pacient.component.scss']
})
export class PacientComponent implements OnInit {

  public subscription: Subscription | undefined;
  public id: any | undefined;
  public pacient: any;



  constructor(
    private route: ActivatedRoute,
    private pacientiService: PacientiService,
  ) { }

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe(
      params => {
        this.id = +params['id'];
        if(this.id) {
          this.getPacient();
        }
      }
    );
  }

  public getPacient(): void {
    this.pacientiService.getPacientById(this.id).subscribe(
      (result) => {
        console.log(result);
        this.pacient = result;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
