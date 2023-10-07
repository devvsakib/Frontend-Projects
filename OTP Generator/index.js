function otpGenerate() {
    let optShow = document.getElementById("otp");
    let digits = "0123456789";
    let otp = '';

//Generate 4 digit otp
for (let i = 0; i < 4; i++) {
    otp += digits[Math.floor(Math.random() * 10)];
}

//To display loader
optShow.innerHTML = '<span></span>';

//Display OTP after 1 second 
setTimeout(() => {
    optShow.innerHTML = otp;
}, 1000); 
}
