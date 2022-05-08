import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuctionProductDetailsComponentComponent } from './auction-product-details-component.component';

describe('AuctionProductDetailsComponentComponent', () => {
  let component: AuctionProductDetailsComponentComponent;
  let fixture: ComponentFixture<AuctionProductDetailsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuctionProductDetailsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuctionProductDetailsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
