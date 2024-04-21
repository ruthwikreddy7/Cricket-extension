async function matchData(){
  return await fetch("https://api.cricapi.com/v1/currentMatches?apikey=e14d135f-57e9-4905-9c8b-1928a99c6ba2&offset=0")
    .then(data => data.json())
    .then(data =>{
      if(data.status != "success")
      {
        return;
      }
      const matcharr=data.data;
      if(!matcharr)
      {
        return [];
      }
      const requiredData=matcharr.map(match => ` ${match.name}   ,   ${match.status}`);
      var ul=document.getElementById("list");
      for(let i=0;i<requiredData.length;i++)
      {

        var li = document.createElement("li");
        li.appendChild(document.createTextNode(`${requiredData[i]}`));
        ul.appendChild(li);
        // console.log(`news ${i+1} : ${requiredData[i]}`);
      }
    })

}
matchData();