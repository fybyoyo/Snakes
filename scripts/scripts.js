async function readCounty(countyurl,snakepath) {
   
  const responsecnty = await fetch(countyurl);
  const datacnty=await responsecnty.json(); 

 
  document.getElementById('countyname').innerText=datacnty.name + " County";
   
  const snakegrid=document.getElementById('snake-grid');
  const snakegridnearby=document.getElementById('snake-grid-nearby');

  const responsesnakes= await fetch(snakepath + "snakes.json");
  const datasnakes=await responsesnakes.json(); 


  

   for (var i=0; i<datacnty.snakeids.length; i++) {

    //console.log(datacnty.snakeids[i]);

   var newDiv=document.createElement("div");
   newDiv.className="card stacked";
   var newA=document.createElement("a");
   newA.href="snake.html?ID=" + datacnty.snakeids[i];
   var newImg=document.createElement("img");

   newImg.alt=datasnakes[datacnty.snakeids[i]-1].name;
   if (datasnakes[datacnty.snakeids[i]-1].alt=="NA") {
    newImg.title=datasnakes[datacnty.snakeids[i]-1].name;
  }
  else {
    newImg.title=datasnakes[datacnty.snakeids[i]-1].alt;
  }
  if (datasnakes[datacnty.snakeids[i]-1].picture=="NA") {
    newImg.src="https://eagle-sensors.com/wp-content/uploads/unavailable-image.jpg";
  }
  else {
    newImg.src=datasnakes[datacnty.snakeids[i]-1].picture;
  }

   newImg.className="card__img";


  

 
   
  
   newA.appendChild(newImg);

   newDiv.appendChild(newA);

   var newA2=document.createElement("a");
   newA2.href="snake.html?ID=" +datacnty.snakeids[i];
   var cardcontent=document.createElement("div");
   cardcontent.className="card__content";
   var cardtitle=document.createElement("h2");
   cardtitle.className="card__title";
   cardtitle.innerText=datasnakes[datacnty.snakeids[i]-1].name;
   cardcontent.appendChild(cardtitle);
   var cardprice=document.createElement("p");
   cardprice.className="card__price";



   if (datasnakes[datacnty.snakeids[i]-1].numsubspecies>0) {
   // cardprice.innerText=datasnakes[datacnty.snakeids[i]].species + " (" + datasnakes[datacnty.snakeids[i]].numsubspecies + " subspecies)" ;
    cardprice.innerHTML=datasnakes[datacnty.snakeids[i]-1].species + "<br> (" + datasnakes[datacnty.snakeids[i]-1].numsubspecies + " subspecies)" ;
    
   }
   else {
    cardprice.innerText=datasnakes[datacnty.snakeids[i]-1].species;
   }
   
   cardcontent.appendChild(cardprice);

   var carddescription=document.createElement("p");

  if (carddescription.innerText=datasnakes[datacnty.snakeids[i]-1].medical=="Venomous") {
    carddescription.className="card__description dangerous";
  }
  else {
    carddescription.className="card__description";
  }
   

   carddescription.innerText=datasnakes[datacnty.snakeids[i]-1].medical;
   cardcontent.appendChild(carddescription);

   newA2.appendChild(cardcontent);

   newDiv.appendChild(newA2);

   snakegrid.appendChild(newDiv);


  };








  for (var i=0; i<datacnty.neighborsnakeids.length; i++) {
   
  console.log(datacnty.neighborsnakeids[i]);


var newDiv=document.createElement("div");
   newDiv.className="card stacked";
   var newA=document.createElement("a");
   newA.href="snake.html?ID=" + datacnty.neighborsnakeids[i];
   var newImg=document.createElement("img");

    newImg.alt=datasnakes[datacnty.neighborsnakeids[i]-1].name;
  if (datasnakes[datacnty.snakeids[i]-1].alt=="NA") {
    newImg.title=datasnakes[datacnty.neighborsnakeids[i]-1].name;
  }
  else {
    newImg.title=datasnakes[datacnty.neighborsnakeids[i]-1].alt;
  }

  if (datasnakes[datacnty.neighborsnakeids[i]-1].picture=="NA") {
    newImg.src="https://eagle-sensors.com/wp-content/uploads/unavailable-image.jpg";
  }
  else {
    newImg.src=datasnakes[datacnty.neighborsnakeids[i]-1].picture;
  }

   


   newImg.className="card__img";


   newA.appendChild(newImg);

   newDiv.appendChild(newA);

   var newA2=document.createElement("a");
   newA2.href="snake.html?ID=" +datacnty.neighborsnakeids[i];
   var cardcontent=document.createElement("div");
   cardcontent.className="card__content";
   var cardtitle=document.createElement("h2");
   cardtitle.className="card__title";
   cardtitle.innerText=datasnakes[datacnty.neighborsnakeids[i]-1].name;
   cardcontent.appendChild(cardtitle);
   var cardprice=document.createElement("p");
   cardprice.className="card__price";



   if (datasnakes[datacnty.neighborsnakeids[i]-1].numsubspecies>0) {
   // cardprice.innerText=datasnakes[datacnty.snakeids[i]].species + " (" + datasnakes[datacnty.snakeids[i]].numsubspecies + " subspecies)" ;
    cardprice.innerHTML=datasnakes[datacnty.neighborsnakeids[i]-1].species + "<br> (" + datasnakes[datacnty.neighborsnakeids[i]-1].numsubspecies + " subspecies)" ;
    
   }
   else {
    cardprice.innerText=datasnakes[datacnty.neighborsnakeids[i]-1].species;
   }
   
   cardcontent.appendChild(cardprice);

   var carddescription=document.createElement("p");

  if (carddescription.innerText=datasnakes[datacnty.neighborsnakeids[i]-1].medical=="Venomous") {
    carddescription.className="card__description dangerous";
  }
  else {
    carddescription.className="card__description";
  }
   

   carddescription.innerText=datasnakes[datacnty.neighborsnakeids[i]-1].medical;
   cardcontent.appendChild(carddescription);

   newA2.appendChild(cardcontent);

   newDiv.appendChild(newA2);

   snakegridnearby.appendChild(newDiv);



  }; 




}


/* function readCounty2(url) {
  fetch(url).then((response) => response.json()).then((result) => { console.log(result); })
} */






   
   

     