import { of, throwError } from 'rxjs';
import { FakeService } from './fake.service';
import { HttpErrorResponse } from '@angular/common/http';

describe('FakeService', () => {
  let service: FakeService;
  let httpClientSpy:any; //this is mock
  //we have create httpClienSpy

  beforeEach(() => {
    //httpClientSpy does not know about get method or any other method that you have created
    //now we have to tell httpClientSpy that it has get method
    //by create it as an object and in object we have one get method
    
    httpClientSpy = {
      get: jest.fn(), //this will create a mock for the get method
      post: jest.fn() //this will create a mock for the post method
    }
    service = new FakeService(httpClientSpy); //and here we passed httpClientSpy 
  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should test getDataV1',()=>{
    const data= "Himanshu"; //creating a mock data
    const url= 'https://jsonplaceholder.typicode.com/todos/1';
    //here we create the url to test whether the url is running or not

    jest.spyOn(httpClientSpy,'get').mockReturnValue(of(data));    //mocking to any function //here we have only one function that is get
    //so we have passed get as a second argument,if there is another function then we have to pass that function as a another argument
    //o return observable response we use mockReturnValue
    //but it will set like normal response
    // so to make it observable we have we have to wrap it up with "of" .... of is a rxjs operator
    //we do this because in component the method return obsersevable
  
    //now we trigger the method in the service
    service.getDataV1();
    expect(httpClientSpy.get).toBeCalledTimes(1);//this will check how many times the get method is called
    // we have called the get method only once so it should be 1

    //  now we check the url is passing or not
    expect(httpClientSpy.get).toHaveBeenCalledWith(url);
  
  })

  //Version 2 og get call
  
  it('should test getDataV2',(done)=>{
    const res= "Himanshu";
    const url= 'https://jsonplaceholder.typicode.com/todos/1';
    jest.spyOn(httpClientSpy,'get').mockReturnValue(of(res));    
    service.getDataV2().subscribe(
      {
        next: data => {
        expect(data).toEqual(res);
        done();
      },
      error: error => 
        console.log(error)
      
    })
    expect(httpClientSpy.get).toBeCalledTimes(1);//this will check how many times the get method is called
    expect(httpClientSpy.get).toHaveBeenCalledWith(url);
  
  })

  //now lets test the error case
  it('should test getDataV2',(done)=>{
    const errorResponse= new HttpErrorResponse({
      error: 'Test 404 error',
      status: 404, statusText: 'Not Found'
  });
    const url= 'https://jsonplaceholder.typicode.com/todos/1';
    jest.spyOn(httpClientSpy,'get').mockReturnValue(throwError(()=>errorResponse));    
    service.getDataV2().subscribe(
      {
        next: data => console.log(data),
        error: error => {
          expect(error.message).toContain('Test 404 error');
          done();
        }
      
    })
    expect(httpClientSpy.get).toBeCalledTimes(1);//this will check how many times the get method is called
    expect(httpClientSpy.get).toHaveBeenCalledWith(url);
  
  })

  //post test
  it('should test postData',()=>{
    const command = 'testing';
    const res = 'Himanshu';
    const url= 'https://jsonplaceholder.typicode.com/todos/1';
    jest.spyOn(httpClientSpy,'post').mockReturnValue(of(res));

    service.postData(command);
    expect(httpClientSpy.post).toBeCalledTimes(1);
  })

});
