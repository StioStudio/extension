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

function getCanvas() {
  let rem = document.querySelectorAll("canvas")
  if (rem.length == 2) {
    return rem[0];
  }
  return rem[1];
}

(function (Scratch) {
  'use strict';
  class stio_studio_Image {
    getInfo() {
      return {
        // `id` is the internal ID of the extension
        // It should never change!
        // If you choose to make an actual extension, please change this to something else.
        // Only the characters a-z and 0-9 can be used. No spaces or special characters.
        id: 'stio000Image',

        // `name` is what the user sees in the toolbox
        // It can be changed without breaking projects.
        name: 'Image',

        color1: '#119911',
        color2: '#119911',
        
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
          {
            opcode: 'add_costume',
            blockType: Scratch.BlockType.COMMAND,
            text: 'add costume[ONE] # NOT WORKING! # [TWO]',
            arguments: {
              ONE: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'image'
              },
              TWO: {
                type: Scratch.ArgumentType.Image,
              }
            }
          },
        ]
      };
    }
    load_image(args) {
      let img;
      new Promise((resolve) => {
        img = new Image();
        img.onload = () => resolve(img);
        img.src = args.ONE;
      });
      return img;
    }
    save_image(args) {
      if (image.name.includes(args.ONE)) {
        image.image[image.name.indexOf(args.ONE)] = args.TWO
        return;
      }
      image.name.push(args.ONE)
      image.image.push(args.TWO)
      return;
    }
    get_image(args) {
      return image.image[image.name.indexOf(args.ONE)]
    }
    stamp_image(args) {
      gl.bindTexture(gl.TEXTURE_2D, tex);

      // Tell WebGL to use our shader program pair
      gl.useProgram(program);

      gl.bindBuffer(gl.ARRAY_BUFFER, quadColorBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(quadColors), gl.STATIC_DRAW);
      // Setup the attributes to pull data from our buffers
      gl.bindBuffer(gl.ARRAY_BUFFER, quadPositionBuffer);
      gl.enableVertexAttribArray(positionLocation);
      gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);
      gl.bindBuffer(gl.ARRAY_BUFFER, quadTexCoordBuffer);
      gl.enableVertexAttribArray(texcoordLocation);
      gl.vertexAttribPointer(texcoordLocation, 2, gl.FLOAT, false, 0, 0);
      gl.bindBuffer(gl.ARRAY_BUFFER, quadColorBuffer);
      gl.enableVertexAttribArray(colorLocation);
      gl.vertexAttribPointer(colorLocation, 4, gl.FLOAT, false, 0, 0);

      // this matrix will convert from pixels to clip space
      var matrix = m4.orthographic(0, gl.canvas.width, gl.canvas.height, 0, -1, 1);

      // this matrix will translate our quad to dstX, dstY
      matrix = m4.translate(matrix, dstX, dstY, 0);

      matrix = m4.zRotate(matrix, degreesToRadians(stampRotation))

      // this matrix will scale our 1 unit quad
      // from 1 unit to texWidth, texHeight units
      matrix = m4.scale(matrix, texWidth, texHeight, 1);

      // Set the matrix.
      gl.uniformMatrix4fv(matrixLocation, false, matrix);

      // Tell the shader to get the texture from texture unit 0
      gl.uniform1i(textureLocation, 0);

      // draw the quad (2 triangles, 6 vertices)
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      return;
    }
    add_costume(args) {
      Scratch.vm.addCostume
      return;
    }
  }
  Scratch.extensions.register(new stio_studio_Image());
})(Scratch);
