import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { AdresseService } from '../service/adresse.service';

@Component({
  selector: 'app-adresse',
  templateUrl: './adresse.component.html',
  styleUrls: ['./adresse.component.scss'],
})
export class AdresseComponent implements OnInit {
  searchObject: FormControl = new FormControl('', Validators.required);
  adresseSubscription: Subscription = new Subscription();
  displayedColumns: string[] = ['numero', 'voie', 'code_postal', 'ville'];
  dataSource = [];

  constructor(private _adresseService: AdresseService) {}

  ngOnInit(): void {}

  ngOnDestroy() {
    this.adresseSubscription.unsubscribe();
  }

  search() {
    let data =
      this.searchObject.value && this.searchObject.value.replace(/\s/g, '+');
    this.adresseSubscription = this._adresseService
      .getAdresseData(data)
      .subscribe((data: any) => {
        this.dataSource = data.features.map((element: any) =>
          this._adresseService.formatDataProvided(element)
        );
        console.log('Formatted data : ', this.dataSource);
      });
  }
}
