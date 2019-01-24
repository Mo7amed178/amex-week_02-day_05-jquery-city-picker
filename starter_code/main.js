let cities = ['NYC', 'SF' , 'LA' , 'ATX' , 'SYD'];

for (var i = 0 ; i <cities.length ; i++) {
    console.log(cities[i]);
   
    let city = cities[i];
   
    let cityOption = '<option value="' + city + '">'+city + '</option>';
   //let cityOption = `<option value="${city}">${city}</option>`;

   $('#city-type').append(cityOption);
}
function changeBackground(){
   let city =  $('select').val();
    $('body').attr('class' , city)
}

$('select').on('change' , changeBackground)