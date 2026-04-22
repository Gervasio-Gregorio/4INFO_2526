class Poligono {
   constructor(l){
      this.lungezza = l
   }
}

class TriangoloEquilatero extends Poligono {
   numero_lati = 3
   constructor(l){
      super(l)
   }

   area(){
      return (this.lungezza**2)/2
   }

   perimetro(){
      return this.lungezza * this.numero_lati
   }
}

class Quadrato extends Poligono {
   numero_lati = 4
   constructor(l){
      super(l)
   }

   area(){
      return this.lungezza**2
   }

   perimetro(){
      return this.lungezza * this.numero_lati
   }
}

class Pentagono extends Poligono {
   numero_lati = 5
   constructor(l){
      super(l)
   }

   area(){
      return (Math.sqrt(5 * (5 + 2 * Math.sqrt(5))) * this.lungezza**2)/4
   }

   perimetro(){
      return this.lungezza * this.numero_lati
   }
}

class Esagono extends Poligono {
   numero_lati = 6
   constructor(l){
      super(l)
   }

   area(){
      return (3 * Math.sqrt(3) / 2) * Math.pow(this.lungezza, 2)
   }

   perimetro(){
      return this.lungezza * this.numero_lati
   }
}

class Ettagono extends Poligono {
   numero_lati = 7
   constructor(l){
      super(l)
   }

   area(){
      return (7/4) * Math.pow(this.lungezza, 2) * (1 / Math.tan(Math.PI / 7))
   }

   perimetro(){
      return this.lungezza * this.numero_lati
   }
}

class Ottagono extends Poligono {
   numero_lati = 8
   constructor(l){
      super(l)
   }

   area(){
      return 2 * (1 + Math.sqrt(2)) * Math.pow(this.lungezza, 2)
   }

   perimetro(){
      return this.lungezza * this.numero_lati
   }
}

function main() {
   const triangolo = new TriangoloEquilatero(15)
   const pentagono = new Pentagono(21)
   const esagono = new Esagono(18)
   const ettagono = new Ettagono(9)
   const ottagono = new Ottagono(12)

   console.log("Triangolo area:", triangolo.area())
   console.log("Pentagono area:", pentagono.area())
   console.log("Esagono area:", esagono.area())
   console.log("Ettagono area:", ettagono.area())
   console.log("Ottagono area:", ottagono.area())
}

main()