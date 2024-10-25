// daxiline yazi yaz
document.getElementById('ptag').innerHTML += 'Some new content!';



// elementi sil
const element = document.getElementById("sil");
element.remove();




// icine yazi yazmaq
const para = document.createElement("p"); // element yarat
para.innerHTML = "This is a paragraph."; // icine yazi yazmaq
document.getElementById("yeni").append(para);  // elave etmek
para.className = "tezeClassAdi" // yaradilan elemente class ver
const gotur = document.querySelector(".tezeClassAdi"); // yaradilan element gotur
gotur.style.backgroundColor = "red";

gotur.addEventListener("click", function () {
    gotur.remove();
})

// const goturInput = document.querySelector("input");





const goturDuyme = document.querySelector("button");
const goturInput = document.querySelector("input");
goturDuyme.addEventListener("click", function () {


    const yenidDuyme = document.createElement("p"); // element yarat
    yenidDuyme.innerHTML = "teze duymedir."; // icine yazi yazmaq
    document.getElementById("create").append(yenidDuyme);

    alert(goturInput.value);
    console.log("yoxla");
})




