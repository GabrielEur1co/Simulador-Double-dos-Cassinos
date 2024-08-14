const contain = [];

async function rollColor() {
  const number = Math.random() * 1;
  return number.toFixed(2);
}

async function programEngine() {
  for (let i = 1; i <= 100; i++) {
    const color = await rollColor();

    setTimeout(() => {

        console.log(`======     RODADA DE NUMERO ${i}     ====== \n`)
      if (color < 0.65) {
        contain.push(`🔴`);

        console.log(`${contain.join(' ')} \n`);
      } else if (color > 0.68) {
        contain.push(`⚫`);

        console.log(`${contain.join(' ')} \n`);
      } else {
        contain.push(`⚪`);

        console.log(`${contain.join(' ')} \n`);
      }

      if (contain.length > 13) {
        contain.shift();
      }

      let lastElementContain = contain.slice(-1)[0];

      
      console.log(`A cor da ultima rodada foi: ${lastElementContain}`);
      console.log(`------ Proxima rodada em 5 sec. ------ \n` );
    }, i * 5000);
  }
}

(async function main() {
  await programEngine();
})();
