import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TreeComponent} from './tree.component';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from '../app-routing.module';

describe('TreeComponent', () => {
  let component: TreeComponent;
  let fixture: ComponentFixture<TreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TreeComponent],
      imports: [HttpClientModule, AppRoutingModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
