let yearNum = document.querySelector(".year-num") 
let monthNum = document.querySelector(".month-num") 
let daysNum = document.querySelector(".days-num") 
 
let btn = document.querySelector(".calculate");

btn.addEventListener("click" , (event =>{
    let birth = new Date(document.querySelector(".date").value );
    let current = new Date();

    let birthDate = {
        year : birth.getFullYear(),
        month  : birth.getMonth() + 1,
        day : birth.getDate()
    }

    let currentDate = {
        year : current.getFullYear(),
        month  : current.getMonth() + 1,
        day : current.getDate()

    }

    let yearAge ;
    let monthAge ;
    let daysAge ;

    if (currentDate.month < birthDate.month){
        yearAge =( currentDate.year - birthDate.year) - 1;
        monthAge = currentDate.month;
        daysAge = Math.abs(currentDate.day - birthDate.day);
    }else{
        yearAge = currentDate.year - birthDate.year
        monthAge = currentDate.month - birthDate.month;
        daysAge = Math.abs(currentDate.day - birthDate.day);
       

    }

    if (currentDate.month == birthDate.month && currentDate.day == birthDate.day){
        alert("Happy BirthDay!! Champ...!🎉")
    }
    
    yearNum.innerText = yearAge;
    monthNum.innerText =monthAge
    daysNum.innerText =daysAge;
    console.log(yearAge);
    console.log(monthAge);
    console.log(daysAge);
}))