import { TestBed, async, inject, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { DataService } from './data.service';

describe('DataService', () => {
  let service: DataService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        DataService
      ],
    });
    service = TestBed.inject(DataService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it(`should fetch posts as an Observable`, waitForAsync(inject([HttpTestingController, DataService],
    (httpClient: HttpTestingController, service: DataService) => {
      const postItem = [
        {
          "userId": 1,
          "id": 1,
          "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
          "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        },
        {
          "userId": 1,
          "id": 2,
          "title": "qui est esse",
          "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
        },
        {
          "userId": 1,
          "id": 3,
          "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
          "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
        }
      ];

      service.getData()
        .subscribe((posts: any) => {
          expect(posts.length).toBe(3);
        });
      let req = httpMock.expectOne('https://jsonplaceholder.typicode.com/posts');
      expect(req.request.method).toBe("GET");
      req.flush(postItem);
      httpMock.verify();
    })));


  it('should be created', () => {
    expect(service).toBeTruthy();
  });
   

 it('should make a POST request', waitForAsync(inject([HttpTestingController, DataService],
  (httpClient: HttpTestingController, service: DataService) => {
    
    const newProduct = { id: 18, name: 'Product 18', description: 'Description 18',category: 'laptop' };
  
    // Use the service to make the POST request
  service.addProduct(newProduct).subscribe((response) => {
      expect(response).toEqual(newProduct); // Check if the response matches the expected new product
  });

  // Set up an expectation for the POST request
  const req = httpMock.expectOne('http://localhost:3000/products'); // Replace with your API endpoint
  expect(req.request.method).toEqual('POST');
  expect(req.request.body).toEqual(newProduct); // Verify the request data
  
      // Respond to the request with a mock response
 // Respond to the request with the new product
  //req.flush(newProduct, { status: 201, statusText: 'Created'});

  /* The req.flush method in Angular's HttpTestingController 
   allows you to simulate a server response to the HTTP 
   request being tested. It is particularly useful for 
   emulating server responses without actually making real HTTP 
   requests during testing.

In the provided code, req.flush(newProduct, { status: 201, statusText: 'Created'}) is used to mock a successful HTTP POST request. Here's a breakdown:

newProduct is the payload or data that you expect the server 
would return upon a successful POST request. This data is 
used to simulate the response from the server.

{ status: 201, statusText: 'Created' } specifies the 
status code and the status text that the server would 
typically return upon successful creation of a resource. 
In this case, a status of 201 Created.

By using req.flush, you can create mock server responses to 
imitate the behavior of an actual server without needing to 
perform real network requests during testing. This allows you to
 test the behavior of your code under specific server responses 
 without the external dependencies on the actual server.
    */
})));


  it('should handle errors gracefully', () => {
    const testData = { key: 'value' }; // Replace with your request data
  
    service.getData().subscribe(
      () => {
        fail('The request should have failed');
      },
      (error) => {
        expect(error.status).toEqual(500); // Replace with your expected error status code
      }
    );
  
    const req = httpMock.expectOne('https://jsonplaceholder.typicode.com/posts');
    req.flush(null, { status: 500, statusText: 'Internal Server Error' });
  });

  it('should fail if the server is off', waitForAsync(() => {
    const newProduct = { id: 18, name: 'Product 18', description: 'Description 18', category: 'laptop' };
  
    // Use the service to make the POST request
    service.addProduct(newProduct).subscribe(
      () => {
        fail('The request should have failed because the server is off');
      },
      (error) => {
        expect(error.status).toEqual(0); // Status code 0 indicates a network error
      }
    );
  
    const req = httpMock.expectOne('http://localhost:3000/products'); // Replace with your API endpoint
    expect(req.request.method).toEqual('POST');
    expect(req.request.body).toEqual(newProduct); // Verify the request data
    
    // Respond to the request with an error to simulate server being off
    req.error(new ErrorEvent('Server is off'), { status: 0 }); // Simulate network error (server off)
  }));
  
});

