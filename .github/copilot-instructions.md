# Kivra Nutrir - AI Assistant Instructions# Guía para Agentes IA - Proyecto Kivra Nutrir



## Project Overview## Arquitectura General

Kivra Nutrir is a single-page e-commerce website for healthy snack bars and granolas. It's a vanilla JavaScript application with a responsive design, featuring a shopping cart system and WhatsApp integration for order completion.

Este es un sitio web de e-commerce para una tienda de productos saludables (Kivra Nutrir) con las siguientes características principales:

## Architecture & Key Files

### Estructura de Archivos

### Core Structure- `index.html` - Estructura principal del sitio

- **`index.html`**: Single-page layout with header, navigation, product sections, modal, and sidebar cart- `Kivra.css` - Estilos principales

- **`Kivra.js`**: Main application logic (666 lines) - all functionality in one file- `celulares.css` - Estilos responsivos

- **`Kivra.css`**: Primary styles with CSS custom properties (1539 lines)- `Kivra.js` - Lógica de la aplicación

- **`celulares.css`**: Responsive breakpoints and mobile-first adaptations

- **`imagenes/`**: Product images organized by type (barritas, granolas, logos)### Componentes Principales



### Data Architecture1. **Sistema de Productos**

Products are stored as JavaScript objects in `Kivra.js`:   - Catálogo definido en `productos` (objeto en Kivra.js)

```javascript   - Categorías: barritas, granolas, promos

const productos = {   - Cada producto tiene: nombre, precio, descripción, imagen

    barritas: [...],    // Individual bars with name, price, description, image

    granolas: [...],    // Granola products including oils2. **Sistema de Carrito**

    promos: [...]       // Bundle deals with discount pricing   - Módulo `carritoModule` para gestión del carrito

}   - Almacenamiento local para persistencia

```   - Múltiples vistas: sidebar, modal, mini-carrito



## Key Patterns & Conventions3. **Sistema de Búsqueda y Filtrado**

   - Búsqueda en tiempo real

### Module Pattern   - Filtrado por categorías

The app uses a module-like pattern with namespaced objects:   - Renderizado dinámico de resultados

- `carritoModule`: Cart functionality (add, remove, persist via localStorage)

- `productosModule`: Product display, filtering, modal pagination## Patrones y Convenciones



### State Management### Variables CSS

- Global variables: `carrito[]`, `total`, pagination flags```css

- localStorage persistence: `'kivraCarrito'` and `'kivraTotal'` keys:root {

- No frameworks - pure DOM manipulation  --crema: #fdf1d6;

  --marron: #4b2c16;

### UI Interaction Patterns  --verde-oscuro: #2e7031;

1. **Multiple Cart Views**: Header dropdown, modal sidebar, main sidebar - all sync via `actualizarMiniCarrito()`  /* etc... */

2. **Product Display**: Grid layout with "Ver más" buttons that toggle between limited/full views}

3. **Modal System**: Single modal (`#modal-productos`) reused for different product categories```

4. **Search**: Real-time filtering that hides categories and shows results inline

### Estructura de Módulos JS

### Responsive Design```javascript

- CSS custom properties for theming (crema, marron, verde color scheme)const nombreModule = {

- `celulares.css` handles all breakpoints with mobile-first approach    // Estado interno

- Grid layouts adjust from 4 columns → 3 → 2 → 1 based on screen size    estado: [],

    

### WhatsApp Integration    // Métodos públicos

Orders complete via WhatsApp Web API:    metodoPublico() {},

```javascript    

window.open(`https://wa.me/5493482676690?text=${encodeURIComponent(mensaje)}`, "_blank");    // Métodos de renderizado

```    renderizar() {}

Phone number and message format are hardcoded in `finalizarCompra()`.};

```

## Development Workflows

### Manejo de Mensajes

### Adding Products```javascript

1. Add to appropriate array in `productos` object in `Kivra.js`function mostrarMensaje(mensaje, tipo) {

2. Ensure image exists in `imagenes/` folder with exact filename match    // Tipos: 'exito', 'error'

3. Products auto-render via existing `renderBarritas()` or `renderGranolas()` functions}

```

### Styling Changes

- Use CSS custom properties in `:root` for consistency## Flujos de Trabajo Importantes

- Mobile changes go in `celulares.css` with appropriate media queries

- Component-specific styles follow BEM-like naming in `Kivra.css`### Agregar Nuevos Productos

1. Agregar imagen en `/imagenes`

### Cart Functionality2. Agregar entrada en el objeto `productos` en `Kivra.js`

- All cart operations go through `carritoModule` methods3. El producto aparecerá automáticamente en su categoría

- Always call `guardarCarrito()` after cart modifications

- Update all cart displays via `actualizarCarrito()` and `actualizarMiniCarrito()`### Agregar Nuevas Promociones

1. Agregar en `productos.promos` con estructura:

## Critical Implementation Details   ```javascript

   {

### Event Handling       titulo: "Nombre Promo",

- Uses both `addEventListener` and inline `onclick` attributes       descripcion: "Descripción",

- Modal interactions require both backdrop and close button handling       productos: ["Producto1", "Producto2"],

- Cart buttons use template literals with onclick handlers       precioPromo: 1000

   }

### Image Management   ```

Images must match exact filenames in JavaScript objects. Pattern:

- `barrita (1).jpg` to `barrita (14).jpg`## Puntos de Integración

- `granola (1).jpg` to `granola (10).jpg`

- Special naming for turrones and aceites### WhatsApp

- La finalización de compra redirige a WhatsApp con mensaje formateado

### Accessibility Features- URL base: `https://wa.me/5493482676690`

- ARIA labels on cart buttons and interactive elements

- Semantic HTML structure with proper headings### Redes Sociales

- Color contrast follows brand guidelines (high contrast brown/cream)- Instagram: `@kivra.nutrir`



## Common Gotchas## Consideraciones de Diseño

- Cart syncing requires updating all 3 cart displays simultaneously

- Modal pagination state (`modalPaginaActual`) needs reset when switching categories1. **Sistema de Color**

- Product filtering clears on empty search but maintains state flags   - Usar variables CSS definidas en `:root`

- localStorage can fail in private browsing - handle gracefully   - Mantener consistencia con la paleta existente

- WhatsApp URL encoding is critical for proper message formatting

2. **Responsividad**

## Performance Considerations   - Breakpoints principales en `celulares.css`:

- Single large JS file loads everything upfront     - 1024px (tablets grandes)

- Images are not lazy-loaded     - 768px (tablets)

- No bundling or minification in current setup     - 600px (móviles grandes)

- Consider breaking JS into modules if file grows beyond 1000 lines     - 375px (móviles pequeños)

3. **Animaciones**
   - Usar transiciones suaves (0.3s)
   - Mantener `ease` o `ease-out` para consistencia

## Mejores Prácticas

1. Siempre usar las variables CSS existentes
2. Mantener la estructura modular en JavaScript
3. Implementar mensajes de feedback para acciones de usuario
4. Asegurar que las nuevas características sean responsivas
5. Mantener la consistencia en nombres de clases y IDs