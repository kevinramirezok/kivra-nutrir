/*=================================
  DATOS DE PRODUCTOS
==================================*/
const productos = {
    barritas: [
        { nombre: "Barrita Proteica", precio: 1150, descripcion: "Barra de cereal, trigo, girasol, chía, chocolate y aceite de maní", imagen: "BARRITA PROTEICA.jpg" },
        { nombre: "Barrita Dulce de Leche", precio: 1150, descripcion: "Barra de cereal, dulce de leche, maní, nueces", imagen: "BARRITA DULCE DE LECHE.jpg" },
        { nombre: "Barrita Trigo Sarraceno", precio: 1150, descripcion: "Barra de cereal, trigo sarraceno, algarroba, arándanos, quinoa y chía", imagen: "BARRITA TRIGO CERRACENO.jpg" },
        { nombre: "Barrita Energética", precio: 1150, descripcion: "Barra de cereal, miel, quinoa, almendras y miel", imagen: "BARRITA ENERGÉTICA.jpg" },
        { nombre: "Barrita Natural", precio: 1000, descripcion: "Granola, pasta de maíz, maní, pasas de uva y sésamo integral", imagen: "BARRITA NATURAL.jpg" },
        { nombre: "Barrita Granola", precio: 1000, descripcion: "Cereal, girasol, pasas de uva y miel", imagen: "BARRITA GRANOLA.jpg" },
        { nombre: "Barrita de Sésamo", precio: 1000, descripcion: "Sésamo, coco y miel", imagen: "BARRITA DE SESAMO.jpg" },
        { nombre: "Barrita de Maní", precio: 1000, descripcion: "Maní, pasas de uva y miel", imagen: "BARRITA BOCADITO DE MANI.jpg" },
        { nombre: "Barrita Keto", precio: 2500, descripcion: "Barritas de cereal, nueces, maní, pasta de maní, almendras, arándanos, chocolate 80%, girasol, chía, sésamo", imagen: "BARRITA KETO.jpg" },
        { nombre: "Turrón Energético de Chía", precio: 1600, descripcion: "Sésamo, almendras tostadas, girasol, chía y miel", imagen: "TURRON ENERGETICO DE CHIA.jpg" },
        { nombre: "Turrón Energético", precio: 1600, descripcion: "Girasol tostada, semillas de lino, quinoa y fructosa", imagen: "TURRON ENERGETICO.jpg" },
        { nombre: "Turrón Puro Calcio", precio: 1600, descripcion: "Sésamo blanco, sésamo negro, nueces y miel", imagen: "TURRON PURO CALCIO.jpg" },
        { nombre: "Turrón Pura Fibra", precio: 1600, descripcion: "Avena, maní tostado, semillas de maíz sin azúcar, chía y fructosa", imagen: "TURRON PUTA FIBRA.jpg" },
        { nombre: "Turrón Crocante de Maní", precio: 1600, descripcion: "Maní seleccionado y fructosa", imagen: "TURRON CROCANTE DE MANI.jpg" }
    ],
    granolas: [
        { nombre: "Granola Premium", precio: 9900, descripcion: "Avena tostada, semillas de chía, almendras, castañas caju, duraznos, peras, pasas de uva y miel de abejas", imagen: "GRANOLA PREMIUM.jpg" },
        { nombre: "Granola Madre Tierra", precio: 9900, descripcion: "Avena, harina de algarroba, arándanos pasa, quinoa pop, sal, aceite de girasol, trigo Sarraceno, coco en escamas, saborizante de vainilla, fructosa", imagen: "GRANOLA  MADRE TIERRA.jpg" },
        { nombre: "Granola Fuerza Natural", precio: 9900, descripcion: "Avena, maní, maní triturado, quinoa pop, copos maíz sin azúcar, almendras, aceite de girasol, sal, saborizante (vainilla), fructosa", imagen: "GRANOLA FUERZA NATURAL.jpg" },
        { nombre: "Granola Crocante", precio: 9500, descripcion: "Avena tostada, copos de maíz sin azúcar, semillas de lino, semillas de girasol pelado, semillas de chía, sésamo integral y fructosa", imagen: "GRANOLA CROCANTE.jpg" },
        { nombre: "Granola Especial con Frutas", precio: 9500, descripcion: "Avena tostada, duraznos, peras, almendras, pasas de uva y miel de abejas", imagen: "GRANOLA ESPECIAL CON FRUTAS.jpg" },
        { nombre: "Granola Natural", precio: 9500, descripcion: "Avena tostada, copos de maíz sin azúcar, almendras, sésamo integral, pasas de uva y fructosa", imagen: "GRANOLA NATURAL.jpg" },
        { nombre: "Granola Energética", precio: 9500, descripcion: "Avena tostada, copos de maíz sin azúcar, almendras, maní pelado, girasol pelado y fructosa", imagen: "GRANOLA ENERGÉTICA.jpg" },
        { nombre: "Granola Crocante con Manzanas", precio: 9500, descripcion: "Avena tostada, copos de maíz sin azúcar, nueces, pasas de uva, manzana y fructosa", imagen: "GRANOLA  CROCANTE CON MANZANAS.jpg" },
        { nombre: "Granola Tropical", precio: 9500, descripcion: "Avena tostada, pasas de uva, copos de maíz sin azúcar, banana, almendras y fructosa", imagen: "GRANOLA TROPICAL.jpg" },
        { nombre: "Granola Keto", precio: 16800, descripcion: "Granola especial, maní, pasta de maní, almendras, girasol, chocolate 80%, girasol, chía, sésamo", imagen: "GRANOLA KETO.jpg" },
        /*{ nombre: "Aceite de Coco 150ml", precio: 3500, descripcion: "Aceite de coco prensado en frío, 100% natural, libre de gluten", imagen: "aceite (1).jpg" },
        { nombre: "Aceite de Coco 250ml", precio: 5500, descripcion: "Aceite de coco prensado en frío, 100% natural, libre de gluten", imagen: "aceite (2).jpg" },
        { nombre: "Aceite de Coco 500ml", precio: 9500, descripcion: "Aceite de coco prensado en frío, 100% natural, libre de gluten", imagen: "aceite (3).jpg" },
        { nombre: "Aceite de Coco 360ml", precio: 6500, descripcion: "Aceite de coco prensado en frío, presentación en vidrio, libre de gluten", imagen: "aceite (4).jpg" },
        { nombre: "Aceite de Coco 650ml", precio: 11500, descripcion: "Aceite de coco prensado en frío, presentación en vidrio, libre de gluten", imagen: "aceite (5).jpg" }*/
    ],
    promos: [
        {
            titulo: "Promo Granolas Premium",
            descripcion: "Llevando 3 unidades surtidas",
            cantidadRequerida: 3,
            categoria: "granolas",
            productos: ["Granola Premium", "Granola Madre Tierra", "Granola Fuerza Natural"],
            precioPromo: 27000,
            precioOriginal: 5800
        },
        {
            titulo: "Promo Granolas Especiales",
            descripcion: "Llevando 3 unidades surtidas",
            cantidadRequerida: 3,
            categoria: "granolas",
            productos: ["Granola Crocante", "Granola Especial con Frutas", "Granola Natural", "Granola Energética", "Granola Crocante con Manzanas", "Granola Tropical"],
            precioPromo: 25000,
            precioOriginal: 5900
        },
        {
            titulo: "Promo Barritas Premium",
            descripcion: "Llevando 4 unidades surtidas",
            cantidadRequerida: 4,
            categoria: "barritas",
            productos: ["Barrita Proteica", "Barrita Dulce de Leche", "Barrita Trigo Sarraceno", "Barrita Energética"],
            precioPromo: 4000,
            precioOriginal: 1150
        },
        {
            titulo: "Promo Barritas Naturales",
            descripcion: "Llevando 4 unidades surtidas",
            cantidadRequerida: 4,
            categoria: "barritas",
            productos: ["Barrita Natural", "Barrita Granola", "Barrita de Sésamo", "Barrita de Maní"],
            precioPromo: 3600,
            precioOriginal: 1000
        },
        {
            titulo: "Promo Turrones",
            descripcion: "Llevando 5 unidades surtidas",
            cantidadRequerida: 5,
            categoria: "barritas",
            productos: ["Turrón Energético de Chía", "Turrón Energético", "Turrón Puro Calcio", "Turrón Pura Fibra", "Turrón Crocante de Maní"],
            precioPromo: 7000,
            precioOriginal: 1600
        },
        {
            titulo: "Promo Keto",
            descripcion: "Llevando 2 unidades de Granola Keto",
            cantidadRequerida: 2,
            categoria: "granolas",
            productos: ["Granola Keto"],
            precioPromo: 29900,
            precioOriginal: 16800
        },
        {
            titulo: "Promo Barritas Keto",
            descripcion: "Llevando 4 unidades de Barrita Keto",
            cantidadRequerida: 4,
            categoria: "barritas",
            productos: ["Barrita Keto"],
            precioPromo: 8500,
            precioOriginal: 2500
        }
    ]
};


