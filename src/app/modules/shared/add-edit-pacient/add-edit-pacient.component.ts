import {Component, Inject, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup} from "@angular/forms";
import {PacientiService} from "../../../services/pacienti.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-add-edit-pacient',
  templateUrl: './add-edit-pacient.component.html',
  styleUrls: ['./add-edit-pacient.component.scss']
})
export class AddEditPacientComponent implements OnInit {
  public pacientForm: FormGroup = new FormGroup(
    {
      id: new FormControl(0),
      numePacient: new FormControl(''),
      cnp: new FormControl(''),
      numarDeTelefon: new FormControl(''),
      boalaId: new FormControl(0)
    }
  );
  public title: any;


  constructor(
    @Inject(MAT_DIALOG_DATA) public data:any,
    private pacientsService: PacientiService,
    public dialogRef: MatDialogRef<AddEditPacientComponent>
  ) {
    console.log(this.data);
    if(data.pacient) {
      this.title = 'Edit Pacient';
      this.pacientForm.patchValue(this.data.pacient);
    }
    else {
      this.title = 'Add Pacient';
    }
  }

  //getters

  get numePacient(): AbstractControl {
    return this.pacientForm.get('numePacient') as AbstractControl;
  }
  get cnp(): AbstractControl {
    return this.pacientForm.get('cnp') as AbstractControl;
  }
  get numarDeTelefon(): AbstractControl {
    return this.pacientForm.get('numarDeTelefon') as AbstractControl;
  }
  get codBoala(): AbstractControl {
    return this.pacientForm.get('boalaId') as AbstractControl;
  }


  ngOnInit(): void {
  }

  public addPacient(): void {
     this.pacientsService.addPacient(this.pacientForm.value).subscribe(
       (result) => {
         console.log(result);
         this.dialogRef.close();
       },
       (error) => {
         console.error(error);
       }
     );
  }

  public editPacient():void {
    this.pacientsService.editPacient(this.pacientForm.value).subscribe(
      (result) => {
        console.log(result);
        this.dialogRef.close();
      },
      (error) => {
        console.error(error);
      }
    );

  }
}
