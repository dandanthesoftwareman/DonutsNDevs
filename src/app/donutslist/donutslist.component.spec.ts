import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonutslistComponent } from './donutslist.component';

describe('DonutslistComponent', () => {
  let component: DonutslistComponent;
  let fixture: ComponentFixture<DonutslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonutslistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonutslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
