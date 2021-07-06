import {Component, Input, OnInit} from '@angular/core';
import {AppareilService} from "../appareil.service"

@Component({
  selector   : 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls  : ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  @Input()
  appareilName!: string;

  @Input()
  appareilStatus!: string

  @Input()
  index!: number

  @Input()
  id!: number

  constructor(private appareilService: AppareilService) {
  }

  ngOnInit(): void {
  }

  getStatus() {
    return this.appareilStatus
  }

  getColor() {
    return this.appareilStatus === "allumé" ? "green" : "red"
  }

  onSwitch(): void {
    if (this.appareilStatus == "allumé")
      this.appareilService.switchOffOne(this.index)
    else
      this.appareilService.switchOnOne(this.index)
  }

}
