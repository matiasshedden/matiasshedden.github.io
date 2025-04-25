<?php
echo '<h1>Debug Information</h1>';

echo '<h2>REQUEST_URI</h2>';
echo $_SERVER['REQUEST_URI'];

echo '<h2>Directory Structure</h2>';
echo '<pre>';
echo 'Current script path: ' . __FILE__ . PHP_EOL;
echo 'Document root: ' . $_SERVER['DOCUMENT_ROOT'] . PHP_EOL;

// Check if key files exist
echo "Checking if files exist:\n";
$files = [
    '../core/Router.php',
    '../config/config.php',
    '../app/controllers/HomeController.php',
    '../app/controllers/MenuController.php',
    '../app/controllers/ReservationController.php'
];

foreach ($files as $file) {
    echo $file . ': ' . (file_exists($file) ? 'EXISTS' : 'MISSING') . "\n";
}

echo '</pre>';
?>