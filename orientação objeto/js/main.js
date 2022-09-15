

let a1 = new automovel(new motorfeizer(), "Feizer", "Yamaha", "1988");
let a2 = new automovel(new motorS1000(), "S1000", "BMW", "2011");

document.write(a1.marca + " Feizer " + a1.nome + ": " + a1.acelerar() + "<br />");
document.write(a2.marca + " S1000 " + a2.nome + ": " + a2.acelerar() + "<br />");