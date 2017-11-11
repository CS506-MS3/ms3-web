import {TestBed, inject} from '@angular/core/testing';

import {PropertyService} from './property.service';
import {PropertyForm} from '../_domains/property-form';
import {StoreModule} from '@ngrx/store';
import * as PropertyCreateActions from '../_effect-actions/property-create.actions';
import * as PropertyRemoveActions from '../_effect-actions/property-remove.actions';
describe('PropertyService', () => {
  const mockAuthReducer = jasmine.createSpy('reducer');

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          auth: mockAuthReducer
        })
      ],
      providers: [PropertyService]
    });
  });

  it('should be created', inject([PropertyService], (service: PropertyService) => {
    expect(service).toBeTruthy();
  }));

  describe('create', () => {
    it('should dispatch a PropertyCreateActions.Request with input form as payload',
      inject([PropertyService], (service: PropertyService) => {
        const testForm: PropertyForm = {
          title: 'testTitle',
          address: {
          },
          description: '',
          roomType: '',
          price: 0,
          startDate: '',
          duration: 0,
          options: [],
          imageUrls: [],
        };

        service.create(testForm);

        expect(mockAuthReducer).toHaveBeenCalledWith(undefined, new PropertyCreateActions.Request(testForm));
      }));
  });
});
