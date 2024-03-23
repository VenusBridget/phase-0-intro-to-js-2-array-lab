// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"]

function Arrayfunctions(){
    cats.length = 0
cats.push('Milo', 'Otis', 'Garfield')}

function destructivelyAppendCat(Ralph){
    cats.push(Ralph);
    return cats;
}

function destructivelyPrependCat(Bob){
    cats.unshift(Bob);
    return cats;
}

function destructivelyRemoveLastCat(Garfield){
    cats.pop(Garfield);
    return cats;
}

function destructivelyRemoveFirstCat(){
    cats.shift();
    return cats;
}

function appendCat(Broom){
    let allcats= [...cats, "Broom"]
    return allcats;
}

function prependCat(Arnold){
    let allcats2 = [Arnold, ...cats];
    return allcats2;
}

function removeLastCat(Garfield){
    let caats= cats.slice(0,cats.length- 1);
    return caats;
}

function removeFirstCat(){
    let caats2=cats.slice(1);
    return caats2;
}