# ecommerce-backend

This is the backend for e-commerce website. 

Developed using express, node, typescript & OOP, which includes sorting & pagination.

## Usage

***Create .env file in the project root directory, copy the .env.example content in the .env file & add your keys*** 

***Go to the root directory of the project, open your terminal & run the following commands in oreder**
```
1- npm install

2- npm run dev
```

## There are 3 query params that must be set when sending the requests
```

1- limit => how many items do you want per page.

2- page => the page number you want.

3- sort => the field you want to sort the data by (ex. "-price" means descending & "price" means ascending)

```

## Live links depolyed on heroku for the APIs

1- electronics => [https://floating-lake-77552.herokuapp.com/products/electronics?limit=9&page=1&sort=name](https://floating-lake-77552.herokuapp.com/products/electronics?limit=9&page=1&sort=name)

2- fruits => [https://floating-lake-77552.herokuapp.com/products/fruits?limit=2&page=1&sort=-name](https://floating-lake-77552.herokuapp.com/products/fruits?limit=2&page=1&sort=-name)

3- vegetables => [https://floating-lake-77552.herokuapp.com/products/vegetables?limit=4&page=1&sort=-price](https://floating-lake-77552.herokuapp.com/products/vegetables?limit=4&page=1&sort=-price)




## Tools & Libraries

```
1- express (web framework for Node.js)

2- auto-bind (automatically bind methods to their class instance)

3- cors

4- dotenv (loads environment variables from a .env file)

5- express-async-handler (middleware for handling exceptions)

6- helmet (secure Express apps with HTTP headers)

7- http-status (HTTP status codes)

8- joi (validations)

9- lodash

10- eslint

11- prettier

12- mongoose

13- mongoose-lean-virtuals (attach virtuals to the results of mongoose queries)

14- morgan (HTTP request logger middleware)

15- winston (logger)

16- typescript

```

**Link for the frontend repo, which consumes this backend APIs [https://github.com/MorcosBishay/ecommerce-frontend](https://github.com/MorcosBishay/ecommerce-frontend)**


