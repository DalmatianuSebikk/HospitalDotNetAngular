import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {DataService} from "../../../services/data.service";
import {Subscription} from "rxjs";
import {PacientiService} from "../../../services/pacienti.service";
import {MatDialog, MatDialogConfig, MatDialogModule} from "@angular/material/dialog";
import {AddEditPacientComponent} from "../../shared/add-edit-pacient/add-edit-pacient.component";

@Component({
  selector: 'app-pacienti',
  templateUrl: './pacienti.component.html',
  styleUrls: ['./pacienti.component.scss']
})
export class PacientiComponent implements OnInit {

  public subscription: Subscription | undefined;
  public loggedUser = { email: "", password: "" };
  public numeBoala = 'Boala urata';
  public displayedColumns = ["id", "numePacient", "CNP", "numarDeTelefon", 'profile', 'edit', 'delete' ];
  public pacienti = [];
  constructor(
    private router: Router,
    private dataService: DataService,
    private pacientiService: PacientiService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getPacienti();
    this.subscription = this.dataService.currentUser.subscribe(user => this.loggedUser = user);

  }

  ngOnDestroy()
  {

  }

  public logout() : void {
    localStorage.setItem('Role', 'Guest');
    this.router.navigate(['auth/login']);
  }

  public receiveMessage(event: any) : void {
    console.log(event);
  }

  public getPacienti() {
    this.pacientiService.getPacients().subscribe(
      (result) => {
        console.log(result);
        this.pacienti = result;
      },
      (error) => {
        console.error(error);
      }
    );
  }
  public deletePacient(id:number) {
    this.pacientiService.deletePacient(id).subscribe(
      (result) => {
        console.log("Am sters");
        this.getPacienti();
      },
      (error) => {
        console.error(error);
      }
    );
  }

  public openModal(pacient?:any): void {
    const data = {
      pacient
    };
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '550px';
    dialogConfig.height = '600px';
    dialogConfig.data = data;

    const dialogRef = this.dialog.open(AddEditPacientComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(
      (result) => {
        console.log(result);

        if(result) {
          this.pacienti = result;
        }
      },
      (error) => {

      }
    )
  }

  public addNewPacient(): void {
    this.openModal();
  }

  public editPacient(pacient:any): void {
    this.openModal(pacient);
  }

  public goToPacientProfile(id:number): void {
    this.router.navigate(['/pacienti', id]);
  }
}