let mostrandoTodasBarritas = false;
let mostrandoTodosGranolas = false;
let modalPaginaActual = 1;
let mostrandoPromos = false;
const productosPorPagina = 8;

/*=================================
  MÓDULOS DE CARRITO
==================================*/
// Estado global
let carrito = [];
let total = 0;

// Funciones de utilidad para mensajes
function mostrarMensaje(mensaje, tipo) {
    const contenedor = document.createElement('div');
    contenedor.className = `mensaje-${tipo}`;
    contenedor.textContent = mensaje;
    document.body.appendChild(contenedor);
    setTimeout(() => contenedor.remove(), 3000);
}

// Funciones de almacenamiento local
function guardarCarrito() {
    localStorage.setItem('kivraCarrito', JSON.stringify(carrito));
    localStorage.setItem('kivraTotal', total.toString());
}

function cargarCarrito() {
    const carritoGuardado = localStorage.getItem('kivraCarrito');
    const totalGuardado = localStorage.getItem('kivraTotal');

    if (carritoGuardado && totalGuardado) {
        carrito = JSON.parse(carritoGuardado);
        total = parseFloat(totalGuardado);
        carritoModule.actualizarCarrito();
        carritoModule.actualizarMiniCarrito();
    }
}

// Funciones del carrito
const carritoModule = {
    agregarAlCarrito(nombre, precio) {
        try {
            if (!nombre || !precio) {
                throw new Error('Datos del producto incompletos');
            }

            if (precio <= 0) {
                throw new Error('El precio debe ser mayor a 0');
            }

            const itemExistente = carrito.find(item => item.nombre === nombre);
            if (itemExistente) {
                if (itemExistente.cantidad >= 10) {
                    throw new Error('Máximo 10 unidades por producto');
                }
                itemExistente.cantidad++;
                total += precio;
            } else {
                carrito.push({ nombre, precio, cantidad: 1 });
                total += precio;
            }

            guardarCarrito();
            mostrarMensaje('Producto agregado al carrito', 'exito');
        } catch (error) {
            mostrarMensaje(error.message, 'error');
            return false;
        }
        this.actualizarCarrito();
        this.actualizarMiniCarrito();
    },

    eliminarDelCarrito(nombre) {
        const itemIndex = carrito.findIndex(item => item.nombre === nombre);
        if (itemIndex !== -1) {
            const item = carrito[itemIndex];
            if (item.cantidad > 1) {
                item.cantidad--;
                total -= item.precio;
            } else {
                total -= item.precio;
                carrito.splice(itemIndex, 1);
            }
            this.actualizarCarrito();
            this.actualizarMiniCarrito();
        }
    },

    vaciarCarrito() {
        carrito = [];
        total = 0;
        this.actualizarCarrito();
        this.actualizarMiniCarrito();
    },

    eliminarProductoCompleto(nombre) {
        const precioTotal = carrito
            .filter(item => item.nombre === nombre)
            .reduce((sum, item) => sum + (item.precio * item.cantidad), 0);
        total -= precioTotal;
        carrito = carrito.filter(item => item.nombre !== nombre);
        this.actualizarCarrito();
        this.actualizarMiniCarrito();
    },

    contarProductosAgrupados() {
        return carrito.reduce((acc, item) => {
            if (!acc[item.nombre]) {
                acc[item.nombre] = {
                    cantidad: item.cantidad,
                    precio: item.precio,
                    subtotal: item.precio * item.cantidad
                };
            }
            return acc;
        }, {});
    },

    actualizarCarrito() {
        const lista = document.getElementById("lista-carrito");
        const badge = document.getElementById("carrito-badge");
        const totalElement = document.getElementById("total");

        if (!lista || !badge || !totalElement) return;

        lista.innerHTML = carrito.length === 0
            ? "<li>El carrito está vacío.</li>"
            : this.renderizarItemsCarrito();

        badge.textContent = carrito.length;
        totalElement.textContent = total;
    },

    actualizarMiniCarrito() {
        const carritos = [
            {
                lista: "mini-carrito-lista",
                count: "mini-carrito-count",
                total: "mini-total"
            },
            {
                lista: "header-mini-carrito-lista",
                count: "header-carrito-count",
                total: "header-mini-total"
            },
            {
                lista: "carrito-modal-items",
                count: "modal-carrito-count",
                total: "carrito-modal-total"
            }
        ];

        const productosAgrupados = this.contarProductosAgrupados();
        const contenidoHTML = Object.keys(productosAgrupados).length === 0
            ? "<div class='mini-vacio'>Vacío</div>"
            : this.renderizarMiniCarrito(productosAgrupados);

        carritos.forEach(cart => {
            const lista = document.getElementById(cart.lista);
            const count = document.getElementById(cart.count);
            const totalElement = document.getElementById(cart.total);

            if (lista) lista.innerHTML = contenidoHTML;
            if (count) count.textContent = carrito.length;
            if (totalElement) totalElement.textContent = total;
        });
    },

    renderizarItemsCarrito() {
        return carrito.map((item, index) => `
            <li>
                ${item.nombre} - $${item.precio}
                <button class="btneliminar" onclick="carritoModule.eliminarDelCarrito(${index})">
                    <i class="bi bi-trash"></i>
                </button>
            </li>
        `).join('');
    },

    renderizarMiniCarrito(productos) {
        let html = Object.entries(productos)
            .map(([nombre, info]) => `
                <div class="mini-item">
                    <span class="mini-nombre">${nombre}</span>
                    <span class="mini-cantidad">x${info.cantidad}</span>
                    <span class="mini-precio">$${info.subtotal}</span>
                    <div class="mini-acciones">
                        <button class="mini-eliminar-uno" onclick="carritoModule.eliminarDelCarrito('${nombre}')">-</button>
                        <button class="mini-eliminar-todo" onclick="carritoModule.eliminarProductoCompleto('${nombre}')">×</button>
                    </div>
                </div>
            `).join('');

        if (Object.keys(productos).length > 0) {
            html += `
                <div class="mini-item vaciar-carrito">
                    <button onclick="carritoModule.vaciarCarrito()" class="btn-vaciar">
                        <i class="bi bi-trash"></i> Vaciar Carrito
                    </button>
                </div>
            `;
        }

        return html;
    },

    finalizarCompra() {
        if (carrito.length === 0) {
            alert("El carrito está vacío.");
            return;
        }

        let mensaje = "¡Hola! Quiero pedir:\n";
        carrito.forEach(item => {
            mensaje += `- ${item.nombre} ($${item.precio})\n`;
        });
        mensaje += `Total: $${total}\n¿Podemos coordinar el retiro?`;

        window.open(`https://wa.me/5493482676690?text=${encodeURIComponent(mensaje)}`, "_blank");

        carrito = [];
        total = 0;
        this.actualizarCarrito();
    }
};

