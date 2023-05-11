# Google Map Proxy API (poc-api-google-ts)

Esta API permite realizar búsquedas y autocompletar direcciones utilizando la API de Google Maps.

### Requisitos

Node.js (v14 o superior)
Docker

###Instalación
Clona este repositorio: git clone https://github.com/alejandropprado/poc-api-google-ts.git
Ingresa al directorio del proyecto: cd **poc-api-google-ts**

Crea un archivo **.env** en el directorio raíz del proyecto con las siguientes variables de entorno:

```
PORT=3000
GOOGLE_MAPS_API_KEY=TU_API_KEY
```

Asegúrate de reemplazar TU_API_KEY con tu propia clave de API de Google Maps.

Instala las dependencias del proyecto: `npm install`

Inicia la aplicación: `npm start`

### Uso

#### Endpoint de geocodificación

Este endpoint permite obtener la información geográfica de una dirección.

**Request**

- URL: /api/geocode/address/:direccion-a-buscar
- Método: GET

**Response**

```json
{
  "address": "Avenida el Retiro 9800",
  "commune": "Pudahuel",
  "region": "Región Metropolitana",
  "province": "Santiago",
  "country": "Chile",
  "geolocation": {
    "lat": -33.397291,
    "lng": -70.7697196
  },
  "precision": "ROOFTOP",
  "number": "9800",
  "zip_code": ""
}
```

**Ejemplo de uso**

```bash
GET http://localhost:3000/api/geocode/address/Av.%20El%20Retiro%209800%20pudahuel
```

### Endpoint de autocompletado

Este endpoint permite autocompletar direcciones.

**Request**

- URL: /api/autocomplete/:texto
- Método: GET

**Response**

```json
[
  {
    "place_id": "ChIJY04ueKHBYpYRMXg2u6ccMcE",
    "description": "Avenida el Retiro 9800, Pudahuel, Renca, Chile"
  },
  {
    "place_id": "ChIJEfT89LHdYpYRqfQpEZBCtr0",
    "description": "AV EL RETIRO 9800 PUDAHUEL - Reina de España, Maipú, Maipu, Chile"
  },
  {
    "place_id": "Ejw5ODAwIEF2ZW5pZGEgRWwgUmV0aXJvLCBDYXJhY2FzLCBDYXBpdGFsIERpc3RyaWN0LCBWZW5lenVlbGEiLiosChQKEglXpMXS_lgqjBEoHX8-FVn3EhIUChIJ88bP9r1YKowRr_Wj7uND9aQ",
    "description": "9800 Avenida El Retiro, Caracas, Capital District, Venezuela"
  },
  {
    "place_id": "EiZBdmVuaWRhIEVsIFJldGlybyA5ODAwLCBRdWlscHVlLCBDaGlsZSIuKiwKFAoSCVnVJnZq2YmWETP1sMJtvscCEhQKEgmnpbWi9X5ilhE5czEscR9aPg",
    "description": "Avenida El Retiro 9800, Quilpue, Chile"
  },
  {
    "place_id": "EjBBdmVuaWRhIEVsIFJldGlybyA5ODAwLCBRdWlscHXDqSwgUXVpbHB1ZSwgQ2hpbGUiLiosChQKEglHOPVqEtmJlhGKPQ2UEUlwxhIUChIJp6W1ovV-YpYRkp8yfz-l2VA",
    "description": "Avenida El Retiro 9800, Quilpué, Quilpue, Chile"
  }
]
```

**Ejemplo de uso**

```bash
GET http://localhost:3000/api/autocomplete/Avenida%20el%20Retiro%209800
```

### Docker

También puedes correr la aplicación utilizando Docker. Para ello, asegúrate de haber creado el archivo .env con las variables de entorno necesarias (ver sección anterior).

```bash
docker build -t poc-api-google-ts .
docker run -p 8080:3000 -e GOOGLE_MAPS_API_KEY="TU_API_KEY" poc-api-google-ts
```

Reemplaza **TU_API_KEY** con tu propia clave de API de Google Maps.
