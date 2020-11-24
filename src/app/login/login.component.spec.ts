import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {ReactiveFormsModule} from '@angular/forms';
import {LoginComponent} from './login.component';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from '../app-routing.module';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [ReactiveFormsModule, HttpClientModule, AppRoutingModule]
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

  describe('when the login page loads', () => {
    it('then the login fields should be defaulted', () => {
      expect(component.signForm.getRawValue().username).toEqual('');
      expect(component.signForm.getRawValue().password).toEqual('');
    });
    it('then the error message should not be displayed', () => {
      expect(component.isError).toBe(false);
    });
  });

  describe('when the form validation failed', () => {
    it('then both login fields are empty', () => {
      component.setFieldValues('', '');
      expect(component.signForm.invalid).toBe(true);
    });

    it('then username field is empty', () => {
      component.setFieldValues('', 'password');
      expect(component.signForm.invalid).toBe(true);
    });

    it('then password field is empty', () => {
      component.setFieldValues('username', '');
      expect(component.signForm.invalid).toBe(true);
    });
  });

  describe('when form validation succeeded', () => {
    it('then both fields are not empty', () => {
      component.setFieldValues('username', 'password');
      expect(component.signForm.invalid).toBe(false);
    });
  });

  describe('username and/or password is incorrect', () => {
    it('then an error message should be displayed', (done) => {
      component.setFieldValues('username', 'password');

      component.wrongError.subscribe((b: boolean) => {
        expect(b).toBe(true);
        done();
      });

      component.submit(undefined);
    });
  });
});