/*=================================
  MÓDULO DE PRODUCTOS
==================================*/

const productosModule = {
    mostrarPaginaModal(tipo) {
        const productosArray = productos[tipo];
        const modalListado = document.getElementById("modal-listado");
        const modalPagina = document.getElementById("modal-pagina");
        const btnAnterior = document.getElementById("modal-anterior");
        const btnSiguiente = document.getElementById("modal-siguiente");

        // Ocultar elementos de paginación
        modalPagina.style.display = 'none';
        btnAnterior.style.display = 'none';
        btnSiguiente.style.display = 'none';

        // Mostrar todos los productos o promociones
        if (tipo === 'promos') {
            modalListado.innerHTML = this.renderizarPromos(productosArray);
        } else {
            modalListado.innerHTML = this.renderizarProductos(productosArray);
        }

        // Ajustar estilos del contenedor para scroll
        modalListado.style.maxHeight = '70vh';
        modalListado.style.overflowY = 'auto';
    },

    renderizarProductos(productos) {
        return productos.map(prod => `
            <div class="card" data-nombre="${prod.nombre}">
                <img src="imagenes/${prod.imagen}" alt="${prod.nombre}" class="producto-img">
                <strong>${prod.nombre}</strong>
                <span class="precio-modal">$${prod.precio}</span>
                <small class="descripcion">${prod.descripcion}</small>
                <button class="btnagregar" onclick="carritoModule.agregarAlCarrito('${prod.nombre}', ${prod.precio})">
                    Agregar
                </button>
            </div>
        `).join('');
    },

    renderizarPromos(promos) {
        return promos.map(promo => `
            <div class="card" data-nombre="${promo.titulo}">
                <div class="promo-icon-large">⚡</div>
                <strong>${promo.titulo}</strong>
                <span class="precio-modal precio-promo-modal">$${promo.precioPromo}</span>
                <small class="descripcion">${promo.descripcion}</small>
                <div class="promo-productos">
                    <small>Incluye: ${promo.productos.join(', ')}</small>
                </div>
                <button class="btnagregar" onclick="agregarPromoAlCarrito('${promo.titulo}', ${promo.precioPromo})">
                    Agregar
                </button>
            </div>
        `).join('');
    },

    actualizarControlesPaginacion(pagina, anterior, siguiente, total, tipo) {
        pagina.textContent = `Página ${modalPaginaActual} de ${total}`;
        anterior.style.display = modalPaginaActual > 1 ? "inline-block" : "none";
        siguiente.style.display = modalPaginaActual < total ? "inline-block" : "none";

        anterior.onclick = () => {
            modalPaginaActual--;
            this.mostrarPaginaModal(tipo);
        };
        siguiente.onclick = () => {
            modalPaginaActual++;
            this.mostrarPaginaModal(tipo);
        };
    },

    filtrarProductos() {
        const texto = document.getElementById("buscador").value.toLowerCase();
        const containerGranola = document.getElementById("granolaContainer");
        const containerBarritas = document.getElementById("barritasContainer");
        const containerPromos = document.getElementById("promosContainer");
        const subtitulos = document.querySelectorAll(".productos-subtitulo");
        const seccionesProductos = document.querySelectorAll(".productos-seccion");

        // Función auxiliar para verificar si un producto coincide con la búsqueda
        const coincideConBusqueda = (producto) => {
            return producto.nombre.toLowerCase().includes(texto) ||
                producto.descripcion.toLowerCase().includes(texto);
        };

        // Función auxiliar para verificar si una promo coincide con la búsqueda
        const coincideConBusquedaPromo = (promo) => {
            return promo.titulo.toLowerCase().includes(texto) ||
                promo.descripcion.toLowerCase().includes(texto) ||
                promo.productos.some(p => p.toLowerCase().includes(texto));
        };

        // Filtrar productos y promos
        const granolasCoincidentes = productos.granolas.filter(coincideConBusqueda);
        const barritasCoincidentes = productos.barritas.filter(coincideConBusqueda);
        const promosCoincidentes = productos.promos.filter(coincideConBusquedaPromo);
        const hayResultados = granolasCoincidentes.length > 0 || barritasCoincidentes.length > 0 || promosCoincidentes.length > 0;

        // Mostrar u ocultar subtítulos y secciones
        subtitulos.forEach(subtitulo => {
            subtitulo.style.display = texto ? "none" : "block";
        });

        seccionesProductos.forEach(seccion => {
            seccion.style.display = texto ? "none" : "block";
        });

        // Función para renderizar mensaje de no resultados
        const mensajeNoResultados = `
        <div class="no-resultados" style="text-align: center; padding: 20px; width: 100%;">
            <h3 style="color: var(--marron); font-size: 1.8rem;">No se encontraron productos que coincidan con "${texto}"</h3>
        </div>
    `;

        // Actualizar contenido de los contenedores
        if (containerGranola) {
            containerGranola.innerHTML = granolasCoincidentes.length > 0 ?
                granolasCoincidentes.map(producto => `
                <div class="producto">
                    <img src="imagenes/${producto.imagen}" alt="${producto.nombre}">
                    <h3>${producto.nombre}</h3>
                    <p class="descripcion">${producto.descripcion}</p>
                    <p class="precio">$${producto.precio}</p>
                    <button class="btnagregar" onclick="carritoModule.agregarAlCarrito('${producto.nombre}', ${producto.precio})">
                        Agregar al carrito
                    </button>
                </div>
            `).join('') :
                (texto && !hayResultados ? mensajeNoResultados : '');
        }

        if (containerBarritas) {
            containerBarritas.innerHTML = barritasCoincidentes.length > 0 ?
                barritasCoincidentes.map(producto => `
                <div class="producto">
                    <img src="imagenes/${producto.imagen}" alt="${producto.nombre}">
                    <h3>${producto.nombre}</h3>
                    <p class="descripcion">${producto.descripcion}</p>
                    <p class="precio">$${producto.precio}</p>
                    <button class="btnagregar" onclick="carritoModule.agregarAlCarrito('${producto.nombre}', ${producto.precio})">
                        Agregar al carrito
                    </button>
                </div>
            `).join('') :
                (texto && !hayResultados && !containerGranola.innerHTML && !containerPromos.innerHTML ? mensajeNoResultados : '');
        }

        if (containerPromos) {
            containerPromos.innerHTML = promosCoincidentes.length > 0 ?
                promosCoincidentes.map(promo => `
                <div class="producto">
                    <div class="promo-icon">⚡</div>
                    <h3>${promo.titulo}</h3>
                    <p class="descripcion">${promo.descripcion}</p>
                    <p class="precio">$${promo.precioPromo}</p>
                    <button class="btnagregar" onclick="agregarPromoAlCarrito('${promo.titulo}', ${promo.precioPromo})">
                        Agregar al carrito
                    </button>
                </div>
            `).join('') : '';
        }

        // Actualizar visibilidad de los botones "Ver más"
        const btnVerMasGranola = document.getElementById("verMasGranola");
        const btnVerMasBarritas = document.getElementById("verMasBarritas");
        const btnVerMasPromos = document.getElementById("verMasPromos");

        if (btnVerMasGranola) {
            btnVerMasGranola.style.display = texto ? "none" : "block";
        }
        if (btnVerMasBarritas) {
            btnVerMasBarritas.style.display = texto ? "none" : "block";
        }
        if (btnVerMasPromos) {
            btnVerMasPromos.style.display = texto ? "none" : "block";
        }
    }
};

