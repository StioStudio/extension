/**!
 * This extension was made available by chat gpt3.
 * So everything that is here can be used, but may have errors.
 * Use on own risk.
 */
(function (Scratch) {
    'use strict';

    class stio_studio_WebSocketExtension {
        // The getInfo function is used to define the extension's blocks and metadata
        getInfo() {
            return {
                // The ID of the extension. This should be a unique identifier that
                // is used to identify the extension in the Scratch runtime.
                // Only the characters a-z and 0-9 can be used. No spaces or special characters.
                id: 'websocket',

                // The name of the extension, as it will appear in the toolbox
                name: 'WebSocket',

                // The color of the blocks in the extension
                color1: '#404040',
                color2: '#404040',

                // The blocks provided by the extension
                blocks: [
                    {
                        // The opcode of the block. This is the identifier that is used
                        // to invoke the block in the Scratch runtime.
                        // Only the characters a-z and 0-9 can be used. No spaces or special characters.
                        opcode: 'connect',

                        // The type of the block.
                        blockType: Scratch.BlockType.COMMAND,

                        // The text displayed in the block
                        text: 'connect to [URL]',

                        // The arguments of the block.
                        // In this case, the block has a single string argument called "URL"
                        arguments: {
                            URL: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'ws://localhost:8080'
                            }
                        }
                    },
                    {
                        opcode: 'send',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'send [MESSAGE]',
                        arguments: {
                            MESSAGE: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'Hello, world!'
                            }
                        }
                    },
                    {
                        opcode: 'onMessage',
                        blockType: Scratch.BlockType.HAT,
                        text: 'when received message'
                    },
                    {
                        opcode: 'receivedMessage',
                        blockType: Scratch.BlockType.REPORTER,
                        text: 'received message'
                    }
                ]
            };
        }

        // The connect function is called when the "connect" block is executed
        connect(args) {
            // Store the URL of the WebSocket server in a local variable
            this.serverURL = args.URL;

            // Create a new WebSocket connection to the server
            this.ws = new WebSocket(this.serverURL);

            // Set the onmessage callback for the WebSocket
            this.ws.onmessage = this.onMessage.bind(this);
        }

        // The send function is called when the "send" block is executed
        send(args) {
            // Send the message to the WebSocket server
            this.ws.send(args.MESSAGE);
        }

        // The onMessage function is called when the WebSocket receives a message
        onMessage(event) {
            // Store the received message in a local variable
            this.receivedMessage = event.data;
            // Check if the "when received message" hat block is being used
            if (this.runtime.isHatsBlock(this.hat)) {
                // If so, run the stack
                this.runtime.startHats('websocket', {
                    receivedMessage: this.receivedMessage
                });
            }
        }

        // The receivedMessage function is called when the "received message" block is executed
        receivedMessage() {
            // Return the stored received message
            return this.receivedMessage;
        }
    }

    // Register the extension with the Scratch runtime
    Scratch.extensions.register(new stio_studio_WebSocketExtension());
})(Scratch);  