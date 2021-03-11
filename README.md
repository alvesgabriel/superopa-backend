# superopa-backend

Technical challenge to Super Opa

**Obs: `node` and `npm` are required to run this project**

## Install dependences

```bash
npm install
```

## Run project

```bash
node app.js
```

## Endpoints

### /ordenaLista

#### Request

```http
POST http://localhost:8080/ordenaLista
```

##### Body

```json
{
    "listas": {
        "salaN": [1, 5, 7, 8],
        "salaS": ["a", "x", "n"]
    }
}
```

#### Response

```json
{
    "listas": {
        "salaN": [1, 5, 7, 8],
        "salaS": ["a", "x", "n"]
    }
}
```

### /interlace

#### Request

```http
GET http://localhost:8080/interlace
```

##### Body

```json
{
    "intervaloA": [20, 40],
    "intervaloB": [10, 60]
}
```

#### Response

```json
true
```
