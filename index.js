import { cube } from "lib/maths";

console.log( cube( 5 ) );

setTimeout(function() {
	document.write(cube( 5 ));
}, 2000);
