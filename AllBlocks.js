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
    class stio_studio_AllBlocks {
      getInfo () {
        return { 
          // `id` is the internal ID of the extension
          // It should never change!
          // If you choose to make an actual extension, please change this to something else.
          // Only the characters a-z and 0-9 can be used. No spaces or special characters.
          id: 'stio000AllBlocks',
    
          // `name` is what the user sees in the toolbox
          // It can be changed without breaking projects.
          name: 'AllBlocks',
    
          color1: '#909090',
          color2: '#909090',
    
          blocks: [
            {
              opcode: 'BOOLEAN',
              blockType: Scratch.BlockType.BOOLEAN,
              text: 'Hi',
            },
            {
              opcode: 'BUTTON',
              blockType: Scratch.BlockType.BUTTON,
              text: 'Hi',
            },
            {
              opcode: 'COMMAND',
              blockType: Scratch.BlockType.COMMAND,
              text: 'Hi',
            },
            {
              opcode: 'CONDITIONAL',
              blockType: Scratch.BlockType.CONDITIONAL,
              text: 'if[ONE]',
              arguments: {
                ONE: {
                    type: Scratch.ArgumentType.BOOLEAN,
                    defaultValue: false
                }
              }
            },
            {
              opcode: 'EVENT',
              blockType: Scratch.BlockType.EVENT,
              text: 'Hi',
            },
            {
              opcode: 'HAT',
              blockType: Scratch.BlockType.HAT,
              text: 'Hi',
            },
            {
              opcode: 'LOOP',
              blockType: Scratch.BlockType.LOOP,
              text: 'Hi',
            },
            {
              opcode: 'REPORTER',
              blockType: Scratch.BlockType.REPORTER,
              text: 'Hi',
            },
          ]
        };
      }
      CONDITIONAL(a, b, c, d, e, f, g, h, i, j, k){
        console.log(a, b, c, d, e, f, g, h, i, j, k);
		
        const currentBlockId = b.thread.peekStack();
        const branchBlock = b.thread.target.blocks.getBranch(
                currentBlockId,
                0
            );
    
        if (branchBlock) {
          b.sequencer.runtime._pushThread(branchBlock, b.target, {});
        }
      }
    }
    Scratch.extensions.register(new stio_studio_Test());
  })(Scratch);
