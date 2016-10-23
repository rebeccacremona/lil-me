
function shuffle(array) {
  //
  // courtesy of http://stackoverflow.com/a/2450976
  //
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function getRandomElement(list) {
    return list[Math.floor(Math.random() * list.length)];
}

function builtSomething(nickname) {
    var language = [
        'Pearl',
        'Python',
        'Pascal',
        'Jaskell'

    ]

    var built = [
        'webserver',
        'ATM',
        'reed organ',
        'toaster oven',
        'wireless access point'
    ]

    var components = [
        'a paperclip',
        'a bottle of mouthwash',
        'a funnel',
        'an abacus',
        'an allen wrench',
        'a coffee press',
        'a slinky',
        'a pocketwatch',
        'an otoscope',
        'a fountain pen',
        'a lava lamp',
        'a siphon pump',
        'an abandonded carburetor'
    ];

    var shuffled = shuffle(components);

    return document.createTextNode(nickname +
                                   " once built a working " +
                                   getRandomElement(built) +
                                   " using only a " +
                                   getRandomElement(language) +
                                   " script, " + shuffled[0] +
                                   ", and " + shuffled[1] + ".");

}

window.onload = function () {
    var bios = document.getElementsByClassName("bio");
    for (var index in bios) {
        if (!bios.hasOwnProperty(index)) {
            continue;
        }
        var bio = bios[index];
        bio.appendChild(builtSomething(bio.dataset.name));
    }
}

