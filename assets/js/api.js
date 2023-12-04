async function getObras() {
  const response = await fetch(
    "https://jsonserverobras.gilhermetheodor.repl.co/obras",
    {
      headers: {
        "Content-Type": "application/json",
        Accept: "/",
        Host: "Gagsta",
      },
    }
  );
  const obras = await response.json();
  return obras;
}
async function findFoto(id) {
  const response = await fetch(
    "https://jsonserverobras.gilhermetheodor.repl.co/fotos/" + id,
    {
      headers: {
        "Content-Type": "application/json",
        Accept: "/",
        Host: "Gagsta",
      },
    }
  );
  const foto = await response.json();
  return foto;
}
async function findObra(id) {
  const response = await fetch(
    "https://jsonserverobras.gilhermetheodor.repl.co/obras/" + id,
    {
      headers: {
        "Content-Type": "application/json",
        Accept: "/",
        Host: "Gagsta",
      },
    }
  );
  const obra = await response.json();
  return obra;
}

