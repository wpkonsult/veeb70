console.log('Test test')

document.querySelector('#matkajad').innerHTML = "<div>loen andmeid ... </div>"

//TODO Siin loeme serverist andmeid

var settings = {
    async: true,
    crossDomain: true,
    url: '/api/matkajad/2',
    method: 'GET',
    headers: {},
};

$.ajax(settings).done((response) => {
    console.log(response)
    const matkajadEl = document.querySelector('#matkajad')
    matkajadEl.innerHTML = "<h2> Matkale " + response.nimi + " registreerunud </h2>"
    for (let i = 0; i < response.registreerunud.length; i++) {
        matkajadEl.innerHTML += "<div>" + response.registreerunud[i].nimi + "</div>"
    }
})
