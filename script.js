function BMI(weight, height){
   let results = weight / (height * height)
   return results;
}
console.log(BMI(80, 1.8));

function status(BodyMass){
    if(BodyMass<18.5){
        return"لديك نقص في الوزن"
    } else if (BodyMass<25 && BodyMass >18.5){
        return"وزنك صحي"
    } else if(BodyMass >= 25){
        return"لديك زيادة في الوزن"
    }
        
    
}

function calculate(){
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;

    let bmi_value = BMI(weight, height);
    let desc = status(bmi_value);

    let box= document.getElementById("result");
    box.innerText = bmi_value + " == " + desc;
}