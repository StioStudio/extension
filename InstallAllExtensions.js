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
    class stio_studio_InstallAllExtensions {
      getInfo () {
          return { 
              // `id` is the internal ID of the extension
              // It should never change!
              // If you choose to make an actual extension, please change this to something else.
              // Only the characters a-z and 0-9 can be used. No spaces or special characters.
              id: 'stio000extensions',
              
              // `name` is what the user sees in the toolbox
              // It can be changed without breaking projects.
              name: 'Extensions',
              
              color1: '#59c059',
              color2: '#59c059',
              
              blocks: [
                  {
                      opcode: 'install_extension',
                      blockType: Scratch.BlockType.COMMAND,
                      text: 'install extension[ONE]',
                      arguments: {
                          ONE: {
                              type: Scratch.ArgumentType.STRING,
                              defaultValue: 'http://example.js'
                            }
                        }
                    },
                    {
                        opcode: 'uninstall_extension',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'uninstall extension[ONE] # NOT WORKING! #',
                        arguments: {
                            ONE: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'http://example.js'
                              }
                          }
                      }
                ]
            };
    }
    install_extension(args){
        Scratch.vm.extensionManager.loadExtensionURL(args.ONE)
    }
    uninstall_extension(args){
        
    }
}
Scratch.extensions.register(new stio_studio_InstallAllExtensions());
})(Scratch);

Scratch.vm.extensionManager.loadExtensionURL("http://localhost:8000/extension/LogicGates.js")
Scratch.vm.extensionManager.loadExtensionURL("http://localhost:8000/extension/DevTools.js")
Scratch.vm.extensionManager.loadExtensionURL("http://localhost:8000/extension/Image.js")
Scratch.vm.extensionManager.loadExtensionURL("http://localhost:8000/extension/Keys.js")
Scratch.vm.extensionManager.loadExtensionURL("http://localhost:8000/extension/LocalStorage.js")
Scratch.vm.extensionManager.loadExtensionURL("http://localhost:8000/extension/Test.js")
Scratch.vm.extensionManager.loadExtensionURL("http://localhost:8000/extension/WebSocket.js")


