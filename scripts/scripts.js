async function readCounty(url) 
{
    const url2='./c1.json';


    console.log('from scripts ' + url2);

   const responsecnty = await fetch(url2);
  const datacnty=await responsecnty.json(); 

  console.log(datacnty);

   
   console.log(datacnty.name);
  document.getElementById('countyname').innerText=datacnty.name;
   
  for (var i=0; i<datacnty.snakeids.length; i++) {
    console.log(datacnty.snakeids[i]);
  };

  for (var i=0; i<datacnty.neighborsnakeids.length; i++) {
    console.log(datacnty.neighborsnakeids[i]);
  };







     }
   