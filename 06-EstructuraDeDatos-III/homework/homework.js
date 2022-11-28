"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
class BinarySearchTree {
  constructor(value) {
    this.value = value;

    this.left = null;
    this.right = null;
    this.length = 1;
  }
  size() {
    return this.length;
  }
  insert(data) {
    let nodo = new BinarySearchTree(data);
    if (nodo.value < this.value) {
      if (this.left === null) {
        this.left = nodo;
      } else {
        if (this.left !== null) {
          return this.left.insert(data);
        }
      }
    }
    if (nodo.value > this.value) {
      if (this.right === null) {
        this.right = nodo;
      } else {
        if (this.right !== null) {
          
          return this.right.insert(data);
          
        }
      }
    }
    this.length++;
    
  }
    contains(searchedValue) {
       
        if (searchedValue === this.value) { return true }   //Si valor pasado por parametro es igual al primer valor del arbol
                //ARBOL A LA IZQUIERDA 
        if (searchedValue < this.value) {    //para determinar el codigo en caso de que tenga que buscar en la izquierda
            if (this.left != null) {
                return this.left.contains(searchedValue)
           
            }  
                 

            }
            
            //ARBOL A LA DERECHA 
        if(searchedValue > this.value) {
            if (this.right != null) {
                return this.right.contains(searchedValue)
            }  

            }

            return false
        }
     
    









    depthFirstForEach() { }
    breadthFirstForEach() { }
}

 
// let tree = new BinarySearchTree(20)

// tree.insert(15)
// tree.insert(7)
// console.log(tree);
// console.log(tree.contains(7)); 

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
