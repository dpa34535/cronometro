function Cronometro(){
    const timer = document.querySelector(".timer");
    const iniciar = document.querySelector(".iniciar");
    const pausar = document.querySelector(".pausar");
    const zerar = document.querySelector(".zerar");
    let segundos = 0;
    let suportSegundos = 0;
    const audio = document.querySelector(".audio-player");
    let use;

    function time(seconds) {
        let date = new Date( seconds * 1000 );

        return date.toLocaleTimeString("pt-BR", {
            hour12: false,
            timeZone: "GMT"
        });
    };

    document.addEventListener("click", function(e){
        const element = e.target;

        if (element.classList.contains("iniciar")){
            clearInterval(use);

            timer.style.color = "black";
            
            segundos = Number(timer.innerHTML);
        
            if(suportSegundos != 0){segundos = suportSegundos}
            if(Number(isNaN(segundos))){return}
        
            suportSegundos = segundos;
        
            iniciar.setAttribute("disabled", "disabled");
        
            use = setInterval(function(){
                timer.innerHTML = time(segundos);
                segundos = segundos - 1;
                if(timer.innerHTML === "00:00:00"){
                    termina()
                }
            }, 1000);
        
            function termina(){
        
                audio.play();
                
                iniciar.removeAttribute("disabled");
                clearInterval(use);
            }
        
            suportSegundos = 0;
        }

        if(element.classList.contains("pausar")){
            suportSegundos = segundos;

            iniciar.removeAttribute("disabled");
            
            timer.style.color = "red";
        
            clearInterval(use);
        }

        if(element.classList.contains("zerar")){
            timer.style.color = "black";
            segundos = 0;
        }

        if(element.classList.contains("erase")){
            erase()
        }
    })

    function erase(){
        timer.innerHTML = "";
    }

}

Cronometro();