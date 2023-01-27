var datos;

fetch('https://randomuser.me/api')
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("NETWORK RESPONSE ERROR");
    }
  })
  .then(data => {
    console.log(data);
    cargarDatos(data);
    datos = data.results[0];
  })
  .catch((error) => console.error("FETCH ERROR:", error));

function cargarDatos(data) {
  const datos = data.results[0];  
  const nombre = "" + datos.name.first + " " + datos.name.last;  
  document.getElementById('nombre').innerHTML = nombre;
  const fotoPerfil = document.getElementById('img-perfil');
  fotoPerfil.setAttribute("src", "" + datos.picture.large + "");
  fotoPerfil.style.display = "block";

}

document.getElementById('direccion').addEventListener('mouseover',
  function () {
    document.getElementById('direccion').setAttribute("src", "" + "node_modules/bootstrap-icons/icons/pin-map-fill.svg" + "");
  }
);

document.getElementById('direccion').addEventListener('mouseleave',
  function () {
    document.getElementById('direccion').setAttribute("src", "" + "node_modules/bootstrap-icons/icons/pin-map.svg" + "");
  }
);

document.getElementById('mail').addEventListener('mouseover',
  function () {
    document.getElementById('mail').setAttribute("src", "" + "node_modules/bootstrap-icons/icons/envelope-paper-fill.svg" + "");
  }
);

document.getElementById('mail').addEventListener('mouseleave',
  function () {
    document.getElementById('mail').setAttribute("src", "" + "node_modules/bootstrap-icons/icons/envelope-paper.svg" + "");
  }
);

document.getElementById('telefono').addEventListener('mouseover',
  function () {
    document.getElementById('telefono').setAttribute("src", "" + "node_modules/bootstrap-icons/icons/phone-fill.svg" + "");
  }
);

document.getElementById('telefono').addEventListener('mouseleave',
  function () {
    document.getElementById('telefono').setAttribute("src", "" + "node_modules/bootstrap-icons/icons/phone.svg" + "");
  }
);


document.getElementById('direccion').addEventListener('click',
  function () {
    alert('Mi direccion es: '+ datos.location.city + ", " + datos.location.street.name + " " + datos.location.street.number);
  }
);

document.getElementById('mail').addEventListener('click',
  function () {
    alert('Mi correo electrónico es: ' + datos.email);
  }
);

document.getElementById('telefono').addEventListener('click',
  function () {
    alert('Mi telefono es: ' + datos.cell);
  }
);



