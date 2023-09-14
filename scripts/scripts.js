async function readCounty(url) 
{
    // const url='./data.json';




  const responsecnty = await fetch(url);
  const datacnty=await responsecnty.json(); 

  console.log(datacnty);

   
  console.log(datacnty.name);
  document.getElementById('countyname').innerText=datacnty.name;
   
  for (var i=0; i<datacnty.snakeids.length; i++) {
    console.log(datacnty.snakeids[i]);
  }

  for (var i=0; i<datacnty.neighborsnakeids.length; i++) {
    console.log(datacnty.neighborsnakeids[i]);
  }





     //console.log(data[0].prices);
   
     /* document.getElementById(`${data[0].prices[0].id}`).textContent=data[0].prices[0].price;
   
     document.getElementById(`${data[0].prices[1].id}`).textContent=data[0].prices[1].price; */
   
     /* data.forEach(element => {
       
        element.prices.forEach(price => {
         //console.log(price);
         document.getElementById(`${price.id}`).textContent=price.price;
         console.log(price);
       });  */


     };
   