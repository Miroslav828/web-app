
import {createMovie, createProgram, addMovieToProgram} from '../controler/controler.js'
import{button1Node, button2Node, button3Node} from '../entities/nodes.js'

button1Node.addEventListener('click', createMovie);
button2Node.addEventListener("click", createProgram);
button3Node.addEventListener('click', addMovieToProgram);