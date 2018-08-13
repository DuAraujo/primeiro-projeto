import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncorporarVideoComponent } from './incorporar-video.component';

describe('IncorporarVideoComponent', () => {
  let component: IncorporarVideoComponent;
  let fixture: ComponentFixture<IncorporarVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncorporarVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncorporarVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
