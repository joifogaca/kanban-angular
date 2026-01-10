import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaoKanbanComponent } from './cartao-kanban.component';

describe('CartaoKanbanComponent', () => {
  let component: CartaoKanbanComponent;
  let fixture: ComponentFixture<CartaoKanbanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartaoKanbanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartaoKanbanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
