let bodovi=0;
let BRpokusaja=0;

class pitanje
{
  constructor(textPitanja, odgovorA, odgovorB, odgovorC,TacanOdgovor)
  {
    this.textPitanja=textPitanja;
    this.odgovor=[odgovorA,odgovorB,odgovorC];
    this.TacanOdgovor= TacanOdgovor;
  } 
}

let pitanja=[];
pitanja[0]=new pitanje("Dobili ste vrlo gadne poruke preko Instagrama, korisnik naloga je nepoznat, i uspešno krije identitet.","A - Pročitajte ostatak poruka","B - Odmah odgovorite, ignorišite ostale poruke","C - Ignorišite ostatak poruka odmah",0)

function optionChoose(text,rb)
{
  if(text===pitanja[rb].odgovor[pitanja[rb].TacanOdgovor])
  {
    bodovi+=(2-BRpokusaja);
    BRpokusaja=0;
  }
  else if(BRpokusaja==0)
  {
     BRpokusaja++;
     document.getElementById("pomoc").style.display="flex";
  }
}