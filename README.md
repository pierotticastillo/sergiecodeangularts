# Sergiecodeangularts 🚀

![Angular Logo](https://angular.io/assets/images/logos/angular/angular.svg)

Este es un pequeño proyecto de repaso siguiendo el canal de [FreeCodeCamp en español](https://www.youtube.com/@freecodecampes) y el contenido de GitHub de [sergiecode](https://gist.github.com/sergiecode). 

El proyecto está desarrollado con **Angular 18** ⚡ y trabaja con dos tablas cuyos datos se manejan de forma estática en el frontend. Se han definido las siguientes interfaces:

```typescript
export interface Alumno {
    nombre: string;
    apellido: string;
    promedio: number;
}

export interface Curso {
    materia: string;
    dificultad: string;
    requiere: string;
}
```

## 📌 Servidor de desarrollo

Ejecuta `ng serve` para iniciar un servidor de desarrollo. Luego, navega a `http://localhost:4200/`. La aplicación se recargará automáticamente si realizas cambios en los archivos fuente.

## ⚙️ Generación de código

Ejecuta `ng generate component nombre-del-componente` para generar un nuevo componente. También puedes usar `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## 🔨 Construcción

Ejecuta `ng build` para compilar el proyecto. Los archivos generados se almacenarán en el directorio `dist/`.

## ✅ Pruebas unitarias

Ejecuta `ng test` para ejecutar las pruebas unitarias con [Karma](https://karma-runner.github.io).

## 🧪 Pruebas end-to-end

Ejecuta `ng e2e` para ejecutar las pruebas end-to-end mediante una plataforma de tu elección. Para usar este comando, primero debes agregar un paquete que implemente capacidades de pruebas end-to-end.

## ℹ️ Ayuda adicional

Para obtener más ayuda sobre Angular CLI, usa `ng help` o consulta la [documentación oficial de Angular CLI](https://angular.dev/tools/cli).

## 📄 Licencia

Este proyecto está bajo la licencia [MIT](./LICENSE).
