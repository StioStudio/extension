/**!
 * This extension was made available by chat gpt3.
 * So everything that is here can be used, but may have errors.
 * Use on own risk.
 */
(function(Scratch) {
  'use strict';
  class LogicGates {
    getInfo () {
      return { 
        id: 'LogicGates',
        name: 'Logic Gates',
        color1: '#59c059',
        color2: '#59c059',
        blocks: [
          {
            opcode: 'and',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[ONE] AND [TWO]',
            arguments: {
                ONE: {
                    type: Scratch.ArgumentType.BOOLEAN,
                    defaultValue: false
                },
                TWO: {
                    type: Scratch.ArgumentType.BOOLEAN,
                    defaultValue: false
                }
            }
          },
          {
            opcode: 'nor',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[ONE] NOR [TWO]',
            arguments: {
                ONE: {
                    type: Scratch.ArgumentType.BOOLEAN,
                    defaultValue: false
                },
                TWO: {
                    type: Scratch.ArgumentType.BOOLEAN,
                    defaultValue: false
                }
            }
          },
          {
            opcode: 'or',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[ONE] OR [TWO]',
            arguments: {
                ONE: {
                    type: Scratch.ArgumentType.BOOLEAN,
                    defaultValue: false
                },
                TWO: {
                    type: Scratch.ArgumentType.BOOLEAN,
                    defaultValue: false
                }
            }
          },
          {
            opcode: 'xor',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[ONE] XOR [TWO]',
            arguments: {
                ONE: {
                  type: Scratch.ArgumentType.BOOLEAN,
                    defaultValue: false
                  },
                  TWO: {
                    type: Scratch.ArgumentType.BOOLEAN,
                    defaultValue: false
                  }
                }
              },
              {
                opcode: 'not',
                blockType: Scratch.BlockType.BOOLEAN,
                text: 'NOT [ONE]',
                arguments: {
                    ONE: {
                        type: Scratch.ArgumentType.BOOLEAN,
                        defaultValue: false
                    }
                }
              },
          {
            opcode: 'true',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'TRUE',
          },
          {
            opcode: 'false',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'FALSE',
          }
        ]
      };
    }
    and(args) {
      return args.ONE && args.TWO;
    }
    nor(args) {
      return !(args.ONE || args.TWO);
    }    
    or(args) {
      return args.ONE || args.TWO;
    }
    xor(args) {
      return args.ONE !== args.TWO;
    }
    not(args) {
      return !args.ONE;
    }
    true() {
      return true;
    }
    false() {
      return false;
    }
  }
Scratch.extensions.register(new LogicGates());
})(Scratch);
