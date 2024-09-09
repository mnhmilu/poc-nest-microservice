# poc-nest-microservices


This is poc nestjs microservice project is based on youtube tutorial [Learn NestJS Microservices in 20 Minutes](https://www.youtube.com/watch?v=I8cs8fJYF_w&t=603s) by Tech Vision


### Notes:

1) Clone the repository
2) `npm install` to resole all required repository
3) To start the api and related microservices (deals,news)

    ```
    nest start bookstre-api-gateway --watch
    nest start news --watch
    nest start deals --watch
    ```

after all service started , call this api 

API: http://localhost:3000/deals

### The response should be : ### 

```json
[
  {
    "id": 1,
    "dealName": "Winter Sale",
    "expireDate": "2024-12-31T00:00:00.000Z",
    "provider": "Provider A",
    "originalPrice": 500,
    "discountPrice": 350
  },
  {
    "id": 2,
    "dealName": "Summer Discount",
    "expireDate": "2024-08-15T00:00:00.000Z",
    "provider": "Provider B",
    "originalPrice": 600,
    "discountPrice": 450
  }
]

```

    
4) To Construct the project refer to ***cli.md*** file in doc folder for details instruction 
