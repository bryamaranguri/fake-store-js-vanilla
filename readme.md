# Assessment 1: Aplicación Web con JavaScript Vanilla

## Instrucciones

En este proyecto, desarrollarás una aplicación web que consuma la [Fake Store API](https://fakestoreapi.com/) y muestre productos dinámicamente. El objetivo principal es listar productos en la página principal y agregar un temporizador para cada producto que deshabilitará el botón de compra cuando finalice el tiempo.

**Grupo 6:** Bryam Aranguri, Antony Alexis Efren Antezana Cavero

### Requerimientos:

1. **Interfaz:**

   - Debes usar **Flexbox CSS** para organizar la estructura y presentación de los productos.
   - Cada producto debe mostrarse en una **tarjeta** que incluya:
     - Título
     - Imagen
     - Precio
     - Descripción
     - Categoría
     - Botón de compra (contemporizado)

2. **Consumo de API:**

   - Usar la **Fake Store API** para obtener la lista de productos. Aquí tienes un ejemplo de la respuesta:

     ```json
     {
       "id": 1,
       "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
       "price": 109.95,
       "description": "Your perfect pack for everyday use and walks in the forest.",
       "category": "men's clothing",
       "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
       "rating": {
         "rate": 3.9,
         "count": 120
       }
     }
     ```

3. **Temporizador de Productos:**

   - Cada producto tendrá un **contador de tiempo aleatorio** (entre 1 y 3 minutos).
   - Al finalizar el tiempo, el botón de **Comprar** debe quedar **deshabilitado** y no ser clickeable.

4. **Código en un Repositorio:**

   - El código de tu proyecto debe estar en un **repositorio público** de GitHub, bajo tu autoría.

5. **Bonus Points:**
   - Implementar el CSS usando **BEM** o **CSS Modules** para organizar los estilos de manera eficiente.

#### Página Principal (Home Page):

- La página principal será responsable de:
  - Listar los productos obtenidos de la Fake Store API.
  - Implementar la lógica para deshabilitar los botones de compra después de que el temporizador finalice.

#### Ejemplo de Comportamiento Esperado:

- **Ejemplo-1**: Tiene un tiempo de **1 minuto**. Al finalizar el minuto, el botón de comprar debe deshabilitarse.
- **Ejemplo-2**: Tiene un tiempo de **3 minutos**. Al finalizar este tiempo, el botón de comprar debe quedar inactivo.
- **Ejemplo-3**: Muestra un tiempo aleatorio, pero siempre desactiva el botón de comprar al concluir el conteo.

<p align="center">
  <img src="https://s3.amazonaws.com/makeitreal/images/classroom-prod/4bb1e1f7dac876a6e5f1ccb0eeb5b715.gif" alt="Ejemplo de comportamiento esperado">
</p>

### Recursos Sugeridos:

- [Fake Store API](https://fakestoreapi.com/)

### Objetivo General:

Con este ejercicio, practicarás:

- **Manejo del DOM** para crear elementos dinámicamente.
- **Eventos en el DOM**, como deshabilitar botones.
- **Consumo de APIs** con JavaScript Vanilla.
- Uso de **Flexbox CSS** para organizar la interfaz.

---

Este es un ejercicio práctico que combina conceptos de JavaScript Vanilla, CSS y trabajo con APIs, permitiéndote construir una pequeña aplicación web con lógica interactiva.
