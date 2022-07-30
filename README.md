# How to run 
Open a terminal and make sure your current directory is the same where you have the **docker-compose.yml** file

Then run the following command to start the application:
```bash
docker-compose up
```


# Auth API

Prior to being able to use the Cars API. First, you must authenticate using the Auth API.

The **login** endpoint will give an access token for your requests and a refresh token to use in The **token** endpoint for when the access token expires and you need a new one, for the last, the **logout** endpoint will remove your refresh token.

## Auth: login
#### Request
```bash
curl --location --request POST 'http://localhost:3000/auth/login' \
--header 'Content-Type: application/json' \
--data-raw '{
    "email": "asd@gmail.com"
}'
```

#### Response (Status Code 200)
```bash
{
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFzZEBnbWFpbC5jb20iLCJpYXQiOjE2NTkyMTMzODUsImV4cCI6MTY1OTIxNjk4NX0.Rd8jmkrypFttZi5zJ6sRCACyqwbZAX2z4E4XW94wEFY",
    "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFzZEBnbWFpbC5jb20iLCJpYXQiOjE2NTkyMTMzODV9.ldmThCtoERPgQDpTw6N695AS4ud98tBRsLmsAR-_tVM"
}
```

## Auth: token
#### Request
```bash
curl --location --request POST 'http://localhost:3000/auth/token' \
--header 'Content-Type: application/json' \
--data-raw '{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFzZEBnbWFpbC5jb20iLCJpYXQiOjE2NTkyMTMzODV9.ldmThCtoERPgQDpTw6N695AS4ud98tBRsLmsAR-_tVM"
}'
```

#### Response (Status Code 200)
```bash
{
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFzZEBnbWFpbC5jb20iLCJpYXQiOjE2NTkyMTM1NTksImV4cCI6MTY1OTIxNzE1OX0.lN5UIIkQaSeZFymRL10YEYaft2NBgm7Ctr9qVhqF2Ng"
}
```

## Auth: logout
#### Request
```bash
curl --location --request DELETE 'http://localhost:3000/auth/logout' \
--header 'Content-Type: application/json' \
--data-raw '{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFzZEBnbWFpbC5jb20iLCJpYXQiOjE2NTkyMTMzODV9.ldmThCtoERPgQDpTw6N695AS4ud98tBRsLmsAR-_tVM"
}'
```

#### Response (Status Code 204)

# Cars API

These are the different methods available to interact with the Cars API


## Cars: create
#### Request
```bash
curl --location --request POST 'http://localhost:3000/api/v1/cars' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer {access_token}' \
--data-raw '{
    "licencePlate": "asd123",
    "brand": "toyota",
    "model": "corolla",
    "hybrid": true,
    "year": 1995,
    "images": [
        {
            "path": "tmp/img1.jpg",
            "mimeType": "image/jpeg"
        },
        {
            "path": "tmp/img2.jpg",
            "mimeType": "image/jpeg"
        }
    ]
}'
```

#### Response (Status Code 200)
```bash
{
    "_id": "62e57ff68dc591874992bdb3"
}
```

## Cars: list
#### Request
```bash
curl --location --request GET 'http://localhost:3000/api/v1/cars' \
--header 'Authorization: Bearer {access_token}'
```

#### Response (Status Code 200)
```bash
[
    {
        "_id": "62e43f10f7651b545ebbbee5",
        "createdAt": "2022-07-29T20:12:00.325Z",
        "updatedAt": "2022-07-29T20:12:00.325Z"
    },
    {
        "_id": "62e43fdccbb051bf434200a9",
        "createdAt": "2022-07-29T20:15:24.133Z",
        "updatedAt": "2022-07-29T20:15:24.133Z"
    },
    {
        "_id": "62e57ff68dc591874992bdb3",
        "createdAt": "2022-07-30T19:01:10.319Z",
        "updatedAt": "2022-07-30T19:01:10.319Z"
    }
]
```

## Cars: get
#### Request
```bash
curl --location --request GET 'http://localhost:3000/api/v1/cars/{carId}' \
--header 'Authorization: Bearer {access_token}'
```

#### Response (Status Code 200)
```bash
{
    "_id": "62e57ff68dc591874992bdb3",
    "licencePlate": "asd123456789",
    "brand": "toyota",
    "model": "corolla",
    "hybrid": true,
    "year": 1995,
    "images": [
        {
            "path": "tmp/img1.jpg",
            "mimeType": "image/jpeg"
        },
        {
            "path": "tmp/img2.jpg",
            "mimeType": "image/jpeg"
        }
    ],
    "createdAt": "2022-07-30T19:01:10.319Z",
    "updatedAt": "2022-07-30T19:01:10.319Z",
    "__v": 0
}
```

## Cars: update
#### Request
```bash
curl --location --request PATCH 'http://localhost:3000/api/v1/cars/{carId}' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer {access_token}' \
--data-raw '{
    "brand": "yaris"
}'
```

#### Response (Status Code 200)
```bash
{
    "_id": "62e57ff68dc591874992bdb3",
    "licencePlate": "asd123456789",
    "brand": "yaris",
    "model": "corolla",
    "hybrid": true,
    "year": 1995,
    "images": [
        {
            "path": "tmp/img1.jpg",
            "mimeType": "image/jpeg"
        },
        {
            "path": "tmp/img2.jpg",
            "mimeType": "image/jpeg"
        }
    ],
    "createdAt": "2022-07-30T19:01:10.319Z",
    "updatedAt": "2022-07-30T20:03:08.493Z",
    "__v": 0
}
```

## Cars: delete
#### Request
```bash
curl --location --request DELETE 'http://localhost:3000/api/v1/cars/{carId}' \
--header 'Authorization: Bearer {access_token}'
```

#### Response (Status Code 204)

