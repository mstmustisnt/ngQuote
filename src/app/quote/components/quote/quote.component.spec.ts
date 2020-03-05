import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteComponent } from './quote.component';
import {Quote} from '../../services/quote.service';

describe('QuoteComponent', () => {
  let component: QuoteComponent;
  let fixture: ComponentFixture<QuoteComponent>;

  const mockQuote: Quote = {
    text: 'test quote text',
    author: 'me',
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteComponent);
    component = fixture.componentInstance;
    component.quote = mockQuote;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
