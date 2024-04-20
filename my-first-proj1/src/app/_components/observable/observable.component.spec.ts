import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableComponent } from './observable.component';

describe('ObservableComponent', () => {
  let component: ObservableComponent;
  let fixture: ComponentFixture<ObservableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ObservableComponent]
    });
    fixture = TestBed.createComponent(ObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
