const favoritos = [
    {
        nombre: "Leonardo DiCaprio",
        profesion: "Actor",
        peliculaDestacadas: "Inception", 
        edad: 48,
    },
    {
        nombre: "Scarlett Johansson",
        profesion: "Actriz",
        peliculaDestacadas: "Lost in Translation", 
        edad: 38,
    },
    {
        nombre: "Brad Pitt",
        profesion: "Actor",
        peliculaDestacadas: "Fight Club", 
        edad: 59,
    },
    {
        nombre: "Emma Stone",
        profesion: "Actriz",
        peliculaDestacadas: "La La Land", 
        edad: 34,
    },
    {
        nombre: "Johnny Depp",
        profesion: "Actor",
        peliculaDestacadas: "Pirates of the Caribbean", 
        edad: 59,
    },
    {
        nombre: "Angelina Jolie",
        profesion: "Actriz",
        peliculaDestacadas: "Maleficent", 
        edad: 46,
    },
    {
        nombre: "Keanu Reeves",
        profesion: "Actor",
        peliculaDestacadas: "The Matrix", 
        edad: 58,
    },
    {
        nombre: "Jennifer Aniston",
        profesion: "Actriz",
        peliculaDestacadas: "Friends (Serie de TV)", 
        edad: 54,
    },
    {
        nombre: "Will Smith",
        profesion: "Actor",
        peliculaDestacadas: "The Pursuit of Happyness", 
        edad: 54,
    },
    {
        nombre: "Anne Hathaway",
        profesion: "Actriz",
        peliculaDestacadas: "Les Misérables", 
        edad: 39,
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
  
  fetch('https://rickandmortyapi.com/api/character/704')
  .then(response => response.json())
  .then(data => {
      const character = data; // Accedemos directamente al objeto de personaje
      const tarjetaPersonaje = document.createElement("div");
      tarjetaPersonaje.classList.add("bg-green-200", "p-7", "rounded", "text-black", "m-2", "mr-10", "ml-10");
  
      tarjetaPersonaje.innerHTML = `
          <h3>${character.name}</h3>
          <p>Especie: ${character.species}</p>
          <p>Género: ${character.gender}</p>
          <img src="${character.image}" alt="${character.name}">
      `;
      contenedorTarjetas.appendChild(tarjetaPersonaje);
  })
  .catch(error => console.error('Error al obtener información del personaje:', error));
  