/* DATA PROPIEDADES ALQUILER */

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

/* DATA PROPIEDADES ALQUILER */

const propiedadesEnVenta = [
    {
        nombre: 'Apartamento de lujo en zona exclusiva',
        src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
        descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
        ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
        habitaciones: 4,
        baños: 4,
        costo: 155000,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Apartamento acogedor en la montaña',
        src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
        descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
        ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
        habitaciones: 2,
        baños: 1,
        costo: 431200,
        smoke: true,
        pets: false
    },
    {
        nombre: 'Penthouse de lujo con terraza panorámica',
        src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
        descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
        ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
        habitaciones: 3,
        baños: 3,
        costo: 124500,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Apartamento de lujo en mitad del bosque',
        src: 'https://machbel.com/fotos/2016/06/Apartamento-en-Madrid-.jpg',
        descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
        ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
        habitaciones: 5,
        baños: 3,
        costo: 96000,
        smoke: false,
        pets: true
    },
];

/* INICIACIÓN DE DATOS */

let cardAlquilerHome = document.querySelector(".section-alquiler");
let cardAlquilerPage = document.querySelector(".section-alquiler-page");
let htmlAlquiler = ''

let cardVentasHome = document.querySelector(".section-ventas");
let cardVentasPage = document.querySelector(".section-ventas-page");
let htmlVentas = ''

/* CONDICIONES */

/* Función para permiso de fumar */

function smokeCondition(propiedad) {
    let permitidoFumar = `<p style="color: green"><i class="fas fa-smoking"></i> Permitido fumar</p>`
    let prohibidoFumar = `<p style="color: red"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>`

    if (propiedad.smoke === true) {
        return permitidoFumar
    } else {
        return prohibidoFumar
    };
};

/* Función para permiso de mascotas */

function petsCondition(propiedad) {
    let permitidaMascota= `<p style="color: green"><i class="fas fa-paw"></i> Mascotas permitidas</p>`
    let prohibidaMascota = `<p style="color: red"><i class="fa-solid fa-ban"></i> No se permiten mascotas</p>`

    if (propiedad.pets === true) {
        return permitidaMascota
    } else {
        return prohibidaMascota
    };
};

/* ITERACIONES DE OBJETOS POR ARREGLO */

/* Función para iterar datos de ALQUILER con su respectivo template */

function renderPropiedadesAlquiler(propiedadesAlquiler, containerAlquiler) {
    
    for (let propiedad of propiedadesAlquiler) {
    
        htmlAlquiler += `
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

    containerAlquiler.innerHTML = htmlAlquiler;
};

/* Función para iterar datos de VENTAS con su respectivo template */

function renderPropiedadesVenta(propiedadesEnVenta, containerVenta) {
    
    for (let propiedad of propiedadesEnVenta) {
    
        htmlVentas += `
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

    containerVenta.innerHTML = htmlVentas;
};


/* CONDICIONES SEGÚN PÁGINA */

/* Alquiler */

if (cardAlquilerHome) {
    renderPropiedadesAlquiler(propiedadesAlquiler.slice(0,3), cardAlquilerHome);
}

if (cardAlquilerPage) {
    renderPropiedadesAlquiler(propiedadesAlquiler, cardAlquilerPage);
}

/* Ventas */

if (cardVentasHome) {
    renderPropiedadesVenta(propiedadesEnVenta.slice(0,3), cardVentasHome);
}

if (cardVentasPage) {
    renderPropiedadesVenta(propiedadesEnVenta, cardVentasPage);
}