console.log("Перша домашка")

let lopata = 15.678;
let topor = 123.965;
let kuvalda = 90.2345;

console.log('Максимальна вартість = ' + Math.max(lopata, topor, kuvalda));

console.log('Мінімальна вартість = ' + Math.min(lopata, topor, kuvalda));

let usiTovary = lopata + topor + kuvalda;

console.log('Сумма всіх = ' + usiTovary);

////////////////////////////
//////// округлення ////////

let newLopata = Math.floor(lopata);
let newTopor = Math.floor(topor);
let newKuvalda = Math.floor(kuvalda);

let usiTsiliTovary = newLopata + newTopor + newKuvalda;

console.log('Сумма всіх цілих = ' + usiTsiliTovary);

console.log('Сумма всіх зменшених = ' + (Math.round(usiTsiliTovary/100))*100 );

///////////////////////////////////
//////// парне чи не парне ////////

if (usiTsiliTovary % 2 === 0) {
    console.log("Є парним");
}
else
{
    console.log("Не є парним");
}


//////////////////////////////
///////// сума решти /////////

let gotivka = 500;

let reshta = Math.abs(usiTovary - gotivka);

console.log('Решта буде ' + reshta + " грн");


///////////////////////////////////////////
/////////// середнє арифметичне ///////////

let middlePrice = (usiTovary / 3).toFixed(2)

console.log('Середня ціна - ' + middlePrice);


////////////////////////////////////////////
////////////////// знижка //////////////////

let znyzhka = Math.floor(Math.random() * 101);  //чому 101 а не 100 - тому що - *100 - виводить від 0 до 100, а *101 - від 1 до 100.
console.log('Знижка - ' + znyzhka);

let sobivartist = usiTovary - znyzhka;

console.log('Собівартість - ' + sobivartist.toFixed(2));

let prybutok = usiTovary / 2 - znyzhka;
console.log('Прибуток - ' + prybutok);


///////////    Advanced     ///////////
/////////// шаблонний рядок ///////////

console.log(
    ('Максимальна вартість = ' + Math.max(lopata, topor, kuvalda)), ('Мінімальна вартість = ' + Math.min(lopata, topor, kuvalda)),
    ('Сумма всіх = ' + usiTovary),
    ('Сумма всіх цілих = ' + usiTsiliTovary),
    ('Сумма всіх зменшених = ' + (Math.round(usiTsiliTovary/100))*100 ), ('Решта буде ' + reshta + ' грн'),
    ('Середня ціна - ' + middlePrice),
    ('Знижка - ' + znyzhka),
    ('Собівартість - ' + sobivartist.toFixed(2)),
    ('Прибуток - ' + prybutok));
