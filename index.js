// Javascript Genel Tekrar (Temeller)

// Client ve server tarafında kod geliştirmemizi sağlar.


/**
 * Client: Müşterinin dokunduğu yerler..
 * Server: O butona bastığında olan arkadaki şeyler...
 */



 // artıları: popüler, client-server, interaktif, güçlü fw.
 // JS; bir editör, bir tarayıcı!

 // Editör: VS Code, notepad++, notepad.
 // Tarayıcı: chrome, IE, safari vb.


 // EcmaScript 5, ES6 ... (var, let, const)

///////////////////////////////

 //****************** SYNTAX ********************* */
 


 /**
  * HTML
  * <body>
  * <script src = "./index.js"></script>
  * </body>
  * 
  * <html></html>
  * 
  * <head>title,script,</head>
  * 
  * <footer></footer>
  * <div>, <p>, <table>, <li>,<ul>...
  * <button></button>
  * <input type="text">
  * 
  */

  // Time - TIME (harf duyarlılığı)
  // yasHesapla()
  // YasHesapla()


  function yasHesapla(yil) {
        
      return 2021-yil
  }

  console.log("Benim:", yasHesapla(1992))

// Arrow Function
  let yasHesapla2 = (yil) => {

    return 2021-yil

  }


 //****************** DATA TYPES ********************* */


/**
 * Number: 123, 4,12.44,...
 * String: "ahmet", "23", "3.14"
 * Boolean: true veya false
 * Object: {}
 * null
 * undefined
 */

 let notlar = {
    matematik: 50,
    fizik: 70,
    edebiyat: 100
 }


 let numara1 = 0; 
 let numara2 = null;
 let numara3 = undefined;


 //****************** DEĞİŞKENLER ********************* */

 // var, let ve const

 // var:    ES5
 // let:    ES6 (değişiklik yapılabilir.)
 // const:  ES6 (sabit değerler)


let isim = "Ahmet" 
isim = "mehmet" // yapılabilir..

const numara = 144
numara = 356 // yapılamaz; const kullanıldı..

// arrow function tanımlarken;

let topla = (a,b) => {
    return a+b
}

topla = 20


topla(3,4) // böyle bir func. yoktur. undefined. bulunmadı..

// biz fonksiyonları tanımlarken, const kullanırız.


// Scopes global scope vs. local scope

let sehir = "Istanbul"

function adresBul() {
    let ilce = "kadikoy"
    console.log("adres içerisindeyim:")
    console.log("benim ilçem", ilce)

}
console.log("benim şehrim,", sehir) // sehir kullanılabilir.
console.log("ilçemiz:", ilce) // kullanılamaz, ilce local scope. "ilce is not defined" typeof ilce => undefined

function carpma(a,b) {
    console.log(sehir)
    console.log(ilce) // error; ilce is not defined.
    return a*b
}

// değişken isimlerini verirken "reserved words" kullanamayız..
// if, else, int, switch, case, function, boolean, typeof null, undefined...

// let return = "ahmet" // reserved kullanılMAMAlı..
let button = "ahmet"
let div = "mehmet"
let input = "deneme" // html ifadelerine takılmayız.



 //****************** OPERATORLER ********************* */

// Aritmatik Operatorler

/**
 * Topla    => +
 * Çıkarma  => -
 * Bölme    => /
 * Çarpma   => *
 * Mod      => %
 * Artır    => ++
 * Azalt    => --
 * 
    let myNumber = 30
 *  myNumber++ (ilk olarak kullanır)
    ++myNumber (ilk olarak)

 */


 const aritmatikOperator = (a,b) => {
     //topla 
     let topla = a + b
     //çıkarma
     let cikar = a- b
     // mod al
     let mod = a % b
     //...
 }


 // kodu yazarken, aritmatik ifade içerisine gelen değerlerin number olduğuna dikkat et!

 let toplamaIslemi = 3 + "4"; // bu sayı string toplama yapar sonuc "34" çıkar
 
// a değeri ve b değeri
// Number(a) + Number(b)


// Karşılaştırma Operatörleri

