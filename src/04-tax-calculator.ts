import * as _ from "lodash";

class TaxCalculator {

    /**
     * incoming: 0    1500 4500
     * ----------+----+----+---
     * tax:     0|0.03|0.1 |0.2
     */
    public calculate(incoming: number): number {
        if (incoming <= 0) {
            return 0;
        }
        if (incoming > 0 && incoming <= 1500) {
            return _.floor(incoming * 0.03, 2);
        }
        if (incoming > 1500 && incoming <= 4500) {
            return _.floor(incoming * 0.1, 2);
        }
        if (incoming > 4500) {
            return _.floor(incoming * 0.2, 2);
        }
        return NaN;
    }

}

export { TaxCalculator };