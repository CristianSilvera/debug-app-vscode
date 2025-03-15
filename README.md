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
## Run and debug run

1 - Debo ir a "crear a launch.json fire"
2 - Me crea un archivo launch.json con una configuración por defecto

```
{
    // Use IntelliSense to learn about possible attributes.
    // Hover to view descriptions of existing attributes.
    // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
    
        {
            "type": "node",
            "request": "launch",
            "name": "Launch Program",
            "skipFiles": [
                "<node_internals>/**"
            ],
            "program": "${workspaceFolder}\\src\\server.js"
        }
    ]
}

```

3 - Realizar configuración del nodemon.json

```
{
    "execMap": {
        "js": "node --inspect -r sucrase/register"
    }
}
```
-r indica que será el primer script a ser ejecutado, antes de node lea la app. 

Nuevamente ejecutar 'yarn dev' 

```
Debugger listening on ws://127.0.0.1:9229/9a08abd6-67ec-4d8f-a4de-e1b6469c73ff
For help, see: https://nodejs.org/en/docs/inspector
Debugger attached.

```
Cambios a realizar en launch.json:

```
{
    // Use IntelliSense to learn about possible attributes.
    // Hover to view descriptions of existing attributes.
    // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
    
        {
            "type": "node",
            "request": "attach",
            "protocol": "inspector",
            "restart": true,
            "name": "Launch Program",
            "skipFiles": [
                "<node_internals>/**"
            ]
        }
    ]
}
```
Colocar un breackpoint en server.js para analizar el codigo:



Docs:

https://www.npmjs.com/package/sucrase