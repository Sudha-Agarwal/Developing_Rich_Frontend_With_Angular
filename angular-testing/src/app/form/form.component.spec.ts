import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './form.component';
import { By } from '@angular/platform-browser';


describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormComponent ],
      imports: [FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create a form with a username input and a submit button', () => {
    const formElement: HTMLFormElement = fixture.nativeElement;
    const usernameInput = formElement.querySelector('input[name="username1"]');
    const submitButton = formElement.querySelector('button[type="submit"]');
  
    expect(usernameInput).toBeTruthy();
    expect(submitButton).toBeTruthy();
  });

  it('should call onSubmit method when form is submitted', () => {
    spyOn(component, 'onSubmit');
    const form = fixture.debugElement.query(By.css('form'));

    form.triggerEventHandler('ngSubmit', null);
    expect(component.onSubmit).toHaveBeenCalled();
  });
  

  it('should create a form', () => {
    
    expect(component).toBeDefined();
  });

});