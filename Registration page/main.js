function store() {
    var inputFName = document.getElementById('fname');
    var inputLName = document.getElementById('lname');
    var inputEmail = document.getElementById('email');
    var inputNumber = document.getElementById('number');
    var inputDate = document.getElementById('date');
    localStorage.setItem('fname',inputFName.value)
    localStorage.setItem('lname',inputLName.value)
    localStorage.setItem('email',inputEmail.value)
    localStorage.setItem('number',inputNumber.value)
    localStorage.setItem('date',inputDate.value)
}

window.addEventListener('load',()=>{
    document.getElementById('displayFName').innerHTML = localStorage.fname;
    document.getElementById('displayLName').innerHTML = localStorage.lname;
    document.getElementById('displayEmail').innerHTML = localStorage.email;
    document.getElementById('displayNumber').innerHTML = localStorage.number;
    document.getElementById('displayDate').innerHTML = localStorage.date;
    
})