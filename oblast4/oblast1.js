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

var timeMax = 100000;
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
  pitanja[0] = new pitanje("Šta se objašnjava dualnom prirodom mikroobjekata?", "A- Osobine fotona", 0,"B- Osobine čestica koje se kreću kroz", 0, "C- Osobine mikrosposkih objekata", 0, 2, "...mikroobjekta?", 0);

pitanja[1] = new pitanje("Kako glasi deBroljeva hipoteza o dualnoj prirodi mikroobjekta", "A- λ=h/p", 0,"B- λ=p/h", 0, "C- λ=h/k", 0, 1, "Talasna dužina mikroobjekta zavisi od njegovog impulsa", 0);

pitanja[2] = new pitanje("Kako de Broljova hipoteza opisuje objekte veće od mikroobjekata?", "A- I makroobjekti imaju svoju određenu talasnu dužinu reda veličine dimenzije samog objekta", 0,"B- Makroobjekti nemaju svoju određenu talasnu dužinu", 0, "C- Da makroobjekti imaju svoju određenu talasnu dužinu ali je toliko mala da su talasne osobine tog objekta zanemarljive", 0, 2, "Talasna dužina koja pripada nekom objektu je obrnuto srazmerna impulsu tog tela", 0);

pitanja[3] = new pitanje("Kretajući kojom brzinom će dati mikroobjekat imati najveću talasnu talasnu dužinu?", "A- Kretajući se što bliže brzini svetlosti" , 0,"B- Kretajući se brzinom približnom nuli", 0, "C- Stacionaran objekat će imati najveću", 0, 2, "Talasna dužina koja pripada nekom objektu je obrnuto srazmerna impulsu tog tela", 0);

pitanja[4] = new pitanje("Kako bi dokazali postojanje i talasne prirode nekog mikroobjekata?", "A- Dokazivanje njegove difrakcije", 0,"B- Određivanjem da li mikroobjekat može preneti energiju pri sudaru", 0, "C- Dokazivanje odsustva mase kod takvih objekta", 0, 0, "U eksperimentu Devisona i Džermera u kome su dokazali dualne prirode kod elektrona, detektovali su kako se elekron reflektuje sa kristala nikla poput talasa", 0);

pitanja[5] = new pitanje("Ukoliko je impuls elektrona p = 6.626×10^−24 kg⋅m/s, kolića će biti njegova de Broljeva talasna dužina? (h = 6.626×10^−34 J⋅s)", "A- 1 m" , 0,"B- 0.1 nm", 0, "C- 10^-20 m", 0, 1, "Talasna dužina koja odgovara talas-čestici jednaka je količniku Plankove  konstante i njenog impulsa", 0);

pitanja[6] = new pitanje("Relacije neodređenosti nam govore?", "A- Što preciznije merimo impuls objekta to će biti veća greška pri merenju položaja tog objekta", 0,"B- Nemoguće je potpuno tačno i precizno odrediti brzinu kretanja nekog objekta", 0, "C- Ne postoji dovoljno dobar instrument da odredimo tako male vrednosti", 0, 0, "Prema njima nemoguće je ni na koji način precizno znati koordinate i impuls mikrobjekta", 0);

pitanja[7] = new pitanje("Zašto relacije neodređenosti postoje?", "A- Jer merenje pozicije zahteva da se kretinje čestice zaustavi, tj. smanjenjem impulsa na 0", 0,"B- Jer ne možemo napraviti dovoljno precizan instrument koji meri i impuls i poziciju čestice istovremeno", 0, "C- Jer samim merenjem utičemo na stanje čestice tako da ne možemo istovremeno precizno odrediti oba", 0, 2, "Ukoliko bi za jedan elektron pokušali da odredimo položaj, jedan od načina je gadjanjem elektrona fotonom i detektovanjem gde se foton odbije. Ali time menjamo vektor kretanja tog eleltrona", 0);


pitanja[8] = new pitanje("Koj naučnik je dobio Nobelovu nagradu za pretpostavljanje relacija neodređenosti?", "A- Verner Hajzenberg", 0,"B- Lui de Brolj", 0, "C- Džordž Vulf", 0, 0, "Pun naziv teorije relacija neodređenosti nosi njegovo prezime", 0);


pitanja[9] = new pitanje("Kolika će biti najmanja greška pri merenju ukupne energije atoma Oganesona, ako smo mu precizno odredili vreme poluraspada, tj. greška pri merenju vremena je 0.02 ms? (h = 6.626×10^−34 J⋅s)", "A- 3.313×10−32 J", 0,"B- 13.252×10−26 J", 0, "C- 3.313×10^−26 J", 0, 2, "Proizvod grešaka pri merenju ukupne energije i vremena postojanja čestice će imati vrednost Plankove konstante ili više", 0);

popuni(0); 
}