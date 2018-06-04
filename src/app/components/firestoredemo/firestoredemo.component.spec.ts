import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirestoredemoComponent } from './firestoredemo.component';

describe('FirestoredemoComponent', () => {
  let component: FirestoredemoComponent;
  let fixture: ComponentFixture<FirestoredemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirestoredemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirestoredemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
