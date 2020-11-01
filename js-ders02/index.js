//fonksiyonlar


boyaFunc = function(boya){
    console.log("boya şudur: ",boya)
}



//Arrow functions 

vitesFunc = (vites) => {
    console.log("vites sayısı: ",vites)

}

//boyaFunc("yeşil")
//vitesFunc("5")


//yemek örneği

siparisVer = (yemek, z) => {
    console.log("istenilen yemek:", yemek)
    z(yemek)
}

yemekHazirla = (siparis) => {
    console.log("hazırlanmaya başlayan yemek: ", siparis)

}

siparisVer("çig köfte", yemekHazirla)

//siparisVer("balık", yemekHazirla)


//yemek siparişi verme uygulamasında öncelikle yemeği seçeriz. (balık)
    //siparişi ver butonuna tıklarım (balık siparişini verdim)
        //siparişin gelmesini beklerim..
            


//arka taraf akışı
    //. sipariş verir => siparisVer()
    //. rest. iletilir.
    //. rest siparişi kabul eder.
    //. rest siparişi hazırlar.
    //. rest kuryeye verir. kuryeAl()
    //. kurye teslim eder. teslimEt()
