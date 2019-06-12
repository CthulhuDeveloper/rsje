class Fecha{
    constructor(dia, mes, anio){
        if(typeof dia === 'number' && typeof mes === 'number' && typeof anio === 'number'){
            this._dia = dia;
            this._mes = mes;
            this._anio = anio;
        }  
        else{
            throw new Error('invalid data type');  
        }            
    }
    incrementarDia(){
        if(this._dia === 31 && this._mes === 12){
            this._anio++;
        }

        if(this._mes === 12){
            this._mes = 1;
        }
        else if(this._dia === 31)
            this._mes++;

        if(this._dia === 31){
            this._dia = 1;
        }else{
            this._dia++;
        }        
    }
    toString(){
        return this._dia + ' - ' + this._mes + ' - ' + this._anio;
    }

    getDia(){return this._dia}
    getMes(){return this._mes}
    getAnio(){return this._anio}

    setDia(dia){
        if(typeof dia === 'number')
            this._dia = dia;
        else
            console.log('invalid data type');
    }
    setMes(mes){
        if(typeof mes === 'number')
        this._mes = mes;
    else
        console.log('invalid data type');
    }
    setAnio(anio){
        if(typeof anio === 'number')
            this._anio = anio;
        else
            console.log('invalid data type');
    }
}

