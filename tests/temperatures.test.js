const temperature = require('../utils/temperature');

describe('Add', ()=>{
    test("When 25C + 18C should be 43C", () => {
        const t1 = new Temperature(25, TemperatureScale.Celcius);
        const t2 = new Temperature(18, TemperatureScale.Celcius);
        expect(t1.Add(t2)).toBe(Temperature(43, TemperatureScale.Celcius));
    }),
    test("When 30C + 50F should be 40C", () => {
        const t1 = new Temperature(30, TemperatureScale.Celcius);
        const t2 = new Temperature(50, TemperatureScale.Fahrenheit);
        expect(t1.Add(t2)).toEqual(Temperature(40, TemperatureScale.Celcius));
    }),
    test("When 30C + 50K should be -193.14999999999998C", () => {
        const t1 = new Temperature(30, TemperatureScale.Celcius);
        const t2 = new Temperature(50, TemperatureScale.Fahrenheit);
        expect(t1.Add(t2)).toEqual(Temperature(-193.14999999999998, TemperatureScale.Celcius));
    }),
    test("When 30F + 50F should be 80F", () => {
        const t1 = new Temperature(30, TemperatureScale.Fahrenheit);
        const t2 = new Temperature(50, TemperatureScale.Celcius);
        expect(t1.Add(t2)).toBe(Temperature(80, TemperatureScale.Fahrenheit));
    }),
    test("When 30F + 50C should be 152F", () => {
        const t1 = new Temperature(30, TemperatureScale.Fahrenheit);
        const t2 = new Temperature(50, TemperatureScale.Celcius);
        expect(t1.Add(t2)).toEqual(Temperature(152, TemperatureScale.Fahrenheit));
    }),
    test("When 30F + 50K should be -339.40000000000003F", () => {
        const t1 = new Temperature(30, TemperatureScale.Fahrenheit);
        const t2 = new Temperature(50, TemperatureScale.Kelvin);
        expect(t1.Add(t2)).toEqual(Temperature(-339.40000000000003, TemperatureScale.Fahrenheit));
    }),
    test("When 30K + 50K should be 80K", () => {
        const t1 = new Temperature(25, TemperatureScale.Kelvin);
        const t2 = new Temperature(18, TemperatureScale.Kelvin);
        expect(t1.Add(t2)).toBe(Temperature(80, TemperatureScale.Kelvin));
    }),
    test("When 30K + 50F should be 40K", () => {
        const t1 = new Temperature(30, TemperatureScale.Kelvin);
        const t2 = new Temperature(50, TemperatureScale.Fahrenheit);
        expect(t1.Add(t2)).toEqual(Temperature(40, TemperatureScale.Kelvin));
    }),
    test("When 30K + 50C should be 313.15K", () => {
        const t1 = new Temperature(30, TemperatureScale.Kelvin);
        const t2 = new Temperature(50, TemperatureScale.Celcius);
        expect(t1.Add(t2)).toEqual(Temperature(313.15, TemperatureScale.Kelvin));
    })
});

