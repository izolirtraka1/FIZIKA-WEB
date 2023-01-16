let bodovi=0;
let BRpokusaja=0;
let t=false;
class pitanje
{
  constructor(textPitanja, odgovorA, tipA, odgovorB, tipB, odgovorC, tipC, TacanOdgovor, hint, tipH)
  {
    this.textPitanja=textPitanja;
    this.odgovor=[odgovorA,odgovorB,odgovorC];
    this.tip = [tipA, tipB, tipC];
    this.TacanOdgovor= TacanOdgovor;
    this.hint = hint;
    this.tipH = tipH;
  } 
}

let pitanja=[];


function optionChoose(text,rb)
{
  rb--;
  console.log(text);
  if(text===pitanja[rb].TacanOdgovor)
  {
    bodovi+=(2-BRpokusaja);
    BRpokusaja=0;
    rb++;
    
    document.getElementById("milasin").innerHTML=`<button id = "ozrenSoldatovic"class="nazad" onclick="terajDalje(${rb})">NASTAVI</a>`;
    document.getElementById("jakoje").innerHTML=`Tacno`;
    document.getElementById("dzama").style.display="flex";
  }
  else if(BRpokusaja==0)
  {
    BRpokusaja++;
    document.getElementById("pomoc").style.display="flex";
  }else if(BRpokusaja==1)
  {
    BRpokusaja=0;
    rb++;
    
    document.getElementById("milasin").innerHTML=`<button id = "ozrenSoldatovic"class="nazad" onclick="terajDalje(${rb})">NASTAVI</a>`;
    document.getElementById("jakoje").innerHTML=`Netacno`;
    document.getElementById("dzama").style.display="flex";
  }
}

function sakrijPomoc()
{
  document.getElementById("pomoc").style.display="none";
  if(t)
  {
    location.href="../kviz.html";
  }
}

var timeMax =500;
var timeFunc;

function move() {
  var timeBar = document.getElementById('tBar');
    timeBar.innerHTML = timeMax;
    var time = 0;
    var percentage = 0;

    timeFunc = setInterval(frame, 1000);
    function frame() {
        if(time>=timeMax){
            clearInterval(timeFunc);
            // alert("انتهى الوقت");
            document.getElementById("kontemariomarkodeltintoretokavalieredesantobenetodellaaltaadige").innerHTML=`
            ISTEKLO VAM JE VREME<br>
            BROJ POENA : ${bodovi}
            `;
            t=true;
            
            document.getElementById("pomoc").style.display="flex";
            return 0;
        }else{
            time++;
            percentage = 100-(time/timeMax)*100; // koliko je % ostalo vremena

            if(percentage <= 5){
                timeBar.style.color = "transparent";
            }

            timeBar.textContent = (timeMax-time);
            timeBar.style.width = percentage + "%";
            
            console.log("proteklo vreme: " + time + "| procenat testa gotov: " + percentage);
        }
      }
}

function oceDaBega()
{
  clearInterval(timeFunc);
  document.getElementById("dragojlo").innerHTML=`
  KRAJ KVIZA<br>
  BROJ POENA : ${bodovi}
  `;
  t=true;
  document.getElementById("radasin").style.display="flex";
  return 0;
}

function popuni(rb)
{
  document.getElementById("kumZorzo").innerHTML = ((rb+1) + ". " + pitanja[rb].textPitanja);
    
    let div="";
    let p =['A','B','C']
    for(let i =0; i<3;i++)
    {
      if(pitanja[rb].tip[i]===0)
      {
        div+=`<div class="odgovori1"> <div class="odg" ><h2>${p[i]})</h2></div><div class="odgovori" id="option1Div" onclick="optionChoose(${i},${rb+1});">${pitanja[rb].odgovor[i]}</div></div>`
      }
      else
      {
        div+=`<div class="odgovori1"> <div class="odg" ><h2>${p[i]})</h2></div><div class="odgovori" id="option1Div" onclick="optionChoose(${i},${rb+1});"><img src="${pitanja[rb].odgovor[i]}"></div></div>`
      }
    }
    document.getElementById("cirko").innerHTML = div;
    if(pitanja[rb].tipH === 0)
    {
      document.getElementById("kontemariomarkodeltintoretokavalieredesantobenetodellaaltaadige").innerHTML=pitanja[rb].hint;
    }
    else
    {
      document.getElementById("kontemariomarkodeltintoretokavalieredesantobenetodellaaltaadige").innerHTML=`<img src="${pitanja[rb].hint}">`;
    }
}

