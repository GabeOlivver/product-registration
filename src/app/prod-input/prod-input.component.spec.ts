import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdInputComponent } from './prod-input.component';

describe('ProdInputComponent', () => {
  let component: ProdInputComponent;
  let fixture: ComponentFixture<ProdInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProdInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProdInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
