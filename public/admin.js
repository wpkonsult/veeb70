console.log('Test test')

document.querySelector('#matkajad').innerHTML = "<div>loen andmeid ... </div>"

//TODO Siin loeme serverist andmeid

function loeMatkaRegistreerumised(matkaIndeks) {
    var settings = {
        async: true,
        crossDomain: true,
        url: '/api/matkajad/' + matkaIndeks,
        method: 'GET',
        headers: {},
    };

    $.ajax(settings).done((response) => {
        console.log(response)
        const matkajadEl = document.querySelector('#matkajad')
        matkajadEl.innerHTML = "<h3> Matkale " + response.nimi + " registreerunud </h3>"
        for (let i = 0; i < response.registreerunud.length; i++) {
            const matkaja = response.registreerunud[i]
            matkajadEl.innerHTML += `
            <div class="matkaja">
                ${matkaja.nimi} ( ${matkaja.email} )
            </div>
            <div class="matkaja-markus">
                ${matkaja.markus || ''}
            </div>
            `
        }
    })
}

function loeMatkadeLoetelu() {
    var settings = {
        async: true,
        crossDomain: true,
        url: '/api/matkad',
        method: 'GET',
        headers: {},
    };

    $.ajax(settings).done((matkad) => {
        const menyyElement = document.querySelector(".navbar-nav")
        menyyElement.innerHTML = ""
        matkad.forEach( (matkaNimi, matkaIndeks) => {
            menyyElement.innerHTML += `
            <li class="nav-item">
                <a class="nav-link" href="#" onclick="loeMatkaRegistreerumised(${matkaIndeks})" >${matkaNimi}</a>
            </li>            
            `
        });

    })
}


loeMatkadeLoetelu()
loeMatkaRegistreerumised(3)
