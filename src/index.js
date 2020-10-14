const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  let wordsArray = expr.split('**********');

  return wordsArray.map(item => {
        let letters = item.match(new RegExp(`.{10}`, 'g'));
        return letters.map(i => MORSE_TABLE[convertString(i)]).join('');
    }).join(' ');
}

function convertString(str){
    let code = '';
    let letters = str.match(new RegExp(`.{2}`, 'g'));

    letters.forEach(function(letter){
        if(letter == '10') {
            code = code + '.';
        };
        if(letter == '11') {
            code = code + '-';
        };
        });

    return code;
}

module.exports = {
    decode
}