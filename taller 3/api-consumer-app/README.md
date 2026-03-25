# ApiConsumerApp

Esta aplicación Angular consume una API REST pública (JSONPlaceholder) para mostrar una lista de usuarios.

## Funcionalidades

- Consume la API de usuarios de JSONPlaceholder (https://jsonplaceholder.typicode.com/users)
- Muestra los datos en una tabla con columnas: ID, Name, Username, Email, Phone
- Manejo básico de errores: muestra un mensaje si falla la petición
- Usa HttpClient de Angular para las peticiones HTTP
- Arquitectura limpia: servicio para lógica de datos, componente para presentación

## Instalación y ejecución

1. Instalar dependencias:
```bash
npm install
```

2. Ejecutar el servidor de desarrollo:
```bash
npm start
```

3. Abrir en el navegador: `http://localhost:4200/` (o el puerto que indique la consola)

## Estructura del proyecto

- `src/app/app.config.ts`: Configuración de HttpClient
- `src/app/data.service.ts`: Servicio para consumir la API
- `src/app/app.ts`: Componente principal que muestra los datos
- `src/app/app.html`: Template con la tabla de usuarios

## Tecnologías utilizadas

- Angular 21
- HttpClient para peticiones HTTP
- RxJS para manejo de observables
- Signals para estado reactivo
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
