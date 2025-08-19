# Marketplace

## Stack:

+ Backend:
    + C#
    + ASP.NET Core
    + Entity Framework Core
    + JWT Auth
    + DDD
    + Clean Architecture
    + xUnit + FakeItEasy
    + MailKit
    + FluentValidation
    + AutoMapper
    + StackExchange.Redis
    + MongoDb.Driver


+ Databases:
    + Postgres
    + Redis
    + MongoDB


+ Frontend:
    + React.js
    + JavaScript
    + HTML
    + CSS
    + Redux
    + TailwindCSS

## About the project
Проект являвется вроде аналогом Aliexpress, есть как пользователи-покупатели так и пользователи-продавцы.
Покупатель может покупать, оценивать товар и класть в корзину.
Продавец может создавать, менять, удалять товар.

Ниже есть ссылка видео где можете посмотреть что из себя представляет проект. 

## How to run:

```
sudo docker-compose up --build 
```
Сайт запущен на localhost:80.

Не забудьте переделать User Secrets (об этом ниже). 


## Youtube Overview:

[![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/fYVWTa-BLrk/0.jpg)](https://www.youtube.com/watch?v=fYVWTa-BLrk)

## API Overview:

#### SellerController (/api/seller-controller)

- GET /{guid} – Get seller by ID
- POST /accountcreate – Register a new seller

#### CustomerController (/api/customer-controller)

- POST /accountcreate – Register a new customer
- PATCH /addcard – Add a credit card to a customer account

#### BaseLoginController (/api/baselogincontroller)

- POST /login – User login
- GET /userinfo – Get current user info (customer or seller).
- PUT /coderesend/{userId} – Resend email verification code.
- PUT /tokensupdate – Update JWT tokens using a refresh token.
- POST /emailverify – Verify email with a code.

#### ReviewController (/api/reviews)

- GET /{categoryId} – Get the current user’s review for a category.
- GET / – Get reviews for a category (paginated).
- POST / – Add a review to a purchased category.
- PUT / – Update an existing review.
- DELETE /{guid} – Delete a review by ID.

#### ProductsController (/api/products)

- GET /recommendation – Get general product recommendations.
- GET /recommendation-by-tag/{tag} – Get recommendations by tag.
- GET /{guid} – Get product category by ID.
- GET /categories – Get product categories.
- GET /purchased-products – Get purchased products for a customer.
- GET /category-name-is-free/{name} – Check if a product category name is available.
- POST / – Create a new product category.
- PUT / – Update an existing product category.
- PATCH /buy – Buy one or multiple product categories.
- DELETE /{guid} – Delete a product category.

#### ImagesController (/api/images)

- GET /{guid} – Get image by ID.
- GET /by-category-id/{categoryId} – Get images by product category.

## The UserSecrets Example:

1) Создайте bd1f8802-13a0-4b5f-891d-3be2cef1574c.json
2) Введите данный json (замените пороли на свои):

```json
{
  "UserSecrets": {
    "Email": {
      "Address": "googlepidori@yander.ru",
      "Password": "email_password"
    },
    "RedisConnectionStr": "redis:6379",
    "PostgresConnectionStr": "Server=postgres;Database=marketplace;Port=5432;User Id = postgres;Password=pg_password;Pooling=true",
    "MongoDb": {
      "ConnectionString": "mongodb://mongodb:27010/",
      "DatabaseName": "marketplacemongodb",
      "ImagesCollectionName": "images"
    },
    "Jwt": {
      "Issuer": "localhost",
      "AlgorithmForAccessToken": "HS256",
      "AccessTokenExpiresMinutes": 15,
      "AccessTokenNameInCookies": "jwtToken",
      "AccessTokenSecretKey": "accesstokensecretkeyaccesstokensecretkeyaccesstokensecretkeyaccesstokensecretkey",
      "AlgorithmForRefreshToken": "RS256",
      "RefreshTokenExpiresDays": 10,
      "RefreshTokenNameInCookies": "jwtToken",
      "RefreshTokenSecretKey": "secretKeysecretKeysecretKeysecretKeysecretKeysecretKeysecretKeyvsecretKeysecretKeysecretKey"
    }
  }
}
```