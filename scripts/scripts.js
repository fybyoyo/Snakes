async function readCounty(countyGID,countyurl,snakepath) {
   
  const responsecnty = await fetch(countyurl);
  const datacnty=await responsecnty.json(); 

 
  
   
  const snakegrid=document.getElementById('snake-grid');
  const snakegridnearby=document.getElementById('snake-grid-nearby');

  const responsesnakes= await fetch(snakepath + "snakes.json");
  const datasnakes=await responsesnakes.json(); 


  if (countyGID==0) {
    document.getElementById('countyname').innerText="All Species Found in " + datacnty.name ;
  }
  else {
    document.getElementById('countyname').innerText=datacnty.name + " County";
  }
  


  const nearbytitle=document.getElementById('nearby');
  if (datacnty.neighborsnakeids.length==0) {
    nearbytitle.innerText="";
  }


  // for (var i=0; i<datacnty.snakeids.length; i++) {
    for (var i = datacnty.snakeids.length-1; i >= 0; i--) {
    var searchIndex = datasnakes.findIndex((snk) => snk.id==datacnty.snakeids[i]);
   
    


   var newDiv=document.createElement("div");
   newDiv.className="card stacked";
   var newA=document.createElement("a");
   newA.href="snake.html?ID=" + datacnty.snakeids[i];
   var newImg=document.createElement("img");

   newImg.alt=datasnakes[searchIndex].name;
   if (datasnakes[searchIndex].attrib=="NA") {
    newImg.title=datasnakes[searchIndex].name;
  }
  else {
    newImg.title=datasnakes[searchIndex].attrib;
  }
  if (datasnakes[searchIndex].picture=="NA") {
    newImg.src="https://eagle-sensors.com/wp-content/uploads/unavailable-image.jpg";
  }
  else {
    newImg.src=datasnakes[searchIndex].picture;
  }

  
  switch(datasnakes[searchIndex].shiftx) {
    case "0":
      newImg.className="card__img";
      break;
    case "-10":
      newImg.className="card__img card__imgshift_10";
      break;
    case "-20":
      newImg.className="card__img card__imgshift_20";
      break;
    case "-30":
      newImg.className="card__img card__imgshift_30";
      break;
    case "-50":
      newImg.className="card__img card__imgshift_50";
      break;     
    case "-60":
      newImg.className="card__img card__imgshift_60";
      break; 
    case "-70":
      newImg.className="card__img card__imgshift_70";
      break;    
    case "-90":
      newImg.className="card__img card__imgshift_90";
      break;
  } 
  
   

  
   newA.appendChild(newImg);

   newDiv.appendChild(newA);

   var newA2=document.createElement("a");
   newA2.href="snake.html?ID=" +datacnty.snakeids[i];
   var cardcontent=document.createElement("div");
   cardcontent.className="card__content";
   var cardtitle=document.createElement("h2");
   cardtitle.className="card__title";
   cardtitle.innerText=datasnakes[searchIndex].name;
   cardcontent.appendChild(cardtitle);
   var cardprice=document.createElement("p");
   cardprice.className="card__price";



   if (datasnakes[searchIndex].numsubspecies>0) {
   // cardprice.innerText=datasnakes[datacnty.snakeids[i]].species + " (" + datasnakes[searchIndex].numsubspecies + " subspecies)" ;
    cardprice.innerHTML=datasnakes[searchIndex].species + "<br> (" + datasnakes[searchIndex].numsubspecies + " subspecies)" ;
    
   }
   else {
    cardprice.innerText=datasnakes[searchIndex].species;
   }
   
   cardcontent.appendChild(cardprice);

   var carddescription=document.createElement("p");

  if (carddescription.innerText=datasnakes[searchIndex].medical=="Venomous") {
    carddescription.className="card__description dangerous";
  }
  else {
    carddescription.className="card__description";
  }
   

   carddescription.innerText=datasnakes[searchIndex].medical;
   cardcontent.appendChild(carddescription);

   newA2.appendChild(cardcontent);

   newDiv.appendChild(newA2);

   snakegrid.appendChild(newDiv); 


  };





   


  //for (var i=0; i<datacnty.neighborsnakeids.length; i++) 
  for (var i = datacnty.neighborsnakeids.length-1; i >= 0; i--)  {

    var searchIndex = datasnakes.findIndex((snk) => snk.id==datacnty.neighborsnakeids[i]);

  


 var newDiv=document.createElement("div");
   newDiv.className="card stacked";
   var newA=document.createElement("a");
   newA.href="snake.html?ID=" + datacnty.neighborsnakeids[i];
   var newImg=document.createElement("img");

   newImg.alt=datasnakes[searchIndex].name;
  
   if (datasnakes[searchIndex].attrib=="NA") {
    newImg.title=datasnakes[searchIndex].name;
  }
  else {
    newImg.title=datasnakes[searchIndex].attrib;
  }

  if (datasnakes[searchIndex].picture=="NA") {
    newImg.src="https://eagle-sensors.com/wp-content/uploads/unavailable-image.jpg";
  }
  else {
    newImg.src=datasnakes[searchIndex].picture;
  }

  switch(datasnakes[searchIndex].shiftx) {
    case "0":
      newImg.className="card__img";
      break;
    case "-10":
      newImg.className="card__img card__imgshift_10";
      break;
    case "-20":
      newImg.className="card__img card__imgshift_20";
      break;
    case "-30":
      newImg.className="card__img card__imgshift_30";
      break;
    case "-50":
      newImg.className="card__img card__imgshift_50";
      break;     
    case "-60":
      newImg.className="card__img card__imgshift_60";
      break; 
    case "-70":
      newImg.className="card__img card__imgshift_70";
      break;    
    case "-90":
      newImg.className="card__img card__imgshift_90";
      break;
  }  


  


   newA.appendChild(newImg);

   newDiv.appendChild(newA);

   var newA2=document.createElement("a");
   newA2.href="snake.html?ID=" +datacnty.neighborsnakeids[i];
   var cardcontent=document.createElement("div");
   cardcontent.className="card__content";
   var cardtitle=document.createElement("h2");
   cardtitle.className="card__title";
   cardtitle.innerText=datasnakes[searchIndex].name;
   cardcontent.appendChild(cardtitle);
   var cardprice=document.createElement("p");
   cardprice.className="card__price";



   if (datasnakes[searchIndex].numsubspecies>0) {
   // cardprice.innerText=datasnakes[datacnty.snakeids[i]].species + " (" + datasnakes[searchIndex].numsubspecies + " subspecies)" ;
    cardprice.innerHTML=datasnakes[searchIndex].species + "<br> (" + datasnakes[searchIndex].numsubspecies + " subspecies)" ;
    
   }
   else {
    cardprice.innerText=datasnakes[searchIndex].species;
   }
   
   cardcontent.appendChild(cardprice);

   var carddescription=document.createElement("p");

  if (carddescription.innerText=datasnakes[searchIndex].medical=="Venomous") {
    carddescription.className="card__description dangerous";
  }
  else {
    carddescription.className="card__description";
  }
   

   carddescription.innerText=datasnakes[searchIndex].medical;
   cardcontent.appendChild(carddescription);

   newA2.appendChild(cardcontent);

   newDiv.appendChild(newA2);

   snakegridnearby.appendChild(newDiv);



  }; 

 


}


/* function readCounty2(url) {
  fetch(url).then((response) => response.json()).then((result) => { console.log(result); })
} */






   
   

     