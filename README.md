# **the-auto-mart-api v1**
[![Build Status](https://travis-ci.com/amkayondo/the-auto-mart-api.svg?branch=develop)](https://travis-ci.com/amkayondo/the-auto-mart-api)  [![Maintainability](https://api.codeclimate.com/v1/badges/ed2dd9d6f60c92900606/maintainability)](https://codeclimate.com/github/amkayondo/the-auto-mart-api/maintainability) [![Coverage Status](https://coveralls.io/repos/github/amkayondo/the-auto-mart-api/badge.svg?branch=develop)](https://coveralls.io/github/amkayondo/the-auto-mart-api?branch=develop)

Auto Mart is an online marketplace for automobiles of diverse makes, model or body type. With Auto Mart, users can sell their cars or buy from trusted dealerships or private sellers

## Required features
- User can **sign up**.
- User can **sign in**.
- User (**seller**) can post a car **sale advertisement**.
- User (**buyer**) can make a **purchase order**.
- User (**buyer**) can update the price of his/her purchase order.
- User (**seller**) can mark his/her posted AD as **sold**.
- User (**seller**) can **update** the price of his/her posted AD.
- User can view a **specific car**.
- User can view **all unsold cars**.
- User can view all unsold cars **within a price range**.
- **Admin** can delete a posted AD record.
- **Admin** can view all posted ads whether sold or unsold

## **Technologies**
- **Express JS**
- **Joi**
- **Node**
- **Mocha and Chai**
- **ESLint**

## Requirements and Installation steps
   **You need the following to be able to run the application**

[Node](https://nodejs.org/en/download/) for to run JavaScript
    
    
[Postman](https://www.getpostman.com/downloads/) to test the Api endpoints

[Visual studio code](https://code.visualstudio.com/download) for editing and running the app

## **Clone the project** 
    - git clone https://github.com/amkayondo/the-auto-mart-api-v1.git
    - cd the-auto-mart-api-v1
    - npm install (to install app dependencies)

## **Testing**
    - npm run test


## **API endpoints**
`- POST /auth/signin - User Login` 

`- POST /auth/signup - User to create an account` 

`- POST /car/ - Post anew car advert` 

`- POST /order/ - Post anew order` 

`- PATCH /order/<:order-id>/price - Update price order` 

`- PATCH /car/<:car-id>/status - Get car status` 

`- PATCH /car/<:car-id>/price - Get car price` 

`- GET /car/<:car-id>/ - Get car by ID` 

`- GET /car?status=available - Get available cars` 

`- GET /car?status=available&min_price=XXXValue&max_price=XXXValue - Get available cars with price range`

`- DELETE /car/<:car_id>/ - Delete a car` 

`- GET /car/ - Admin can view all posted ads whether sold or unsold. `

## **Pivotal Tracker Stories**
[https://www.pivotaltracker.com/n/projects/2346076](https://www.pivotaltracker.com/n/projects/2346076)

## **UI Templates**

[https://amkayondo.github.io/auto-mart/](https://amkayondo.github.io/auto-mart/)

## **ApI**
[https://automart-one.herokuapp.com/api/v1/](https://automart-one.herokuapp.com/api/v1/)

## **Author**
**Kayondo Edward**
