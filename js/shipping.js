$(document).ready(() => {
  arrOfCities = [
    { cityName: "Misr El Gdedda", shipingPrice: 50 },
    { cityName: "El Nozha", shipingPrice: 50 },
    { cityName: "Salah Salem", shipingPrice: 50 },
    { cityName: "Sheraton", shipingPrice: 50 },
    { cityName: "Madint Nasr", shipingPrice: 70 },
    { cityName: "Ghamra", shipingPrice: 70 },
    { cityName: "Ain Shams", shipingPrice: 70 },
    { cityName: "El Zaitoun", shipingPrice: 70 },
    { cityName: "Ramsis", shipingPrice: 70 },
    { cityName: "Abasia", shipingPrice: 70 },
    { cityName: "Hadaik El Qoba", shipingPrice: 70 },
    { cityName: "Wist El Balad", shipingPrice: 100 },
    { cityName: "Shoubra Misr", shipingPrice: 100 },
    { cityName: "El Ataba", shipingPrice: 100 },
    { cityName: "Ezbet El Nakhl", shipingPrice: 100 },
    { cityName: "Garden City", shipingPrice: 100 },
    { cityName: "El Dokki", shipingPrice: 100 },
    { cityName: "El Sharabia", shipingPrice: 100 },
    { cityName: "El Rehab", shipingPrice: 100 },
    { cityName: "El Tagmo3", shipingPrice: 100 },
    { cityName: "El Mohandsin", shipingPrice: 100 },
    { cityName: "El Zamalik", shipingPrice: 100 },
    { cityName: "El Agouza", shipingPrice: 100 },
    { cityName: "El Matar", shipingPrice: 100 },
    { cityName: "Midan Lebnan", shipingPrice: 100 },
    { cityName: "El Katamya", shipingPrice: 100 },
    { cityName: "El Marg", shipingPrice: 150 },
    { cityName: "El Khosous", shipingPrice: 150 },
    { cityName: "Shoubra El Khema", shipingPrice: 150 },
    { cityName: "El Sawah", shipingPrice: 150 },
    { cityName: "Ard El Lewa", shipingPrice: 150 },
    { cityName: "El Zawia El Hamra", shipingPrice: 150 },
    { cityName: "El Obour", shipingPrice: 150 },
    { cityName: "Madint El Salam", shipingPrice: 150 },
    { cityName: "El Kasr El Eani", shipingPrice: 150 },
    { cityName: "El Mokatam", shipingPrice: 150 },
    { cityName: "El Darb El Ahmar", shipingPrice: 150 },
    { cityName: "Manshyt Nasir", shipingPrice: 150 },
    { cityName: "Bab El Sheraya", shipingPrice: 150 },
    { cityName: "El Mizalaat", shipingPrice: 150 },
    { cityName: "El Sabtya", shipingPrice: 150 },
    { cityName: "El Maadi", shipingPrice: 200 },
    { cityName: "Madanty", shipingPrice: 200 },
    { cityName: "Mouasast El Zaka", shipingPrice: 200 },
    { cityName: "Embaba", shipingPrice: 200 },
    { cityName: "El Giza", shipingPrice: 200 },
    { cityName: "El Basatin", shipingPrice: 200 },
    { cityName: "El Shekh Zayid", shipingPrice: 200 },
    { cityName: "El Khanka", shipingPrice: 200 },
    { cityName: "El Waraa", shipingPrice: 200 },
    { cityName: "Qalyoub", shipingPrice: 200 },
    { cityName: "Aboud", shipingPrice: 200 },
    { cityName: "October", shipingPrice: 200 },
    { cityName: "Mostored", shipingPrice: 200 },
    { cityName: "El Haram", shipingPrice: 200 },
    { cityName: "ElMounib", shipingPrice: 200 },
    { cityName: "El Maryoutia", shipingPrice: 200 },
    { cityName: "Badr", shipingPrice: 250 },
    { cityName: " El Mostakbal", shipingPrice: 250 },
    { cityName: "El Maasara", shipingPrice: 250 },
    { cityName: "Bashtel", shipingPrice: 250 },
    { cityName: "El Bragel", shipingPrice: 250 },
    { cityName: "El Asher Mn Ramadan", shipingPrice: 250 },
    { cityName: "Dar El Salam", shipingPrice: 250 },
    { cityName: "El Qanater El Khayrya", shipingPrice: 250 },
    { cityName: "Basous", shipingPrice: 250 },
    { cityName: "El Hawamdia", shipingPrice: 300 },
    { cityName: "Toukh", shipingPrice: 300 },
    { cityName: "El Badrashen", shipingPrice: 300 },
    { cityName: "El Ayaat", shipingPrice: 350 },
    { cityName: "Madint El Sadaat", shipingPrice: 500 },
    { cityName: "El Zagazig", shipingPrice: 700 },
    { cityName: "El Mahala", shipingPrice: 700 },
    { cityName: "Banha", shipingPrice: 700 },
    { cityName: "El-Mounofia", shipingPrice: 700 },
    { cityName: "Tanta", shipingPrice: 700 },
    { cityName: "El Gharbia", shipingPrice: 700 },
    { cityName: "Mit Ghamr", shipingPrice: 700 },
    { cityName: "Damnhour", shipingPrice: 700 },
    { cityName: "El Fayoum", shipingPrice: 700 },
    { cityName: "El Qalyoubya", shipingPrice: 700 },
    { cityName: "El Mansoura", shipingPrice: 700 },
    { cityName: "Sharabin", shipingPrice: 700 },
    { cityName: "Shebin El Qanater", shipingPrice: 700 },
    { cityName: "Qousna", shipingPrice: 700 },
    { cityName: "Ismalia", shipingPrice: 700 },
    { cityName: "Kafr El Shekh", shipingPrice: 800 },
    { cityName: "Shebin El Koum", shipingPrice: 800 },
    { cityName: "El Suiz", shipingPrice: 500 },
    { cityName: "El Behara", shipingPrice: 1000 },
    { cityName: "El Dakahlia", shipingPrice: 1000 },
    { cityName: "Talkha", shipingPrice: 1000 },
    { cityName: "Bani Swef", shipingPrice: 1000 },
    { cityName: "Domiat", shipingPrice: 1000 },
    { cityName: "Alex", shipingPrice: 1200 },
    { cityName: "Port Said", shipingPrice: 1200 },
    { cityName: "El Mina", shipingPrice: 2000 },
    { cityName: "Asyout", shipingPrice: 2500 },
    { cityName: "El Hurghada", shipingPrice: 2500 },
    { cityName: "Souhag", shipingPrice: 3000 },
    { cityName: "Marsa Matrouh", shipingPrice: 3000 },
    { cityName: "Qena", shipingPrice: 4000 },
    { cityName: "Aswan", shipingPrice: 5000 },
    { cityName: "Luxor", shipingPrice: 5000 },
    { cityName: "Sharm El Shekh", shipingPrice: 5000 },
    { cityName: "Senia", shipingPrice: 5000 },
  ];
  arrOfCities.forEach(city => {
    $(".select_bottom").append(
      `<option value="${city.cityName}">${city.cityName}</option>`
    );
    $(".select_top").append(
      `<option value="${city.cityName}">${city.cityName}</option>`
    );
  });
  $(".select_bottom").change(e => {
    console.log(e.target.value);
    let specificCity = arrOfCities.filter(
      city => city.cityName === e.target.value
    );
    let getPrice = specificCity[0].shipingPrice;
    console.log(specificCity);
    $("#shipping_container").append(
      `<inupt class="text-muted shipping_price" value="${getPrice}">${getPrice}`
    );
    totalPrice = +$(".shipping_product_price").html() + getPrice;

    $(".billing_total").append(
      `<inupt class="text-muted total_price" value="${totalPrice}">${totalPrice}`
    );
  });
});
