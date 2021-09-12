/*
¡La nueva película de "Vengadores" acaba de ser lanzada! Hay mucha gente en la taquilla
del cine en una fila enorme. Cada uno de ellos tiene un solo billete de 100, 50 o 25 dólares.
Un boleto de "Los Vengadores" cuesta 25 dólares.

Vania trabaja actualmente como empleada y ella quiere vender un boleto a cada persona en
la fila.

¿Podrá Vania vender un boleto a cada persona y dar cambio/vuelto si inicialmente no tiene
dinero y vende los boletos estrictamente en el orden de la cola de personas?

Regresa SI, si Vania puede vender un boleto a cada persona y dar cambio/vuelto con el
dinero que tiene a la mano en ese momento. De lo contrario, devuelva NO.
Ejemplo:
tickets([25, 25, 50]) // => SI
tickets([25, 100]) // => NO. Vania no tendra suficiente dinero para dar cambio/vuelto a los
100 dolares
tickets([25, 25, 50, 50, 100]) // => NO. Vania no tendra suficiente dinero para dar 75 dolares
de cambio/vuelto (no puedes crear dos billetes de 25 a partir de un billete de 50)
*/

type bills = 25 | 50 | 100;

const canGiveChange = (bills: bills[]) => {
    let sum = 0;
    const ticketPrice = 25;

    for (const bill of bills) {
        if (bill === ticketPrice) {
            sum += bill;
        } else {
            const totalChange = bill - ticketPrice;
            const subs = sum - totalChange;
            if (subs >= 0) {
                sum -= subs;
            } else {
                return 'NO';
            }
        }
    }
    return 'SÍ';
    
}

const result = canGiveChange([25, 25, 50, 100])
console.log(result);