document.addEventListener("DOMContentLoaded", function () {

    //    Event funkcja kalkulatora BMI
    document.getElementById("calc-start").addEventListener('click', startBmi);

    //    Event funkcja kalkulatora kalorii
    document.getElementById("kcal-calc-start").addEventListener('click', startKcal);

    //    Zamknięcie PopUpu1
    document.getElementById("bmi-exit").addEventListener('click', closePopUp1);
    
     //    Zamknięcie PopUpu2
    document.getElementById("kcal-exit").addEventListener('click', closePopUp2);
   
   
});


//Definicja funkcji kalkulatora bmi
const startBmi = (e) => {
    e.preventDefault();
    //    Pobieranie wartości z pól input
    let personWeight = Number(document.getElementById("person-weight").value);
    let personHeightCm = Number(document.getElementById("person-height").value);
    //    zamiana cm na metry
    let personHeightM = personHeightCm / 100;
    //    zaokrąglanie i oblicznie BMI
    let bmi = (personWeight / (personHeightM * personHeightM)).toFixed(2);



    //    sprawdzanie wyniku i przydzielanie do grupy
    let bmiRange;
    if (bmi < 16) {
        bmiRange = 'wygłodzenie';
    } else if ((bmi >= 16) && (bmi < 17)) {
        bmiRange = 'wychudzenie';
    } else if ((bmi >= 17) && (bmi < 18.5)) {
        bmiRange = 'niedowaga';
    } else if ((bmi >= 18.5) && (bmi < 25)) {
        bmiRange = 'wartość prawidłowa';
    } else if ((bmi >= 25) && (bmi < 30)) {
        bmiRange = 'nadwaga';
    } else if ((bmi >= 30) && (bmi < 35)) {
        bmiRange = 'I stopień otyłości';
    } else if ((bmi >= 35) && (bmi < 40)) {
        bmiRange = 'otyłość kliniczna';
    } else if (bmi >= 40) {
        bmiRange = 'otyłość skrajna';
    }
    //    wstawianie opisu rangi
    let bmiRangeTxt = document.createTextNode(bmiRange);
    document.getElementById("bmi-range").appendChild(bmiRangeTxt);

    //    wstawianie wyniku
    let bmiResult = document.createTextNode(bmi);
    document.getElementById("bmi-result").appendChild(bmiResult);

    //    wywołanie funkcji włączającej widoczność PopUpu
    showPopUp("calc-pop-up");
    console.log(bmiRange);
};

//Funkcja pokazująca PopUp
const showPopUp = (idPopUp) => {
    let place = idPopUp;
    document.getElementById(place).style.visibility = "visible";

};

//Funkcja zamykająca PopUp1
const closePopUp1 = () => {

    document.getElementById("calc-pop-up").style.visibility = "hidden";

    //    czyszczenie wyników po zamknięciu
    let personWeight = document.getElementById("person-weight");
    let personHeightCm = document.getElementById("person-height");
    personWeight.value = '';
    personHeightCm.value = '';
    document.getElementById("bmi-result").innerHTML = '';
    document.getElementById("bmi-range").innerHTML = '';

};



const startKcal = (e) => {
    e.preventDefault();

    //    Pobieranie wartości z pól input
    let kcalPersonWeight = Number(document.getElementById("kcal-person-weight").value);
    let kcalPersonHeight = Number(document.getElementById("kcal-person-height").value);
    let kcalPersonAge = Number(document.getElementById("kcal-age").value);
    let maleRadio = document.getElementById("kcal-male").checked;
    let femaleRadio = document.getElementById("kcal-female").checked;

    //    [9,99 x masa ciała (kg)] + [6,25 x wzrost (cm)] - [4,92 x wiek (lata)]

    let bmr = ((9.99 * kcalPersonWeight) + (6.25 * kcalPersonHeight) - (4.92 * kcalPersonAge)).toFixed(2);

    if (maleRadio == true) {
        bmr = bmr + 5;
    } else if (maleRadio == false) {
        bmr = bmr - 161;
    }
    
    //    wstawianie wyniku
    let bmrResult = document.createTextNode(bmr);
    document.getElementById("kcal-result").appendChild(bmrResult);
    
    console.log(bmrResult);
    showPopUp("kcal-pop-up");
};

//Funkcja zamykająca PopUp2
const closePopUp2 = () => {

    document.getElementById("kcal-pop-up").style.visibility = "hidden";

    //    czyszczenie wyników po zamknięciu
    let kcalPersonWeight = document.getElementById("kcal-person-weight");
    let kcalPersonHeightCm = document.getElementById("kcal-person-height");
    let kcalPersonAge = document.getElementById("kcal-age");
    let maleRadio = document.getElementById("kcal-male");
    let femaleRadio = document.getElementById("kcal-female");
    kcalPersonWeight.value = '';
    kcalPersonHeightCm.value = '';
    kcalPersonAge.value = '';
    maleRadio.checked = false;
    femaleRadio.checked = false;
    
    document.getElementById("kcal-result").innerHTML = '';

};