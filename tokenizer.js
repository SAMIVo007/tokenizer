let vocab = {};
let reverseVocab = {};
let idCount = 0;

function addToken(word) {
	if (vocab[word] === undefined) {
		vocab[word] = idCount;
		reverseVocab[idCount] = word;
		idCount++;
	}
}

function fitText(text) {
	for (let i = 0; i < text.length; i++) {
		let c = text[i];
		if (c === " ") {
			addToken("<SPACE>");
		} else {
			let word = "";
			while (i < text.length && text[i] !== " ") {
				word += text[i];
				i++;
			}
			i--;
			addToken(word.toLowerCase());
		}
	}
}

function encode(sentence) {
	let ids = [];
	addToken("<START>");
	ids.push(vocab["<START>"]);

	for (let i = 0; i < sentence.length; i++) {
		let ch = sentence[i];
		if (ch === " ") {
			if (vocab["<SPACE>"] === undefined) {
				addToken("<SPACE>");
			}
			ids.push(vocab["<SPACE>"]);
		} else {
			let word = "";
			while (i < sentence.length && sentence[i] !== " ") {
				word += sentence[i];
				i++;
			}
			i--;
			let lw = word.toLowerCase();
			if (vocab[lw] !== undefined) {
				ids.push(vocab[lw]);
			} else {
				if (vocab["<UNK>"] === undefined) {
					addToken("<UNK>");
				}
				ids.push(vocab["<UNK>"]);
			}
		}
	}

	addToken("<END>");
	ids.push(vocab["<END>"]);

	return ids;
}

function decode(ids) {
	let output = "";
	for (let i = 0; i < ids.length; i++) {
		let tok = reverseVocab[ids[i]];
		if (tok === "<SPACE>") {
			output += " ";
		} else if (tok !== "<START>" && tok !== "<END>") {
			output += tok;
		}
	}
	return output;
}



let trainText = "Hello world, my name is Yuvraj Singh. I am a software engineer, and i'm learning Gen AI with Js. This code is about tokenization and encoding & decoding";
fitText(trainText);

console.log("Vocab after training:", vocab);

let encoded = encode("Hello my friend");
console.log("Encoded:", encoded);

let decoded = decode(encoded);
console.log("Decoded:", decoded);
