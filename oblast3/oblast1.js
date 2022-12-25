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
    if(rb===pitanja.length)
    {
      clearInterval(timeFunc);
      document.getElementById("kontemariomarkodeltintoretokavalieredesantobenetodellaaltaadige").innerHTML=`
      KRAJ KVIZA<br>
      BROJ POENA : ${bodovi}
      `;
      t=true;
      document.getElementById("pomoc").style.display="flex";
      return 0;
    }
    popuni(rb);
  }
  else if(BRpokusaja==0)
  {
    BRpokusaja++;
    document.getElementById("pomoc").style.display="flex";
  }else if(BRpokusaja==1)
  {
    BRpokusaja=0;
    rb++;
    if(rb===pitanja.length)
    {
      clearInterval(timeFunc);
      document.getElementById("kontemariomarkodeltintoretokavalieredesantobenetodellaaltaadige").innerHTML=`
      KRAJ KVIZA<br>
      BROJ POENA : ${bodovi}
      `;
      t=true;
      document.getElementById("pomoc").style.display="flex";
      return 0;
    }
    popuni(rb);
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
  document.getElementById("kontemariomarkodeltintoretokavalieredesantobenetodellaaltaadige").innerHTML=`
  KRAJ KVIZA<br>
  BROJ POENA : ${bodovi}
  `;
  t=true;
  document.getElementById("pomoc").style.display="flex";
  return 0;
}

function popuni(rb)
{
  document.getElementById("kumZorzo").innerHTML = pitanja[rb].textPitanja;
    
    let div="";
    for(let i =0; i<3;i++)
    {
      if(pitanja[rb].tip[i]===0)
      {
        div+=`<div class="odgovori" id="option1Div" onclick="optionChoose(${i},${rb+1});">${pitanja[rb].odgovor[i]}</div>`
      }
      else
      {
        div+=`<div class="odgovori" id="option1Div" onclick="optionChoose(${i},${rb+1});"><img src="${pitanja[rb].odgovor[i]}"></div>`
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

function ucitaj()
{
  pitanja[0] = new pitanje("Čestica je opisana u prostoru kao talas, rešenjem koje talasne funkcije se opisuje stanje takve čestice?", "Šredingerove jednačine", 0, "Ojler Langražove jednačine", 0, "Hamiltonove jednačine", 0, 0, "Odgovor je sigurno vezan za tematiku trenutnog gradiva...", 0);
  pitanja[1] = new pitanje("Šredingerova jednačina u kvantnoj mehanici ima istu ulogu kao?", "A - Prvi Njutnov zakon", 0, "B - Drugi Njutnov zakon", 0, "C - Treći Njutnov zakon", 0, 1, "Ubrzanje tela srazmerno je sili koja na njega deluje, a obrnuto srazmerno masi tela", 0);
  pitanja[2] = new pitanje("Koja od sledećih tvrdnji vezana za Šredingerovu jednačinu je tačna?", "1-1.png", 1, "1-2.png", 1, "1-3.png", 1, 0, "Kako se obeležava visina?", 0);
  pitanja[3] = new pitanje("U kojim stanjima se čestice mogu naći?", "Slobodne i vezane čestice", 0, "Samo slobodne čestice", 0, "Samo vezane čestice", 0, 0, "Nije samo to, porazmislite kakve mogu biti čestice.", 0);
  pitanja[4] = new pitanje("Rešavanjem Šredingerove jednačine dobija se?", "Energija stanja", 0, "Funkcija stanja", 0, "Energija i funkcija stanja", 0, 2, "Uz toliko tešku jednačinu se sigurno dobija nešto drugo kao konačni podatak.", 0);
  pitanja[5] = new pitanje("Rešenje Šredingerove jednačine opisuje?", "Molekulski, atomski, subatomski sistemi", 0, "Molekulski, atomski, subatomski, makroskopski sistemi, možda čak i ceo svemir", 0, "Molekulski, atomski, subatomski, makroskopski sistemi", 0, 1, "Talasna funkcija je najkompletniji opis fizičkog sistema.", 0 );
  pitanja[6] = new pitanje("Koje godine je objavljena Šredingerova jednačina?", "1826. godine", 0, "1926. godine", 0, "1986. godine", 0, 1, "Šredinger (1887-1961) je bio Austrijski teorijski fizičar.", 0);
  pitanja[7] = new pitanje("Kakva jednačina je Šredingerova jednačina?", "Linearna parcijalna diferencijalna jednačina", 0, "Kvadratna jednačina", 0, "Eksponencijalna jednačina", 0, 0, "Samo jedna od spomenutih jednačina opisuje talasnu funkciju sistema.", 0);
  pitanja[8] = new pitanje("Šta Hamiltonov operator doprinosi u Šredingerovoj jednačini?", "Služi kao konstanta", 0, "Obuhvata kinteičku i potencijalnu energiju čestice", 0, "Obuhvata brzinu čestice", 0, 1, "bighint.png", 1);
  pitanja[9] = new pitanje("Vrednost 'Ψ' u Šredingerovoj jednačini predstavlja?", "Energiju čestice u trenutku", 0, "Promenu mase čestice u trenutku", 0, "Vrednost talasne funkcije u svakoj tački u prostoru i vremenu", 0, 2, "Ψ, to jest psi funkcija, je takođe poznata kao funkcija stanja.", 0);
  popuni(0);  
}