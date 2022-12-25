/*!
 * Copyright 2023 StioStudio
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

let image = {
    image: [],
    name: []
};

function getCanvas(){
    let rem = document.querySelectorAll("canvas")
    if(rem.length == 2){
        return rem[0];
    }
    return rem[1];
}

let canvas = getCanvas()
const gl = canvas.getContext("experimental-webgl");

(function(Scratch) {
  'use strict';
  class MyExtension {
    getInfo () {
      return { 
        // `id` is the internal ID of the extension
        // It should never change!
        // If you choose to make an actual extension, please change this to something else.
        // Only the characters a-z and 0-9 can be used. No spaces or special characters.
        id: 'stio000image',
  
        // `name` is what the user sees in the toolbox
        // It can be changed without breaking projects.
        name: 'image',
  
        color1: '#11BB11',
  
        blocks: [
          {
            opcode: 'load_image',
            blockType: Scratch.BlockType.REPORTER,
            text: 'load image[ONE]and wait',
            arguments: {
                ONE: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: 'http://example.png'
                }
            }
          },
          {
            opcode: 'save_image',
            blockType: Scratch.BlockType.COMMAND,
            text: 'save image[ONE][TWO]',
            arguments: {
                ONE: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: 'name'
                },
                TWO: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: 'image'
                }
            }
          },
          {
            opcode: 'get_image',
            blockType: Scratch.BlockType.REPORTER,
            text: 'get image[ONE]',
            arguments: {
                ONE: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: 'name'
                }
            }
          },
          {
            opcode: 'stamp_image',
            blockType: Scratch.BlockType.COMMAND,
            text: 'stamp image[ONE] # NOT WORKING! #',
            arguments: {
                ONE: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: 'image'
                }
            }
          },
        ]
      };
    }
    load_image(args){
        let img;
        new Promise((resolve) => {
            img = new Image();
            img.onload = () => resolve(img);
            img.src = args.ONE;
        });
        return img;
    }
    save_image(args){
        if(image.name.includes(args.ONE)){
            image.image[image.name.indexOf(args.ONE)] = args.TWO
            return;
        }
        image.name.push(args.ONE)
        image.image.push(args.TWO)
        return;
    }
    get_image(args){
        return image.image[image.name.indexOf(args.ONE)]
    }
    stamp_image(args){
        var vertices = [
            -0.5,0.5,0.0,
            -0.5,-0.5,0.0,
            0.5,-0.5,0.0, 
        ];
         
        let indices = [0,1,2];
        
        // Create an empty buffer object to store vertex buffer
        var vertex_buffer = gl.createBuffer();

        // Bind appropriate array buffer to it
        gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
        
        // Pass the vertex data to the buffer
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

        // Unbind the buffer
        gl.bindBuffer(gl.ARRAY_BUFFER, null);

        // Create an empty buffer object to store Index buffer
        var Index_Buffer = gl.createBuffer();

        // Bind appropriate array buffer to it
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, Index_Buffer);

        // Pass the vertex data to the buffer
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);
        
        // Unbind the buffer
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);

        /*================ Shaders ====================*/
        
        // Vertex shader source code
        var vertCode =
           'attribute vec3 coordinates;' +
			
           'void main(void) {' +
              ' gl_Position = vec4(coordinates, 1.0);' +
           '}';
           
        // Create a vertex shader object
        var vertShader = gl.createShader(gl.VERTEX_SHADER);

        // Attach vertex shader source code
        gl.shaderSource(vertShader, vertCode);

        // Compile the vertex shader
        gl.compileShader(vertShader);

        //fragment shader source code
        var fragCode =
           'void main(void) {' +
              ' gl_FragColor = vec4(0.0, 0.0, 0.0, 0.1);' +
           '}';
           
        // Create fragment shader object
        var fragShader = gl.createShader(gl.FRAGMENT_SHADER);

        // Attach fragment shader source code
        gl.shaderSource(fragShader, fragCode); 
        
        // Compile the fragmentt shader
        gl.compileShader(fragShader);

        // Create a shader program object to store
        // the combined shader program
        var shaderProgram = gl.createProgram();

        // Attach a vertex shader
        gl.attachShader(shaderProgram, vertShader);

        // Attach a fragment shader
        gl.attachShader(shaderProgram, fragShader);

        // Link both the programs
        gl.linkProgram(shaderProgram);

        // Use the combined shader program object
        gl.useProgram(shaderProgram);

        /*======= Associating shaders to buffer objects =======*/

        // Bind vertex buffer object
        gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);

        // Bind index buffer object
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, Index_Buffer);
        
        // Get the attribute location
        var coord = gl.getAttribLocation(shaderProgram, "coordinates");

        // Point an attribute to the currently bound VBO
        gl.vertexAttribPointer(coord, 3, gl.FLOAT, false, 0, 0); 
        
        // Enable the attribute
        gl.enableVertexAttribArray(coord);

        /*=========Drawing the triangle===========*/

        // Clear the canvas
        gl.clearColor(0.5, 0.5, 0.5, 0.9);

        // Enable the depth test
        gl.enable(gl.DEPTH_TEST);

        // Clear the color buffer bit
        gl.clear(gl.COLOR_BUFFER_BIT);

        // Set the view port
        gl.viewport(0,0,canvas.width,canvas.height);

        // Draw the triangle

        gl.drawElements(gl.TRIANGLES, indices.length, gl.UNSIGNED_SHORT,0);

        return;
    }
  }
  Scratch.extensions.register(new MyExtension());
})(Scratch);
