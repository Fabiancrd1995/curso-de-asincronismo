export function persona (callback) {
    // Tu código aquí 👈
    var nom = prompt("Por favor ingrese su nombre");
    callback(nom);
  }

  function saludo (nom) {
    alert(`Hola ${nom}`);
  }

  window.setTimeout(() => {
    // code
    persona(saludo);
  })

  persona.setTimeout(saludo, 2000);


  runCode(() => console.log('Log after 2s'));

// Execute function 2s after


  
  function persona (callback) {
    var nom = prompt("Por favor ingrese su nombre");
    callback(nom);
  }
  



// Ejercicio

export function runCode(nom) {
  // Tu código aquí 👈
  var nom = prompt("Por favor ingrese su nombre");
  return nom;
}

function saludo (nom) {
  return alert(`Hola ${nom}`);
}

window.setTimeout(saludo, 2000, nom);