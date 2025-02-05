document.addEventListener('DOMContentLoaded', function () {
    const museosContainer = document.getElementById('museos-container');
    const formularioMuseo = document.getElementById('formulario-museo');

    // Datos iniciales de museos (puedes reemplazar esto con una base de datos)
    let museos = [
        {
            nombre: "Museo Palacio Cantón",
            direccion: "Calle 43 x 42 y 44, Centro, 97000 Mérida, Yuc.",
            horarios: "Martes a Domingo, 8:00 AM - 5:00 PM",
            descripcion: "Un museo que exhibe artefactos arqueológicos mayas.",
            imagen: "https://ejemplo.com/imagen1.jpg"
        },
        {
            nombre: "Gran Museo del Mundo Maya",
            direccion: "Calle 60 Norte, Unidad Revolución, 97110 Mérida, Yuc.",
            horarios: "Miércoles a Lunes, 8:00 AM - 5:00 PM",
            descripcion: "Un museo dedicado a la cultura maya.",
            imagen: "https://ejemplo.com/imagen2.jpg"
        }
    ];

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
            imagen: document.getElementById('imagen').value
        };

        museos.push(nuevoMuseo);
        mostrarMuseos();
        formularioMuseo.reset();
    });

    // Mostrar museos al cargar la página
    mostrarMuseos();
});