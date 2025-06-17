<?php
if (!file_exists("scores.txt")) {
  echo json_encode([]);
  exit;
}

$lines = file("scores.txt", FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
$scores = [];

foreach ($lines as $line) {
  list($score, $timer, $jumps) = explode(",", $line);
  $scores[] = [
    "score" => (int)$score,
    "timer" => (int)$timer,
    "jumps" => (int)$jumps
  ];
}

// Sort by score descending
usort($scores, fn($a, $b) => $b["score"] - $a["score"]);
echo json_encode($scores);
?>