const form = document.querySelector('.form')
const binary = document.querySelector('#idbin').value
const resForm = document.querySelector('#idres')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    resForm.value = convertBinToDec(binary);
})

// conversão de bases transformando o número para Array
function convertArray () {

    const arrayBinary = binary.split("")

    let i = 0
    let j = arrayBinary.length - 1
    let res = 0

    while(i != (arrayBinary.length)) {
        
        if(arrayBinary[j] == '1') {
            res += 2 ** i
        }

        j--;
        i++;
    }

    resForm.value = res
}

// conversão de bases menores que 10 para base decimal de maneira recursiva

function convertDecToAny(value, base, response, depth) {
    if(value < 1) {
        return response
    }
    else {
        response += (value % base) * (10 ** depth)
        value = Math.floor(value / base);
        return convertDecToAny(value, base, response, depth + 1)
    }
    
}

// Conversão de binário para decimal

function convertBinToDec(binaryString) {
    let decimalValue = 0;
    let length = binaryString.length;

    for (let i = 0; i < length; i++) {
        let digit = binaryString.charAt(length - 1 - i);
        if (digit === '1') {
            decimalValue += Math.pow(2, i);
        }
    }
    return decimalValue;
}