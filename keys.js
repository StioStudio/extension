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



let keys_active = []

Array.prototype.remove = function(_num){
    let array = this.valueOf()
    let index = array.indexOf(_num);
    if (index > -1) {
        array.splice(index, 1);
    }
    return(array)
}

function checkKeys(..._key){
    let rem = false
    repeat(_key.length,(i)=>{
        if(keys_active.includes(_key[i])){
            rem = true
        }
    })
    return(rem)
}


(function(Scratch) {
    'use strict';
    class Keys {
      getInfo () {
        return { 
          // `id` is the internal ID of the extension
          // It should never change!
          // If you choose to make an actual extension, please change this to something else.
          // Only the characters a-z and 0-9 can be used. No spaces or special characters.
          id: 'stio000Keys',
    
          // `name` is what the user sees in the toolbox
          // It can be changed without breaking projects.
          name: 'Keys',
    
          color1: '#5cb1d6',
          color2: '#5cb1d6',
    
          blocks: [
            {
                opcode: 'active_keys',
                blockType: Scratch.BlockType.REPORTER,
                text: 'active keys',
            }
          ]
        };
      }
      active_keys(){
        return keys_active;
      }
    }
    Scratch.extensions.register(new Keys());
  })(Scratch);
  
addEventListener("keydown", (e)=>{
    if(keys_active.includes(e.key)) return
    keys_active.push(e.key)
})

addEventListener("keyup",(e)=>{
    keys_active.remove(e.key)
})