describe('substract', ()=>{
    test("When 30C - 50F should be 20C", () => {
        const t1 = new Temperature(30, TemperatureScale.Celcius);
        const t2 = new Temperature(50, TemperatureScale.Fahrenheit);
        expect(t1.Add(t2)).toBe(Temperature(20, TemperatureScale.Celcius));
    }),
    test("When 30C - 50C should be 80C", () => {
        const t1 = new Temperature(30, TemperatureScale.Celcius);
        const t2 = new Temperature(50, TemperatureScale.Celcius);
        expect(t1.Add(t2)).toEqual(Temperature(20, TemperatureScale.Celcius));
    }),
    test("When 30C - 50K should be 253.14999999999998C", () => {
        const t1 = new Temperature(30, TemperatureScale.Celcius);
        const t2 = new Temperature(50, TemperatureScale.Kelvin);
        expect(t1.Add(t2)).toEqual(Temperature(253.14999999999998, TemperatureScale.Celcius));
    }),
    test("When 30F - 50F should be -20F", () => {
        const t1 = new Temperature(30, TemperatureScale.Fahrenheit);
        const t2 = new Temperature(50, TemperatureScale.Fahrenheit);
        expect(t1.Add(t2)).toBe(Temperature(-20, TemperatureScale.Fahrenheit));
    }),
    test("When 30F - 50C should be -92F", () => {
        const t1 = new Temperature(30, TemperatureScale.Fahrenheit);
        const t2 = new Temperature(50, TemperatureScale.Celcius);
        expect(t1.Add(t2)).toEqual(Temperature(-92, TemperatureScale.Fahrenheit));
    }),
    test("When 30F - 50K should be 399.40000000000003F", () => {
        const t1 = new Temperature(30, TemperatureScale.Fahrenheit);
        const t2 = new Temperature(50, TemperatureScale.Kelvin);
        expect(t1.Add(t2)).toEqual(Temperature(399.40000000000003, TemperatureScale.Fahrenheit));
    }),
    test("When 30K - 50K should throw an error with de message 'Kelvin cant be zero or less'", () => {
        const t1 = new Temperature(30, TemperatureScale.Kelvin);
        const t2 = new Temperature(50, TemperatureScale.Kelvin);
        expect(t1.Add(t2)).toBe(Error ("Kelvin cant be zero or less"));
    }),
    test("When 30k - 50F should be 20K", () => {
        const t1 = new Temperature(30, TemperatureScale.Kelvin);
        const t2 = new Temperature(50, TemperatureScale.Fahrenheit);
        expect(t1.Add(t2)).toEqual(Temperature(20, TemperatureScale.Kelvin));
    }),
    test("When 30K - 50C should throw an error with de message 'Kelvin cant be zero or less'", () => {
        const t1 = new Temperature(30, TemperatureScale.Kelvin);
        const t2 = new Temperature(50, TemperatureScale.Celcius);
        expect(t1.Add(t2)).toEqual(Error("Kelvin cant be zero or less"));
    })
});

describe('multiplyBy', ()=>{
    test("When 30C * 50F should be 300C", () => {
        const t1 = new Temperature(30, TemperatureScale.Celcius);
        const t2 = new Temperature(50, TemperatureScale.Fahrenheit);
        expect(t1.Add(t2)).toBe(Temperature(300, TemperatureScale.Celcius));
    }),
    test("When 30C * 50C should be 1500C", () => {
        const t1 = new Temperature(30, TemperatureScale.Celcius);
        const t2 = new Temperature(50, TemperatureScale.Celcius);
        expect(t1.Add(t2)).toEqual(Temperature(1500, TemperatureScale.Celcius));
    }),
    test("When 30C * 50K should be -6694.499999999999C", () => {
        const t1 = new Temperature(30, TemperatureScale.Celcius);
        const t2 = new Temperature(50, TemperatureScale.Kelvin);
        expect(t1.Add(t2)).toEqual(Temperature(-6694.499999999999, TemperatureScale.Celcius));
    }),
    test("When 30F * 50F should be 1500F", () => {
        const t1 = new Temperature(30, TemperatureScale.Fahrenheit);
        const t2 = new Temperature(50, TemperatureScale.Fahrenheit);
        expect(t1.Add(t2)).toBe(Temperature(1500, TemperatureScale.Fahrenheit));
    }),
    test("When 30F * 50C should be 3660F", () => {
        const t1 = new Temperature(30, TemperatureScale.Fahrenheit);
        const t2 = new Temperature(50, TemperatureScale.Celcius);
        expect(t1.Add(t2)).toEqual(Temperature(3660, TemperatureScale.Fahrenheit));
    }),
    test("When 30F * 50K should be -11082.000000000002F", () => {
        const t1 = new Temperature(30, TemperatureScale.Fahrenheit);
        const t2 = new Temperature(50, TemperatureScale.Kelvin);
        expect(t1.Add(t2)).toEqual(Temperature(-11082.000000000002, TemperatureScale.Fahrenheit));
    }),
    test("When 30K * 50K should be 1500K", () => {
        const t1 = new Temperature(30, TemperatureScale.Kelvin);
        const t2 = new Temperature(50, TemperatureScale.Kelvin);
        expect(t1.Add(t2)).toBe(Temperature(1500, TemperatureScale.Kelvin));
    }),
    test("When 30k - 50F should be 20K", () => {
        const t1 = new Temperature(30, TemperatureScale.Kelvin);
        const t2 = new Temperature(50, TemperatureScale.Fahrenheit);
        expect(t1.Add(t2)).toEqual(Temperature(20, TemperatureScale.Kelvin));
    }),
    test("When 30K - 50C should throw an error with de message 'Kelvin cant be zero or less'", () => {
        const t1 = new Temperature(30, TemperatureScale.Kelvin);
        const t2 = new Temperature(50, TemperatureScale.Celcius);
        expect(t1.Add(t2)).toEqual(Error("Kelvin cant be zero or less"));
    })
});