window.onload=function(){
    document.getElementById("convert").addEventListener("click", function(){
        let num=document.getElementById("number").value;
        document.getElementById("length-conversion").textContent=`${num} meters = ${(num*3.28084).toFixed(3)} feet | ${num} feet = ${(0.3048*num).toFixed(3)} meters`;
        document.getElementById("volume-conversion").textContent=`${num} liters = ${(num*0.264172).toFixed(3)} gallons | ${num} gallons = ${(3.78541*num).toFixed(3)} liters`;
        document.getElementById("mass-conversion").textContent=`${num} kilograms = ${(num*2.20462).toFixed(3)} pounds | ${num} pounds = ${(0.453592*num).toFixed(3)} kilograms`;

    })
}