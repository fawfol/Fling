<?php
$data = json_decode(file_get_contents("php://input"), true);

$score = $data["score"];
$timer = $data["timer"];
$jumps = $data["jumps"];
$map = $data["map"];

$allowed_maps = ["easy", "medium", "hard", "extreme", "fling"];
if (!in_array($map, $allowed_maps)) {
    http_response_code(400);
    echo json_encode(["error" => "Invalid map name"]);
    exit;
}

$filename = "scores_" . $map . ".txt";

// Read existing scores
$scores = [];
if (file_exists($filename)) {
    $lines = file($filename, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    foreach ($lines as $line) {
        $parts = explode(",", $line);
        if (count($parts) === 3) {
            $scores[] = [
                "score" => (int)$parts[0],
                "timer" => (int)$parts[1],
                "jumps" => (int)$parts[2]
            ];
        }
    }
}

// Add new score
$scores[] = [
    "score" => $score,
    "timer" => $timer,
    "jumps" => $jumps
];

// Sort descending by score
usort($scores, function ($a, $b) {
    return $b["score"] - $a["score"];
});

// Keep only top 30
$scores = array_slice($scores, 0, 30);

// Save back
$lines = [];
foreach ($scores as $entry) {
    $lines[] = "{$entry['score']},{$entry['timer']},{$entry['jumps']}";
}
file_put_contents($filename, implode("\n", $lines));

echo json_encode(["success" => true]);
?>