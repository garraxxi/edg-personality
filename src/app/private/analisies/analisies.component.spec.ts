import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalisiesComponent } from './analisies.component';

describe('AnalisiesComponent', () => {
  let component: AnalisiesComponent;
  let fixture: ComponentFixture<AnalisiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalisiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalisiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
