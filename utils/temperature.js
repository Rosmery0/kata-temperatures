const TemperatureScale = {
    Kelvin : "K",
    Celcius : "C",
    Fahrenheit : "F"
}
result = 0;
class Temperature{
    constructor(number, scale){
        if(scale != TemperatureScale.Kelvin && scale != TemperatureScale.Celcius && scale != TemperatureScale.Fahrenheit){
            throw new Error("Must be TemperatureScale");
        } else if(scale == TemperatureScale.Kelvin && number <= 0){
            throw new Error ("Kelvin cant be zero or less");
        } else{
            this.number = number;
            this.scale = scale;
        }
        
    }

    Add(temperature = new Temperature()){
        if(this.scale == temperature.scale){
            return new Temperature(this.number + temperature.number, this.scale);            
        } else if(this.scale == TemperatureScale.Kelvin){
            return new Temperature(this.number + temperature.ToKelvin().number, this.scale);
        } else if(this.scale == TemperatureScale.Celcius){
            return new Temperature(this.number + temperature.ToCelcius().number, this.scale);
        }else if(this.scale == TemperatureScale.Fahrenheit){
            return new Temperature(this.number + temperature.ToFahrenheit().number, this.scale);
        }else {
            return new Temperature(this.number + temperature.number, this.scale);
        }
    }

    Substract(temperature = new Temperature()){
        if(this.scale == temperature.scale){
            return new Temperature(this.number - temperature.number, this.scale);            
        } else if(this.scale == TemperatureScale.Kelvin){
            return new Temperature(this.number - temperature.ToKelvin().number, this.scale);
        } else if(this.scale == TemperatureScale.Celcius){
            return new Temperature(this.number - temperature.ToCelcius().number, this.scale);
        }else if(this.scale == TemperatureScale.Fahrenheit){
            return new Temperature(this.number - temperature.ToFahrenheit().number, this.scale);
        }else {
            return new Temperature(this.number - temperature.number, this.scale);
        }        
    }

    MultiplyBy(temperature = new Temperature){
        if(this.scale == temperature.scale){
            return new Temperature(this.number * temperature.number, this.scale);            
        } else if(this.scale == TemperatureScale.Kelvin){
            return new Temperature(this.number * temperature.ToKelvin().number, this.scale);
        } else if(this.scale == TemperatureScale.Celcius){
            return new Temperature(this.number * temperature.ToCelcius().number, this.scale);
        }else if(this.scale == TemperatureScale.Fahrenheit){
            return new Temperature(this.number * temperature.ToFahrenheit().number, this.scale);
        } else {
            return new Temperature(this.number * temperature.number, this.scale);
        }  
    }

    DivideBy(temperature = new Temperature){
        if(this.scale == temperature.scale){
            return new Temperature(this.number / temperature.number, this.scale);            
        } else if(this.scale == TemperatureScale.Kelvin){
            return new Temperature(this.number / temperature.ToKelvin().number, this.scale);
        } else if(this.scale == TemperatureScale.Celcius){
            return new Temperature(this.number / temperature.ToCelcius().number, this.scale);
        }else if(this.scale == TemperatureScale.Fahrenheit){
            return new Temperature(this.number / temperature.ToFahrenheit().number, this.scale);
        } else {
            return new Temperature(this.number / temperature.number, this.scale);
        }  
    }

    ToFahrenheit(){
        if(this.scale == TemperatureScale.Kelvin){
            return new Temperature(1.8 * (this.number - 273) + 32, TemperatureScale.Fahrenheit);
        } else if(this.scale == TemperatureScale.Celcius){
            return new Temperature((this.number * 1.8) + 32, TemperatureScale.Fahrenheit);
        } else {
            return this;
        }
    }
    ToCelcius(){
        if(this.scale == TemperatureScale.Fahrenheit){
            return new Temperature(((this.number-32)*5)/9, TemperatureScale.Celcius);
        } else if(this.scale == TemperatureScale.Kelvin){
            return new Temperature(this.number - 273.15, TemperatureScale.Celcius);
        } else {
            return this;
        }
    }
    ToKelvin(){
        if(this.scale == TemperatureScale.Fahrenheit){
            return new Temperature(((this.number-32)*5)/9, TemperatureScale.Kelvin);
        } else if(this.scale == TemperatureScale.Celcius){
            return new Temperature(((this.number - 32) / 1.8) + 273.15, TemperatureScale.Kelvin);
        } else {
            return this;
        }
    }
    ToString(){
        return `${this.number}${this.scale}`;
    }

}

t1 = new Temperature(30, TemperatureScale.Celcius);
t2 = new Temperature(50, TemperatureScale.Fahrenheit);
console.log(t1.Add(t2B));