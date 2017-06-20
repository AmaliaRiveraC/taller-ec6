let persona = {
  nombre: 'Amalia',
  edad: 25,
  saludar () {
    return `Hola, mi nombre es
${this.nombre} y tengo 
${this.edad} anos.`;
  }
};

console.log(persona.saludar);