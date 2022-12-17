import { HttpClient, HttpClientModule } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { AdresseService } from './adresse.service';

describe('AdresseService', () => {
  let service: AdresseService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
      providers: [AdresseService],
    });
    service = TestBed.inject(AdresseService);
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should create service', () => {
    expect(service).toBeTruthy();
  });

  it('Get Data from search', () => {
    const expectedData = {
      type: 'FeatureCollection',
      version: 'draft',
      features: [
        {
          type: 'Feature',
          geometry: { type: 'Point', coordinates: [2.167877, 48.888561] },
          properties: {
            label: '11 Place de l’Europe 92500 Rueil-Malmaison',
            score: 0.8782472727272727,
            housenumber: '11',
            id: '92063_1301_00011',
            name: '11 Place de l’Europe',
            postcode: '92500',
            citycode: '92063',
            x: 638982.6,
            y: 6865715.75,
            city: 'Rueil-Malmaison',
            context: '92, Hauts-de-Seine, Île-de-France',
            type: 'housenumber',
            importance: 0.66072,
            street: 'Place de l’Europe',
          },
        },
        {
          type: 'Feature',
          geometry: { type: 'Point', coordinates: [2.910645, 42.679709] },
          properties: {
            label: "11 Place de l'Europe 66100 Perpignan",
            score: 0.8776181818181817,
            housenumber: '11',
            id: '66136_1692_00011',
            name: "11 Place de l'Europe",
            postcode: '66100',
            citycode: '66136',
            x: 692667.09,
            y: 6175568.97,
            city: 'Perpignan',
            context: '66, Pyrénées-Orientales, Occitanie',
            type: 'housenumber',
            importance: 0.6538,
            street: "Place de l'Europe",
          },
        },
        {
          type: 'Feature',
          geometry: { type: 'Point', coordinates: [1.8567, 48.648048] },
          properties: {
            label: "11 Place de l'Europe 78120 Rambouillet",
            score: 0.8740381818181817,
            housenumber: '11',
            id: '78517_0236_00011',
            name: "11 Place de l'Europe",
            postcode: '78120',
            citycode: '78517',
            x: 615779.01,
            y: 6839262.2,
            city: 'Rambouillet',
            context: '78, Yvelines, Île-de-France',
            type: 'housenumber',
            importance: 0.61442,
            street: "Place de l'Europe",
          },
        },
        {
          type: 'Feature',
          geometry: { type: 'Point', coordinates: [2.302381, 51.015088] },
          properties: {
            label: "11 Place de l'Europe 59760 Grande-Synthe",
            score: 0.87319,
            housenumber: '11',
            id: '59271_0279_00011',
            name: "11 Place de l'Europe",
            postcode: '59760',
            citycode: '59271',
            x: 650936.79,
            y: 7102363.54,
            city: 'Grande-Synthe',
            context: '59, Nord, Hauts-de-France',
            type: 'housenumber',
            importance: 0.60509,
            street: "Place de l'Europe",
          },
        },
        {
          type: 'Feature',
          geometry: { type: 'Point', coordinates: [4.849473, 45.764201] },
          properties: {
            label: "11 Place de l'Europe 69006 Lyon",
            score: 0.87261,
            housenumber: '11',
            id: '69386_2526_00011',
            name: "11 Place de l'Europe",
            postcode: '69006',
            citycode: '69386',
            x: 843736.35,
            y: 6519971.66,
            city: 'Lyon',
            district: 'Lyon 6e Arrondissement',
            context: '69, Rhône, Auvergne-Rhône-Alpes',
            type: 'housenumber',
            importance: 0.59871,
            street: "Place de l'Europe",
          },
        },
        {
          type: 'Feature',
          geometry: { type: 'Point', coordinates: [3.516251, 43.284359] },
          properties: {
            label: "11 Place de l'Europe 34300 Agde",
            score: 0.8722954545454544,
            housenumber: '11',
            id: '34003_0771_00011',
            name: "11 Place de l'Europe",
            postcode: '34300',
            citycode: '34003',
            x: 741926.22,
            y: 6242935.45,
            city: 'Agde',
            context: '34, Hérault, Occitanie',
            type: 'housenumber',
            importance: 0.59525,
            street: "Place de l'Europe",
          },
        },
        {
          type: 'Feature',
          geometry: { type: 'Point', coordinates: [1.343534, 43.536634] },
          properties: {
            label: "11 Place de l'Europe 31270 Cugnaux",
            score: 0.870930909090909,
            housenumber: '11',
            id: '31157_0283_00011',
            name: "11 Place de l'Europe",
            postcode: '31270',
            citycode: '31157',
            x: 566070.78,
            y: 6272244.97,
            city: 'Cugnaux',
            context: '31, Haute-Garonne, Occitanie',
            type: 'housenumber',
            importance: 0.58024,
            street: "Place de l'Europe",
          },
        },
        {
          type: 'Feature',
          geometry: { type: 'Point', coordinates: [2.207575, 48.780106] },
          properties: {
            label: '11 Place de l’Europe 78140 Vélizy-Villacoublay',
            score: 0.8693245454545454,
            housenumber: '11',
            id: '78640_0187_00011',
            name: '11 Place de l’Europe',
            postcode: '78140',
            citycode: '78640',
            x: 641772.43,
            y: 6853627,
            city: 'Vélizy-Villacoublay',
            context: '78, Yvelines, Île-de-France',
            type: 'housenumber',
            importance: 0.56257,
            street: 'Place de l’Europe',
          },
        },
        {
          type: 'Feature',
          geometry: { type: 'Point', coordinates: [7.491823, 48.462075] },
          properties: {
            label: '11 Place de l’Europe 67210 Obernai',
            score: 0.8691772727272726,
            housenumber: '11',
            id: '67348_0276_00011',
            name: '11 Place de l’Europe',
            postcode: '67210',
            citycode: '67348',
            x: 1031897.9,
            y: 6827421.15,
            city: 'Obernai',
            context: '67, Bas-Rhin, Grand Est',
            type: 'housenumber',
            importance: 0.56095,
            street: 'Place de l’Europe',
          },
        },
        {
          type: 'Feature',
          geometry: { type: 'Point', coordinates: [1.152668, 49.207277] },
          properties: {
            label: "11 Place de l'Europe 27400 Louviers",
            score: 0.8667,
            housenumber: '11',
            id: '27375_0572_00011',
            name: "11 Place de l'Europe",
            postcode: '27400',
            citycode: '27375',
            x: 565379.02,
            y: 6902415.04,
            city: 'Louviers',
            context: '27, Eure, Normandie',
            type: 'housenumber',
            importance: 0.5337,
            street: "Place de l'Europe",
          },
        },
        {
          type: 'Feature',
          geometry: { type: 'Point', coordinates: [-4.507497, 48.606608] },
          properties: {
            label: "11 Place de l'Europe 29880 Plouguerneau",
            score: 0.8665781818181817,
            housenumber: '11',
            id: '29195_0278_00011',
            name: "11 Place de l'Europe",
            postcode: '29880',
            citycode: '29195',
            x: 147337.72,
            y: 6860337.95,
            city: 'Plouguerneau',
            context: '29, Finistère, Bretagne',
            type: 'housenumber',
            importance: 0.53236,
            street: "Place de l'Europe",
          },
        },
        {
          type: 'Feature',
          geometry: { type: 'Point', coordinates: [2.82003, 48.850545] },
          properties: {
            label: "11 Place de l'Europe 77700 Bailly-Romainvilliers",
            score: 0.8665745454545455,
            housenumber: '11',
            id: '77018_0053_00011',
            name: "11 Place de l'Europe",
            postcode: '77700',
            citycode: '77018',
            x: 686793.4,
            y: 6861182.05,
            city: 'Bailly-Romainvilliers',
            context: '77, Seine-et-Marne, Île-de-France',
            type: 'housenumber',
            importance: 0.53232,
            street: "Place de l'Europe",
          },
        },
        {
          type: 'Feature',
          geometry: { type: 'Point', coordinates: [-4.326367, 48.57209] },
          properties: {
            label: "11 Place de l'Europe 29260 Lesneven",
            score: 0.8665163636363635,
            housenumber: '11',
            id: '29124_0368_00011',
            name: "11 Place de l'Europe",
            postcode: '29260',
            citycode: '29124',
            x: 160277.27,
            y: 6855264.61,
            city: 'Lesneven',
            context: '29, Finistère, Bretagne',
            type: 'housenumber',
            importance: 0.53168,
            street: "Place de l'Europe",
          },
        },
        {
          type: 'Feature',
          geometry: { type: 'Point', coordinates: [2.24362, 49.145171] },
          properties: {
            label: "11 Place de l'Europe 95660 Champagne-sur-Oise",
            score: 0.8661736363636363,
            housenumber: '11',
            id: '95134_0481_00011',
            name: "11 Place de l'Europe",
            postcode: '95660',
            citycode: '95134',
            x: 644809.82,
            y: 6894196.59,
            city: 'Champagne-sur-Oise',
            context: "95, Val-d'Oise, Île-de-France",
            type: 'housenumber',
            importance: 0.52791,
            street: "Place de l'Europe",
          },
        },
        {
          type: 'Feature',
          geometry: { type: 'Point', coordinates: [2.928886, 47.394664] },
          properties: {
            label: '11 Place de l’Europe 58200 Cosne-Cours-sur-Loire',
            score: 0.8657636363636363,
            housenumber: '11',
            id: '58086_1130_00011',
            name: '11 Place de l’Europe',
            postcode: '58200',
            citycode: '58086',
            x: 694635.78,
            y: 6699371.44,
            city: 'Cosne-Cours-sur-Loire',
            context: '58, Nièvre, Bourgogne-Franche-Comté',
            type: 'housenumber',
            importance: 0.5234,
            street: 'Place de l’Europe',
          },
        },
        {
          type: 'Feature',
          geometry: { type: 'Point', coordinates: [5.489546, 47.090944] },
          properties: {
            label: '11 Place de l’Europe 39100 Dole',
            score: 0.8652799999999999,
            housenumber: '11',
            id: '39198_0959_00011',
            name: '11 Place de l’Europe',
            postcode: '39100',
            citycode: '39198',
            x: 888822.12,
            y: 6668608.95,
            city: 'Dole',
            context: '39, Jura, Bourgogne-Franche-Comté',
            type: 'housenumber',
            importance: 0.51808,
            street: 'Place de l’Europe',
          },
        },
        {
          type: 'Feature',
          geometry: { type: 'Point', coordinates: [2.267917, 48.640585] },
          properties: {
            label: '11 Place de l’Europe 91310 Montlhéry',
            score: 0.8651509090909091,
            housenumber: '11',
            id: '91425_a101_00011',
            name: '11 Place de l’Europe',
            postcode: '91310',
            citycode: '91425',
            x: 646062.43,
            y: 6838072.81,
            city: 'Montlhéry',
            context: '91, Essonne, Île-de-France',
            type: 'housenumber',
            importance: 0.51666,
            street: 'Place de l’Europe',
          },
        },
        {
          type: 'Feature',
          geometry: { type: 'Point', coordinates: [-4.572921, 48.587343] },
          properties: {
            label: "11 Place de l'Europe 29870 Landéda",
            score: 0.8650145454545454,
            housenumber: '11',
            id: '29101_0474_00011',
            name: "11 Place de l'Europe",
            postcode: '29870',
            citycode: '29101',
            x: 142331.18,
            y: 6858665.99,
            city: 'Landéda',
            context: '29, Finistère, Bretagne',
            type: 'housenumber',
            importance: 0.51516,
            street: "Place de l'Europe",
          },
        },
        {
          type: 'Feature',
          geometry: { type: 'Point', coordinates: [4.448797, 45.486118] },
          properties: {
            label: "11 Place de l'Europe 42290 Sorbiers",
            score: 0.8639563636363635,
            housenumber: '11',
            id: '42302_0214_00011',
            name: "11 Place de l'Europe",
            postcode: '42290',
            citycode: '42302',
            x: 813167.39,
            y: 6488444.81,
            city: 'Sorbiers',
            context: '42, Loire, Auvergne-Rhône-Alpes',
            type: 'housenumber',
            importance: 0.50352,
            street: "Place de l'Europe",
          },
        },
        {
          type: 'Feature',
          geometry: { type: 'Point', coordinates: [-1.581599, 47.010996] },
          properties: {
            label: "11 Place de l'Europe 44310 Saint-Colomban",
            score: 0.8637936363636364,
            housenumber: '11',
            id: '44155_0155_00011',
            name: "11 Place de l'Europe",
            postcode: '44310',
            citycode: '44155',
            x: 352126.48,
            y: 6666847.26,
            city: 'Saint-Colomban',
            context: '44, Loire-Atlantique, Pays de la Loire',
            type: 'housenumber',
            importance: 0.50173,
            street: "Place de l'Europe",
          },
        },
      ],
      attribution: 'BAN',
      licence: 'ETALAB-2.0',
      query: "11 place de l'europe",
      limit: 20,
    };
    const urlArgs = "11+place+de+l'europe";
    const testReq = httpClient
      .get(
        "https://api-adresse.data.gouv.fr/search/?q=11+place+de+l'europe&limit=20"
      );

    expect(service.getAdresseData(urlArgs).subscribe(data => {
      expect(data).toEqual(expectedData);
    }));
    
    const req = httpTestingController.expectOne(
      "https://api-adresse.data.gouv.fr/search/?q=11+place+de+l'europe&limit=20"
    );
    expect(req.request.method).toEqual('GET');
    req.flush(expectedData);
    httpTestingController.verify();
  });

  it('Format data should get data then format it', () => {
    const rawValue = {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [2.167887, 48.888561],
      },
      properties: {
        label: "11 place de l'Europe 92500 Rueil-Malmaison",
        score: 0.878247272727272,
        housenumber: '11',
        id: '92063_1301_00011',
        name: '11 Place de l’Europe',
        postcode: '92500',
        citycode: '92063',
        x: 638982.6,
        y: 6865715.75,
        city: 'Rueil-Malmaison',
        context: '92, Hauts-de-Seine, Île-de-France',
        type: 'housenumber',
        importance: 0.66072,
        street: 'Place de l’Europe',
      },
    };
    const expectedValue = {
      label: "11 place de l'Europe 92500 Rueil-Malmaison",
      ville: 'Rueil-Malmaison',
      code_postal: '92500',
      numero: '11',
      nom: '11 Place de l’Europe',
      voie: 'Place de l’Europe',
    };

    expect(service.formatDataProvided(rawValue)).toEqual(expectedValue);
  });
});
