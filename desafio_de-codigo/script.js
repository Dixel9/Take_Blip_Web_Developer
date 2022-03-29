function run(array) {
  
    let lines = array.split(',');
    
    const [precoAlcool, precoGasolina, rendimentoAlcool, rendimentoGasolina] = 
      lines[0].split(' ').map(x => parseFloat(x));
    
    const precoPorKmAlcool =  precoAlcool / rendimentoAlcool;
    const precoPorKmGasolina =  precoGasolina / rendimentoGasolina;
    
    const maisEconomico = precoPorKmGasolina <= precoPorKmAlcool ? 'G' : 'A';
        
    print(maisEconomico);
    
    }

    const array = ["1.20", "2.30", "10.00", "15.00"];

    
console.log(maisEconomico);