import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintableComponent } from './printable.component';

describe('PrintableComponent', () => {
  let component: PrintableComponent;
  let fixture: ComponentFixture<PrintableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [PrintableComponent]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
