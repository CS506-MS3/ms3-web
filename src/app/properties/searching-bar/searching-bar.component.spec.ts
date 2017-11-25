import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SearchingBarComponent} from './searching-bar.component';
import {FormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';

describe('SearchingBarComponent', () => {
  let component: SearchingBarComponent;
  let fixture: ComponentFixture<SearchingBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        RouterTestingModule,
      ],
      declarations: [SearchingBarComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchingBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
