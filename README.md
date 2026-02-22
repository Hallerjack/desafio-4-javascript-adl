# Desafío 4: Inmobiliaria

Desafío realizado para la tercera evaluación de **Desafío Latam - Módulo 3: Javascript**, Carrera Desarrollo Fullstack. G107.

### Instrucciones dadas:

Aplicando los conceptos y herramientas aprendidas hasta ahora, en este desafío deberás programar la renderización dinámica de propiedades inmobiliarias y aplicar estilos a partir de condicionales.

En la página de inicio se deben renderizar máximo 3 propiedades en venta y 3 propiedades en alquiler, además se deben incluir botones en cada sección para poder visualizar todas las propiedades en venta o alquiler, tal como lo muestra la imagen de referencia mostrada en la siguiente página.

En el menú de navegación se deben agregar enlaces los cuales dirigirán a dos páginas:

- propiedades_venta.html
- propiedades_alquiler.html

En cada página del sitio deberás llamar al arreglo de objetos que corresponda renderizando todas las propiedades que se encuentran en el arreglo.

En el caso del atributo smoke y pets, utilizar un condicional que muestre un mensaje o alerta, además de modificar el ícono en caso de que sea true || false, para mostrar si está permitido o prohibido fumar o tener mascotas

### Requisitos solicitados:

1. Crear las páginas solicitadas para las propiedades en alquiler y venta. Además, cada una se conecta al script con el arreglo de propiedades que corresponda. Considerar, además, que existirá una página index.html que será la principal.(1 punto).

2. Generar dos arreglos de propiedades (Uno para venta y otro para alquiler) que cumplan la siguiente estructura que se muestra de ejemplo. Una vez generados los arreglos de objetos para las propiedades en alquiler y en venta, añade al menos 4 objetos en cada arreglo.(2 puntos).

- Ejemplo: 

```javascript
    const propiedadesAlquiler = [
        {
            nombre: '',
            src: '',
            descripcion: '',
            ubicacion: '',
            habitaciones: 0,
            baños: 0,
            costo: 000,
            smoke: false,
            pets: true
        },
    ]
```

3. Utilizar ciclos para recorrer el arreglo de con los objetos de propiedades y la interpolación y el innerHTML para generar templates y agregar la de las propiedades en su respectiva página HTML. (4 Puntos).

4. Utilizar condicionales para realizar la lógica asociada en caso de que se permitan mascotas y fumar en la propiedad. (2 Puntos).

5. En la página index.html, mostrar solo 3 propiedades en venta y 3 propiedades en alquiler. Tal como se muestra en la imagen 1, enlaza el botón a su respectiva página web para ver más propiedades. (1 punto)

## Lenguajes utilizados

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/es/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/es/docs/Web/CSS)
[![Javascript](https://shields.io/badge/JavaScript-F7DF1E?logo=JavaScript&logoColor=000&style=flat-square)](https://developer.mozilla.org/es/docs/Web/Javascript)

## Herramientas utilizadas

[![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)](https://git-scm.com/)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/)

## Funcionalidades trabajadas

- ✅ Arreglos
- ✅ Objetos
- ✅ Arreglos de Objetos
- ✅ Bucles for of
- ✅ Interpolación
- ✅ Modificación del DOM
- ✅ Funciones
- ✅ Condicionales
- ✅ Variables
- ✅ Operadores aritméticos
- ✅ Operadores de comparación
- ✅ Operadores logísticos
- ✅ querySelector
- ✅ innerHTML

## 👨‍💻 Autor
Fernando González Díaz - Diseñador web / Desarrollador Front-End

---

*Proyecto desarrollado como parte del bootcamp Full Stack JavaScript de Desafío Latam - 2026*