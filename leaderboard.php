<?php
header("Content-Type: application/json");

$map = $_GET["map"] ?? "easy";  // default to 'easy'

$allowed_maps = ["easy", "medium", "hard", "extreme", "fling"];
if (!in_array($map, $allowed_maps)) {
    http_response_code(400);
    echo json_encode(["error" => "Invalid map"]);
    exit;
}

$filename = "scores_" . $map . ".txt";

if (!file_exists($filename)) {
    echo json_encode([]);
    exit;
}

$lines = file($filename, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
$scores = [];

foreach ($lines as $line) {
    $parts = explode(",", $line);
    if (count($parts) === 3) {
        list($score, $timer, $jumps) = $parts;
        $scores[] = [
            "score" => (int)$score,
            "timer" => (int)$timer,
            "jumps" => (int)$jumps
        ];
    }
}

usort($scores, fn($a, $b) => $b["score"] - $a["score"]);

echo json_encode($scores);
?>
