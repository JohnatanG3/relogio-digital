const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

// Definindo um intervalo que chama a função 'time' a cada 1000 milissegundos (1 segundo)
const relogio = setInterval(function time() {
    let dateToday = new Date(); // Obtendo a data e hora atual
    let hr = dateToday.getHours(); // Obtendo as horas
    let min = dateToday.getMinutes(); // Obtendo os minutos
    let seg = dateToday.getSeconds(); // Obtendo os segundos

    // Adicionando um zero à esquerda se o valor for menor que 10
    if (hr < 10) hr = '0' + hr;
    if (min < 10) min = '0' + min;
    if (seg < 10) seg = '0' + seg;

    // Atualizando o conteúdo dos elementos HTML com os valores de hora, minuto e segundo
    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = seg;
}, 1000); // Intervalo definido para 1000 milissegundos (1 segundo)
// O intervalo de tempo em milissegundos. 1000 milissegundos é igual a 1 segundo, 
// então a função time é chamada a cada segundo para atualizar o relógio digital.
// Dessa forma, o relógio digital será atualizado a cada segundo, mostrando a hora atual em tempo real.
