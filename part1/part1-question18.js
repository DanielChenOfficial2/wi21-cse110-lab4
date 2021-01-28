for (const prop in statistics) {
  if ("r" == `${prop}`.charAt(0) || (statistics[prop] % 2 == 1)) { 
    	console.log(prop);
  }
}
