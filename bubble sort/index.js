function degistir(arr, first, second) {
    let ram = arr[first];
    arr[first] = arr[second];
    arr[second] = ram;


}


function bubble_sort() {

    let ilk_array = document.getElementById("array").value
    let son_array = ilk_array.split(',').map(Number);
    let len = son_array.length;
    for (i = 0; i < len; i++) {

        for (j = 0; j < len - i; j++) {
            console.log("soldaki değer:", son_array[j])
            console.log("sağdaki değer: ", son_array[j + 1])
            console.log("değerler:", son_array)
            if (son_array[j] > son_array[j + 1]) {
                degistir(son_array, j, j + 1)
            }

        }


    }

    document.getElementById("result").innerHTML = "Sıralanmış Hali:" + son_array




}