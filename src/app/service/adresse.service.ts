import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AdresseService {
  constructor(private _http: HttpClient) {}

  getAdresseData(options: any) {
    return this._http.get(
      'https://api-adresse.data.gouv.fr/search/?q=' + options + '&limit=20'
    );
  }

  formatDataProvided(rawData: any) {
    return {
      label: rawData.properties.label,
      ville: rawData.properties.city,
      code_postal: rawData.properties.postcode,
      numero: rawData.properties.housenumber,
      nom: rawData.properties.name,
      voie: rawData.properties.street,
    };
  }
}
