import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataComponent } from './data.component';
import { FakeService } from '../services/fake.service';
import { of, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

describe('DataComponent', () => {
  let component: DataComponent;
  let fixture: ComponentFixture<DataComponent>;

  let fakeServiceMock:any;

  beforeEach(() => {
    fakeServiceMock = {
      getDataV1: jest.fn()
    }
    TestBed.configureTestingModule({
      declarations: [DataComponent],
      providers:[{
        provide:FakeService,
        useValue:fakeServiceMock
      }]
    });
    fixture = TestBed.createComponent(DataComponent);
    component = fixture.componentInstance;
  
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return serviceData',()=>{
    const expRes={name:"Himanshu Jaiswal"};
    jest.spyOn(fakeServiceMock,'getDataV1').mockReturnValue(of(expRes));
    fixture.detectChanges();
    expect(component.serviceData.name).toBe(expRes.name);
  });

  it('should getServiceData set errorMessage',()=>{
    const errorResponse= new HttpErrorResponse({ 
      error:'test 404 error',
      status:404,statusText:'Not Found'
     });
     jest.spyOn(fakeServiceMock,'getDataV1').mockReturnValue(throwError(()=>errorResponse));
     component.getServiceData();
     expect(component.errorMessage).not.toBe('Not Found');
  })
});
