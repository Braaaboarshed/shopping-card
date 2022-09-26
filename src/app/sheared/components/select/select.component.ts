import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
 @Input() data:any=[]
 @Input() title=''
@Output() selectedValue = new EventEmitter()
 
  constructor() { }

  ngOnInit(): void {
  }
  detectChanges(change :any){
    this.selectedValue.emit(change)
  }

}
