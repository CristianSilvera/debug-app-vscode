# Debug App con VSCode

Este proyecto configura un entorno de desarrollo con Node.js utilizando `yarn`, `express`, `nodemon` y `sucrase`. A continuación, se detallan los pasos para inicializar y ejecutar el proyecto.

## Requisitos previos

- Tener instalado [Node.js](https://nodejs.org/) y `yarn`.
- Un editor de código como [VSCode](https://code.visualstudio.com/).

## Instalación

1. **Inicializar el proyecto con Yarn:**
   ```sh
   yarn init -y
   ```
   Esto genera un archivo `package.json` con la configuración predeterminada.

2. **Instalar Express:**
   ```sh
   yarn add express
   ```
   Express es un framework web minimalista para Node.js.

3. **Instalar dependencias de desarrollo:**
   ```sh
   yarn add nodemon sucrase -D
   ```
   - `nodemon`: Reinicia automáticamente la aplicación cuando detecta cambios en los archivos.
   - `sucrase`: Permite utilizar características modernas de JavaScript sin necesidad de configurar Babel.

## Ejecución del Servidor

Para iniciar el servidor utilizando `sucrase-node`, ejecuta:
```sh
yarn sucrase-node src/server.js
```

## package.json configuración scripts

```
{
  "name": "debug-app-vscode",
  "version": "1.0.0",
  "main": "index.js",
  "repository": "git@github.com:CristianSilvera/debug-app-vscode.git",
  "author": "Cristian Silvera <cristiansilveraa@gmail.com>",
  "license": "MIT",
  
  "scripts": {
    "dev": "nodemon src/server.js"
  },  

  "dependencies": {
    "express": "^4.21.2"
  },
  "devDependencies": {
    "nodemon": "^3.1.9",
    "sucrase": "^3.35.0"
  }
}

```
Si corremos el comando ``` yarn dev ``` utilizará node y no sucrase-node, por ese motivo no entienda el import, export. 

Para corregir esto, creamos un archivo llamado nodemon.json

``` 
{
    "execMap": {
        "js": "sucrase-node"
    }
}

```

Ahora si podremos ejecutar el comando:
```
yarn dev

```
Para acceder a la lista de users:
```
http://localhost:3333/

```


