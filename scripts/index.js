const chave = "777fd6c175f16899b669ab9b22be7638";

const obterTemp = () => {
  const inputCity = document.getElementById("cityInput").value;
  const fields1 = document.getElementById("fields1");
  const fields2 = document.getElementById("fields2");
  const fields3 = document.getElementById("fields3");
  const fields4 = document.getElementById("fields4");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&lang=pt_br&appid=${chave}&units=metric`;

  fetch(url)
    .then((resposta) => {
      // console.log(resposta)
      return resposta.json();
    })
    .then((dados) => {
      console.log(dados);
      fields1.innerHTML = `Temperature: ${dados.main.temp}`;
      fields2.innerHTML = `Humidity: ${dados.main.humidity}`;
      fields3.innerHTML = `Max Temperature: ${dados.main.temp_max}`;
      fields4.innerHTML = `Min Temperature: ${dados.main.temp_min}`;
    })
    .catch((erro) => {
      console.log(erro);
    });
};
