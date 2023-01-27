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


(function (Scratch) {
    'use strict';
    
    let canvas = Scratch.renderer.canvas

    canvas.addEventListener("pointerdown", (e)=>{
        addDot(e)
    })

    canvas.addEventListener("pointermove", (e)=>{
        const dotId = e.pointerId
        if (dotId == null) return
        
        var dot = document.getElementById(dotId)
        if (dot == null) {
            addDot(e)
            dot = document.getElementById(dotId)
        }
        postionDot(e, dot)
    })

    function addDot(e){
        const dot = document.createElement("div")
        dot.classList.add("dot")
        dot.id = e.pointerId
        dot.style.position = "absolute"
        dot.style.backgroundColor = "#ff0000"
        dot.style.zIndex = 100
        postionDot(e, dot)
        document.body.append(dot)
    }

    function postionDot(e, dot) {
        console.log(dot)
        dot.style.width = `${e.width * 10}px`
        dot.style.height = `${e.height * 10}px`
        dot.style.left = `${e.pageX}px`
        dot.style.top = `${e.pageY}px`
    }



    class stio_studio_MultiMouse{
        getInfo() {
            return {
                // `id` is the internal ID of the extension
                // It should never change!
                // If you choose to make an actual extension, please change this to something else.
                // Only the characters a-z and 0-9 can be used. No spaces or special characters.
                id: 'stio000MultiMouse',

                // `name` is what the user sees in the toolbox
                // It can be changed without breaking projects.
                name: 'Multi Mouse',

                color1: '#aabb44',
                color2: '#aabb44',

                blocks: [
                    {
                        opcode: 'a',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'local ID[ONE]',
                        arguments: {
                            ONE: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'ID'
                            }
                        }
                    },
                ]
            };
        }
        a(args) {
            localStorage_ID = args.ONE;
            return;
        }
    }
    Scratch.extensions.register(new stio_studio_MultiMouse());
})(Scratch);