function terajDalje(rb)
{
  
    document.getElementById("dzama").style.display="none";
    if(rb===pitanja.length)
    {
      clearInterval(timeFunc);
      document.getElementById("dragojlo").innerHTML=`
      KRAJ KVIZA<br>
      BROJ POENA : ${bodovi}
      `;
      t=true;
      document.getElementById("radasin").style.display="flex";
      return 0;
    }
    popuni(rb);
}

function ucitaj()
{
  pitanja[0] = new pitanje("Formula za izračunavanje poluprečnika stacionarnih orbita glasi:","0-0.png",1,"0-1.png",1,"0-2.png",1,2,"0-hint.png",1);
  pitanja[1] = new pitanje("Borov radijus predstavlja:","poluprečnik najviše stacionarne orbite elektrona u vodonikovom atomu",0,"poluprečnik najniže stacionarne orbite elektrona u vodonikovom atomu",0,"poluprečnik najviše nestacionarne orbite elektrona u vodonikovom atomu",0,1,"POKUŠAJ PONOVO",0);
  
  pitanja[2] = new pitanje("Oznake me, Fcp i Fe predstavljaju:","Masu elektrona, električnu silu, električnu energiju",0,"Masu elektrona, električnu silu, električnu energiju",0,"Masa elektrona, centripetalnu silu, električnu silu",0,2,"me - masa elektrona",0);
  pitanja[3] = new pitanje("Pašenova serija predstavlja silaženje elektrona sa kog nivoa na prvi?","Drugog",0,"Prvog",0,"Trećeg",0,2,"Nije sa prvog.",0);
  pitanja[4] = new pitanje("Ridbergova konstanta (R) iznosi:","4-0.png",1,"4-1.png",1,"4-2.png",1,2,"4-hint.png",1);
  pitanja[5] = new pitanje("Z predstavlja:","glavni kvantni broj energeskog nivoa",0,"redni broj atoma",0,"naziv serije",0,1,"Z predstavlja broj protona koji se nalaze u jezgru svakog atoma tog elementa",0);
  
  pitanja[6] = new pitanje(`“ Elektroni se u  atomu  kreću oko jezgra samo po stacionarnim orbitama. Dok se kreće po orbitama elektron ne emituje elektromagnetno zračenje” – je definicija kog Borovog postulata:`,"Prvog",0,"Drugog",0,"Treceg",0,0,"POKUŠAJ PONOVO",0);
  pitanja[7] = new pitanje("Formula ln = n * ћ se odnosi na:","postulat o kvantnim prelazima",0,"postulat o stacioniranim stanjima",0,"postulat o momentu impulsa",0,2,"ln - moment impulsa elektrona",0);
  pitanja[8] = new pitanje(`“ Kada elektron u omotaču  prelazi sa jedne na drugu stacionarnu orbitu on emituje ili apsorbuje kvant energije jednake _______ ”.`,"razlici energije ta dva nivoa",0,"zbiru energija ta dva broja",0,"proizvodu energija ta dva broja",0,0,"8-hint.PNG",1);
  pitanja[9] = new pitanje("Konstanta ћ je:","plankovu konstantu",0,"redukovanu plankovu konstantu",0,"njutnovu gravitacionu konstantu",0,1,"9-hint.PNG",1);
  pitanja[10] = new pitanje("Konstanta V1 ima vrednost: ", "2*10^6 m/s",0,"2*10^-6 m/s",0,"2*10^6 W/m",0,0,"V1[m/]",0);
  pitanja[11] = new pitanje("Iz formule  Vn = Z/n * e^2 /4*πћƐ , izraz e^2 /4*πћƐ mozemo zameniti konstantom:","r1",0,"V1",0,"n1",0,1,"POKUŠAJ PONOVO",0);
  
  popuni(0);
    
}