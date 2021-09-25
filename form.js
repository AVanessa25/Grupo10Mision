//caracteres numericos, longitud 4 a 30 y que no este vacio
//let nombre = document.getElementById('nombre');
function validar(){
let contraseña = document.getElementById('password').value;
checkContrasena(contraseña)
}
function checkContrasena(password){
    let contador_mayusculas = 0;
    let contador_minusculas = 0;
    let contador_numeros = 0;
    let numeros = [1,2,3,4,5,6,7,8,9,0]
    let mayusculas = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    let minusculas = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    if (password != "") {
        if (password.length >= 8) {
            for (let i = 0; i < password.length; i++) {
                for (let j = 0; j < mayusculas.length; j++) {
                    if (password[i] == mayusculas[j]) {
                        contador_mayusculas = contador_mayusculas + 1
                    };
                }
                for (let j = 0; j < minusculas.length; j++) {
                    if (password[i] == minusculas[j]) {
                        contador_minusculas = contador_minusculas + 1
                    };
                }
                for (let j = 0; j < numeros.length; j++) {
                    if (password[i] == numeros[j]) {
                        contador_numeros = contador_numeros + 1
                    };
                }
            }
            if (contador_minusculas>0 && contador_mayusculas>0 && contador_numeros>0){
                alert("Nice")
                return true;
            }else{
                alert("Error")
                return false;
            }
        }else{
            alert("Error")
            return false;
        }
    }else{
        alert("Error")
        return false;
    }
}
console.log(checkContrasena("HOLAMMMMMMMMmMM1"))
            