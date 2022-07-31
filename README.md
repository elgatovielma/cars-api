# How to run 
Open a terminal and make sure your current directory is the same where you have the **docker-compose.yml** file

Then run the following command to start the application:
```bash
docker-compose up
```


# Auth API

Prior to being able to use the Cars API. First, you must authenticate using the Auth API.
* Login: Returns an access token for your Cars API requests and a refresh token.
* Token: Returns a new access token using the refresh token.
* Logout: Removes a refresh token.
  
<details><summary>Auth: login</summary> 
<p>

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
</p>
</details>

<details><summary>Auth: token</summary> 
<p>

#### Request
```bash
curl --location --request POST 'http://localhost:3000/auth/token' \
--header 'Content-Type: application/json' \
--data-raw '{
    "token": "{refresh_token}"
}'
```

#### Response (Status Code 200)
```bash
{
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFzZEBnbWFpbC5jb20iLCJpYXQiOjE2NTkyMTM1NTksImV4cCI6MTY1OTIxNzE1OX0.lN5UIIkQaSeZFymRL10YEYaft2NBgm7Ctr9qVhqF2Ng"
}
```

</p>
</details>

<details><summary>Auth: logout</summary> 
<p>

#### Request
```bash
curl --location --request DELETE 'http://localhost:3000/auth/logout' \
--header 'Content-Type: application/json' \
--data-raw '{
    "token": "{refresh_token}"
}'
```

#### Response (Status Code 204)

</p>
</details>

# Cars API

These are the different methods available to interact with the Cars API.
* Create: Insert a new car.
* List: Read meta-data of all cars in the system.
* Get: Read the full data of an individual car.
* Update: Updaten single properties of a single car.
* Delete: Remove an individual car.

<details><summary>Cars: create</summary> 
<p>

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

</p>
</details>

<details><summary>Cars: list</summary> 
<p>

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

</p>
</details>

<details><summary>Cars: get</summary> 
<p>

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

</p>
</details>

<details><summary>Cars: update</summary> 
<p>

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

</p>
</details>

<details><summary>Cars: delete</summary> 
<p>

#### Request
```bash
curl --location --request DELETE 'http://localhost:3000/api/v1/cars/{carId}' \
--header 'Authorization: Bearer {access_token}'
```

#### Response (Status Code 204)

</p>
</details>