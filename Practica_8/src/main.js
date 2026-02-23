/*****************************************************************************************

Function: Exercise 1


Ejercicio 1 — Tarjetas de Usuarios
    Crea una función que reciba un objeto usuario con propiedades:
        { nombre, edad, pais, ...resto }.

    Desestructura las propiedades principales y usa el operador rest para capturar el 
        resto.

    Genera dinámicamente una tarjeta en el DOM mostrando todos los datos.

    Cada vez que se invoque la función con un nuevo usuario, debe agregarse una nueva 
        tarjeta al contenedor.


*****************************************************************************************/

const listaDeUsuarios = [
  {
    nombre: "Steve",
    edad: "27",
    pais: "Mexico",
    curso: "Math 2010",
    colorFavorito: "Rojo",
    estadoCivil: "Casado",
  },
  {
    nombre: "Mark",
    edad: "31",
    pais: "Canada",
    curso: "English 2",
    colorFavorito: "Verde",
    estadoCivil: "Soltero",
  },
  {
    nombre: "Juan",
    edad: "21",
    pais: "Argentina",
    curso: "Mecanica",
    colorFavorito: "Azul",
    estadoCivil: "Soltero",
  },
  {
    nombre: "Maria",
    edad: "24",
    pais: "Peru",
    curso: "TENS",
    colorFavorito: "Morado",
    estadoCivil: "Casada",
  },
  {
    nombre: "Salvador",
    edad: "42",
    pais: "Brasil",
    curso: "Frances 2",
    colorFavorito: "Rojo",
    estadoCivil: "Casado",
  },
];

const contenadorTarjetas = document.querySelector("#contenadorTarjetas");

for (let user of listaDeUsuarios) {
  createUserCard(user);
}

function createUserCard(usuario) {
  const { nombre, edad, pais, ...resto } = usuario;
  contenadorTarjetas.innerHTML += `
    <div class="userCard m-3 border p-2 rounded-xl bg-gray-100 hover:shadow">
        <h2>${nombre}</h2>
        <p>Age: ${edad}</p>
        <p>Country: ${pais}</p>
        <p>Everything else: ${resto.curso} ${resto.colorFavorito} ${resto.estadoCivil}</p>
    </div>
    `;
}

/*****************************************************************************************

Function: Exercise 2


Ejercicio 2 — Tabla de Productos
    Crea una función renderProducto que reciba un objeto producto con propiedades:
        { nombre, precio, stock, ...rest }.

    Inserta en el DOM una fila en una tabla mostrando nombre, precio, stock y las 
        propiedades adicionales.

    Agrega varios productos para mostrar la funcionalidad.


*****************************************************************************************/

const productos = [
  {
    nombre: "Laptop Pro 15",
    categoria: "Computadoras",
    precio: 1200,
    stock: 5,
  },
  {
    nombre: "Mouse Ergonómico",
    categoria: "Accesorios",
    precio: 25,
    stock: 20,
  },
  {
    nombre: 'Monitor 4K 27"',
    categoria: "Monitores",
    precio: 350,
    stock: 8,
  },
  {
    nombre: "Teclado Mecánico RGB",
    categoria: "Accesorios",
    precio: 80,
    stock: 15,
  },
  { nombre: "Impresora Láser", categoria: "Oficina", precio: 200, stock: 3 },
  {
    nombre: "Silla de Escritorio",
    categoria: "Muebles",
    precio: 150,
    stock: 10,
  },
  {
    nombre: "Escritorio Elevable",
    categoria: "Muebles",
    precio: 400,
    stock: 4,
  },
  {
    nombre: "Disco Duro Externo 2TB",
    categoria: "Almacenamiento",
    precio: 90,
    stock: 12,
  },
  {
    nombre: "Memoria USB 64GB",
    categoria: "Almacenamiento",
    precio: 15,
    stock: 50,
  },
  {
    nombre: "Webcam Full HD",
    categoria: "Accesorios",
    precio: 60,
    stock: 18,
  },
  {
    nombre: "Auriculares Noise Cancelling",
    categoria: "Audio",
    precio: 250,
    stock: 7,
  },
  {
    nombre: "Micrófono USB Condensador",
    categoria: "Audio",
    precio: 110,
    stock: 6,
  },
  {
    nombre: "Cable HDMI 2.1",
    categoria: "Accesorios",
    precio: 12,
    stock: 30,
  },
  { nombre: "Router WiFi 6", categoria: "Redes", precio: 130, stock: 9 },
  {
    nombre: "Adaptador USB-C Hub",
    categoria: "Accesorios",
    precio: 45,
    stock: 25,
  },
];

