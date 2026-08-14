# mi_primer_proyecto_angular

Proyecto de prueba en **Angular** (CLI 22.1.4). Es una mini tienda llamada "KiwiShop" que muestra un título, una barra de búsqueda y una tarjeta de producto.

## Cómo se creó

Se generó con el Angular CLI:

```bash
ng new mi_primer_proyecto_angular --style=scss
```

Para correr la app:

```bash
ng serve
```

Y abrir `http://localhost:4200/`.

## Estructura

```
src/app/
├── app.module.ts              # Módulo principal de la app
├── app.component.*            # Componente raíz (título + estilos generales)
    └── components/
    ├── search/                # Componente de búsqueda
    └── carshop/               # Componente de tarjeta de producto
```

## Componentes

- **App**: componente raíz, muestra el encabezado y junta todo.
- **Search**: formulario de búsqueda de productos.
- **Carshop**: tarjeta de producto con precio y botón "ADD TO CART".
