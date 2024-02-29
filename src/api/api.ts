export function retirar(monto: number): number[] {
    let billetes = [10000, 20000, 50000, 100000]
    var total = [0, 0, 0, 0]

    for (var i = 0; monto > 0; i++) {
        if (i == 4) i = 0
        for (var j = i; j < 4; j++) {

            if (monto - billetes[j] >= 0) {
                monto = monto - billetes[j]
                total[j] = total[j] + 1;

            }

        }
    }
    return total;
};