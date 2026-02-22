const propiedadesAlquiler = [
    {
        nombre: 'Apartamento de lujo en mitad del bosque',
        src: 'https://images.trvl-media.com/lodging/126000000/125250000/125249300/125249219/3bf2036e.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill',
        descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
        ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
        habitaciones: 5,
        baños: 3,
        costo: 6000,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Apartamento de lujo en zona exclusiva',
        src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/672607669.jpg?k=42976d02b87c510c65479b5c636c7dbaa426cd6c31be233571cc4ef0f62319a3&o=',
        descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
        ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
        habitaciones: 4,
        baños: 4,
        costo: 5000,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Penthouse de lujo con terraza panorámica',
        src: 'https://www.wretmanestate.com/wp-content/uploads/2025/02/a1c15dfb30a20695e47b6b2a959d2d9e_67a831df04_1500-original.jpg',
        descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
        ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
        habitaciones: 3,
        baños: 3,
        costo: 4500,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Apartamento acogedor en la montaña',
        src: 'https://media.vrbo.com/lodging/69000000/68850000/68849800/68849743/bd690bac.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill',
        descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
        ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
        habitaciones: 2,
        baños: 1,
        costo: 1200,
        smoke: true,
        pets: true
    },
];

let cardAlquiler = document.querySelector(".section-alquiler");

const propiedadesAlquilerLimitadas = propiedadesAlquiler.slice(0, 3);

let html2 = ''

function smokeCondition(propiedad) {
    let permitidoFumar = `<p style="color: green"><i class="fas fa-smoking"></i> Permitido fumar</p>`
    let prohibidoFumar = `<p style="color: red"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>`

    if (propiedad.smoke === true) {
            return permitidoFumar
        } else {
            return prohibidoFumar
        };
};

function petsCondition(propiedad) {
    let permitidaMascota= `<p style="color: green"><i class="fas fa-paw"></i> Mascotas permitidas</p>`
    let prohibidaMascota = `<p style="color: red"><i class="fa-solid fa-ban"></i> No se permiten mascotas</p>`

    if (propiedad.pets === true) {
            return permitidaMascota
        } else {
            return prohibidaMascota
        };
};

for (let propiedad of propiedadesAlquiler) {

    html2 += `
        <div class="card">
            <img
            src="${propiedad.src}" class="card-img-top" alt="Imagen del departamento"/>
            <div class="card-body">
                <h5 class="card-title">${propiedad.nombre}</h5>
                <p class="card-text">${propiedad.descripcion}</p>
                <p><i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}</p>
                <p>
                    <i class="fas fa-bed"></i> ${propiedad.habitaciones}
                    <i class="fas fa-bath"></i> ${propiedad.baños}
                </p>
                <p><i class="fas fa-dollar-sign"></i>${propiedad.costo}</p>
                <p class="text-danger">${smokeCondition(propiedad)}</p>
                <p class="text-danger">${petsCondition(propiedad)}</p>
            </div>
        </div>
    `
};

cardAlquiler.innerHTML = html2;