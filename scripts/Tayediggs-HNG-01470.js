const name = 'Abiola Taiwo';
const id = 'HNG-01470';
const email = 'abiolataiwo36@yahoo.com';
const language = 'Javascript';

const output = function(num) {
    if(num % 2 === 0) {
        return 'Hello World, this is ${name} with HNGi7 ID ${id} and email ${email} using ${language} for stage 2 task';
    } else {
        return null;  
    }
}

console.log(output(66));