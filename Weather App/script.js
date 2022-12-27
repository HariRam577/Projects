var button = document.querySelector('.button');
var inputvalue = document.querySelector('.inputvalue');
var vname = document.querySelector('.city-name');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');

button.addEventListener('click', function () {
  fetch(
    'https://api.openweathermap.org/data/2.5/weather?q=' +
      inputvalue.value +'&units=imperial&appid=2c1e2c7abfa2a2d91e10790436c4478e'
  )
    .then((res) => res.json())
    .then((data) => {
      var nameValue = data['name'];
      var tempValue= data['main']['temp'];
      var descValue = data['weather'][0]['description'];

      vname.innerHTML = 'City :'+ nameValue;
      desc.innerHTML = 'Description :' + descValue;
      temp.innerHTML = 'Temprature : ' + tempValue + '℉';
    })
    .catch((err) => alert('Wrong City Name!'));
});