/*=================================
  INICIALIZACIÓN Y EVENTOS
==================================*/

// Funciones para renderizar productos
function renderBarritas() {
    const contenedor = document.getElementById('barritasContainer');
    const verMasBtn = document.getElementById('verMasBarritas');

    if (!contenedor) return;

    const productosAMostrar = mostrandoTodasBarritas ? productos.barritas : productos.barritas.slice(0, 4);

    contenedor.innerHTML = productosAMostrar.map(producto => `
        <div class="producto">
            <img src="imagenes/${producto.imagen}" alt="${producto.nombre}">
            <h3>${producto.nombre}</h3>
            <p class="descripcion">${producto.descripcion}</p>
            <p class="precio">$${producto.precio}</p>
            <button class="btnagregar" onclick="carritoModule.agregarAlCarrito('${producto.nombre}', ${producto.precio})">
                Agregar al carrito
            </button>
        </div>
    `).join('');

    if (verMasBtn) {
        verMasBtn.style.display = mostrandoTodasBarritas ? 'none' : 'block';
    }
}

function renderPromos() {
    const contenedor = document.getElementById('promosContainer');
    const verMasBtn = document.getElementById('verMasPromos');

    if (!contenedor) return;

    const promosAMostrar = mostrandoPromos ? productos.promos : productos.promos.slice(0, 4);

    contenedor.innerHTML = promosAMostrar.map(promo => `
        <div class="producto">
            <div class="promo-icon">⚡</div>
            <h3>${promo.titulo}</h3>
            <p class="descripcion">${promo.descripcion}</p>  
            <p class="precio">$${promo.precioPromo}</p>
            <div class="promo-productos">
                <small>Incluye: ${promo.productos.join(', ')}</small>
            </div>
            <button class="btnagregar" onclick="agregarPromoAlCarrito('${promo.titulo}', ${promo.precioPromo})">
                Agregar al carrito
            </button>
        </div>
    `).join('');

    if (verMasBtn) {
        verMasBtn.style.display = mostrandoPromos || productos.promos.length <= 4 ? 'none' : 'block';
    }
}

