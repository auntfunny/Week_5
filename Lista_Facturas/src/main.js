const facturas = [
  {
    id: 1,
    numeroFactura: "F001",
    descripcion: "Compra de muebles de oficina",
    estado: "pagada",
    fecha: "12-10-2023",
  },
  {
    id: 2,
    numeroFactura: "F002",
    descripcion: "Suscripción a servicio de internet",
    estado: "pendiente",
    fecha: "05-02-2024",
  },
  {
    id: 3,
    numeroFactura: "F003",
    descripcion: "Reparación de equipo de cómputo",
    estado: "pagada",
    fecha: "18-03-2024",
  },
  {
    id: 4,
    numeroFactura: "F004",
    descripcion: "Compra de papelería",
    estado: "pendiente",
    fecha: "02-04-2024",
  },
  {
    id: 5,
    numeroFactura: "F005",
    descripcion: "Pago de servicios públicos",
    estado: "pagada",
    fecha: "11-04-2024",
  },
  {
    id: 6,
    numeroFactura: "F006",
    descripcion: "Mantenimiento de software",
    estado: "pendiente",
    fecha: "15-04-2024",
  },
  {
    id: 7,
    numeroFactura: "F007",
    descripcion: "Compra de licencias de software",
    estado: "pagada",
    fecha: "23-11-2023",
  },
  {
    id: 8,
    numeroFactura: "F008",
    descripcion: "Servicios de diseño gráfico",
    estado: "pendiente",
    fecha: "10-01-2024",
  },
  {
    id: 9,
    numeroFactura: "F009",
    descripcion: "Capacitación en seguridad informática",
    estado: "pagada",
    fecha: "27-02-2024",
  },
  {
    id: 10,
    numeroFactura: "F010",
    descripcion: "Compra de equipos de oficina",
    estado: "pendiente",
    fecha: "13-03-2024",
  },
  {
    id: 11,
    numeroFactura: "F011",
    descripcion: "Compra de material de oficina",
    estado: "pendiente",
    fecha: "18-04-2024",
  },
  {
    id: 12,
    numeroFactura: "F012",
    descripcion: "Pago de renta de local comercial",
    estado: "pagada",
    fecha: "23-04-2024",
  },
  {
    id: 13,
    numeroFactura: "F013",
    descripcion: "Servicios de limpieza",
    estado: "pendiente",
    fecha: "25-04-2024",
  },
  {
    id: 14,
    numeroFactura: "F014",
    descripcion: "Mantenimiento de equipos de aire acondicionado",
    estado: "pagada",
    fecha: "27-04-2024",
  },
  {
    id: 15,
    numeroFactura: "F015",
    descripcion: "Compra de insumos médicos",
    estado: "pendiente",
    fecha: "30-04-2024",
  },
];

// localStorage.clear();

let dynamicData;
const localData = localStorage.getItem("myDynamicData");
if(localData){
    console.log(JSON.parse(localData));
    dynamicData = JSON.parse(localData);
} else {
    dynamicData = [...facturas];
    console.log("No se encontró local storage");
}
let newFacturas;
if(localData){
    newFacturas = JSON.parse(localData);
} else {
    newFacturas = [...facturas];
}

let idCount = facturas.length;
let renderCount;
let listState = 0;

const facturaTBody = document.querySelector("#facturaTBody");
const filterButtons = document.querySelector("#filterButtons");
const addContactBtn = document.querySelector("#addContactBtn");
const modal = document.querySelector("#modal");
const modalContent = document.querySelector("#modalContent");
const closeModal = document.querySelector("#closeModal");
const factura = document.querySelector("#factura");
const descripcion = document.querySelector("#descripcion");
const estado = document.querySelector("#estado");
const fecha = document.querySelector("#fecha");
const contactForm = document.querySelector("#contactForm");

/******************************************************************************

            RENDER LIST

******************************************************************************/

renderList(newFacturas);

function renderList(listOfItems) {
  facturaTBody.innerHTML = "";
  renderCount = 0;
  listOfItems.forEach((item) => renderItem(item));
}

