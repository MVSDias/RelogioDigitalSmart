// relogioDigital

let horaDigital = document.querySelector('#hDigital')
console.log(horaDigital)

let minDigital = document.querySelector('#mDigital')
console.log(minDigital)

let secDigital = document.querySelector('#sDigital')
console.log(secDigital)

// relogioSmart

let horaSmart = document.querySelector('#hSmart')
console.log(horaSmart)

let minSmart = document.querySelector('#mSmart')
console.log(minSmart)

let secSmart = document.querySelector('#sSmart')
console.log(secSmart)

// dateSmart

let dSemana = document.querySelector('#dSemana')
console.log(dSemana)

let dataDoMes = document.querySelector('#day')
console.log(dataDoMes)



// citySmart
let city = document.querySelector('#city')
console.log('#city')

// tempartura

let temperatura = document.querySelector('#temperatura')
console.log(temperatura)

let umidade = document.querySelector('#umidade')
console.log(umidade)



function atualizaRelogio(){

    let momentoAtual = new Date()// momentoAtual é uma nova instancia de data. um objeto. por isso tem propriedades.

    let hora = momentoAtual.getHours()// função interna do js para buscar a hora do obj date

    let minuto = momentoAtual.getMinutes()
    let segundos = momentoAtual.getSeconds()

    // formatando para aparecerem duas casas mesmo quando for hora, min ou segundos menor q 10.

    // let strHora = new String(hora)// criei uma varialvel string para armazenar a nova instancia de string contendo minha variavel hora, que era number, armezanda com string

    // let strMinuto = new String(minuto)
    // let strSegundo = new String(segundo)

    // if(strSegundos.length == 1) segundos = "0" + segundos
    // if(strMinuto.length == 1) minuto = "0" + minuto
    // if(strHora.length == 1) hora = "0" + hora


    // hora = 3
    // minuto = 5
    // segundos = 9
    if(hora <10){
        hora = '0'+ hora
    }
    console.log(hora)
    if(minuto < 10){
        minuto = '0' + minuto
    }
    console.log(minuto)
    if(segundos < 10){
        segundos = '0' + segundos
    }
    console.log(segundos)
    
    //relogioDigital

    horaDigital.innerHTML = hora
    minDigital.innerHTML = minuto
    secDigital.innerHTML = segundos

    // relogioSmart

    horaSmart.innerHTML = hora
    minSmart.innerHTML = minuto
    secSmart.innerHTML = segundos

   setTimeout(() => {
     atualizaRelogio()
   }, 1000);

}

let dataHora = new Date()// criando um novo objeto que vai conter as informações de hora e data da minha maquina. Essa atualiza o calendário, pq está fora da função atualizar relogio
console.log(dataHora)

function pegarData(){

// uso o metodo get junto ao objeto dataHora criado acima para pegar a data da maquina

    let diaDaSemana = dataHora.getDay()
    let dia = dataHora.getDate()
    let mes = dataHora.getMonth()+1// porque os meses no objeto começa em '0'
    let year = dataHora.getFullYear()

    
    if(dia < 10){
        dia = '0' + dia
    }
    
    if(mes < 10){
        mes = '0' + mes
    }
    console.log(mes, dia)

    switch (diaDaSemana) {

        case 0:
            diaDaSemana = 'DOM'

            break;
        case 1:
            diaDaSemana = 'SEG'

            break;
        case 2:
            diaDaSemana = 'TER'

            break;
        case 3:
            diaDaSemana = 'QUA'

            break;
        case 4:
            diaDaSemana = 'QUI'

            break;
        case 5:
            diaDaSemana = 'SEX'

            break;
        case 6:
            diaDaSemana = 'SAB'

            break;
    
        default:
            console.log('Deu ruim na data')
            break;
    }
    
    let dataAtual = `${dia}/${mes}/${year}`
    console.log(dataAtual)

    dSemana.innerHTML = diaDaSemana
    dataDoMes.innerHTML = dataAtual
    
}
pegarData()


//formas de formatar as datas e horas

let options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
}

let teste = new Date()

console.log(teste.toLocaleString('pt-Br'))
console.log(teste.toLocaleString('pt-Br', options))
console.log(teste.toLocaleDateString('pt-BR'))
console.log(teste.toLocaleTimeString('pt-BR'))

function getUserPosition() {
    let url = ''
    navigator.geolocation.getCurrentPosition((pos) => {
      let lat = pos.coords.latitude
      let long = pos.coords.longitude
      url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=imperial&appid=f2828b34472d0da521034d5be71a30bd`
      fetchApi(url)
      console.log(url)
    })
  }
  
  function fetchApi(url) {
    let city = document.querySelector('#city')
    let temperature = document.querySelector('#temperatura')
    let humidity = document.querySelector('#umidade')
  
    fetch(url)
    .then((data) => {
      return data.json()
    })
    .then((data) => {
      let tempInCelsius = parseInt(((5/9) * (data.main.temp-32)).toFixed(1));
      
      city.innerHTML      = data.name
      temperatura.innerHTML = tempInCelsius
      umidade.innerHTML    = data.main.humidity
    })
    .catch((err) => {
      city.innerText = `Impossível acessar o OpenWeather. Verifique a sua conexão.`;
      temperatura.innerHTML = `-`;
    })
  }
  
  getUserPosition();