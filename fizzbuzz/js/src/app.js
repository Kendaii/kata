// Impement fizzbuzz logic
function	fizzbuzz( number ) 
{
	if ( number <= 0 )
		return "";
	else if ( number % 15 === 0 )
		return "FizzBuzz";
	else if ( number % 3 === 0 )
		return "Fizz";
	else if ( number % 5 === 0 )
		return "Buzz";
	else
		return number.toString();
}

// Implement the wrapper so we can count from 0 to STOP.
function 	main() 
{
	let 	N 	= 0;

	if ( process.argv.length > 2 ) {
		N = process.argv[2];
	}
	else {
		N = 10;
	}

	for ( let i = 1; i <= N ; i++ ) {
		console.log( fizzbuzz( i ) );
	}
}

main();
