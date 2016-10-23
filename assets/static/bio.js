//
// HELPERS
//

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

function listToPhrase(list) {
    if (list.length < 2) {
       var link = '';
    } else if (list.length == 2){
       var link = ' and ';
    } else {
        var link = ', and '
    }
    return [list.slice(0, -1).join(', '), list.slice(-1)[0]].join(link)
}

//
// BIO GENERATORS
//

function builtSomething(person) {
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
    var list = [
        getRandomElement(language) + " script",
        shuffled[0],
        shuffled[1]
    ]

    return person + " once built a working " +
          getRandomElement(built) + " using only a " +
          listToPhrase(list) + "."
    ;

}

function aFewPhrases(type, count, person) {
    var likes = [
        'loves',
        'enjoys',
        'is into',
        'digs'
    ];

    var hobbies = [
        'orienteering',
        'splunking',
        'making lutefisk',
        'renovating motorhomes',
        'eating cheese',
        'writing bogus git tutorials (mwahaha)',
        'microwaving random stuff',
        'making marshmallow sculptures',
        'ironing ties',
        'hunting down broad-leaved weeds',
        'jaywalking in the rain',
        'finding poetry in the wild',
        'indiscriminately firing supersoakers',
        'cleaning grout',
        'climbing up the slide',
        'folding clean towels',
        'skeet skating',
        'fishing for carp'
    ];

    var identities = [
        'a peanut enthusiast',
        'an amateur hanglider',
        'an ex-con',
        'a mathematician',
        'former class president',
        'an Olympic curler',
        'a volunteer zookeeper',
        'an award-winning zither player',
        'a wainwright',
        'a sock enthusiast',
        'an infamous sneak',
        'a haberdasher',
        'a former seltzer artist',
        'an award-winning monkey trainer',
        'a big fan of sheep',
        'a rockstar tax analyst',
        'an arachnophobe',
        'a determined solitaire player',
        'a reckless driver',
        'a proponent of tart citrus',
        'a big fan of ardvarks',
        'a refactoring machine',
        'a universal maven',
        'a knot-loosening specialist',
    ];

    if(type == 'identities'){
       var shuffled = shuffle(identities);
       var verb = "is";
   } else {
       var shuffled = shuffle(hobbies);
       var verb = getRandomElement(likes);
   }

    var list = shuffled.slice(0,count)

    return person + " " + verb + " " + listToPhrase(list) + ".";

}

//
// Assembled Bios
//

function builder(bio) {
    return document.createTextNode(
        aFewPhrases("identities", 2, bio.dataset.name) +
        " " +
        builtSomething(bio.dataset.pronoun)
    )
}

function hobbies(bio) {
    return document.createTextNode(
        aFewPhrases("identities", 3, bio.dataset.name) +
        " " +
        aFewPhrases("hobbies", 2, bio.dataset.pronoun)
    )
}

//
// DOM Manipulation
//

window.onload = function () {
    var bioOptions = [
        builder,
        hobbies
    ]

    var bios = document.getElementsByClassName("bio");
    for (var index in bios) {
        if (!bios.hasOwnProperty(index)) {
            continue;
        }
        var bio = bios[index];
        var bioType = getRandomElement(bioOptions)
        bio.appendChild(bioType(bio));
    }
}

