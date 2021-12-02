var cities = {
    tehran: ['Tehran', 'Shahryar', 'rudehen', 'bumehen'],
    shiraz: ['shiraz', 'fars', 'jamshid', 'shiraz pars'],
    mashhad: ['Mashhad', 'Fariman', 'Guchan'],
    tabriz: ['Tabriz', 'Marand', 'Jolfa', 'Ahar'],
}

var startProvins = prompt('enter the provins')

var mainProvinceCities = (cities[startProvins])
// console.log(cities[startProvins])

mainProvinceCities.forEach(function(city) {
    console.log(city)
})