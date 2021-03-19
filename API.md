## API

#### Valid JSON Request body

```
{
	"id":"8",
	"title":"test3",
	"category":"snacks",
	"description":"bought tea and snakcs",
	"amount":"100"
}
```

#### Date Format

```
Dates are in dd-mm-yyyy format
```

### POST

- `http://localhost:3000/api/expense`

### PUT :

- `http://localhost:3000/api/expense/:id`

### DELETE :

- `http://localhost:3000/api/expense/:id`

### GET

- `http://localhost:3000/api/expense`
- `http://localhost:3000/api/expense/:startDate/:endDate?`
- `http://localhost:3000/api/expense/:category/:startDate/:endDate?`
