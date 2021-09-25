function click_boton()
{
    let name = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let telefono = document.getElementById("telefono").value;
    let correo = document.getElementById("correo").value;
    registrar_campo(name, "nombre");
    registrar_campo(apellido, "apellido");
    registrar_telefono(telefono, "telefono");
    registrar_correo(correo,"correo");
    

}

function registrar_campo(campo, ref_campo) {
    let verificacion = validar_texto(campo);    
    if (verificacion == 1){
        alert("El campo " + ref_campo + " fue ingresado correctamente");
    }
    else if (verificacion == 2){
        alert("El campo " + ref_campo + " no admite numeros");
    }
    else if (verificacion == 3){
        alert("El campo " + ref_campo + " debe contener entre 4 y 7 caracteres");
    }
    else if (verificacion == 4){
        alert("El campo " + ref_campo + " no se puede dejar vacío");
    }
}

function registrar_telefono(campo, ref_campo) {
    let verificacion = validar_numero(campo);    
    if (verificacion == 1){
        alert("El campo " + ref_campo + " fue ingresado correctamente");
    }
    else if (verificacion == 2){
        alert("El campo " + ref_campo + " solo admite numeros");
    }
    else if (verificacion == 3){
        alert("El campo " + ref_campo + " debe contener 5 digitos");
    }
    else if (verificacion == 4){
        alert("El campo " + ref_campo + " no se puede dejar vacío");
    }
}

function registrar_correo(campo, ref_campo) {
    let verificacion = validar_correo(campo);    
    if (verificacion == 1){
        alert("El campo " + ref_campo + " fue ingresado correctamente");
    }
    else if (verificacion == 2){
        alert("El campo " + ref_campo + " solo admite correo valido");
    }
  
    else if (verificacion == 3){
        alert("El campo " + ref_campo + " no se puede dejar vacío");
    }
}

function validar_texto(campo){
    let array_campo = Array.from(campo);
    let verificacion = 1;
    if (campo != "") {
        if (array_campo.length <= 30 && array_campo.length >= 4) {
            for(let i=0; i<array_campo.length; i++)
            {
                if(array_campo[i] == "0" || array_campo[i] == "1" || array_campo[i] == "2" || array_campo[i] == "3" || array_campo[i] == "4" || array_campo[i] == "5" || array_campo[i] == "6" || array_campo[i] == "7" || array_campo[i] == "8" || array_campo[i] == "9"){  
                    verificacion = 2;
                    i = array_campo.length;                  
                }
            }
        }
        else
        {
            verificacion = 3;
        }       
    }
    else
    {
        verificacion = 4;       
    }
    return verificacion;
}

function validar_numero(campo){
    let array_campo = Array.from(campo);
    let verificacion = 1;
    if(campo != ""){
        if(array_campo.length == 7){
            for(let i=0; i<array_campo.length; i++)
            {                
                if(array_campo[i] == "0" || array_campo[i] == "1" || array_campo[i] == "2" || array_campo[i] == "3" || array_campo[i] == "4" || array_campo[i] == "5" || array_campo[i] == "6" || array_campo[i] == "7" || array_campo[i] == "8" || array_campo[i] == "9"){ 
                                                        
                }
                else
                {
                    verificacion = 2;
                    i = array_campo.length;  
                }
            }
        }
        else
        {
            verificacion = 3;
        }

    }
    else
    {
        verificacion = 1;
    }
    return verificacion;
}

function validar_correo(campo){
    let array_campo = Array.from(campo);
    let verificacion = 1;
    if(campo != ""){
        if(array_campo.length == 7){
            for(let i=0; i<array_campo.length; i++)
            {                
                if(array_campo[i] == "" || array_campo[i] == "1" || array_campo[i] == "2" || array_campo[i] == "3" || array_campo[i] == "4" || array_campo[i] == "5" || array_campo[i] == "6" || array_campo[i] == "7" || array_campo[i] == "8" || array_campo[i] == "9"){ 
                                                        
                }
                else
                {
                    verificacion = 2;
                    i = array_campo.length;  
                }
            }
        }
        else
        {
            verificacion = 3;
        }

    }
    else
    {
        verificacion = 4;
    }
    return verificacion;
}