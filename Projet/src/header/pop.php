<?php
header("Content-Type: application/json");

// Connexion à la base de données
$dsn = "mysql:host=localhost;dbname=your_database;charset=utf8";
$user = "your_user";
$password = "your_password";

try {
    $pdo = new PDO($dsn, $user, $password, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    ]);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(["error" => "Erreur de connexion à la base de données."]);
    exit();
}

// Récupération des données envoyées par le client
$data = json_decode(file_get_contents("php://input"), true);

if (isset($data["firstName"], $data["lastName"], $data["email"], $data["username"], $data["password"])) {
    $firstName = htmlspecialchars($data["firstName"]);
    $lastName = htmlspecialchars($data["lastName"]);
    $email = htmlspecialchars($data["email"]);
    $username = htmlspecialchars($data["username"]);
    $passwordHash = password_hash($data["password"], PASSWORD_DEFAULT);

    // Insérer dans la base de données
    $stmt = $pdo->prepare("INSERT INTO users (first_name, last_name, email, username, password) VALUES (?, ?, ?, ?, ?)");
    try {
        $stmt->execute([$firstName, $lastName, $email, $username, $passwordHash]);
        echo json_encode(["message" => "Inscription réussie."]);
    } catch (Exception $e) {
        http_response_code(400);
        echo json_encode(["error" => "Erreur lors de l'inscription."]);
    }
} else {
    http_response_code(400);
    echo json_encode(["error" => "Données invalides."]);
}
?>
