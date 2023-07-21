const sign = require('jwt-encode');
const jwt_decode = require('jwt-decode');

// Signature
const secret = 'mi_clave_secreta';

// Payload:

const data = {
    "iss": "midominio.com",
    "exp": 1540839345,
    "name": "Pedro Perez",
    "email": "pedroperez@midominio.com",
    "iat": 1516239022
}

// Ciframos el token con sign:

const jwt = sign(data, secret);
console.log(`Token cifrado: ${jwt}`);

// Desciframos el token:

let decodedToken = jwt_decode(jwt);

console.log(`Token descifrado:`);
console.log(decodedToken);