const productTable = document.querySelector("#productTable");

function renderProducto(producto) {
  const { nombre, precio, stock, ...resto } = producto;
  productTable.innerHTML += `
    <tr>
        <th>${nombre}</th>
        <td>${precio}</td>
        <td>${stock}</td>
        <td>${resto.categoria}</td>
    </tr>
    `;
}

for (let product of productos) {
  renderProducto(product);
}

/*****************************************************************************************

Function: Exercise 3


Ejercicio 3 — Lista de Tareas
    Crea una función agregarTarea que reciba un objeto { titulo, descripcion, ...extra }.

    La función debe crear un <li> con la información principal y un botón “Ver más”.

    Al hacer clic en “Ver más”, mostrar en consola las propiedades adicionales (...extra).

    Mantén un array de tareas usando spread para no mutar el original.


*****************************************************************************************/

const tareasParaHacer = [
  {
    titulo: "Learn JavaScript",
    descripcion: "Study the classes",
    id: "learnJavaScript",
    fecha: "May 15, 2026",
    completado: false,
  },
  {
    titulo: "Wash Dishes",
    descripcion: "Clean up after lunch",
    id: "washDishes",
    fecha: "February 23, 2026",
    completado: true,
  },
  {
    titulo: "Read Scriptures",
    descripcion: "Read from Come Follow Me for the week",
    id: "readScriptures",
    fecha: "February 23, 2026",
    completado: true,
  },
  {
    titulo: "Finish Mini-Project",
    descripcion: "Finish and turn in the Mini-Project",
    id: "finishMiniProject",
    fecha: "February 25, 2026",
    completado: false,
  },
];

const listaDeTareas = document.querySelector("#listaDeTareas");

function agregarTarea(tarea) {
  const { titulo, descripcion, ...extra } = tarea;

  listaDeTareas.innerHTML += `
    <li id="${extra.id}" class="m-3 pl-2"><strong>${titulo}</strong>: ${descripcion}. <button class="showMore border p-1 text-sm bg-gray-200 rounded-sm">Ver más</button></li>
    `;
}

for (let tarea of tareasParaHacer) {
  agregarTarea(tarea);
}

listaDeTareas.addEventListener("click", showExtraInfo);

function showExtraInfo(event) {
  if (event.target.className.includes("showMore")) {
    const listItem = event.target.closest("li");
    event.target.classList.add("hidden");
    const currentTarea = tareasParaHacer.find(
      (tarea) => tarea.id === listItem.id,
    );
    listItem.innerHTML += `Date: ${currentTarea.fecha} Finished: ${currentTarea.completado}`;
  }
}

/*****************************************************************************************

Function: Exercise 4


Ejercicio 4 — Tabla de Estudiantes
    Crea una función mostrarEstudiantes(...estudiantes) que reciba varios objetos 
        estudiantes.

    Cada estudiante tiene { nombre, edad, notas }.

    Desestructura para calcular el promedio de notas y genera dinámicamente una tabla 
        en el DOM.

    Usa spread para agregar estudiantes sin mutar el array original.

    Bonus: agrega un botón que actualice la edad o las notas de un estudiante y vuelva a 
        renderizar la tabla.


*****************************************************************************************/
const pageBody = document.querySelector("#pageBody");
const nombreNuevo = document.querySelector("#nombreNuevo");
const edadNuevo = document.querySelector("#edadNuevo");
const notaNuevo = document.querySelector("#notaNuevo");
const estudianteNuevo = document.querySelector("#estudianteNuevo");


const estudiante1 = {
    nombre: "Juan Perez",
    edad: "19",
    notas: "7",
  }
const estudiante2 =   {
    nombre: "Esteban Fuentes",
    edad: "20",
    notas: "9",
  }
const estudiante3 =   {
    nombre: "Sara Gomez",
    edad: "20",
    notas: "8",
  }
const estudiante4 =   {
    nombre: "Miguel Santos",
    edad: "19",
    notas: "10",
  }
