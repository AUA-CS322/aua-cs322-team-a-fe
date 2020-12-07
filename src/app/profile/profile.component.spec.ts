import {ComponentFixture, TestBed} from '@angular/core/testing';
import {ProfileComponent} from './profile.component';
import {HeaderComponent} from '../header/header.component';
import {ActivatedRoute} from '@angular/router';
import {TreeComponent} from '../tree/tree.component';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from '../app-routing.module';
import {of} from 'rxjs';


describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfileComponent, HeaderComponent],
      imports: [HttpClientModule, AppRoutingModule],
      providers: [{
        provide: ActivatedRoute, useValue: {
          paramMap: of({
            get: (key) => {
              username: 'president'
            }
          })
        }
      }]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
