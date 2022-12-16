import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { AdresseService } from '../service/adresse.service';

@Component({
  selector: 'app-adresse',
  templateUrl: './adresse.component.html',
  styleUrls: ['./adresse.component.scss'],
})
export class AdresseComponent implements OnInit {
  searchObject: FormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
    this.searchValidator(),
  ]);
  loaded: boolean = false;
  adresseSubscription: Subscription = new Subscription();
  displayedColumns: string[] = ['numero', 'voie', 'code_postal', 'ville'];
  dataSource: any;

  constructor(
    private _adresseService: AdresseService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  ngOnDestroy() {
    this.adresseSubscription.unsubscribe();
  }

  search() {
    let data = this.searchObject.value && this.searchObject.value.match(/\S+/g);
    data = data.join('+');
    this.adresseSubscription = this._adresseService
      .getAdresseData(data)
      .subscribe({
        next: (data: any) => {
          this.loaded = true;
          this.dataSource = data.features.map((element: any) =>
            this._adresseService.formatDataProvided(element)
          );
        },
        error: (error: any) => {
          console.error("Error details : ", error);
          this._snackBar.open('Erreur lors de la récupération de données, veuillez réessayer.', 'Ok');
        },
      });
  }

  searchValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      let value = control.value;
      if (!value) {
        return null;
      }
      let whitespaceCheck = value.match(/\S+/g);
      let searchCheck = whitespaceCheck && whitespaceCheck.join('').length >= 3;
      return !searchCheck ? { searchValidation: true } : null;
    };
  }
}
