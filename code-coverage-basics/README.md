### Using NYC
* nyc -all --nycrc-path=nyc_exclude_list.json --reporter=html --temp-directory=nyc-coverage --report-dir=nyc-report node calculator.js

## Using Istanbul
* Instrument JS files 
    * istanbul instrument calculator.js --output calculator_instrumented.js
* Use instrument JS file 
    * Add instrumented file name in Runner.html file
* Start server for collecting coverage object
    * php -S localhost:3000 php-server.php
* Generate report from coverage object
    * istanbul report --format html --include="coverage/*.json" --dir=istanbul-report