// Sistema de selección de productos para promos
let seleccionActual = {
    promo: null,
    productosSeleccionados: [],
    cantidadRequerida: 0
};

function mostrarModalSeleccion(promo) {
    const modal = document.getElementById('modal-seleccion');
    const titulo = document.getElementById('modal-seleccion-titulo');
    const descripcion = document.getElementById('modal-seleccion-descripcion');
    const contenedor = document.getElementById('productos-seleccion');
    const totalRequerido = document.getElementById('total-requerido');
    
    // Configurar el modal
    seleccionActual.promo = promo;
    seleccionActual.productosSeleccionados = [];
    seleccionActual.cantidadRequerida = promo.cantidadRequerida;
    
    titulo.textContent = promo.titulo;
    descripcion.textContent = promo.descripcion;
    totalRequerido.textContent = seleccionActual.cantidadRequerida;
    
    // Renderizar opciones de productos con imágenes
    contenedor.innerHTML = promo.productos.map(nombreProducto => {
        // Buscar el producto completo en la categoría correspondiente
        const productoCompleto = productos[promo.categoria].find(p => p.nombre === nombreProducto);
        return `
            <div class="producto-seleccion" data-producto="${nombreProducto}" onclick="toggleSeleccionProducto(this)">
                ${productoCompleto ? `<img src="imagenes/${productoCompleto.imagen}" alt="${nombreProducto}">` : ''}
                <h4>${nombreProducto}</h4>
                ${productoCompleto ? `<p class="precio">$${productoCompleto.precio}</p>` : ''}
            </div>
        `;
    }).join('');
    
    actualizarContadorSeleccion();
    modal.classList.add('activo');
}

