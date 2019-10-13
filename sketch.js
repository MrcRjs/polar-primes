let cnv;

const VEL = 100;
const Primes = sieve(1000000);
const PL = Primes.length;
const primePoints = new Array(PL);

function setup() {
    cnv = createCanvas(windowWidth, windowHeight);
    background(0);
    colorMode(HSB, 100);
    noSmooth();
	for(let i = 0; i < PL; i++)
	{
		const p = getCartesian(Primes[i], Primes[i]);
		primePoints[i] = { x: p.x / 300, y: p.y/300};
	}
}

let prime_i = 0;

function draw() {
    centerCanvas();
    if (prime_i < PL) {
		for (let i=0; i < prime_i; i++) {
			stroke(
				map(noise(i / 10000), 0, 1, 0, 100), 80, 100);
			point(primePoints[i].x, primePoints[i].y);
		}
        prime_i += VEL;
    } else {
    	noLoop();
	}

}

function getCartesian(r, theta) {
    let x = r * cos(theta);
    let y = r * sin(theta);
    return {x, y};
}

function sieve(limit) {

    var bools = [];
    var primes = [];

    for (let i = 1; i < limit; i++) {
        bools.push(true);
    }

    for (let i = 2; i < limit; i++) {
        if (bools[i - 2]) {
            for (let j = i * 2; j <= limit; j += i) {
                bools[j - 2] = false;
            }
        }
    }

    for (let p = 0; p < bools.length; p++) {
        if (bools[p]) {
            primes.push(p + 2);
        }
    }

    return primes;
}

function windowResized() {
    centerCanvas();
    prime_i-=VEL;
    resizeCanvas(windowWidth, windowHeight);
}

function centerCanvas() {
    const x = (cnv.width) / 2;
    const y = (cnv.height) / 2;
    cnv.translate(x, y);
}