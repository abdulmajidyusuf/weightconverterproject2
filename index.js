const weightChoice = document.getElementById('option');
const kgInput = document.getElementById('inputkg');
const lbInput = document.getElementById('inputpound');
const submitBtn = document.getElementById('submit');
const resultJS = document.getElementById('result');


if(weightChoice.value === "kg"){
    lbInput.classList.add('hidder');
}
else{
    kgInput.classList.add('hidder')
};

function reLoad(){
    resultJS.innerHTML = "";
    
    if(weightChoice.value === "kg"){
    lbInput.classList.add('hidder');
    kgInput.classList.remove('hidder');
}
else{
    kgInput.classList.add('hidder');
    lbInput.classList.remove('hidder');
};

}
//weightChoice.addEventListener("hover", reLoad);




function convertWeight(){
     let kgValue = kgInput.value;
    let lbValue = lbInput.value;

    let newweight
    if(weightChoice.value === "kg" && kgValue >= 1){
        newweight = kgValue * 2.205;
        resultJS.innerHTML = `${kgValue} kilograms is equivalent to ${newweight.toFixed(2)} pounds`;
        resultJS.classList.remove('errormsg');
        resultJS.classList.add('result');
        lbInput.value = "";
    }
    else if (weightChoice.value === "pounds" && lbValue >= 1){
        newweight = lbValue / 0.454;
        resultJS.innerHTML = `${lbValue} pounds is equivalent to ${newweight.toFixed(2)} kg`
        resultJS.classList.remove('errormsg');
        resultJS.classList.add('result');
        kgInput.value = "";
    }
    else if (kgValue === ""  && lbValue === ""){
        resultJS.innerHTML = "you didn`t type a number !!";
        resultJS.classList.remove('result');
        resultJS.classList.add('errormsg');
    };
    

}
    submitBtn.addEventListener("click", convertWeight);