function toggleSeleccionProducto(elemento) {
    const producto = elemento.dataset.producto;
    const index = seleccionActual.productosSeleccionados.indexOf(producto);
    
    if (index === -1) {
        // Agregar producto si no está seleccionado y no hemos alcanzado el límite
        if (seleccionActual.productosSeleccionados.length < seleccionActual.cantidadRequerida) {
            seleccionActual.productosSeleccionados.push(producto);
            elemento.classList.add('seleccionado');
        } else {
            mostrarMensaje(`Solo puedes seleccionar ${seleccionActual.cantidadRequerida} productos`, 'error');
        }
    } else {
        // Remover producto si ya está seleccionado
        seleccionActual.productosSeleccionados.splice(index, 1);
        elemento.classList.remove('seleccionado');
    }
    
    actualizarContadorSeleccion();
}

function actualizarContadorSeleccion() {
    const contador = document.getElementById('contador-seleccion');
    const btnConfirmar = document.getElementById('confirmar-seleccion');
    
    contador.textContent = seleccionActual.productosSeleccionados.length;
    btnConfirmar.disabled = seleccionActual.productosSeleccionados.length !== seleccionActual.cantidadRequerida;
}

function agregarPromoAlCarrito(titulo, precio) {
    const promo = productos.promos.find(p => p.titulo === titulo);
    if (promo) {
        // Promociones Keto se agregan automáticamente (un solo producto)
        if (promo.titulo === "Promo Keto" || promo.titulo === "Promo Barritas Keto") {
            const tituloPersonalizado = `${promo.titulo} (${promo.productos.join(', ')})`;
            carritoModule.agregarAlCarrito(tituloPersonalizado, promo.precioPromo);
            mostrarMensaje('Promoción agregada al carrito con éxito', 'exito');
        } else {
            // Otras promociones requieren selección
            mostrarModalSeleccion(promo);
        }
    }
}

