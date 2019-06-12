var sroot = (a) => {
    for (var i = 0; i * i <= a; i++) {
        if (i * i === a)
            return i;
    }
   return a;    
};