//var cad = (str) => {
    class Text{
        constructor(str){
            this.str = str;
        }
        chars(){ //Número de caracteres
            let re = new RegExp(/[a-z]+/gi);
            if(!re.test(this.str))
                return 0;            
            else
                return this.str.length;            
        }
        words(){ //Cantidad de palabras
            let re = /\w+\s/g; //Busca letras y seguido espacios en blanco en toda la cadena.
            if(this.str.match(re)){
                let vector = this.str.match(re);
                return vector.length + 1;
            } 
            else{
                if(this.chars() > 0)
                    return 1; 
                else
                    return 0;
            }                
        }
        sentences(){ //Oraciones entre punto y punto
            let re = /[\.]+/g; //Busca letras y seguido espacios en blanco en toda la cadena.
            let dot = false;
            let dots = 0;
            let vec = this.str.split("");
            let sentences = 0;
           
            for(let k = 0; k < vec.length; k++){ //Obtener número de puntos
                if(vec[k]==='.')
                    dots++;
            }
           
            if(dots == 1)
                return 1;
            else if(this.chars() > 0){
                sentences = 1;
                for(let i = 0; i < vec.length; i++){
                    if(vec[i] === '.' && !dot){
                        sentences++;
                        dot = true;
                    }                    
                    else if((vec[i] >= 'a' && vec[i] <= 'z'))
                        dot = false;
                    }
                return sentences;
            }
        }
        paragraphs(){ //Cada dos saltos de línea
            let vec = this.str.split("\n\n");
            return vec.length;
        }
    }

    function getVal(){
        v = new Text(document.getElementById('textarea').value);
        document.getElementById('caracteres').value = v.chars();
        document.getElementById('palabras').value = v.words();
        document.getElementById('sentences').value = v.sentences();
        document.getElementById('parrafos').value = v.paragraphs();

    }
//}