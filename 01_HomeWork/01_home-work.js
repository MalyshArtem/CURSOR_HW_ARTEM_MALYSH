console.log("Перша домашка")

const lopata = 15.678;   /////// замінив let на const //////
const topor = 123.965;
const kuvalda = 90.2345;

console.log('Максимальна вартість = ' + Math.max(lopata, topor, kuvalda));

console.log('Мінімальна вартість = ' + Math.min(lopata, topor, kuvalda));

let usiTovary = lopata + topor + kuvalda;

console.log('Сумма всіх = ' + usiTovary);

////////////////////////////
//////// округлення ////////

let usiTsiliTovary = Math.floor(lopata) + Math.floor(topor) + Math.floor(kuvalda);   ///// видалив рядки, замінив на уже відомі змінні  ///////

console.log('Сумма всіх цілих = ' + usiTsiliTovary);

console.log('Сумма всіх зменшених = ' + (Math.round(usiTsiliTovary/100))*100 );

///////////////////////////////////
//////// парне чи не парне ////////

console.log(usiTsiliTovary % 2 === 0);  ///// вивів просто true false /////

//////////////////////////////
///////// сума решти /////////

const gotivka = 500;      ///// замінив на let на const ////////

let reshta = (gotivka - usiTovary);   ////// прибрав Math.abs /////

console.log('Решта буде ' + reshta);


///////////////////////////////////////////
/////////// середнє арифметичне ///////////

let middlePrice = +(usiTovary / 3).toFixed(2)     ///// точно перетворив на число

console.log('Середня ціна - ' + middlePrice);


////////////////////////////////////////////
////////////////// знижка //////////////////

const znyzhka = Math.floor(Math.random() * 101);  //чому 101 а не 100 - тому що - *100 - виводить від 0 до 100, а *101 - від 1 до 100.
console.log('Знижка - ' + znyzhka);

const sobivartist = (usiTovary - (usiTovary*znyzhka/100).toFixed(2));   ///// виправив обрахунок

console.log('Собівартість - ' + sobivartist);

const prybutok = Math.round(usiTovary / 2 - (usiTovary * znyzhka / 100)) ;  ///// виправив обрахунок
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
