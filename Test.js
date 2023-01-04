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
    class Test {
      getInfo () {
        return { 
          // `id` is the internal ID of the extension
          // It should never change!
          // If you choose to make an actual extension, please change this to something else.
          // Only the characters a-z and 0-9 can be used. No spaces or special characters.
          id: 'stio000Test',
    
          // `name` is what the user sees in the toolbox
          // It can be changed without breaking projects.
          name: 'Test',
    
          color1: '#909090',
          color2: '#909090',
    
          blocks: [
            {
              opcode: '001',
              blockType: Scratch.BlockType.BOOLEAN,
              text: 'Hi',
            },
            {
              opcode: '002',
              blockType: Scratch.BlockType.BUTTON,
              text: 'Hi',
            },
            {
              opcode: '003',
              blockType: Scratch.BlockType.COMMAND,
              text: 'Hi',
            },
            {
              opcode: '004',
              blockType: Scratch.BlockType.CONDITIONAL,
              text: 'Hi',
            },
            {
              opcode: '005',
              blockType: Scratch.BlockType.EVENT,
              text: 'Hi',
            },
            {
              opcode: '006',
              blockType: Scratch.BlockType.HAT,
              text: 'Hi',
            },
            {
              opcode: '007',
              blockType: Scratch.BlockType.LOOP,
              text: 'Hi',
            },
            {
              opcode: '008',
              blockType: Scratch.BlockType.REPORTER,
              text: 'Hi',
            },
          ]
        };
      }
    }
    Scratch.extensions.register(new Test());
  })(Scratch);
