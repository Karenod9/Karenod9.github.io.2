// FORM INPUTS VALIDATION //

function validateForm() {
    var x = document.getElementById('form');
    if (x.checkValidity() === false) {
        event.preventDefault();
    }
    form.classList.add("was-validated");
}

// GOOGLE MAP SETTINGS //

function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(53.34883499022233, -6.2430710882543705),
        zoom: 17,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

// TEXT INPUT TRANSFORM //

function capFirst(someId) {
    var x = document.getElementById(someId);
    var strArr = x.value.split(' ');
    for (var i = 0; i < strArr.length; i++) {
        strArr[i] = strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1).toLowerCase();
    }
    x.value = strArr.join(' ');
}

// EMAIL INPUT TRANSFORM //

function emailLow() {
    var x = document.getElementById("email");
    x.value = x.value.toLowerCase();
}

