$(document).ready(() => {
  arrOfCities = [
    { cityName: "Cairo", shipingPrice: 10 },
    { cityName: "Alexandria", shipingPrice: 5 },
    { cityName: "Giza", shipingPrice: 15 },
    { cityName: "Shubra al Khaymah", shipingPrice: 15 },
    { cityName: "Ḩalwan", shipingPrice: 15 },
    { cityName: "Al Maḩallah al Kubra", shipingPrice: 15 },
    { cityName: "Port Said", shipingPrice: 15 },
    { cityName: "Madinat al Sadat", shipingPrice: 15 },
    { cityName: "Suez", shipingPrice: 15 },
    { cityName: "Al Manaurah", shipingPrice: 15 },
    { cityName: "Ţanta", shipingPrice: 15 },
    { cityName: "Asyut", shipingPrice: 15 },
    { cityName: "Al Fayyum", shipingPrice: 15 },
    { cityName: "Az Zaqaziq", shipingPrice: 15 },
    { cityName: "Ismailia", shipingPrice: 15 },
    { cityName: "Aswan", shipingPrice: 15 },
    { cityName: "Kafr al Dawwar", shipingPrice: 15 },
    { cityName: "Damanhur", shipingPrice: 15 },
    { cityName: "Al Minya", shipingPrice: 15 },
    { cityName: "Damitta", shipingPrice: 15 },
    { cityName: "Luxor", shipingPrice: 15 },
    { cityName: "Qina", shipingPrice: 15 },
    { cityName: "Suhaj", shipingPrice: 15 },
    { cityName: "Bani Suwayf", shipingPrice: 15 },
    { cityName: "Shibin al Kawm", shipingPrice: 15 },
    { cityName: "Al Arish", shipingPrice: 15 },
    { cityName: "Al Ghardaqah", shipingPrice: 15 },
    { cityName: "Banha", shipingPrice: 15 },
    { cityName: "Kafr el Shaykh", shipingPrice: 15 },
    { cityName: "Marsa Matruḩ", shipingPrice: 15 },
    { cityName: "Al Kharijah", shipingPrice: 15 },
    { cityName: "Aţ Ţur", shipingPrice: 15 },
    { cityName: "Rafaḩ", shipingPrice: 15 },
    { cityName: "Ash Shaykh Zuwayd", shipingPrice: 15 },
    { cityName: "Bi’r al Abd", shipingPrice: 15 },
  ];
  cities = console.log($(".select_bottom"));
  arrOfCities.forEach(city => {
    $(".select_bottom").append(
      `<option value=${city.cityName}>${city.cityName}</option>`
    );
    $(".select_top").append(
      `<option value=${city.cityName}>${city.cityName}</option>`
    );
  });
  $(".select_bottom").change(e => {
    console.log(e.target.value);
    let specificCity = arrOfCities.filter(
      city => city.cityName === e.target.value
    );
    let getPrice = specificCity[0].shipingPrice;
    $(".shipping_price").html(`$${getPrice}`);
    totalPrice = +$(".shipping_product_price").html() + getPrice;

    $(".total_price").html(totalPrice);
  });
});
