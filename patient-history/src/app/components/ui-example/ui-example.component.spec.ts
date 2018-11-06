import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiExampleComponent } from './ui-example.component';

describe('UiExampleComponent', () => {
  let component: UiExampleComponent;
  let fixture: ComponentFixture<UiExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
