function trigoDatos() {
  const promesa = fetch(
    "https://cdn.contentful.com/spaces/sira3rgjcuk8/environments/master/entries?access_token=_90XOUJILpmOL958dCQI0xTSsX_-kGlXQiSQ6AFG3oI"
  );
  promesa.then((r) => {
    r.json().then((dato) => {
      addCards(dato);

      console.log(dato);
    });
  });
}

function addCards(dato) {
  const template = document.querySelector("#card-template");
  const contenedor = document.querySelector(".conteiner-cards");
  dato.items.map((item) => {
    console.log(item);
    template.content.querySelector(".card-title-contenido").textContent =
      "TITULOOO";
    template.content.querySelector(".card-parrafo-contenido").textContent =
      "lorem insum lafñ pkfepṕsda kfpkapṕ ppffp fps s ppfafpṕapfaspp spfsappp aapfpsalplpl ppapapaápfpasl";
    /* template.content.querySelector(".card-img-content").src=params.image;
     */
    template.content.querySelector(".link").href = "https://google.com";
    const clone = document.importNode(template.content, true);
    contenedor.appendChild(clone);
  });
}
function main() {
  trigoDatos();
}
main();
