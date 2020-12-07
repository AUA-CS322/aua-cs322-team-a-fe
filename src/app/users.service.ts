import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import {of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  mockData = {
    'id': 'c2f54384-0fc3-44a4-a3ec-ca250b10dc39',
    'email': 'vicepresident1@aua.am',
    'username': 'vice-president1',
    'password': '$2a$12$xpEu67Ubt2ljb7WE49/35ekN.06hyGCVzGYnlpWHNlOipb2twjXNq',
    'position': 'Vice-President 1',
    'department': 'VP',
    'location': 'Yerevan, Armenia',
    'firstName': 'FName1',
    'lastName': 'LName1',
    'phone': '+37455000001',
    'photoUrl': 'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairTheCaesarSidePart&accessoriesType=Wayfarers&hairColor=Platinum&facialHairType=MoustacheMagnum&facialHairColor=BlondeGolden&clotheType=ShirtVNeck&clotheColor=Blue01&graphicType=Cumbia&eyeType=Surprised&eyebrowType=Default&mouthType=Sad&skinColor=Tanned',
    'manager': {
      'id': '94a7335f-2181-4811-9a06-f53ae949a98a',
      'email': 'president@aua.am',
      'username': 'president',
      'password': '$2a$12$xpEu67Ubt2ljb7WE49/35ekN.06hyGCVzGYnlpWHNlOipb2twjXNq',
      'position': 'President',
      'department': 'Executive',
      'location': 'Yerevan, Armenia',
      'firstName': 'FName',
      'lastName': 'LName',
      'phone': '+37455000000',
      'photoUrl': 'https://avataaars.io/?avatarStyle=Transparent&topType=LongHairStraightStrand&accessoriesType=Wayfarers&hairColor=BrownDark&facialHairType=Blank&clotheType=GraphicShirt&clotheColor=Pink&graphicType=Bear&eyeType=Default&eyebrowType=UpDownNatural&mouthType=Twinkle&skinColor=Yellow',
      'manager': null,
      'relations': []
    },
    'relations': [
      {
        'id': '8d1397d8-caf1-4932-91b6-a43e7a872dfd',
        'email': 'employee4@aua.am',
        'username': 'accountant4',
        'password': '$2a$12$xpEu67Ubt2ljb7WE49/35ekN.06hyGCVzGYnlpWHNlOipb2twjXNq',
        'position': 'Accountant 4',
        'department': 'Accounting',
        'location': 'Yerevan, Armenia',
        'firstName': 'FName4',
        'lastName': 'LName4',
        'phone': '+37455000004',
        'photoUrl': 'https://avataaars.io/?avatarStyle=Transparent&topType=WinterHat3&accessoriesType=Wayfarers&hatColor=White&hairColor=Red&facialHairType=BeardMagestic&facialHairColor=BrownDark&clotheType=BlazerShirt&eyeType=Hearts&eyebrowType=RaisedExcited&mouthType=Default&skinColor=Pale',
        'manager': null,
        'relations': []
      },
      {
        'id': '2b39025b-2372-4f7c-883f-8b2bc005b8ab',
        'email': 'employee5@aua.am',
        'username': 'accountant5',
        'password': '$2a$12$xpEu67Ubt2ljb7WE49/35ekN.06hyGCVzGYnlpWHNlOipb2twjXNq',
        'position': 'Accountant 5',
        'department': 'Accounting',
        'location': 'Yerevan, Armenia',
        'firstName': 'FName5',
        'lastName': 'LName5',
        'phone': '+37455000005',
        'photoUrl': 'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairDreads02&accessoriesType=Sunglasses&hairColor=BlondeGolden&facialHairType=Blank&clotheType=ShirtVNeck&clotheColor=Black&eyeType=Side&eyebrowType=SadConcernedNatural&mouthType=Default&skinColor=Light',
        'manager': null,
        'relations': []
      },
      {
        'id': '036f0777-5083-40df-bb9e-b2e626ff7e5c',
        'email': 'employee6@aua.am',
        'username': 'member6',
        'password': '$2a$12$xpEu67Ubt2ljb7WE49/35ekN.06hyGCVzGYnlpWHNlOipb2twjXNq',
        'position': 'Staff Member 6',
        'department': 'Faculty',
        'location': 'Yerevan, Armenia',
        'firstName': 'FName6',
        'lastName': 'LName6',
        'phone': '+37455000006',
        'photoUrl': 'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairSides&accessoriesType=Wayfarers&hairColor=SilverGray&facialHairType=MoustacheMagnum&facialHairColor=Brown&clotheType=GraphicShirt&clotheColor=Blue02&graphicType=Hola&eyeType=Squint&eyebrowType=RaisedExcitedNatural&mouthType=Twinkle&skinColor=Light',
        'manager': null,
        'relations': []
      },
      {
        'id': '9ec3d879-68f5-4e33-900e-0b7efad68cd4',
        'email': 'employee7@aua.am',
        'username': 'member7',
        'password': '$2a$12$xpEu67Ubt2ljb7WE49/35ekN.06hyGCVzGYnlpWHNlOipb2twjXNq',
        'position': 'Staff Member 7',
        'department': 'Faculty',
        'location': 'Yerevan, Armenia',
        'firstName': 'FName7',
        'lastName': 'LName7',
        'phone': '+37455000007',
        'photoUrl': 'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortFlat&accessoriesType=Wayfarers&hatColor=Gray01&hairColor=Black&facialHairType=MoustacheMagnum&facialHairColor=Brown&clotheType=BlazerSweater&clotheColor=White&eyeType=Side&eyebrowType=UnibrowNatural&mouthType=Default&skinColor=Pale',
        'manager': null,
        'relations': []
      }
    ]
  };

  constructor(private http: HttpClient) {
  }

  getUser() {
    return this.http.get(`${environment.apiUrl}users/user`);
  }

  getUserById(username) {
    return this.http.get(`${environment.apiUrl}users/user/${username}`);
  }

  getUsersTree() {
    return of(this.mockData);
  }
}
