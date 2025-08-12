## Simple Tokenizer
This is a basic tokenizer in JavaScript without using any library like tiktoken.
It learns a vocabulary from a text, and can encode and decode sentences using that vocab.
Special tokens like START, END, SPACE, and UNK are used when needed.

### How it Works
Train vocab using a given text (learns words + <SPACE> token for spaces)

Encode a sentence:

Adds START at the beginning

Replaces each space with SPACE

Replaces each word with its ID (or UNK if not in vocab)

Adds END at the end

Decode:

Converts IDs back to words

Replaces SPACE with space

Removes START and END from output

### Example Run
Write: '*node tokenizer.js*' in the terminal.
Vocab after training: { 'SPACE': 0, 'hello': 1, 'world,': 2, 'my': 3, 'name': 4, 'is': 5, 'yuvraj': 6, 'singh': 7 }

Encoded: [8, 1, 0, 3, 0, 9, 10] 
Decoded: hello my UNK

![image](<CleanShot 2025-08-12 at 9 .00.46@2x.png>)