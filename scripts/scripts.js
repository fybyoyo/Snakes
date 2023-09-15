async function readCounty(url) {
   
  const responsecnty = await fetch(url);
  const datacnty=await responsecnty.json(); 


  document.getElementById('countyname').innerText=datacnty.name + " County";
   
  const snakegrid=document.getElementById('snake-grid');


   for (var i=0; i<datacnty.snakeids.length; i++) {






    
   // console.log(datacnty.snakeids[i]);
   var newDiv=document.createElement("div");
   newDiv.className="card stacked";
   var newA=document.createElement("a");
   newA.href="snake.html?ID=" +datacnty.snakeids[i];
   var newImg=document.createElement("img");
   newImg.src="https://inaturalist-open-data.s3.amazonaws.com/photos/319715587/original.jpg";
   newImg.className="card__img";
   newImg.alt="Western Diamondbacked Rattlesnake";
   newA.appendChild(newImg);

   newDiv.appendChild(newA);

   var newA2=document.createElement("a");
   newA2.href="snake.html?ID=" +datacnty.snakeids[i];
   var cardcontent=document.createElement("div");
   cardcontent.className="card__content";
   var cardtitle=document.createElement("h2");
   cardtitle.className="card__title";
   cardtitle.innerText="Western Diamondbacked Rattlesnake";
   cardcontent.appendChild(cardtitle);
   var cardprice=document.createElement("p");
   cardprice.className="card__price";
   cardprice.innerText="Scientific name"
   cardcontent.appendChild(cardprice);

   var carddescription=document.createElement("p");
   carddescription.className="card__description";
   carddescription.innerText="Venomous"
   cardcontent.appendChild(carddescription);

   newA2.appendChild(cardcontent);

   newDiv.appendChild(newA2);

   snakegrid.appendChild(newDiv);


  };








  /* for (var i=0; i<datacnty.neighborsnakeids.length; i++) {
    console.log(datacnty.neighborsnakeids[i]);
  };  */
}


/* function readCounty2(url) {
  fetch(url).then((response) => response.json()).then((result) => { console.log(result); })
} */






   
   

     