function renderItem({ id, numeroFactura, descripcion, estado, fecha }) {
  const newRow = document.createElement("tr");
  const newData = [];
  const myClasses = "border border-[#ddd] p-2 text-lg text-left".split(" ");

  for(let i = 0; i < 6; i++){
    newData[i] = document.createElement("td");
    newData[i].classList.add(...myClasses);
  }
  renderCount++;
  if (renderCount % 2 === 0) {
    newRow.classList.add("bg-[#fefefe]");
  }
  newData[0].textContent = id;
  newData[1].textContent = numeroFactura;
  newData[2].textContent = descripcion;
  newData[3].textContent = estado;
  newData[4].textContent = fecha;

  if (estado === "pagada") {
    newData[3].classList.add("text-pagada");
    newData[5].innerHTML = `
              <button
                data-action="delete"
                class=" bg-[#f0f0f0] border border-gray-300 py-1 px-2 rounded-sm hover:bg-gray-200 hover:cursor-pointer active:bg-gray-300"
              >
                Del</button
              ><button
                data-action="pay"
                class="hidden bg-[#f0f0f0] border border-gray-300 py-1 px-2 rounded-sm hover:bg-gray-200 hover:cursor-pointer active:bg-gray-300"
              >
                Pay
              </button>
            </td>
    `;
  } else {
    newData[3].classList.add("text-pendiente");
    newData[5].innerHTML = `
              <button
                data-action="delete"
                class="hidden bg-[#f0f0f0] border border-gray-300 py-1 px-2 rounded-sm hover:bg-gray-200 hover:cursor-pointer active:bg-gray-300"
              >
                Del</button
              ><button
                data-action="pay"
                class=" bg-[#f0f0f0] border border-gray-300 py-1 px-2 rounded-sm hover:bg-gray-200 hover:cursor-pointer active:bg-gray-300"
              >
                Pay
              </button>
            </td>
    `;
  }
  for(let i = 0; i < 6; i++){
    newRow.appendChild(newData[i]);
  }
  facturaTBody.appendChild(newRow);
}

/******************************************************************************

            OPEN/CLOSE MODAL

******************************************************************************/

addContactBtn.addEventListener("click", openModal);
modal.addEventListener("click", closeWindowDecide);

function openModal() {
  modal.classList.remove("hidden");
}

function closeWindowDecide(event) {
  if (
    event.target.closest("div") !== modalContent ||
    event.target === closeModal
  ) {
    closeWindow();
  }
}

function closeWindow() {
  modal.classList.add("hidden");
  factura.value = "";
  descripcion.value = "";
  fecha.value = "";
  estado.checked = false;
}

/******************************************************************************

            CREATE NEW FACTURA

******************************************************************************/

contactForm.addEventListener("submit", createNewFactura);

function createNewFactura(event) {
  event.preventDefault();
  const newFactura = {
    id: ++idCount,
    numeroFactura: factura.value,
    descripcion: descripcion.value,
    estado: "",
    fecha: fecha.value,
  };
  if (estado.checked === false) {
    newFactura.estado = "pendiente";
  } else {
    newFactura.estado = "pagada";
  }
  newFacturas.push(newFactura);
  dynamicData.push(newFactura);
  localStorage.setItem("myDynamicData", JSON.stringify(dynamicData));
  if (listState === 0) {
    renderItem(newFactura);
  } else if (listState === 1 && newFactura.estado === "pendiente") {
    renderItem(newFactura);
  } else if (listState === 2 && newFactura.estado === "pagada") {
    renderItem(newFactura);
  }
  closeWindow();
}

/******************************************************************************

            PAY/DELETE EXISTING

******************************************************************************/

facturaTBody.addEventListener("click", manageClick);

function manageClick(event) {
  const current = event.target;
  const currentFactura = current.closest("tr");
  const arrayItem = newFacturas.find(
    (item) => item.id === Number(currentFactura.children[0].textContent),
  );
  const dynamicArrayItem = dynamicData.find(
    (item) => item.id === Number(currentFactura.children[0].textContent),
  );

  if (current.dataset.action === "delete") {
    newFacturas = newFacturas.filter(
      (item) => item.id !== Number(currentFactura.children[0].textContent),
    );
    dynamicData = dynamicData.filter(
      (item) => item.id !== Number(currentFactura.children[0].textContent),
    );
    localStorage.setItem("myDynamicData", JSON.stringify(dynamicData));

    if (listState === 0) {
      renderList(newFacturas);
    } else if (listState === 1) {
      showPendientes();
    } else if (listState === 2) {
      showPagadas();
    }
  } else if (current.dataset.action === "pay") {
    const currentEstado = currentFactura.children[3];
    const currentButtons = currentFactura.children[5];
    currentEstado.textContent = "pagada";
    currentEstado.classList.remove("text-pendiente");
    currentEstado.classList.add("text-pagada");
    currentButtons.children[0].classList.remove("hidden");
    currentButtons.children[1].classList.add("hidden");
    arrayItem.estado = "pagada";
    dynamicArrayItem.estado = "pagada";
    localStorage.setItem("myDynamicData", JSON.stringify(dynamicData));
  }
}

/******************************************************************************

            FILTER WITH BUTTONS

******************************************************************************/

filterButtons.addEventListener("click", chooseButton);

function chooseButton(event) {
  const currentNav = event.target;

  if (currentNav.dataset.action === "todos") {
    showAll();
  } else if (currentNav.dataset.action === "pendientes") {
    showPendientes();
  } else if (currentNav.dataset.action === "pagadas") {
    showPagadas();
  }
}

function showAll() {
  renderList(newFacturas);
  listState = 0;
}

function showPendientes() {
  const pendientes = newFacturas.filter((item) => item.estado === "pendiente");
  renderList(pendientes);
  listState = 1;
}

function showPagadas() {
  const pagadas = newFacturas.filter((item) => item.estado === "pagada");
  renderList(pagadas);
  listState = 2;
}
