import { CommonModule, Location } from '@angular/common';
import { AfterViewChecked, ChangeDetectorRef, Component, ElementRef, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent implements OnInit {


  myFormSearch!: FormGroup;

    // start search
    @Output() onDebounce: EventEmitter<string> = new EventEmitter();
    @Output() onEnter   : EventEmitter<string> = new EventEmitter();
    debouncer: Subject<string> = new Subject();
    itemSearch : string = '';
    mostrarSugerencias: boolean = false;
    spinner : boolean = false;
    labelNoFound : boolean = false;
    // end search
    
    phone : boolean = false;
  maxWidthPercent: number = 100;

  searchs : any = ['campana de cocina', 'papel de cocina', 'rollo de cocina ultrasec de 200m baño rollo']


  constructor(
              private fb : FormBuilder,
              private location : Location,
              private cdRef : ChangeDetectorRef,
              private elementRef: ElementRef,
  )
  {
    this.myFormSearch = this.fb.group({
      itemSearch:  [ '',  ],
    });   

  }




  ngOnInit() {
    this.calculateMaxWidth();
  }

  calculateMaxWidth() {
    const containerWidth = this.elementRef.nativeElement.offsetWidth;
    // Puedes ajustar estos valores según tus necesidades
    if (containerWidth >= 768) {
      this.maxWidthPercent = 100;
    } else {
      this.maxWidthPercent = 90;
    }

    console.log(containerWidth);
    this.cdRef.detectChanges();
  }

  reloadSearch( item:any ){

    this.myFormSearch.get('itemSearch')?.setValue(item)

  }
  


  goBack(){
    this.location.back();
  }

}
