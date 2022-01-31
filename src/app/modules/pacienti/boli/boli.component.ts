import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-boli',
  templateUrl: './boli.component.html',
  styleUrls: ['./boli.component.scss']
})
export class BoliComponent implements OnInit {

  @Input() numeleBolii: string | undefined;
  @Output() confirmareBoala = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
    console.log(this.numeleBolii);
  }

  public emitData() {
    this.confirmareBoala.emit('Mesaj de la copil');
  }
}
