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
          id: 'stio000logic',
    
          // `name` is what the user sees in the toolbox
          // It can be changed without breaking projects.
          name: 'logic',
    
          color1: '#963781',
    
          blocks: [
            {
                opcode: 'true',
                blockType: Scratch.BlockType.BOOLEAN,
                text: 'true',
            },
            {
                opcode: 'false',
                blockType: Scratch.BlockType.BOOLEAN,
                text: 'flase',
            }
          ]
        };
      }
      true(){
        return true;
      }
      false(){
        return false;
      }
    }
    Scratch.extensions.register(new MyExtension());
  })(Scratch);
  