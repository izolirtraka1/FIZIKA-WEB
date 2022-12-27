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
  pitanja[0]=new pitanje("Шта су инерцијални референтини системи?","Системи који релативно мирују или се релативно крећу у односу на референтно тело.",0,"Системи у којима се инерцијалне силе јављају као последица убрзаног кретања референтног система.",0,"Системи који се могу кретати брзином већом од C.",0,0, "Референтни системи који мирују или се крећу равномерно праволинијски јесу системи у којима важи закон инерције и називају се инерцијални референтни системи.",0)
  pitanja[1]=new pitanje("Галилејеве трансформације координата повезују:","просторне и временске координате два система који се крећу константном брзином један у односу на други, при брзинама приближним брзином светлости.",0,"просторне и временске координате два система који се крећу константном брзином један у односу на други, при брзинама u=0.",0,"просторне и временске координате два система који се крећу константном брзином један у односу на други, при брзинама много мањим од брзине светлости.",0,2, "Галилејеве трансформације се примењују у класичној физици (не у релативистичкој).",0);
  pitanja[2]=new pitanje("Ако је u брзина, t време , x y z  координате, а знак „ ’ “ нам наговештава да се ради о другом (референтном) систему, шта треба ставити уместо h у формули x=h+u*t' Галилејевих трансформација?","y",0,"x'",0,"t",0,1, "Галилејеве трансформације повезују 2 ИРС.",0);
  pitanja[3]=new pitanje("Лоренцове трансформације координата повезују:","просторне и временске координате два система који се крећу константном брзином један у односу на други, при брзинама много мањим од брзине светлости.",0,"просторне и временске координате два система који се крећу константном брзином један у односу на други, при брзинама приближним брзином светлости.",0,"просторне и временске координате два система који се крећу константном брзином један у односу на други, при брзинама u=0.",0,1, "Лоренцове трансформације користимо у релативистичкој физици.",0);
  pitanja[4]=new pitanje("Ако је u брзина, t време , x y z  координате, c брзина светлости, а знак „ ’ “ нам наговештава да се ради о другом (референтном) систему, шта треба ставити уместо h у формули t'=(t-((u/c^2)*x))/h Лоренцових трансформација (кретање система је уз x-осу)? ","5-0.PNG",1,"5-1.PNG",1,"5-2.PNG",1,2, "Ова формула се може извести преко формуле за x Лоренцових трансформација (случај кретања система дуж x-осе), размисли о сличности те 2 формуле.",0);
  pitanja[5]=new pitanje("Код Лоренцових трансформација у случају када је кретање система дуж z-oce, како ће гласити формуле за t и за координате x  и y ? Брзина је u , t је време , x y z  су координате, c  је брзина светлости, а знак „ ’ “ нам наговештава да се ради о другом (референтном) систему.","6-0.PNG",1,"6-1.PNG",1,"6-2.PNG",1,2, " Размотрити да ли су координате усклађене са поменутим случајем.",0);
  pitanja[6]=new pitanje("Шта од наведеног није постулат?","Лоренцове трансформације",0,"Принцип инварјантности брзине светлости у вакуму",0,"Ајнштајнов принцип релативитета",0,0, "Лоренцове трансформације представљају везу између кордината истог догађаја посматраног из два система која се крећу брзином v један у односу на други.",0);
  popuni(0);
    
}