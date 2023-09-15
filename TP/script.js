const audioElements = [];
const clickCounts = [0, 0, 0, 0, 0, 0, 0, 0, 0]; // Inicializar un arreglo para contar los clics



ajaxxx();

function playSound(cancion) {
    const audioPath = obtenerRuta(cancion);
    let audio = audioElements[cancion - 1];

    if (audio) {
        if (audio.paused) {
            audio.play();
            clickCounts[ cancion - 1]++;
        } else {
            audio.pause();
            audio.currentTime = 0;
        }
    } else {
        audio = new Audio(audioPath);
        audio.play();
        audioElements[cancion - 1] = audio;
        clickCounts[cancion - 1]++;
    }
}

function showData() {
    const dataContainer = document.getElementById('dataContainer');
    dataContainer.style.display = 'flex';
    for (let i = 1; i <= 9; i++) {
        const countSpan = document.getElementById(`dataCount${i}`);

        if (countSpan) {
            countSpan.textContent = clickCounts[i - 1];
        }
    }
}

function closeData() {
    const dataContainer = document.getElementById('dataContainer');
    dataContainer.style.display = 'none';
}
function obtenerRuta(cancion,listaDeUrls) {

    switch (cancion) {
        case 1:
            return 'Ozuna - El Farsante (Saturado).mp3';
        case 2:
            return 'CR7 Muchas gracias aficion. SIUUUU.mp3';
        case 3:
            return 'Efecto de sonido Spider-man.mp3';
        case 4:
            return 'dale-dale-dale-boca.mp3';
            break;
        case 5:
            return 'osea Factos BANCAN CHAT.mp3';
            break;
        case 6:
            return 'El Saludo De Vegetta777.mp3';
            break;
        case 7:
            return 'Fumeteo Saturado (1).mp3';
            break;
        case 8:
            return 'PARANORMAL - Tainy, Álvaro Díaz.mp3';
            break;
        case 9:
            return 'APPLAUSE.mp3';
            break;
        default:
            return '';
    }
}
function ajaxxx() {
    $.ajax({
        ur1: "http://localhost:8080/inicio",
        type: 'GET'
    })
        .done(function (data) {
            console.log("conexión exitosa");
        })
        .fail(function(jqXHR, textStatus, errorThrown){
            console.log("error, no se pudo obtener datos");
            console.log(jqXHR);
            console.log(textStatus);
            console.log(errorThrown);
        });
}
function obtenerDatos() {

    $.ajax({
        ur1: "http://localhost:8080/sonidos",
        type: 'POST'
    })
        .done(function (data) {
            console.log("recibido");
            console.log(data);
            for(let i =0; i< data.length();i++){
                let url = data[i].url;

                obtenerRuta(i+1);
            }


        })
        .fail(function(jqXHR, textStatus, errorThrown){
            console.log("error, no se pudo obtener datos");
            console.log(jqXHR);
            console.log(textStatus);
            console.log(errorThrown);
        });
}

document.getElementById('dataButton').addEventListener('click', showData);
document.getElementById('closeButton').addEventListener('click', closeData);