function confirmarSeleccionPromo() {
    if (seleccionActual.productosSeleccionados.length === seleccionActual.cantidadRequerida) {
        const tituloPersonalizado = `${seleccionActual.promo.titulo} (${seleccionActual.productosSeleccionados.join(', ')})`;
        carritoModule.agregarAlCarrito(tituloPersonalizado, seleccionActual.promo.precioPromo);
        document.getElementById('modal-seleccion').classList.remove('activo');
        mostrarMensaje('Promoción agregada al carrito con éxito', 'exito');
        
        // Limpiar selección actual
        seleccionActual = {
            promo: null,
            productosSeleccionados: [],
            cantidadRequerida: 0
        };
    } else {
        mostrarMensaje(`Debes seleccionar exactamente ${seleccionActual.cantidadRequerida} productos`, 'error');
    }
}

function renderGranolas() {
    const contenedor = document.getElementById('granolaContainer');
    const verMasBtn = document.getElementById('verMasGranola');

    if (!contenedor) return;

    const productosAMostrar = mostrandoTodosGranolas ? productos.granolas : productos.granolas.slice(0, 4);

    contenedor.innerHTML = productosAMostrar.map(producto => `
        <div class="producto">
            <img src="imagenes/${producto.imagen}" alt="${producto.nombre}">
            <h3>${producto.nombre}</h3>
            <p class="descripcion">${producto.descripcion}</p>
            <p class="precio">$${producto.precio}</p>
            <button class="btnagregar" onclick="carritoModule.agregarAlCarrito('${producto.nombre}', ${producto.precio})">
                Agregar al carrito
            </button>
        </div>
    `).join('');

    if (verMasBtn) {
        verMasBtn.style.display = mostrandoTodosGranolas ? 'none' : 'block';
    }
}

// Variables para el control del header
let isHeaderSmall = false;
let lastScrollY = 0;
let scrollTimer = null;
const SCROLL_THRESHOLD = 100;
const SCROLL_DELAY = 150; // ms entre actualizaciones

