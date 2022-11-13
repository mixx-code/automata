let btnMangga = document.getElementById("mangga")
let btnApel = document.getElementById("apel")
let btnAlpukat = document.getElementById("alpukat")
let btnKecil = document.getElementById("kecil")
let btnSedang = document.getElementById("sedang")
let btnBesar = document.getElementById("besar")
let btnEkstra = document.getElementById("ekstra")
let btnNatural = document.getElementById("natural")
let btnPesan = document.getElementById("pesan")
let totalHarga = document.getElementById("totalHarga")
let btn50000 = document.getElementById("50000")
let btn100000 = document.getElementById("100000")
let struk = document.getElementById("struk")
let uangKembalian = document.getElementById("kembalian")
//buah
let mangga = ""
let apel = ""
let alpukat = ""
//cup
let kecil = ""
let sedang = ""
let besar = ""

//tingkat kemanisan
let ekstra = ""
let natural = ""

//total harga

//
//
//pilih buah
btnMangga.addEventListener('click', () =>{
    mangga = "mangga";
    btnApel.disabled = true;
    btnAlpukat.disabled = true;

})
btnApel.addEventListener('click', () =>{
    apel = "apel";
    btnMangga.disabled = true;
    btnAlpukat.disabled = true;
})
btnAlpukat.addEventListener('click', () =>{
    alpukat = "alpukat";
    btnMangga.disabled = true;
    btnApel.disabled = true;
})

//pilih cup
btnKecil.addEventListener('click', () =>{
    kecil = "kecil";
    btnSedang.disabled = true;
    btnBesar.disabled = true;
})
btnSedang.addEventListener('click', () =>{
    sedang = "sedang";
    btnKecil.disabled = true;
    btnBesar.disabled = true;
})
btnBesar.addEventListener('click', () =>{
    besar = "besar";
    btnSedang.disabled = true;
    btnKecil.disabled = true;
})

//tingkat kemanisan

btnEkstra.addEventListener('click', () =>{
    ekstra = "ekstra";
    btnNatural.disabled = true;
})
btnNatural.addEventListener('click', () =>{
    natural = "natural";
    btnEkstra.disabled = true;
})
btnPesan.addEventListener('click', () =>{
    if(mangga == "mangga" && kecil == "kecil" && natural == "natural"){
        totalHarga.value = 15000;
    }
    if(mangga == "mangga" && sedang == "sedang" && natural == "natural"){
        totalHarga.value = 17000;
    }
    if(mangga == "mangga" && besar == "besar" && natural == "natural"){
        totalHarga.value = 20000;
    }
    if(mangga == "mangga" && kecil == "kecil" && ekstra == "ekstra"){
        totalHarga.value = 16000;
    }
    if(mangga == "mangga" && sedang == "sedang" && ekstra == "ekstra"){
        totalHarga.value = 18000;
    }
    if(mangga == "mangga" && besar == "besar" && ekstra == "ekstra"){
        totalHarga.value = 21000;
    }
    if(apel == "apel" && kecil == "kecil" && natural == "natural"){
        totalHarga.value = 15000;
    }
    if(apel == "apel" && sedang == "sedang" && natural == "natural"){
        totalHarga.value = 17000;
    }
    if(apel == "apel" && besar == "besar" && natural == "natural"){
        totalHarga.value = 20000;
    }
    if(apel == "apel" && kecil == "kecil" && ekstra == "ekstra"){
        totalHarga.value = 16000;
    }
    if(apel == "apel" && sedang == "sedang" && ekstra == "ekstra"){
        totalHarga.value = 18000;
    }
    if(apel == "apel" &&  besar == "besar" && ekstra == "ekstra"){
        totalHarga.value = 21000;
    }
    if(alpukat == "alpukat" && kecil == "kecil" && natural == "natural"){
        totalHarga.value = 15000;
    }
    if(alpukat == "alpukat" && sedang == "sedang" && natural == "natural"){
        totalHarga.value = 17000;
    }
    if(alpukat == "alpukat" && besar == "besar" && natural == "natural"){
        totalHarga.value = 20000;
    }
    if(alpukat == "alpukat" && kecil == "kecil" && ekstra == "ekstra"){
        totalHarga.value = 16000;
    }
    if(alpukat == "alpukat" && sedang == "sedang" && ekstra == "ekstra"){
        totalHarga.value = 18000;
    }
    if(alpukat == "alpukat" &&  besar == "besar" && ekstra == "ekstra"){
        totalHarga.value = 21000;
    }
})
btn50000.addEventListener('click', ()=> {
    let kembalian = 50000 - totalHarga.value
    struk.value = `uang yang dimasukkan Rp.50.000
total harga = Rp.${totalHarga.value}
Kembalian = Rp.${kembalian}`
uangKembalian.value = `Rp.${kembalian}`
btn100000.disabled = true;
})
btn100000.addEventListener('click', ()=> {
    let kembalian = 100000 - totalHarga.value
    struk.value = `uang yang dimasukkan Rp.100.000
total harga = Rp.${totalHarga.value}
Kembalian = Rp.${kembalian}`
uangKembalian.value = `Rp.${kembalian}`
btn50000.disabled = true;
})
