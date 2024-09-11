import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfPanelComponent } from './prof-panel.component';

describe('ProfPanelComponent', () => {
  let component: ProfPanelComponent;
  let fixture: ComponentFixture<ProfPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
