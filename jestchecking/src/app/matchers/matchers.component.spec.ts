import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchersComponent } from './matchers.component';

describe('MatchersComponent', () => {
  let component: MatchersComponent;
  let fixture: ComponentFixture<MatchersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MatchersComponent]
    });
    fixture = TestBed.createComponent(MatchersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //Exact Equality
  //to test the exact equality, we use the toBe matcher.
  it('two plus two is four', () => {
    expect(2+2).toBe(4);
  });

  //We can't use toBe to compare objects or arrays.
  // it('object values',()=>{
  //   const data = {name:'Himanshu'};
  //   expect(data).toBe({name:'Himanshu'});
  // })

  //to test the equality of objects or arrays, we use the toEqual matcher.
  it('object values',()=>{
    const data = {name:'Himanshu'};
    expect(data).toEqual({name:'Himanshu'});
  })

  //Truthy and Falsy
  //to test the truthiness, we use the toBeTruthy matcher.
  it('null',()=>{
    const n=null;
    // here n is not undefined(it have null value), so it is truthy

    expect(n).toBeNull(); // to check null
    expect(n).toBeDefined(); // to check defined
    expect(n).not.toBeUndefined(); // to check it is not undefined
    expect(n).not.toBeTruthy(); //null is a false case that why it not truthy
    expect(n).toBeFalsy(); //null is a false case that why it is falsy
  })

  it('zero',()=>{
    const z =0;
    //0 is falsy value but not a null, undefined, false, NaN, or an empty string
    expect(z).not.toBeNull(); 
    expect(z).toBeDefined(); 
    expect(z).not.toBeUndefined(); 
    expect(z).not.toBeTruthy(); 
    expect(z).toBeFalsy(); 

  })

  //Matchers for Numbers

  it('two plus two',()=>{
    const value = 2 + 2;

    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);

    //for test exact equality we use toBe and toEqual 
    expect(value).toBe(4);  
    expect(value).toEqual(4);  // toEqual is used to compare objects and arrays
  });


  //For Floating Point Equality
  it('adding floating point numbers',()=>{
    const value = 0.1 + 0.2;
    // expect(value).toBe(0.3); 
    // it will fail

    //So we use toBeCloseTo matcher to compare floating point numbers
    expect(value).toBeCloseTo(0.3); // it will pass
  });


  //For Strings
  it('checking if there is no B in himanshu',()=>{
    expect('himanshu').not.toMatch(/N/);
  });

  it('checking if there is a 010 in itshimanshu010',()=>{
    expect('itshimanshu010').toMatch(/010/);
  });


  //Arrays and Iterables
  it('checking the list has bread on it or not',()=>{
    const list = ['milk','bread','butter'];

    expect(list).toContain('bread'); 
    expect(list).not.toContain('biscuit');

    //now creating a new set from the list
    expect(new Set(list)).toContain('bread');
    //creating the new set and in that set we are checking whether it has bread or not
  })

  //Exceptions

  //How to handle exceptions in the jest
  //to test the exceptions, first we will create a method or function inside our component file
  //i.e, matchers.component.ts and method is
  //compileErrorFn() which will throw an error

  it('compiling error',()=>{

    expect(()=>component.compileErrorFn()).toThrow();
    //if compileErrorFn() method throws an error then it will pass


  })

  
});
