function pozitie(position){
  let x=document.getElementById("locatie");
  x.innerHTML="<br>:"+position.coords.latitude + "<br>Longitudine: "+position.coords.longitude;
}
function afisareDetalii()
{
    let d = new Date();
    document.getElementById("data").innerHTML=d.toLocaleDateString();
    document.getElementById("ora").innerHTML=d.toLocaleTimeString();
    document.getElementById("url").innerHTML = window.location.href;
    document.getElementById("nbrowser").innerHTML=navigator.appName;
    document.getElementById("version").innerHTML=navigator.appVersion;
    document.getElementById("os").innerHTML=navigator.appVersion;
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(pozitie);
    }
    else{
      document.getElementById("locatie").innerHTML="Acest browser nu dispune de geolocatie";
    }
  }

var myDate=setInterval(afisareDetalii,1000);
function draw()
{
  let canvas=document.getElementById("canvas");
  let context=canvas.getContext("2d");
  context.strokeStyle=document.getElementById("stroke").value;
  context.fillStyle=document.getElementById("fill").value;
  context.beginPath();
  context.moveTo(20,20);
  context.lineTo(20,90);
  context.lineTo(90,90);
  context.lineTo(90,20);
  context.lineTo(20,20);
  context.lineWidth=10;
  context.stroke();
  context.fill();
}


function schimbaContinut(resursa,jsFisier,jsFunctie){
    let xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange=function()
    {
      if(this.readyState==4 && this.status==200){
        document.getElementById("continut").innerHTML=this.responseText;
        if(jsFisier){
          var elementScript=document.createElement('script');
          elementScript.onload=function(){
            console.log("hello");
            if(jsFunctie){
              window[jsFunctie]();
            }

          };
          elementScript.src=jsFisier;
          document.head.appendChild(elementScript);
        }
        else{
            if(jsFunctie){
              window[jsFunctie]();
            }
        }
      }
    };
    xhttp.open("GET",resursa+".html",true);
    xhttp.send();
  }
