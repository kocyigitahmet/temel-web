// fibonacci serisi F(n) = F(n-1) + F(n-2) !
// value değeri => Number(value) number.

function yazdir() {
    let girilenSayi = document.getElementById("sayi").value
    let fib = [0, 1];
    for (i = 2; i < girilenSayi; i++) {
        fib[i] = fib[i - 1] + fib[i - 2]
    }

    document.getElementById("result").innerHTML = "Fibonacci Serisi: " + fib

}