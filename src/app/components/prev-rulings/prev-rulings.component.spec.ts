import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrevRulingsComponent } from './prev-rulings.component';

describe('PrevRulingsComponent', () => {
  let component: PrevRulingsComponent;
  let fixture: ComponentFixture<PrevRulingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrevRulingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrevRulingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
