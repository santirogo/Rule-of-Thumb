import {Component, ElementRef, HostListener, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'zem-custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.scss']
})
export class CustomSelectComponent implements OnInit {

  @Input() options: string[];
  @Output() onChange = new EventEmitter<number>();
  public selected: string;
  public showOptions = false;

  constructor(private eRef: ElementRef) { }

  ngOnInit(): void {
    this.selected = this.options[0];
  }

  public changeOptionsVisibility(): void {
    this.showOptions = !this.showOptions;
  }

  public changeValue(position: number): void {
    this.changeOptionsVisibility();
    this.selected = this.options[position];
    this.onChange.emit(position);
  }

  @HostListener('document:click', ['$event'])
  public onClick(): void {
    if (!this.eRef.nativeElement.contains(event.target) && this.showOptions) {
      this.changeOptionsVisibility();
    }
  }
}
