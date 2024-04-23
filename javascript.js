const favoritos = [
    {
        nombre: "Jennifer Lawrence",
        profesion: "cantante y actriz",
        peliculaDestacadas: "The hunger games", 
        edad: 40,
    },
    {
        nombre: "Robert Downey Jr.",
        profesion: "Actor",
        peliculaDestacadas: "Iron Man", 
        edad: 57,
    },
    {
        nombre: "Tom Hanks",
        profesion: "Actor",
        peliculaDestacadas: "Forrest Gump", 
        edad: 65,
    },
    {
        nombre: "Meryl Streep",
        profesion: "Actriz",
        peliculaDestacadas: "The Devil Wears Prada", 
        edad: 73,
    },
    {
        nombre: "Denzel Washington",
        profesion: "Actor",
        peliculaDestacadas: "Training Day", 
        edad: 68,
    },
    {
        nombre: "Cate Blanchett",
        profesion: "Actriz",
        peliculaDestacadas: "Blue Jasmine", 
        edad: 53,
    },
    {
        nombre: "Anthony Hopkins",
        profesion: "Actor",
        peliculaDestacadas: "The Silence of the Lambs", 
        edad: 85,
    },
    {
        nombre: "Natalie Portman",
        profesion: "Actriz",
        peliculaDestacadas: "Black Swan", 
        edad: 41,
    },
    {
      nombre: "Roberto menjivar.",
      profesion: "Actor",
      peliculaDestacadas: "pele", 
      edad: 57,
  },
  {
      nombre: "Hanks",
      profesion: "Actor",
      peliculaDestacadas: "Forrest Gump", 
      edad: 65,
  },
  {
      nombre: "Meryl Streep",
      profesion: "Actriz",
      peliculaDestacadas: "The Devil Wears Prada", 
      edad: 73,
  }
  ];
  
  // Función para crear una tarjeta con información de persona
  function crearTarjetaPersona(persona) {
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("bg-blue-200", "p-7", "rounded", "text-black", "m-2", "mr-10", "ml-10");
  
    tarjeta.innerHTML = `
          <h2 class="text-xl font-bold">${persona.nombre}</h2>
          <p><strong>Profesión:</strong> ${persona.profesion}</p>
          <p><strong>Película Destacada:</strong> ${persona.peliculaDestacadas}</p>
          <p><strong>Edad:</strong> ${persona.edad}</p>
      `;
    return tarjeta;
  }
  
  // Obtener el contenedor de tarjetas
  const contenedorTarjetas = document.getElementById("tarjetas");
  
  // Mostrar tarjetas de favoritos
  favoritos.forEach(persona => {
    const tarjetaPersona = crearTarjetaPersona(persona);
    contenedorTarjetas.appendChild(tarjetaPersona);
  });
  
// Obtener chiste de Chuck Norris y mostrar en una tarjeta
fetch('https://rickandmortyapi.com/api/character/704')
.then(response => response.json())
.then(data => {
    const aja = data.value;
    const tarjetaaja = document.createElement("div");
    tarjetaaja.classList.add("bg-green-200", "p-7", "rounded", "text-black", "m-2", "mr-10", "ml-10");

    tarjetaaja.innerHTML = `
        <h3>beth en traje de calamar:</h3>
        <p>${aja}</p>
    `;
    contenedorTarjetas.appendChild(aja);
})
.catch(error => console.error('Error al obtener chiste:', error));