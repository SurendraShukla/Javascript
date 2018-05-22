<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

//Receive the RAW post data.
$content = file_get_contents("php://input");

print_r($_ENV);

$coverageDirectory = __DIR__.'/coverage';
if (!is_dir($coverageDirectory)) {
    if (false === @mkdir($coverageDirectory, 0777, true)) {
        throw new \RuntimeException(sprintf('Unable to create the %s directory', $coverageDirectory));
    }
}else{
    // Delete all files inside folder
    $files = glob($coverageDirectory.'/*'); //get all file names
    foreach($files as $file){
        if(is_file($file))
            unlink($file); //delete file
    }
}
file_put_contents($coverageDirectory."/".(time()).'.json', $content);

?>

