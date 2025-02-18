# Ejercicio Prueba Técnica

### Pre-requisitos 📋

_Herramientas necesarias para el correcto funcionamiento:_

```
Xampp
```
```
Workbench
```

## Instalación ⚙️


1. Descargar y ejecutar Xampp (Encender MySQL en el panel de control)

2. Ejecutar MySQL Workbench y crear la base de datos:

```
CREATE DATABASE managerenterprisedb;
```   

4. Clonar proyecto  

5. Usar el comando de npm para instalar las dependencias y posteriormente iniciar el servidor con 'run dev':

```
npm i
```
```
npm run dev
```

6. Levantado el servidor, empezar a probar los enpoints :D

## :computer: Endpoints:

## Endpoint de creación de Usuarios :raising_hand:

### POST: /api/v1/users

Ejemplo De Solicitud: 

```json
{
    "docUser": 105470388,
    "name": "Charly García",
    "email": "charlyg123@gmail.com"
}
```

### POST: /api/v1/enterprises

Ejemplo De Solicitud: 

```json
{
  "nitEnterprise": 107307536,
  "name": "Los pollos hermanos",
  "direction": "Calle 30#55-10"
}
```

### POST: /api/v1/pointsSale

Ejemplo De Solicitud: 

```json
{
  "name": "Centro comercial La Bomba",
  "direction": "Calle 50#11-13"
}
```

### POST: /api/v1/users/enterprises

Ejemplo De Solicitud (Asociar Usuarios con empresas): 

```json
{
  "docUser": 10289433,
  "nitEnterprise": 120974054,
  "idRol": 1
}
```

### POST: /api/v1/enterprises/pointsSale

Ejemplo De Solicitud: 

```json
{
    "nitEnterprise": 120974054,
    "idPoint": 1
}
```
   
* _https://drive.google.com/file/d/1NQZOUMFGcDkyjmJb1sEMXnro_uvZLqso/view?usp=sharing_ Video de Demostración

## Construido con 🛠️


* ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
* ![Express](https://img.shields.io/badge/Express-gray?style=for-the-badge&logo=express&logoColor=white)
* ![MYSQL](	https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white)



