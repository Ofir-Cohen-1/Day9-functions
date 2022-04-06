function percentageOfWorld1(country){
    let percent = (country/worldPopulation) * 100;
    return `${percent.toPrecision(3)}%`;
}

const percentageOfWorld2 = (country) =>{
    let percent = (country/worldPopulation) * 100;
    return `${percent.toPrecision(3)}%`;
}

worldPopulation = 7900000000;
let israel = 9000000;
let china = 1441000000;
let italy = 60000000;

let call1 = percentageOfWorld1(china);
console.log(`China has ${call1} of the world's population`);

let call2 = percentageOfWorld1(israel);
console.log(`Israel has ${call2} of the world's population`);

let call3 = percentageOfWorld1(italy);
console.log(`Italy has ${call3} of the world's population`);


let call4 = percentageOfWorld2(china);
console.log(`China has ${call4} of the world's population`);

let call5 = percentageOfWorld2(israel);
console.log(`Israel has ${call5} of the world's population`);

let call6 = percentageOfWorld2(italy);
console.log(`Italy has ${call6} of the world's population`);