async function getObras() {
    const response = await fetch("http://localhost:3000/obras");
    const obras = await response.json();
    return obras
  }