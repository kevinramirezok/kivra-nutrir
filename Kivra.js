/*=================================
  DATOS DE PRODUCTOS
==================================*/
const productos = {
    barritas: [
        { nombre: "Barrita de Avena", precio: 450, descripcion: "Avena, miel y frutos secos", imagen: "barrita (1).jpg" },
        { nombre: "Barrita de Chocolate", precio: 450, descripcion: "Chocolate negro 70% cacao", imagen: "barrita (2).jpg" },
        { nombre: "Barrita de Almendras", precio: 500, descripcion: "Almendras tostadas y miel", imagen: "barrita (3).jpg" },
        { nombre: "Barrita de Maní", precio: 400, descripcion: "Maní tostado y miel", imagen: "barrita (4).jpg" },
        { nombre: "Barrita Mix", precio: 500, descripcion: "Mix de frutos secos", imagen: "barrita (5).jpg" },
        { nombre: "Barrita Energética", precio: 550, descripcion: "Con semillas y miel", imagen: "barrita (6).jpg" },
        { nombre: "Barrita Proteica", precio: 600, descripcion: "Alta en proteínas", imagen: "barrita (7).jpg" },
        { nombre: "Barrita Sin TACC", precio: 550, descripcion: "Apta celíacos", imagen: "barrita (8).jpg" }
    ],
    granolas: [
        { nombre: "Granola Clásica", precio: 1200, descripcion: "Mix tradicional", imagen: "granola (1).jpg" },
        { nombre: "Granola Frutal", precio: 1300, descripcion: "Con frutas deshidratadas", imagen: "granola (2).jpg" },
        { nombre: "Granola Chocolate", precio: 1400, descripcion: "Con chips de chocolate", imagen: "granola (3).jpg" },
        { nombre: "Granola Sin TACC", precio: 1500, descripcion: "Apta celíacos", imagen: "granola (4).jpg" },
        { nombre: "Granola Proteica", precio: 1600, descripcion: "Alta en proteínas", imagen: "granola (5).jpg" },
        { nombre: "Granola Light", precio: 1300, descripcion: "Baja en calorías", imagen: "granola (6).jpg" },
        { nombre: "Granola Premium", precio: 1800, descripcion: "Ingredientes premium", imagen: "granola (7).jpg" },
        { nombre: "Granola Energética", precio: 1400, descripcion: "Con super alimentos", imagen: "granola (8).jpg" }
    ]
};

let mostrandoTodasBarritas = false;
let mostrandoTodosGranolas = false;
let modalPaginaActual = 1;
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

        const totalPaginas = Math.ceil(productosArray.length / productosPorPagina);
        const inicio = (modalPaginaActual - 1) * productosPorPagina;
        const fin = inicio + productosPorPagina;
        const productosAMostrar = productosArray.slice(inicio, fin);

        modalListado.innerHTML = this.renderizarProductos(productosAMostrar);
        this.actualizarControlesPaginacion(modalPagina, btnAnterior, btnSiguiente, totalPaginas, tipo);
    },

    renderizarProductos(productos) {
        return productos.map(prod => `
            <div class="card" data-nombre="${prod.nombre}">
                <img src="imagenes/${prod.imagen}" alt="${prod.nombre}" class="producto-img">
                <strong>${prod.nombre}</strong>
                <span>$${prod.precio}</span>
                <small class="descripcion">${prod.descripcion}</small>
                <button class="btnagregar" onclick="carritoModule.agregarAlCarrito('${prod.nombre}', ${prod.precio})">
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
    const subtitulos = document.querySelectorAll(".productos-subtitulo");
    const seccionesProductos = document.querySelectorAll(".productos-seccion");
    
    // Función auxiliar para verificar si un producto coincide con la búsqueda
    const coincideConBusqueda = (producto) => {
        return producto.nombre.toLowerCase().includes(texto) ||
               producto.descripcion.toLowerCase().includes(texto);
    };
    
    // Filtrar productos
    const granolasCoincidentes = productos.granolas.filter(coincideConBusqueda);
    const barritasCoincidentes = productos.barritas.filter(coincideConBusqueda);
    const hayResultados = granolasCoincidentes.length > 0 || barritasCoincidentes.length > 0;

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
            (texto && !hayResultados && !containerGranola.innerHTML ? mensajeNoResultados : '');
    }

    // Actualizar visibilidad de los botones "Ver más"
    const btnVerMasGranola = document.getElementById("verMasGranola");
    const btnVerMasBarritas = document.getElementById("verMasBarritas");

    if (btnVerMasGranola) {
        btnVerMasGranola.style.display = texto ? "none" : "block";
    }
    if (btnVerMasBarritas) {
        btnVerMasBarritas.style.display = texto ? "none" : "block";
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

// Función para manejar el header al hacer scroll
function handleHeaderScroll() {
    const header = document.querySelector('header');
    const scrollY = window.scrollY;
    
    // Usar histéresis para evitar parpadeo
    // Activar cuando pase de 120px, desactivar cuando baje de 80px
    if (scrollY > 120) {
        header.classList.add('header-small');
    } else if (scrollY < 80) {
        header.classList.remove('header-small');
    }
    // Entre 80px y 120px no hacer nada (zona de histéresis)
}

document.addEventListener('DOMContentLoaded', () => {
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

    // Renderizar productos iniciales
    renderGranolas();
    renderBarritas();
});