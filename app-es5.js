'use strict';

var persona = {
  nombre: 'Amalia',
  edad: 25,
  saludar: function saludar() {
    return 'Hola, mi nombre es\n' + this.nombre + ' y tengo \n' + this.edad + ' anos.';
  }
};

console.log(persona.saludar);
