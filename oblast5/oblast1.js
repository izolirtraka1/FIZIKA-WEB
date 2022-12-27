let bodovi=0;
let BRpokusaja=0;
let t=false;
class pitanje
{
  constructor(textPitanja, odgovorA, tipA, odgovorB, tipB, odgovorC, tipC, TacanOdgovor, hint, tipH)
  {
    this.textPitanja=textPitanja;
    this.odgovor=[odgovorA,odgovorB,odgovorC];
    this.tip = [tipA, tipB, tipC]
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

var timeMax = 1000;
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
  pitanja[0]=new pitanje("Crvena granica je __ ili __ na kojoj se desava fotoefekat.","najveca frekvencija, najmanja talasna duzina",0,"najmanja frekvencija, najveca talasna ",0,"najmanja frekvencija, najmanja talasna duzina",0,1, "Najmanja….",0)
  pitanja[1]=new pitanje("Cemu je jednaka energija koju telo emituje u stanju toplotne ravnoteze","energija koju apsorbuje ",0,"energija jonizacije",0,"kinetickoj energiji tela ",0,0, "Energija….",0);
  pitanja[2]=new pitanje("Minimalna energija koju treba da primi elektron da bi napustio povrsinu metala zove se __________","energija jonizacije",0,"potencijalna energija",0,"izlazni rad ",0,2, "Ai….",0);
  pitanja[3]=new pitanje("Bezdimenziona velicina jednaka odnosu energije zracenja koju telo apsorbuje i energije zracenja koje pada na telo naziva se:","temperatura tela ",0,"apsorpciona moc tela",0,"emisiona moc tela ",0,1, "_____ moc tela",0);
  pitanja[4]=new pitanje("Po Stefan-Bolcmanovom zakonu, emisiona moc apsolutnog crnog tela srazmerna je kom stepenu temperature tela:","drugom",0,"trecem",0,"cetvrtom ",0,2, "Pokušaj ponovo",0);
  pitanja[5]=new pitanje("Plankova konstanta iznosi h=","6,62 * 10^-34Js",0,"6 * 10^-34Js",0,"2,26 * 10^-34Js ",0,0, "6",0);
  pitanja[6]=new pitanje("Najverovatnija talasna duzina u spektru toplotnog zracenja apsolutno crnog tela obrnuto je srazmerna temperaturi tela. Ciji je ovo zakon:","Kirhofov ",0,"Vinov",0,"Stefan-Bolcmanov",0,1, "Konstanta proporcije b",0);
  pitanja[7]=new pitanje("Ko je postavio hipotezu da se elektromagnetno zracenje emituje u odredjenim 'porcijama' energije:","Plank ",0,"Ajnstajn",0,"Njutn",0,0, "e=mc2",0);
  pitanja[8]=new pitanje("Fotoelektron je:","elektron izbacen iz atoma ",0,"elektron izbacen iz metala ",0,"elektron u metalu",0,1, "Gvozdje",0);

  popuni(0);
    
}