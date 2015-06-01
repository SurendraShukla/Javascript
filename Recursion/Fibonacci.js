var fiboancciSeriesList = [];

function populateFiboancciSeries(no) {

	if(-1 == no) {return;}

	populateFiboancciSeries(no-1);

	if( (0 == no) || (1 == no) ) {
		return fiboancciSeriesList[no]=no;
	}

	fiboancciSeriesList[no]=fiboancciSeriesList[no-1]+fiboancciSeriesList[no-2];

}

populateFiboancciSeries(10);
console.log(fiboancciSeriesList);

// 0 1 1 2 3 5 8 13 21 34 55