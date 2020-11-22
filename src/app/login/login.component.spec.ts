import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import {ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './login.component';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from '../app-routing.module';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [ ReactiveFormsModule, HttpClientModule, AppRoutingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
