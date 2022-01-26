    const listaPalabras = ['caballo', 'oveja', 'cerdo', 'chimpance','zanahoria','campecino','almuerzo'
                          ,'camello','herradura','radiografia','helado','macarrones','ballena','cocina','sofa'
                          ,'computador','alcoba','televisor','nevera','pantalla','ducha','ventana','escaparate'];
    let palabraAdivinar = [];
    let palabraMostrar = [];
    let historialLetrasUsuario = [];
    let numIntentos = 5;
    const nodoLetra = document.querySelector('#letra');
    const nodoBoton = document.querySelector('#boton');
    const nodoResultado = document.querySelector('#resultado');
    const nodoIntentos = document.querySelector('#intentos');
    const nodoHistorial = document.querySelector('#historial');
    
    function obtenerPalabra (listaPalabras){
    return palabraAdivinar = listaPalabras[Math.round((Math.random())*(listaPalabras.length-1))].split("");
    }
    palabraAdivinar = obtenerPalabra(listaPalabras);
    console.log(palabraAdivinar);
    
    function pintarResultado(){
        for(let i= 1; i <= palabraAdivinar.length; i++){
            palabraMostrar.push('_');
        }
        return nodoResultado.textContent = palabraMostrar;
    }
    pintarResultado();
    nodoBoton.addEventListener("click", ()=>{
        let letra = nodoLetra.value; 
            if(numIntentos !==1){
                for(let i =0; i < palabraAdivinar.length; i++){
                    if (!palabraAdivinar.includes(letra)){
                        numIntentos--;
                        alert(`letra equivocada, le quedan ${numIntentos} intentos`);
                        historialLetrasUsuario.push(letra);
                        nodoIntentos.textContent = historialLetrasUsuario;
                        nodoLetra.value ="";
                        nodoLetra.focus();
                        break;
                    }
                    else if(letra === palabraAdivinar[i]){
                        console.log(letra);
                        palabraMostrar.splice(i,1,letra)
                        nodoResultado.textContent = palabraMostrar;
                        nodoLetra.value ="";
                        nodoLetra.focus();
                    }
                }
            }else{
                alert(`Intentelo de nuevo`);
                location.reload();
            }
            console.log(palabraMostrar);
            if(palabraAdivinar == nodoResultado.textContent){
                alert("Felicitaciones, a ganado");
                location.reload();
            }
    });
   
