async function getObras() {
    const response = await fetch("https://jsonserverobras.gilhermetheodor.repl.co/obras" , {headers: {
      "Content-Type": "application/json",
      "Accept": "/",
      "Host": "Gagsta",
    },
});
    const obras = await response.json();
    return obras
  }