const estudiante5 =   {
    nombre: "Jorge Mendoza",
    edad: "21",
    notas: "6",
  }


const studentTable = document.createElement("table");
studentTable.id = "studentTable";
studentTable.innerHTML = `
<thead class="text-white bg-gray-800">
    <tr>
        <th class="w-40 py-1">Nombre</th>
        <th class="w-20 py-1">Edad</th>
        <th class="w-20 py-1">Nota</th>
    </tr>
</thead>
<tbody id="studentTableBody">
</tbody>
`;
studentTable.classList.add("border", "m-4", "p-2s", "bg-gray-100");

const tableFooter = document.createElement("tfoot");
tableFooter.id = "tableFooter";
tableFooter.innerHTML = `
    <tr>
        <td></td>
        <td class="py-1">Promedio:</td>
        <td class="pr-2 py-1" id="gradeAverage">${0}</td>
    </tr>
`;
tableFooter.classList.add("text-right", "p-2");

pageBody.appendChild(studentTable);
const studentTableBody = document.querySelector("#studentTableBody");
studentTable.appendChild(tableFooter);
const gradeAverage = document.querySelector("#gradeAverage");

mostrarEstudiantes(estudiante1, estudiante2, estudiante3, estudiante4, estudiante5);

function mostrarEstudiantes(...estudiantes) {
  estudiantes.forEach((estudiante) => addStudent(estudiante));
  findAverage(estudiantes);
}

function addStudent(estudiante) {
  const { nombre, edad, notas } = estudiante;

  studentTableBody.innerHTML += `
    <tr>
    <td class="pl-2">${nombre}</td>
    <td class="text-center">${edad}</td>
    <td class="text-right pr-2">${notas}</td>
    </tr>`;
}

function findAverage(estudiantes) {
  let average = 0;
  for (let estudiante of estudiantes) {
    average += Number(estudiante.notas);
  }
  average = average / estudiantes.length;
  gradeAverage.innerHTML = average.toFixed(2);
}

estudianteNuevo.addEventListener("click", createStudent);
const newArray = [estudiante1, estudiante2, estudiante3, estudiante4, estudiante5];
function createStudent() {
  if (!nombreNuevo.value || !edadNuevo.value || !notaNuevo.value) {
    alert("No se pudo ingresar");
  } else {
    
    const estudiante = {
      nombre: nombreNuevo.value,
      edad: edadNuevo.value,
      notas: notaNuevo.value,
    };
    newArray.push(estudiante);
    addStudent(estudiante);
    console.log(newArray);
    nombreNuevo.value = "";
    edadNuevo.value = "";
    notaNuevo.value = "";
    findAverage(newArray);
  }
}

/*****************************************************************************************

Function: Exercise 5

Ejercicio 5 — Configuración de App
    Crea una función configurarApp que reciba un objeto { titulo, version, ...resto }.

    Desestructura las propiedades principales y usa rest para capturar las adicionales.

    Muestra en el DOM el título y versión, y lista las propiedades adicionales.

    Permite actualizar la configuración creando un nuevo objeto con spread y re-renderiza 
        la información sin recargar la página.


*****************************************************************************************/
const applicacionNuevo = {
  titulo: "Practica 8",
  version: "1.1",
  tamaño: "5 mb",
  resumen: "Practica activa de los conceptos modernos de JavaScript",
};

const configSection = document.querySelector("#configSection");
const newVersion = document.querySelector("#newVersion");
const appNuevo = document.querySelector("#appNuevo");

function configurarApp(appDatos) {
  const { titulo, version, ...resto } = appDatos;
  configSection.innerHTML = `
    <p>Configuración del App:</p>
    <p>Titulo: ${titulo}</p>
    <p>Version: ${version}</p>
    `;
  showRest(resto);
}

function showRest(info) {
  configSection.innerHTML += `<p>Propiedades Adicionales:</p>`;
  for (let key in info) {
    configSection.innerHTML += `
        <p>${key}: ${info[key]}</p>`;
  }
}

configurarApp(applicacionNuevo);
appNuevo.addEventListener("click", updateVersion);

function updateVersion() {
  if (!newVersion.value) {
    alert("No se pudo actualizar");
  } else {
    const appActualizacion = { ...applicacionNuevo };
    appActualizacion.version = newVersion.value;
    configurarApp(appActualizacion);
    newVersion.value = "";
  }
}