// Función throttled para el scroll
function handleHeaderScroll() {
    if (scrollTimer !== null) {
        return; // Si hay una actualización pendiente, salimos
    }

    const currentScroll = window.scrollY;
    const header = document.querySelector('header');
    
    // Solo actualizamos si el cambio es significativo
    if (Math.abs(currentScroll - lastScrollY) > 10) {
        scrollTimer = setTimeout(() => {
            const shouldBeSmall = currentScroll > SCROLL_THRESHOLD;
            
            if (shouldBeSmall !== isHeaderSmall) {
                header.classList.toggle('header-small', shouldBeSmall);
                isHeaderSmall = shouldBeSmall;
            }
            
            lastScrollY = currentScroll;
            scrollTimer = null;
        }, SCROLL_DELAY);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Inicializar promos (solo mostrar las primeras)
    renderPromos();
    // REMOVIDO: El event listener duplicado que causaba el problema

    // Añadir evento de scroll
    window.addEventListener('scroll', handleHeaderScroll);

    // Cargar el carrito al inicio
    cargarCarrito();

    // Inicializar carritos
    const initializeCart = (toggleId, contentId, chevronId) => {
        const toggleBtn = document.getElementById(toggleId);
        const content = document.getElementById(contentId);
        const chevron = document.getElementById(chevronId);

        if (toggleBtn) {
            toggleBtn.addEventListener('click', () => {
                if (content.classList.contains("oculto")) {
                    content.classList.remove("oculto");
                    chevron.style.transform = "rotate(180deg)";
                } else {
                    content.classList.add("oculto");
                    chevron.style.transform = "rotate(0deg)";
                }
            });
        }
    };

    // Inicializar carritos
    initializeCart("toggle-header-carrito", "header-mini-carrito-contenido", "header-chevron-carrito");

    // Inicializar carrito modal
    const toggleCartModal = document.getElementById('toggle-carrito-modal');
    const cartModalContent = document.getElementById('carrito-modal-contenido');
    const closeCartModal = document.querySelector('.cerrar-carrito-modal');

    if (toggleCartModal && cartModalContent) {
        toggleCartModal.addEventListener('click', () => {
            cartModalContent.classList.toggle('activo');
            const isOpen = cartModalContent.classList.contains('activo');
            document.getElementById('chevron-carrito-modal').style.transform =
                isOpen ? 'rotate(180deg)' : 'rotate(0deg)';
        });
    }

    if (closeCartModal) {
        closeCartModal.addEventListener('click', () => {
            cartModalContent.classList.remove('activo');
            document.getElementById('chevron-carrito-modal').style.transform = 'rotate(0deg)';
        });
    }

    // Botón seguir comprando
    document.getElementById('seguir-comprando-modal')?.addEventListener('click', () => {
        cartModalContent.classList.remove('activo');
        document.getElementById('chevron-carrito-modal').style.transform = 'rotate(0deg)';
    });    // Configurar botones de finalizar compra
    ["finalizar-compra-modal", "finalizar-compra-header", "finalizar-compra-sidebar"].forEach(id => {
        document.getElementById(id)?.addEventListener('click', () => {
            carritoModule.finalizarCompra();
        });
    });

    // Otros controladores de eventos
    document.getElementById("abrir-carrito")?.addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById("carrito-sidebar").classList.add("activo");
    });
    document.getElementById("cerrar-carrito")?.addEventListener('click', () => {
        document.getElementById("carrito-sidebar").classList.remove("activo");
    });

    // Inicializar buscador
    document.getElementById("buscador")?.addEventListener('input', productosModule.filtrarProductos);

    // Configurar botones "Ver más"
    // Función para mostrar el modal
    function mostrarModal() {
        document.getElementById('modal-productos').classList.add('activo');
        document.body.classList.add('modal-open');
    }

    // Función para ocultar el modal
    function ocultarModal() {
        document.getElementById('modal-productos').classList.remove('activo');
        document.body.classList.remove('modal-open');
    }

    // Event listeners para el modal
    document.getElementById('cerrar-modal')?.addEventListener('click', ocultarModal);
    document.getElementById('modal-productos')?.addEventListener('click', (e) => {
        if (e.target.id === 'modal-productos') {
            ocultarModal();
        }
    });

    document.getElementById("verMasBarritas")?.addEventListener('click', () => {
        modalPaginaActual = 1;
        document.getElementById('modal-titulo').textContent = 'Barritas Saludables';
        productosModule.mostrarPaginaModal('barritas');
        mostrarModal();
    });

    document.getElementById("verMasGranola")?.addEventListener('click', () => {
        modalPaginaActual = 1;
        document.getElementById('modal-titulo').textContent = 'Granolas Saludables';
        productosModule.mostrarPaginaModal('granolas');
        mostrarModal();
    });

    document.getElementById("verMasPromos")?.addEventListener('click', () => {
        modalPaginaActual = 1;
        document.getElementById('modal-titulo').textContent = 'Promociones Especiales';
        productosModule.mostrarPaginaModal('promos');
        mostrarModal();
    });

    // Event listeners para modal de selección
    document.getElementById('cerrar-modal-seleccion')?.addEventListener('click', () => {
        document.getElementById('modal-seleccion').classList.remove('activo');
    });
    
    document.getElementById('cancelar-seleccion')?.addEventListener('click', () => {
        document.getElementById('modal-seleccion').classList.remove('activo');
    });
    
    document.getElementById('confirmar-seleccion')?.addEventListener('click', confirmarSeleccionPromo);
    
    // Cerrar modal al hacer clic fuera
    document.getElementById('modal-seleccion')?.addEventListener('click', (e) => {
        if (e.target.id === 'modal-seleccion') {
            document.getElementById('modal-seleccion').classList.remove('activo');
        }
    });

    // Renderizar productos iniciales
    renderGranolas();
    renderBarritas();
});