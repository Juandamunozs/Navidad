//Recibir datos de la cancion recomendada de html a js
const cancion_recomendada = document.getElementById("cancion_recomendada");
const nombre_del_autor = document.getElementById("nombre_autor");
const fecha_de_lanzamiento = document.getElementById("fecha_lanzamiento");
const genero_cancion = document.getElementById("genero");
const nota_cancion = document.getElementById("nota");

//Recibir datos de la cancion favorita de html a js
const cancion_favorita = document.getElementById("cancion_favorita");
const nombre_del_autor_favorita = document.getElementById("nombre_favorita");
const fecha_de_lanzamiento_favorita = document.getElementById("fecha_lanzamiento_favorita");
const genero_cancion_favorita = document.getElementById("genero_favorita");
const nota_cancion_favorita = document.getElementById("nota_favorita");

//Recibir datos de la cancion favorita de html a js
const cancion_animo = document.getElementById("cancion_animo");
const nombre_del_autor_animo = document.getElementById("nombre_animo");
const fecha_de_lanzamiento_animo = document.getElementById("fecha_lanzamiento_animo");
const genero_cancion_animo = document.getElementById("genero_animo");
const nota_cancion_animo = document.getElementById("nota_animo");

//Recibir datos de la cancion 1 del html a js
const cancion_1 = document.getElementById("cancion_1");
const nombre_del_autor_1 = document.getElementById("nombre_1");
const fecha_de_lanzamiento_1 = document.getElementById("fecha_lanzamiento_1");
const genero_cancion_1 = document.getElementById("genero_1");
const nota_cancion_1 = document.getElementById("nota_1");

//Funcion encargada de mostrar fecha de todas las cartas 
const actualiza = () => {

  //Datos sobre la cancion recomendada
  const nombre_cancion_recomendada_cos = "Despues de ti";
  const nombre_autor_recomendada_cos = "Fenix de fuego";
  const fecha_lanzamiento_recomendada_cos = "2022";
  const genero_recomendada_cos = "Cumbia";
  const nota_recomendada_cos = "Recomendada de la semana 🔥";

  //Datos sobre la cancion favorita
  const nombre_cancion_favorita_cos = "Como dormiste?";
  const nombre_autor_favorita_cos = "Rels B";
  const fecha_lanzamiento_favorita_cos = "2022";
  const genero_favorita_cos = "Pop";
  const nota_favorita_cos = "Mi cancion Favorita ✨";

  //Datos sobre la cancion de mi sentido de animo
  const nombre_cancion_animo_cos = "Querer querernos";
  const nombre_autor_animo_cos = "Canserbero";
  const fecha_lanzamiento_animo_cos = "2011";
  const genero_animo_cos = "Hip Hop";
  const nota_animo_cos = "Mi vida esta sonando asi 🍃";

  //Datos sobre la cancion de mi sentido de animo
  const nombre_cancion_1_cos = "Bebe";
  const nombre_autor_1_cos = "Anuel AA & Ozuna";
  const fecha_lanzamiento_1_cos = "2017";
  const genero_1_cos = "Hip Hop - Pop";
  const nota_1_cos = "Vibras del colegio 🔥";


  //Enviar datos de js a html de la cancion recomendada
  cancion_recomendada.innerText = nombre_cancion_recomendada_cos;
  nombre_del_autor.innerText = nombre_autor_recomendada_cos;
  fecha_de_lanzamiento.innerText = fecha_lanzamiento_recomendada_cos;
  genero_cancion.innerText = genero_recomendada_cos;
  nota_cancion.innerText = nota_recomendada_cos;

  //Enviar datos de js a html de la cancion favorita
  cancion_favorita.innerText = nombre_cancion_favorita_cos;
  nombre_del_autor_favorita.innerText = nombre_autor_favorita_cos;
  fecha_de_lanzamiento_favorita.innerText = fecha_lanzamiento_favorita_cos;
  genero_cancion_favorita.innerText = genero_favorita_cos;
  nota_cancion_favorita.innerText = nota_favorita_cos;

  //Enviar datos de js a html de la cancion como me siento
  cancion_animo.innerText = nombre_cancion_animo_cos;
  nombre_del_autor_animo.innerText = nombre_autor_animo_cos;
  fecha_de_lanzamiento_animo.innerText = fecha_lanzamiento_animo_cos;
  genero_cancion_animo.innerText = genero_animo_cos;
  nota_cancion_animo.innerText = nota_animo_cos;

  //Enviar datos de js a html de la cancion 1
  cancion_1.innerText = nombre_cancion_1_cos;
  nombre_del_autor_1.innerText = nombre_autor_1_cos;
  fecha_de_lanzamiento_1.innerText = fecha_lanzamiento_1_cos;
  genero_cancion_1.innerText = genero_1_cos;
  nota_cancion_1.innerText = nota_1_cos;

};

//Funcion encargada de hacer que se actualice los datos cada segundo

const intervalo = setInterval(actualiza, 1000);