const cityForm = document.querySelector('form');

const updateCity = async city => {
  const cityDetails = await getCity(city);
  const weather = await getWeather(cityDetails.Key);

  return { cityDetails, weather };
};

cityForm.addEventListener('submit', e => {
  // prevent default behaviour
  e.preventDefault();

  // get city value
  const city = cityForm.city.value.trim();
  cityForm.reset();

  // update ui with requested city
  updateCity(city)
    .then(data => console.log(data))
    .catch(err => console.log(err));
});
