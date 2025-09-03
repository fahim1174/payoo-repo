document.getElementById('btn-log')
    .addEventListener('click', function (e) {
        e.preventDefault()
        mNumber = 01903431174;
        mpin = 1234

        const mobileNumber = document.getElementById('inp-number').value;
        const convertmobileNumber = parseInt(mobileNumber);

        const pinNumber = document.getElementById('inp-pin').value;
        const convertpin = parseInt(pinNumber)

        console.log(convertmobileNumber, convertpin)

        if (convertmobileNumber === mNumber && convertpin === mpin) {
            window.location.href = "./home.html"
        }
        else {
            alert('wrong number or pin')
        }
    })