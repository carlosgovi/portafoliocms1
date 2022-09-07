function traigoDatos() {
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
    console.log(dato);
    template.content.querySelector(".card-title-contenido").textContent =
      item.fields.titulo;
    template.content.querySelector(".card-parrafo-contenido").textContent =
      item.fields.descripcion;
    template.content.querySelector(".card-img-content").src =
      dato.includes.Asset[0].fields.file.url;

    template.content.querySelector(".link").href = item.fields.url1;
    const clone = document.importNode(template.content, true);
    contenedor.appendChild(clone);
  });
}
function main() {
  traigoDatos();
}
main();
