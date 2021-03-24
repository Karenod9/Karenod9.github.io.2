$(document).ready(function () {
    window.beds = [];
    window.fac = [];
    console.log("ready!");
    setTimeout(() => populateRooms(window.data), 2000)
    pritEvents()
});


const populateRooms = (data, booking) => {
    let html = data.map(room => {
        let checkTv = room.tv ? '<i class="fa fa-check" aria-hidden="true" style="color: green; padding-left: 10px;"></i>' : ' <i class="fa fa-times-circle" aria-hidden="true" style="color: red; padding-left: 10px;"></i>'
        let checkWifi = room.wifi ? '<i class="fa fa-check" aria-hidden="true" style="color: green; padding-left: 10px;"></i>' : ' <i class="fa fa-times-circle" aria-hidden="true" style="color: red; padding-left: 10px;"></i>'
        return `
        <div class="col-sm-${booking ? 12 : 3} animate">
        <div class="card" style="width: 100%;">
            <img class="card-img-top img-fluid"
                src="${room.src}"
                alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${room.roomType}</h5>
                <div class="row">
                    <div class="col-sm-6">
                        <i class="fa fa-television" aria-hidden="true"></i>
                        ${checkTv}
                    </div>
                    <div class="col-sm-6">
                        <i class="fa fa-wifi" aria-hidden="true"></i>
                        ${checkWifi}
                    </div>
                    <div class="col-sm-6">
                        <i class="fa fa-bed" aria-hidden="true"></i>
                        <i  style="padding-left: 10px;"> <b>${room.beds}</b></i>
                    </div>
                    <div class="col-sm-6">
                        <i class="fa fa-bath" aria-hidden="true"></i>
                        <i class="fa fa-check" aria-hidden="true"
                            style="color: green; padding-left: 10px;"></i>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-6">
                       ${booking ? `` : ` <a href="#" class="btn text-left" onclick="makereservation(${room.id})">Book</a>`}
                    </div>
                    <div class="col-sm-6 text-right">
                        <p><b>£${room.price}</b></p>
                    </div>
                </div>

            </div>
        </div>
    </div>`
    })

    if (booking) {
        $('#selected-room').empty();
        $('#selected-room').append(html).hide().slideDown();
    } else {
        $('#room-container').empty();
        $('#room-container').append(html).hide().slideDown();

    }

}


const pritEvents = () => {
    let check_1 = document.querySelectorAll('.checkbox-bed')
    for (let i = 0; i < check_1.length; i++) {
        check_1[i].addEventListener("click", handleFilter)
    }
    let check_2 = document.querySelectorAll('.checkbox-fac')
    for (let i = 0; i < check_1.length; i++) {
        check_2[i].addEventListener("click", handleFilter)
    }
}

function handleFilter() {
    console.log(this)
    let check_1 = document.querySelectorAll('.checkbox-bed')
    let check_2 = document.querySelectorAll('.checkbox-fac')
    for (let i = 0; i < check_1.length; i++) {
        console.log(check_1[i].checked)
        if (check_1[i].value !== this.value) {
            check_1[i].checked = false;
        }
        if (check_2[i].value !== this.value) {
            check_2[i].checked = false;
        }
    }

    const deebClone = JSON.parse(JSON.stringify(window.data))
    console.log(deebClone)
    let output;
    if (this.id === 'checkbox-bed') {
        output = deebClone.filter(room => room.beds === +this.value)
        console.log(output)
    } else {
        output = deebClone.filter(room => room[this.value] === true)
        console.log(output)
    }


    populateRooms(output)
}


function makereservation(room) {
    const selected_room = window.data.filter(item => item.id === room)
    populateRooms(selected_room, true)
    $('#booking-modal').modal('show')
}

var boooking_btn = document.getElementById("make-booking")
boooking_btn.addEventListener("click", function () {
    let name = document.getElementById("name")
    let email = document.getElementById("email")
    let number = document.getElementById("numer-rooms")
    if (name.value && email.value && number.value) {
        let confirmation_template = `
        <div class="row text-center">
        <div class="col">
            <p>
                <i class="fa fa-check-circle fa-3x" style="color: green;"></i>
            </p>
            <p>
                Booking Confirmed
            </p>
        </div>
    </div>`;
        $('#modal-body').empty();
        $('#modal-body').append(confirmation_template).hide().slideDown();
    } else {
        alert("Missing information")
    }
})