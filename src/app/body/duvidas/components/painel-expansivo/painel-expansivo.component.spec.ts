import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelExpansivoComponent } from './painel-expansivo.component';

describe('PainelExpansivoComponent', () => {
  let component: PainelExpansivoComponent;
  let fixture: ComponentFixture<PainelExpansivoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PainelExpansivoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PainelExpansivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
