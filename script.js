// Selecionando os elementos que serão atualizados na tela.
let digitalElement = document.querySelector('.digital');
let segundosElement = document.querySelector('.p_s');
let minutosElement = document.querySelector('.p_m');
let horasElement = document.querySelector('.p_h');

// Função que vai pegar a data atual, horas, minutos e segundos.
function mostrarHora() {
    // Pegando data atual, horas, minutos e segundos.
    let agora = new Date();
    let hora = agora.getHours();
    let minuto = agora.getMinutes();
    let segundos = agora.getSeconds();
    // Jogando no elemento 'digital' o resultado de horas, minutos e segundos;
    digitalElement.innerHTML = `${fixZero(hora)}:${fixZero(minuto)}:${fixZero(segundos)}`;

    // Calculando quantos graus os ponteiros do relogio analogico tem.
    // 0 graus no CSS equivale ao ponteiro estar em 15 minutos no relogio, portanto para o ponteiro começar em 0 minutos, precisa se tirar 90 graus do calculo.
    let sGraus = ((360 / 60) * segundos) - 90; // ((360º / 60 segundos) * segundos) - 90º
    let mGraus = ((360 / 60) * minuto) - 90; // ((360º / 60 minutos) * minutos) - 90º graus
    let hGraus = ((360 / 12) * hora) - 90; // ((360º / 12 horas) * horas) - 90º graus

    // Acionando o atributo transform do CSS para os elementos e passando os valores de cada elemento.
    segundosElement.style.transform = `rotate(${sGraus}deg)`;

    if (segundos == 10){
        minutosElement.style.transform = `rotate(${mGraus + 1}deg)`;
    } else if (segundos == 20){
        minutosElement.style.transform = `rotate(${mGraus + 2}deg)`;
    } else if (segundos == 30){
        minutosElement.style.transform = `rotate(${mGraus + 3}deg)`;
    } else if (segundos == 40){
        minutosElement.style.transform = `rotate(${mGraus + 4}deg)`;
    } else if (segundos == 50){
        minutosElement.style.transform = `rotate(${mGraus + 5}deg)`;
    } else if (segundos == 0){
        minutosElement.style.transform = `rotate(${mGraus}deg)`;
    } else if (minuto > 0 && minuto <= 10){
        horasElement.style.transform = `rotate(${hGraus + 1}deg)`;
    } else if (minuto > 10 && minuto <= 20){
        horasElement.style.transform = `rotate(${hGraus + 2}deg)`;
    } else if (minuto > 20 && minuto <= 30){
        horasElement.style.transform = `rotate(${hGraus + 3}deg)`;
    } else if (minuto > 30 && minuto <= 40){
        horasElement.style.transform = `rotate(${hGraus + 4}deg)`;
    } else if (minuto > 40 && minuto <= 50){
        horasElement.style.transform = `rotate(${hGraus + 5}deg)`;
    } else if (minuto == 0){
        horasElement.style.transform = `rotate(${hGraus}deg)`;
    }

};

// Função que verifica se o valor é menor que 10. Se for adiciona um zero antes do valor, se não for, o valor continua igual.
function fixZero(time) {
    return time < 10 ? `0${time}` : time;
}

// Essa função esta chamando a função 'mostrarHora' a cada 1000 millisegundos, ou seja, 1 segundo.
setInterval(mostrarHora, 1000);
mostrarHora();