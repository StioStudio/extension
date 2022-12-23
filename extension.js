// We use class syntax to define our extension object
// This isn't actually necessary, but it tends to look the best

let localStorage_ID = undefined;

class MyExtension {
  /**
   * Scratch will call this method *once* when the extension loads.
   * This method's job is to tell Scratch things like the extension's ID, name, and what blocks it supports.
   */
  getInfo() {
    return {
      // `id` is the internal ID of the extension
      // It should never change!
      // If you choose to make an actual extension, please change this to something else.
      // Only the characters a-z and 0-9 can be used. No spaces or special characters.
      id: 'localstorage',

      // `name` is what the user sees in the toolbox
      // It can be changed without breaking projects.
      name: 'Local Storage',

      color1: '#BB1111',

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
        {
            opcode: 'b',
            blockType: Scratch.BlockType.COMMAND,
            text: 'local set item[ONE][TWO]',
            arguments: {
                ONE: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: 'KEY'
                },
                TWO: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: 'VALUE'
                }
            }
        },
        {
            opcode: 'c',
            blockType: Scratch.BlockType.REPORTER,
            text: 'local get Item[ONE]',
            arguments: {
                ONE: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: 'KEY'
                }
            }
        },
        {
          opcode: 'd',
          blockType: Scratch.BlockType.COMMAND,
          text: 'local remove item[ONE]',
          arguments: {
              ONE: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'KEY'
              }
          }
      },
      {
        opcode: 'e',
        blockType: Scratch.BlockType.COMMAND,
        text: 'local clear ALL'
      }
      ]
    };
  }

  /**
   * Corresponds to `opcode: 'hello'` above
   */
  a(args){
    localStorage_ID = args.ONE
  }
  b(args) {
    localStorage.setItem(localStorage_ID+args.ONE, args.TWO);
    return;
  }
  c(args) {
      return localStorage.getItem(localStorage_ID+args.ONE);
  }
  d(args){
    localStorage.removeItem(localStorage_ID+args.ONE);
    return;
  }
  f(){
    localStorage.clear();
    return;
  }
}

// Call Scratch.extensions.register to register your extension
// Make sure to register each extension exactly once
Scratch.extensions.register(new MyExtension());