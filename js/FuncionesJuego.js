var lista = new Array();
function principal(){
    
    var animales = new Array();
    var habitat = new Array();
    
    var ban1=true;
    var cont=1,cont2=0,ale;
    while (ban1 == true) {//  es solamente una bandera para que entre al ciclo 
        ale = Math.floor(Math.random() * (11 - 0 + 1)) + 0;//numero aleatorio
            if (cont == 1) {//la primera vez siempre asigna directamente el aletorio al vector en la casilla 0 
                lista.push(ale);
                cont++;
              } else {    // 1 5 2    //5
                  cont2=0;//reseteamos el contador de las casillas que ya tienen numero en el array
                for (let i = 0; i < lista.length; i++) {//recorremos el array que contiene numeros aleatorios
                  if (ale != lista[i]) {//verificamos que no este el numero aleatorio ya dentro del array
                      cont2++;
                  }
                }
                if(cont2 == lista.length && cont ){//si ya recorrio el array que contiene numeros y ninguno se repitio, ahora su puede guardarlo
                  lista.push(ale);           
                }          
              }
              if (lista.length > 5) {//validamos si ya esta lleno el array de numeros aleatorios
                ban1 = false;//switcheamos la bandera para que no entre al while
            }  
    }
    //AQUI  ya esta el vector con los numeros aleatorios
    //Aqui se debe de asignar las imagenes a los divs
    console.log(lista);
    
    for (let i = 0; i <= 2; i++) {
        document.getElementById("animal"+i).src="./imagenes/Animales/animal"+lista[i]+".png";
        document.getElementById("habita"+i).src="./imagenes/Ecosistemas/habitat"+lista[i]+".png";
    }
    
}

function boton(){
    /*for (let i = 3; i < 5; i++) {
        document.getElementById("animal"+i).src="./imagenes/animal"+lista[i]+".PNG";
        document.getElementById("habita"+i).src="./imagenes/habita"+lista[i]+".PNG";
    }*/
}
window.onload= principal;