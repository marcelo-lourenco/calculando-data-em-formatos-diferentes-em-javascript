
var finalDaVigencia = "06/07/2021";
var dataCalculoReq = "2020-11-20T20:19:05.874Z";

dataCalculoReq = dataCalculoReq.substring(0, 10);


dtFim = finalDaVigencia.split("/").reverse().join("/"); // de: aaaa/mm/dddd - para: dd/mm/aaaa
dtIni = dataCalculoReq.replace("-", '/');

                    
console.log(dtFim); // 21/07/2021
										
console.log(dtIni); // 20/11/2020
                    
FqtdDias(dtIni, dtFim);
                
function FqtdDias(dtIni, dtFim) {

    const ini = new Date(dtIni); // data início
    const fim = new Date(dtFim); // data fim 
    const diff = Math.abs(fim.getTime() - ini.getTime()); // Subtrai uma data pela outra
    const dias = Math.ceil(diff / (1000 * 60 * 60 * 24)); // Divide o total pelo total de milisegundos correspondentes a 1 dia. (1000 milisegundos = 1 segundo)
    console.log(dias);
    return Math.round(dias);
}
