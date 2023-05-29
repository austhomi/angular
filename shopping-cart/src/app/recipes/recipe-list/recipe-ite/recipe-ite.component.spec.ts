import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeIteComponent } from './recipe-ite.component';

describe('RecipeIteComponent', () => {
  let component: RecipeIteComponent;
  let fixture: ComponentFixture<RecipeIteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeIteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipeIteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
