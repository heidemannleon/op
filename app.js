

/*
document.querySelector('form').addEventListener('submit', salvesta);

function salvesta(e){
    const uusYlesanne = document.getElementById('task').value;
    let Ylesanded;
    if(localStorage.getItem('tasks') === null){
        ylesanded = [];
        console.log('')
    } else{
    
        console.log('olemas, tuleb lugeda')
        ylesanded = JSON.parse(localStorage)
        console.log(Ylesanded);
    }
    ylesanded.push(uusYlesanne)
    */

    /*Minu versioon
   let eesNimi = ['Leon'];
   let pereNimi = ['Heidemann'];
   let synniAasta = [1997];
   let praeguneAasta = [2019];
   var vanus = praeguneAasta - synniAasta;

   console.log(eesNimi+' '+pereNimi+' '+vanus);
 
   alert('Nimi: '+eesNimi+' '+pereNimi+' Vanus: '+vanus);
   */









/* 
   let eesnimi, perenimi;
   let synnikuupaev;

   function taisNimi(eesNimi, pereNimi){
       return `${eesnimi}` `${perenimi}`;
   }
   functionarvutaVanus(synnikuupaev){
       synnikuupaev = new Date(synnikuupaev);
       vaheSekundites = Date.now() - synnikuupaev.getTime();
        vanusDate = bew Date(vaheSekundites);
        aastaDate = vanusDate,getUTCFullYear();
        vanus = aastaDate-1970;
        return `Vanus: ${vanus} aasta`;
    };

    console.log(taisNimi("Minu", "laps"))
    console.log(arvutaVanus("2014-08-01"))
    */










// skp on sünnikuupäev
// inimese kirjeldus OOP abil
// inimese konstruktor
function Isik(e, p, skp){
    this.eesnimi = e;
    this.perenimi = p;
    this.synnikuupaev = new Date(skp);
  
    // väljasta täisnimi
    this.taisNimi = function(){
      return `${this.eesnimi} ${this.perenimi}`;
    }
  
    // arvuta vanus
    this.arvutaVanus = function(){
      const vaheSekundites = Date.now() - this.synnikuupaev.getTime();
      const vanusDateKujul = new Date(vaheSekundites);
      const taisAasta = vanusDateKujul.getUTCFullYear();
      const vanus = taisAasta - 1970;
      return vanus;
    }
  }
  
  const anna = new Isik('Anna', 'Karutina', '11-27-1980');
  const kadi = new Isik('Kadi', 'Tamm', '07-30-1995');
  console.log(anna.taisNimi());
  console.log(kadi.taisNimi());