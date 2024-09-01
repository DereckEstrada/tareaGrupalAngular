import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataPersonaComponent } from './data-persona.component';

describe('DataPersonaComponent', () => {
  let component: DataPersonaComponent;
  let fixture: ComponentFixture<DataPersonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DataPersonaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DataPersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
