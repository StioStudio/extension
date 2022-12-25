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

(function(Scratch) {
  'use strict';
  class MyExtension {
    getInfo () {
      return { 
        // `id` is the internal ID of the extension
        // It should never change!
        // If you choose to make an actual extension, please change this to something else.
        // Only the characters a-z and 0-9 can be used. No spaces or special characters.
        id: 'image',
  
        // `name` is what the user sees in the toolbox
        // It can be changed without breaking projects.
        name: 'image',
  
        color1: '#11BB11',
  
        blocks: [
          {
            opcode: 'get_image',
            blockType: Scratch.BlockType.REPORTER,
            text: 'get image[ONE]and wait',
            arguments: {
                ONE: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: 'http://example.png'
                }
            }
          },
        ]
      };
    }
    get_image(args){
        let img;
        new Promise((resolve) => {
            img = new Image();
            img.onload = () => resolve(img);
            img.src = args.ONE;
        });
        return img;
    }
  }
  Scratch.extensions.register(new MyExtension());
})(Scratch);