/**
 * Eşittir  => "==" veya "==="
 * Eşittir Değil    => "!=" veya "!=="
 * Büyüktür => ">"
 * Küçüktür => "<"
 * K.Eşittir veya B.Eşittir => "<=" ve ">="
 * 
 * "ahmet" == "ahmet" => true
 * "ahmet" == ahmet => false
 * 3 === 3 true => 1)sayılar eşit mi 2) ikisinin tipi de sayı mı?
 */


 // sitenize... üye ol...
 // username ve pass.
 // user: 1903 pass: ahmet
 
 function loginKontrol(user,pass){
     if(user == DB.users.userName && pass == DB.users.password){
         //login oldu
         // "1903" === 1903 login olur
         // "1903" == 1903 login olmaz

     }
     else{
         alert("kullanıcı adınız veya şifreniz hatalıdır..")
     }
 }


// Mantıksal Operatörleri

/**
 * Mantıksal VE-AND => &&
 * Mantıksal VEYA-OR => ||
 * Mantıksal Hayır-NOT => !
 */

 let isWoman = true;
 let isMan = false

 let _newValue = !isWoman

 /**
  * 1 ve 1 = 1
  * 1 ve 0 = 0
  * 0 ve 0 = 0
  * 1 veya 1 = 1
  * 1 veya 0 = 1
  * 0 veya 0 = 0
  * 
  * 1 => true
  * 0 => false
  */

  // Bit Operatorler

  /**
   * VE => &
   * VEYA => |
   * XOR => ^
   */

   // binary sistemdeki sayılar veya değerler bit operatorleri ile karşılaştırılır.



// Tanımlama - Assignment Operatörleri


/**
 *  Basit Assign = "="
 *  Eklemeli As = "+="
 *  Çıkarmalı As = "-="
 *  Çarpma As = "*="
 * 
 */
 let ulke = "turkiye"



 // Şart Operatör (Ternary Operatör)

let isim2 = "seda"

isim2 == "seda" ? console.log("merhaba seda") : console.log("tanınanamadı.")


// typeof Operator

typeof "ahmet" // string
typeof 23 // number
typeof mehmet // undefined


let benimDerslerim = {
    ders1 = "matematik",
    ders2 = "tarih"
}

typeof benimDerslerim // object






 //****************** ŞARTLI İFADELER ********************* */


// IF-ELSE

if(2<3){
    // code!
}else{
    // code!
}

const tckn = "674657"

if(tckn == "123"){
    "merhaba ahmet hoşgeldin"
}else{
    "kim olduğunuz bulanamadı"
}


// SWITCH-CASE

switch(besin){
    case "sebze": "sağlıklı besleniyorsunuz"
    break;
    case "meyve": "sağlıklısınız"
    break;
    case "kırmızı et": "daha az tüketin"
    break;
    case "beyaz et": "daha fazka tüketin"
    default "bulunamadı"
}


// LOOP'lar

// For loop

for(let i=0; i<5; i++){
    console.log("değerim:", i)
}

/**
 * değerim: 0
 * değerim: 1
 * değerim: 2
 * değerim: 3
 * değerim: 4
 * 
 */

 let i = 0
 while(i<5){
     console.log("değerim:",i)
     i++
 }

i = 6
do
// code..
console.log("değerim:",i)

while(i<5){
 // code
 i++
}

// değerim:  6


// kolyesatinal.com.tr
// kolyeler var, fiyatları var bir de müşteri sepeti
// "+" butonu ile kolyeyi sepetine alır..
// sepetine git
// alışverişi tamamla
// ödeme yap
// tamamlandı, kargo beklenir..

// satın al but. => db'den azalt.

// performans mimarisi şu şekilde => müşteri sepetine ekleme yaptıkça ben 
// db'Den adeti düşüyorum.

/*
do
// müşteri ekleme yaptı open databse
while (butonbasildi mi = true/false)
//open databsi aç
// adet kadar düş
// fiyat hesapla
// kargo numarasını ççıkar
// kargo firmasına ilet
// müşteriye mail gönder sms gönder...
*/

































