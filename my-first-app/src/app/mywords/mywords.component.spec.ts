import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MywordsComponent } from './mywords.component';

describe('MywordsComponent', () => {
  let component: MywordsComponent;
  let fixture: ComponentFixture<MywordsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MywordsComponent]
    });
    fixture = TestBed.createComponent(MywordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
