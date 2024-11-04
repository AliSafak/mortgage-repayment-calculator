let clearBtn = document.querySelector(".clearBtn");
let valueinput = document.querySelector(".valueinput");
let years = document.querySelector(".years");
let percent = document.querySelector(".percent");
let mortChoices = document.querySelectorAll(".mortChoices");
// en son yazmıs oldugum mortgagechoice iki tane class olarak bulunmaktadır bu yüzden kullanımında for of ya da for each kullanılmalıdır.

let monthpayment = document.querySelector(".monthpayment");
let totalpayment = document.querySelector(".totalpayment");
const calculateBtn = document.querySelector(".calculateBtn");
const footerfirst = document.querySelector(".footerfirst");
// yukarıda footerfirst classını kapatıp footer classını acmak için iki classı  da js dosyamda tanımlıyorum.

const footer = document.querySelector(".footer");

clearBtn.addEventListener("click",function() {
    valueinput.value = "";
    years.value = "";
    percent.value = "";
    monthpayment.innerHTML = "";
    totalpayment.innerHTML = ""
    footerfirst.style.display = "block";
    footer.style.display = "none";
    for(const x of mortChoices) {
        x.checked = false;
    }
})

calculateBtn.addEventListener("click",calculate);

const worningValue = document.querySelector(".warning-value-input");
const warningYears = document.querySelector(".warning-years");
const warningPercent = document.querySelector(".warning-percent");
const borderNormal = document.querySelector(".borderNormal")

function calculate() {
    if(valueinput.value !=="" && years.value !== "" && percent.value !=="") {
        let monthlyInterest = Number(percent.value)/100/12;
        let totalMontlyPayment = (Number(years.value)*12);
        let monthlyPayment = (Number(valueinput.value) * monthlyInterest ) / (1 - Math.pow(1+monthlyInterest,-totalMontlyPayment));
        let paymentBack = monthlyPayment * totalMontlyPayment;

        monthpayment.innerHTML = `${monthlyPayment.toFixed(2)}`;
        
        totalpayment.innerHTML = `${paymentBack.toFixed(2)}`

        footerfirst.style.display = "none";
        footer.style.display = "block";
    } else {
        if(valueinput.value.trim() === "") {
            valueinput.classList.add("borderRed");
            worningValue.style.display = "block";
        }if(years.value.trim() === "") {
            years.classList.add("borderRed");
            warningYears.style.display = "block";
        }if(percent.value.trim() === "") {
            percent.classList.add("borderRed");
            warningPercent.style.display = "block"
        };
    };

};