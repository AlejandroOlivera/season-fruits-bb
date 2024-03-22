# Proyecto de Frutas de Temporada

## Descripción
Este proyecto es una aplicación que muestra las frutas de temporada.

## Tecnologías Utilizadas
- TypeScript
- SCSS
- React
- Vite
- Zustand
- Bootstrap
- Storybook
- Axios

## Requisitos
- Node.js v20.11.1
- pnpm v8.15.5

## Problemas de CORS
Durante el desarrollo de este proyecto, se encontraron problemas de CORS al hacer peticiones a la API. Para solucionar esto, se utilizó un proxy CORS. Debes agregar la siguiente línea a tu archivo `.env` :

```
VITE_APP_BASE_URL=https://cors-anywhere.herokuapp.com/https://www.fruityvice.com/api
```

Además, se realizan solicitudes a `https://cors-anywhere.herokuapp.com/corsdemo`. Asegúrate de tener los permisos necesarios para hacer solicitudes a esta URL.



## Instalación
Para instalar las dependencias del proyecto, sigue estos pasos:

1. Clona el repositorio:

```
git clone https://github.com/AlejandroOlivera/season-fruits-bb.git
```

2. Navega al directorio del proyecto:

```
cd season-fruits-bb
```

3. Instala las dependencias con pnpm:

```
pnpm install
```

## Uso
Para iniciar la aplicación, ejecuta:

```
pnpm start
```


## Contribuir
Las contribuciones son bienvenidas. Por favor, abre un issue o realiza un pull request.

## Licencia
MIT
