
// var, let, const(ant) 
//var ve let standart değişken tanımlamak için kullanılır.
//const sabit değerli değişkenler için kullanılır.

/*
let name = "Ahmet";
const PI_NUMBER = 3.14;

console.log("benim ismim: ", name)
console.log("pi sayısının değeri: ", PI_NUMBER)*/


//f(x) = ax + b
//fonksiyon tanımlama

/*
let name = "seda"

var IsimSoyle = function(x) {
    console.log("benim adım :", x)

};
*/


//Operatörler

//concat
/*
var isim = "Ahmet"
var soyad = "Koçyiğit"
var tckn = 11110
//string ifadeleri birleştirirken "," veya "+" kullanabiliriz.
// , kullanmanın avantajı, her ifadeyi ayırmasıdır.
console.log(isim,soyad,tckn)
console.log(isim + " " +soyad+tckn) */

//matematiksel operatörler
// +, -, *, /

var birinciDeger = 4
var ikinciDeger = 15

//toplama
//console.log(birinciDeger + ikinciDeger)
//console.log("++ koyduğum yer: ",birinciDeger++)
//console.log("++ yaptıktan sonraki satır: ", birinciDeger)

//çıkarma
//console.log(ikinciDeger - birinciDeger)

//çarpma
//console.log(birinciDeger * ikinciDeger)

//bölme
//console.log(ikinciDeger / birinciDeger)


//Mantıksal İfadeler
//AND ve OR konusu
// && (ve) - || (veya)
// 1 AND 1 => 1
// 1 AND 0 => 0
// 1 OR 0 => 1

/*
var ornek = function(name){
    console.log(birinciDeger<ikinciDeger && name == "ahmet")
    if(birinciDeger<ikinciDeger && name == "ahmet"){
        console.log("hoşgeldin")
    }
    else{
        console.log("giriş yapılamadı")
    }
}

ornek("ahmet")
*/

var kullaniciBoyut = function(x){
    return x.length
}





let userPassword = "000000"


/*

if(kullaniciBoyut(userPassword) >6){
    console.log("doğru şifre")
}else{
    console.log("yeterli uzunlukta değil.")
} */


let sicaklik = 20;



//karşılaştırmalı ifadeler varsa if/else kullanımı daha uygundur.
/*switch(sicaklik){
    case 0<sicaklik<20:
        console.log("hava soğuk");
    break;

    case 20<sicaklik<25:
        console.log("hava ılık")
    break;
    case sicaklik>25:
        console.log("hava sıcak")
    default:
        console.log("hatalı giriş yaptınız.");
        break;
} */

/*
switch (sicaklik) {
    case 30:
        console.log("hava sıcak")
        break;
    case 20:
        console.log("hava soğuk")
        break;
    default:
        console.log("hava normal")
        break;
} */


//DÖNGÜLER

//for döngüsü
/*
for(var i= 0; i<5; i++){
    console.log("ahmet")
    console.log("seda")
    console.log("hazal")
    console.log("i değerim: ", i)
} */

//while döngüsü
var i = 1;

/*
while(i > 7){
    console.log("ahmet")
    console.log("seda")
    console.log("hazal")
    console.log("şu anki i değerim: ", i)
    i--
    
} */
//do-while
/*
do{
    console.log("ahmet")
    console.log("seda")
    console.log("hazal")
    console.log("şu anki i değerim: ", i)
    i--

}
while(i > 7) */




