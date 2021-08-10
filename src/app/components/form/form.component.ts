import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  @Output() ParaSelect = new EventEmitter<any>();

  CategorySelected = 'general';
  countrySelected = 'id';

  categories: any[] = [
    { value: 'general', name: 'Umum' },
    { value: 'business', name: 'Negosiasi' },
    { value: 'entertainment', name: 'Hiburan' },
    { value: 'health', name: 'Kesehatan' },
    { value: 'science', name: 'Ilmu' },
    { value: 'sports', name: 'olahraga' },
    { value: 'technology', name: 'teknologi' },
  ];

  country: any[] = [
    { value: 'id', name: 'Indonesia' },
    { value: 'br', name: 'Brasil' },
    { value: 'fr', name: 'Francia' },
    { value: 'hu', name: 'Hungria' },
    { value: 'mx', name: 'Mexico' },
    { value: 'gb', name: 'Reino Unido' },
  ];

  constructor() {}

  ngOnInit(): void {}

  searchNews() {
    const PARAMETER = {
      category: this.CategorySelected,
      country: this.countrySelected,
    };

    this.ParaSelect.emit(PARAMETER);
  }
}
