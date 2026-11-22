import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IetCalculator } from './iet-calculator';

describe('IetCalculator', () => {
  let component: IetCalculator;
  let fixture: ComponentFixture<IetCalculator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IetCalculator],
    }).compileComponents();

    fixture = TestBed.createComponent(IetCalculator);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
