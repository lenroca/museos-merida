document.addEventListener('DOMContentLoaded', function () {
    const museosContainer = document.getElementById('museos-container');
    const formularioMuseo = document.getElementById('formulario-museo');
    let map;
    let markers = [];

    // Datos iniciales de museos (puedes agregar más aquí)
    let museos = [
        {
            nombre: "Museo Palacio Cantón",
            direccion: "Calle 43 x 42 y 44, Centro, 97000 Mérida, Yuc.",
            horarios: "Martes a Domingo, 8:00 AM - 5:00 PM",
            descripcion: "Un museo que exhibe artefactos arqueológicos mayas en un impresionante edificio de estilo neoclásico.",
            imagen: "https://ejemplo.com/palacio-canton.jpg",
            lat: 20.9675, // Latitud del museo
            lng: -89.6226 // Longitud del museo
        },
        {
            nombre: "Gran Museo del Mundo Maya",
            direccion: "Calle 60 Norte, Unidad Revolución, 97110 Mérida, Yuc.",
            horarios: "Miércoles a Lunes, 8:00 AM - 5:00 PM",
            descripcion: "Un museo moderno dedicado a la cultura maya, con exhibiciones interactivas y una extensa colección de piezas arqueológicas.",
            imagen: "https://ejemplo.com/gran-museo-maya.jpg",
            lat: 21.0186, // Latitud del museo
            lng: -89.6075 // Longitud del museo
        }
    ];

    // Inicializa el mapa
    function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
            center: { lat: 20.9675, lng: -89.6226 }, // Centro del mapa en Mérida
            zoom: 13 // Nivel de zoom
        });

        // Agrega marcadores para los museos iniciales
        museos.forEach(museo => {
            agregarMarcador(museo);
        });
    }

    // Función para agregar un marcador al mapa
    function agregarMarcador(museo) {
        const marker = new google.maps.Marker({
            position: { lat: museo.lat, lng: museo.lng },
            map: map,
            title: museo.nombre
        });

        // Agrega un evento para mostrar información al hacer clic en el marcador
        const infowindow = new google.maps.InfoWindow({
            content: `<strong>${museo.nombre}</strong><br>${museo.direccion}`
        });

        marker.addListener('click', () => {
            infowindow.open(map, marker);
        });

        markers.push(marker); // Guarda el marcador en la lista
    }

    // Función para mostrar los museos
    function mostrarMuseos() {
        museosContainer.innerHTML = '';
        museos.forEach((museo, index) => {
            const museoDiv = document.createElement('div');
            museoDiv.classList.add('museo');
            museoDiv.innerHTML = `
                <img src="${museo.imagen}" alt="${museo.nombre}">
                <h3>${museo.nombre}</h3>
                <p><strong>Dirección:</strong> ${museo.direccion}</p>
                <p><strong>Horarios:</strong> ${museo.horarios}</p>
                <p>${museo.descripcion}</p>
            `;
            museosContainer.appendChild(museoDiv);
        });
    }

    // Función para agregar un nuevo museo
    formularioMuseo.addEventListener('submit', function (e) {
        e.preventDefault();

        const nuevoMuseo = {
            nombre: document.getElementById('nombre').value,
            direccion: document.getElementById('direccion').value,
            horarios: document.getElementById('horarios').value,
            descripcion: document.getElementById('descripcion').value,
            imagen: document.getElementById('imagen').value,
            lat: 20.9675, // Latitud por defecto (puedes usar una API para geocodificar la dirección)
            lng: -89.6226 // Longitud por defecto
        };

        museos.push(nuevoMuseo);
        mostrarMuseos();
        agregarMarcador(nuevoMuseo); // Agrega un marcador para el nuevo museo
        formularioMuseo.reset();
    });

    // Mostrar museos al cargar la página
    mostrarMuseos();
});
