window.addEventListener("load", () => {

  const categorias = [
    {
      titulo: "Ciudad",
      descripcion:"Dubai, Emiratos Arabes",
      categoria: "ciudades",
      url: "img/ciudad1.jpg",
    },
    {
      titulo: "Ciudad",
      descripcion:"Amsterdam, Reino Unido",
      categoria: "ciudades",
      url: "img/ciudad2.jpg",
    },
    {
      titulo: "Oso Panda",
      descripcion:"Oso panda bebe.",
      categoria: "animales",
      url: "img/animal1.jpg",
    },
    {
      titulo: "Ciudad",
      descripcion:"Obelisco.Buenos Aires, Argentina",
      categoria: "ciudades",
      url: "img/ciudad3.jpg",
    },
    {
      titulo: "Aguila",
      descripcion:"Aguila Americano",
      categoria: "animales",
      url: "img/animal2.jpg",
    },
    {
      titulo: "Perro",
      descripcion:"La negrita, Mi canichita",
      categoria: "animales",
      url: "img/animal3.jpg",
    },
    {
      titulo: "Delfin",
      descripcion:"Delfin Orca",
      categoria: "animales",
      url: "img/animal4.jpg",
    },
    {
      titulo: "Serpiente",
      descripcion:"Mamba Negra",
      categoria: "animales",
      url: "img/animal5.jpg",
    },
    {
      titulo: "New York",
      descripcion:"Central Park, New York",
      categoria: "ciudades",
      url: "img/ciudad4.jpg",
    },
    {
      titulo: "Portugal",
      descripcion:"Berlengas, Portugal",
      categoria: "paisajes",
      url: "img/paisaje7.jpg",
    },
    {
      titulo: "Ciudad",
      descripcion:"San Petersburgo, Rusia",
      categoria: "ciudades",
      url: "img/ciudad5.jpg",
    },
    {
      titulo: "Ciudad",
      descripcion:"Estambul. Turquía",
      categoria: "ciudades",
      url: "img/ciudad9.jpg",
    },
    {
      titulo: "Ciudad",
      descripcion:"Londres, Inglaterra",
      categoria: "ciudades",
      url: "img/ciudad6.jpg",
    },
    {
      titulo: "Leon",
      descripcion:"León Africano",
      categoria: "animales",
      url: "img/animal8.jpg",
    },
    {
      titulo: "Laguna",
      descripcion:"Lago Moraine, Alberta-Canada",
      categoria: "paisajes",
      url: "img/paisaje1.jpg",
    },
    {
      titulo: "Pantera",
      descripcion:"Pantera Negra",
      categoria: "animales",
      url: "img/animal9.jpg",
    },
    {
      titulo: "Cascada",
      descripcion:"Salto Angel, Parque Nacional Canaima-Venezuela",
      categoria: "paisajes",
      url: "img/paisaje2.jpg",
    },
    {
      titulo: "Bosque",
      descripcion:"Caballo Negro Frison",
      categoria: "animales",
      url: "img/animal10.jpg",
    },
    {
      titulo: "Playa",
      descripcion:"Bahia de Cata, Aragua-Venezuela",
      categoria: "paisajes",
      url: "img/paisaje3.jpg",
    },
    {
      titulo: "Atardecer",
      descripcion:"Laguna Azul, Islandia",
      categoria: "paisajes",
      url: "img/paisaje4.jpg",
    },
    {
      titulo: "Tigre",
      descripcion:"Tigre de Bengala",
      categoria: "animales",
      url: "img/animal11.jpg",
    },
    {
      titulo: "Acantilado",
      descripcion:"Trolltunga, Odda-Noruega",
      categoria: "paisajes",
      url: "img/paisaje5.jpg",
    },
    {
      titulo: "Ciudad",
      descripcion:"Paris, Francia",
      categoria: "ciudades",
      url: "img/ciudad7.jpg",
    },
    {
      titulo: "Garganta del Diablo",
      descripcion:"Cataratas del Iguazu, Argentina",
      categoria: "paisajes",
      url: "img/paisaje6.jpg",
    },
    {
      titulo: "Ciudad",
      descripcion:"Barcelona, España",
      categoria: "ciudades",
      url: "img/ciudad8.jpg",
    }
  ];
  
  const contenedor = document.querySelector('#contenedor-imagenes');
  const botones = document.querySelectorAll("#categorias a");
  
  botones.forEach((boton) => {
    boton.addEventListener("click", (evento) => {
      evento.preventDefault();
      const categoria = evento.target.innerHTML.toLowerCase();
  
      botones.forEach((claseEnlace) => {
        claseEnlace.classList.remove("activo");
      });
      evento.target.classList.add("activo");
  
      //Cargo las imagenes pasandole el objeto con las imagenes y como segundo parametro la categoria seleccionada por el usuario
      cargarImagenes(categorias, categoria);
    });
  });

  /* 
  
    Esta Funcion se encarga de cargar las imagenes
    Recibe:  1)Objeto con las categorias
             2) Una categoria
    Devuelve:
             1) Imagenes Cargadas segun categoria
             2) Imagenedes Cargadas si la categoria es == todos
             3) Imagenes cargadas segun la categoria o letras que reciba del evento input de la barra de busqueda 
  */
  const cargarImagenes = (categorias, categoriaRecibida) => {
    contenedor.innerHTML = "";
    categorias.forEach((elementos) => {
      if (elementos.categoria == categoriaRecibida) {
        
        crearContenedor(elementos);
      }
      else if(categoriaRecibida == "todos")
      {
        crearContenedor(elementos);
      }
      else if(elementos.titulo.toLowerCase().indexOf(categoriaRecibida) != -1 || 
      elementos.categoria.toLowerCase().indexOf(categoriaRecibida) != -1 ||
      elementos.descripcion.toLowerCase().indexOf(categoriaRecibida) != -1)
      {
        crearContenedor(elementos);
      }
    });
  };
  /* 
    Esta funcion se encarga de crear la plantilla la cual alojara a las imagenes de la web
    Recibe: 1) Elemento que va a cargar
    Devuelve: 2) Un div con una imagen en la cual se carga la url y la descripcion usando templates literales

  */
  const crearContenedor = (elemento) =>{
    contenedor.innerHTML += `
    <div class = "item imagenes-cargadas" id="item">
        <img src="${elemento.url}" alt= "${elemento.descripcion}">    
    </div>
    
    `;

      //Configuracion de imagen expandida al hacer click

    const img = contenedor.querySelectorAll('img');
    const contenedorImgExpandida = document.querySelector('#imagen-expandida');
    let contenedorImagen = document.querySelector('#contenedor-img');
    let descripcion = document.querySelector("#descripcion");

    img.forEach((imagen) => {
      imagen.addEventListener('click',(evento)=>{
        const imagenClickeada = evento.target.getAttribute('src');
        contenedorImgExpandida.classList.add("activa");
        contenedorImagen.innerHTML += `
        <img src="${imagenClickeada}" alt= "${descripcion}">  
        `;
        descripcion.innerHTML = evento.target.getAttribute('alt');
      });
    });

    // Configuracion para cerrar la imagen clickeada por el usuario
    contenedorImgExpandida.addEventListener('click',(evento)=>{

      // La imagen se cerrara automaticamente SOLO si el usuario hace click sobre el contenedor principal
      if(evento.target.id == 'imagen-expandida'){
        contenedorImgExpandida.classList.remove("activa");
        contenedorImagen.innerHTML = "";
      }
    });
  }
  
  //CONFIGURACION DE LA BARRA DE BUSQUEDA
  
  document.querySelector(".barra-busqueda").addEventListener('input',(valor) => {
  
    const contenido = valor.target.value.toLowerCase();
    cargarImagenes(categorias,contenido);
  });
}); // fin del load 

