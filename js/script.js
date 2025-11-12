'use strict';
class Producto{
    #id;
    // nombre;
    // descripcion;
    // precio;
    // imagen;
    // categoria;

    constructor(nombre = 'Nombre', descripcion = 'Descripción', precio = 0, imagen = '#', categoria = 'Común'){
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = parseFloat(precio);
        this.imagen = imagen;
        this.categoria = categoria;
    }

    set setId(id){
        this.#id = parseInt(id);
    }

    get getId(){
        return this.#id;
    }
}

let productos = [
    new Producto('Naranja', 'Impredescible', 1.50, 'cat.png', 'Común'),
    new Producto('Naranja', 'Impredescible', 1.50, 'cat.png', 'Común'),
    new Producto('Naranja', 'Impredescible', 1.50, 'cat.png', 'Común'),
    new Producto('Naranja', 'Impredescible', 1.50, 'cat.png', 'Común'),
    new Producto('Naranja', 'Impredescible', 1.50, 'cat.png', 'Común'),
    new Producto('Naranja', 'Impredescible', 1.50, 'cat.png', 'Común'),
    new Producto('Naranja', 'Impredescible', 1.50, 'cat.png', 'Común'),
    new Producto('Naranja', 'Impredescible', 1.50, 'cat.png', 'Común'),
];

let count = 1;
for(let g of productos){
    g.setId = count;
    count++;
}

const d = document;

let catalogo = d.querySelector('#catalogo');

for(let producto of productos){
    let div = d.createElement('div');
    let i = d.createElement('p');
    i.innerHTML = `Mi id es ${producto.getId}`;
    div.appendChild(i);
    div.className = 'producto';
    catalogo.appendChild(div);
}