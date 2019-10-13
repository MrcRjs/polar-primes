function setup() {
	  createCanvas(1000, 1000);
	  background(0);
	  translate(width / 2, height / 2);

	  colorMode(HSB, 100);

	  sieve(1000000).forEach((p,i) => {
		      let point = getCartesian(p, p);
		      ellipseMode(CENTER);
		      noStroke();
		      fill(
			            map(noise(i/10000),0,1,0,100),
			            80,
			            100)
		      ellipse(point.x/300, point.y/300, 1, 1);
		    });
}

function getCartesian(r,theta) {
	  let x = r * cos(theta);
	  let y = r * sin(theta);
	  return {x,y};
}

function sieve(limit) {
	 
	  var bools = [];
	  var primes = [];

	  for (let i = 1; i < limit; i++) { bools.push(true); } 

	  for (let i = 2; i < limit; i++) {
		      if (bools[i-2]) {
			            for (let j = i*2; j <= limit; j += i) {
					            bools[j-2] = false;    
					          }
			          }
		    }
	  
	  for (let p = 0; p < bools.length; p++) {
		      if (bools[p]) { primes.push(p+2); }
		    }
	  
	  return primes;
} 

