//! Closure

//todo | Closure bir Functionun içinde olan başka bir functionun içindeki işlemin dış functiona etkilemesine closure denir.



function disFunction(){

  let sayac=0;
  function icFunction(){
    sayac++
    return sayac
  }
  return icFunction
  
}
const sonucFunc = disFunction()
console.log(sonucFunc())
console.log(sonucFunc())
console.log(sonucFunc())





//---- Başka bir örnek ------//




let isim = "Hamza";
function hosgeldin(){
    alert("Merhaba"  + isim);
}
//? : Dışardan isim değişkeninin yeni değerini Okan olarak tanımladık ve hoşgeldin fonksiyonumuz bu yeni isim değeri ile işlem yaptı.
isim="Okan";
hosgeldin();






//---- Başka bir örnek ------//

function welcome(){
    let name = "Mehmet";  //welcome fonksiyonu icinde name değişkeni
    return function(){   //welcome fonkisyonu içinde return olacak başka fonksiyon
        alert(name);     //alert(namedeğeri)
    };
}
let name = "Ali" // welcome fonkisyonu içindeki name değişkenine yeni değer göndermeye çalıştık
let wl = welcome(); // ve welcome() fonksiyonumuzu wl ye atadık.
wl(); // wl fonksiyonumuzu çağırdık ve Karşımıza Mehmet bildirimi geldi.

//? colsure function yapısı ile dışardan verilen değer içeriye erişemedi.



////////////////////////////////////////////////////////////////////////////////////////////////




//! Scope 

//Global Scope

var firstname = "Hamza";  //? Bunlar Global scope her yerden ulaşabiliriz.
var surname = "Dogan"; //? Bunlar Global scope her yerden ulaşabiliriz.
var age = 19; //? Bunlar Global scope her yerden ulaşabiliriz.

function Fonksiyon1(){
  alert(`${firstname} ${surname} Hoşgeldin. Senin yaşın ${age}`)
}

Fonksiyon1();





//Local Scope

function Func1(){
  let value = 14000;  //buradaki değişken sadece func1 için geçerlidir yani yerel bir scope(Local Scope)
  alert(`1-Senin bütçen ${value}`);
}

function  Func2(){
  alert(`2-Senin bütçen ${value}`);   //burada da value değişkenimizi kullanmak istedim ancak bu value değişkenine ulaşamaz.
}

Func1();
Func2();




//! github: HamzaDogann
