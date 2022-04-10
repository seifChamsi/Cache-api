
# Cache API

a REST API that exposes methods to interact with a cache that you will
build. You will have to use Node.js and Express.js to build the API and MongoDB to store the
cache data in. The cache does not have another data source in the background that is cached.
# Get started
- Make a new MongoDb instance then paste the connection string in **config/default.ts**
 - Start your terminal :
```bash

$ npm run install
$ npm run dev
```
# Used Techonlogies
- Typescript / ES6+
- NodeJs/Express
- MongoDB 

# Available endpoints 
## API Reference

#### Create one cache item

```http
  POST /api/cache/
```

| Request Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Key`      | `string` | **Required**. key of cache item to fetch |

#### Get all cache items

```http
  GET /api/cache
```


#### Get one cache item by key

```http
  GET /api/cache/:key
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Key`      | `string` | **Required**. key of cache item to fetch |

#### Delete one cache item by key
```http
  DELETE /api/cache/:key
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Key`      | `string` | **Required**. key of cache item to fetch |

#### Delete all cache items by key
```http
  DELETE /api/cache/
```



