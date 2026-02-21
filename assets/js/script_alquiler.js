const propiedadesAlquiler = [
    {
        nombre: 'Apartamento de lujo en zona exclusiva',
        src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
        descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
        ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
        habitaciones: 4,
        baños: 4,
        costo: 5000,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Apartamento acogedor en la montaña',
        src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
        descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
        ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
        habitaciones: 2,
        baños: 1,
        costo: 1200,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Penthouse de lujo con terraza panorámica',
        src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
        descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
        ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
        habitaciones: 3,
        baños: 3,
        costo: 4500,
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
        costo: 6000,
        smoke: false,
        pets: true
    },
];


let cardAlquiler = document.querySelector(".section-alquiler")

let html2 = ''


for (let propiedad of propiedadesAlquiler) {
    
    function smokeCondition() {
        let permitidoFumar = `<p style="color: green"><i class="fas fa-smoking"></i> Permitido fumar</p>`
        let prohibidoFumar = `<p style="color: red"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>`

        if (propiedad.smoke === true) {
                return permitidoFumar
            } else {
                return prohibidoFumar
            };
    };

    function petsCondition() {
        let permitidaMascota= `<p style="color: green"><i class="fas fa-paw"></i> Mascotas permitidas</p>`
        let prohibidaMascota = `<p style="color: red"><i class="fa-solid fa-ban"></i> No se permiten mascotas</p>`

        if (propiedad.pets === true) {
                return permitidaMascota
            } else {
                return prohibidaMascota
            };
    };

    html2 += `
        <div class="card">
            <img
            src="${propiedad.src}" class="card-img-top" alt="Imagen del departamento"/>
            <div class="card-body">
                <h5 class="card-title">${propiedad.nombre}</h5>
                <p class="card-text">${propiedad.descripcion}</p>
                <p><i class="fas fa-map-marker-alt"></i></p>
                <p>
                    <i class="fas fa-bed"></i> ${propiedad.habitaciones}
                    <i class="fas fa-bath"></i> ${propiedad.baños}
                </p>
                <p><i class="fas fa-dollar-sign"></i>${propiedad.costo}</p>
                <p class="text-danger">${smokeCondition()}</p>
                <p class="text-danger">${petsCondition()}</p>
            </div>
        </div>
    `
};

cardAlquiler.innerHTML = html2;