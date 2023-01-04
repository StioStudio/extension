(function(Scratch) {
  'use strict';
  class LogicGatesExtension {
    getInfo () {
      return { 
        id: 'logicGates',
        name: 'Logic Gates',
        color1: '#1111BB',
        color2: '#1111BB',
        blocks: [
          {
            opcode: 'and',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'AND [A] [B]',
            arguments: {
                A: {
                    type: Scratch.ArgumentType.BOOLEAN,
                    defaultValue: false
                },
                B: {
                    type: Scratch.ArgumentType.BOOLEAN,
                    defaultValue: false
                }
            }
          },
          {
            opcode: 'or',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'OR [A] [B]',
            arguments: {
                A: {
                    type: Scratch.ArgumentType.BOOLEAN,
                    defaultValue: false
                },
                B: {
                    type: Scratch.ArgumentType.BOOLEAN,
                    defaultValue: false
                }
            }
          },
          {
            opcode: 'not',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'NOT [A]',
            arguments: {
                A: {
                    type: Scratch.ArgumentType.BOOLEAN,
                    defaultValue: false
                }
            }
          },
          {
            opcode: 'xor',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'XOR [A] [B]',
            arguments: {
                A: {
                    type: Scratch.ArgumentType.BOOLEAN,
                    defaultValue: false
                },
                B: {
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
      return args.A && args.B;
    }
    or(args) {
      return args.A || args.B;
    }
    not(args) {
      return !args.A;
    }
    xor(args) {
      return args.A !== args.B;
    }
    true() {
      return true;
    }
    false() {
      return false;
    }
  }
  Scratch.extensions.register(new LogicGatesExtension());
})(Scratch);
