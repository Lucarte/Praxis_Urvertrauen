<?php

// Function to sanitize and validate input
function sanitizeInput($input)
{
    $input = trim($input);
    $input = stripslashes($input);
    $input = htmlspecialchars($input);
    return $input;
}

// Function to show error message
function showErrorMessage($input, $message)
{
    if ($message) {
        echo "<div class='error-message'>$message</div>";
    }
}

// Function to validate "Anrede" field
function validateAnrede($anrede)
{
    if (empty($anrede)) {
        showErrorMessage($anrede, 'Wahl erforderlich!');
        return false;
    }
    return true;
}

// Function to validate "Name" field
function validateName($name)
{
    $name = sanitizeInput($name);
    if (empty($name)) {
        showErrorMessage($name, 'Wie möchten Sie genannt werden?');
        return false;
    } elseif (!preg_match('/^[A-Za-zÀ-ÖØ-öø-ÿ]+$/', $name)) {
        showErrorMessage($name, 'Nur Buchstaben sind erlaubt');
        return false;
    } elseif (strlen($name) === 1) {
        showErrorMessage($name, 'Zu kurz! Mindestens 2 Buchstaben sind erforderlich');
        return false;
    } elseif (strlen($name) > 15) {
        showErrorMessage($name, 'Zu lang! Maximal 15 Buchstaben');
        return false;
    }
    return true;
}

// Function to validate "Email" field
function validateEmail($email)
{
    $email = sanitizeInput($email);
    if (empty($email)) {
        showErrorMessage($email, 'Feld darf nicht leer sein');
        return false;
    } elseif (strpos($email, '@') === false || strpos($email, '.') === false) {
        showErrorMessage($email, 'Invalide E-Mail Adresse.');
        return false;
    } elseif (strpos($email, '@') === false) {
        showErrorMessage($email, 'E-Mail Adresse muss ein @ enthalten.');
        return false;
    } elseif (strpos($email, '.') === false) {
        showErrorMessage($email, 'E-Mail Adresse muss ein Punkt enthalten.');
        return false;
    }
    return true;
}

// Function to validate "Message" field
function validateMessage($message)
{
    $message = sanitizeInput($message);
    if (strlen($message) < 2) {
        showErrorMessage($message, 'Wie kann ich Ihnen helfen?');
        return false;
    }
    return true;
}

// Function to validate the entire form
function validateForm($anrede, $name, $email, $message)
{
    $isValidAnrede = validateAnrede($anrede);
    $isValidName = validateName($name);
    $isValidEmail = validateEmail($email);
    $isValidMessage = validateMessage($message);

    return $isValidAnrede && $isValidName && $isValidEmail && $isValidMessage;
}

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $anrede = $_POST["anrede"];
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Validate form data
    if (validateForm($anrede, $name, $email, $message)) {
        // Form is valid, proceed with sending the email or other actions

        // Include your existing sendMail.php logic here
        include('http://praxis-urvertrauen.de/PHP/sendMail.php');
    } else {
        // Form is not valid, handle errors or redirect back to the form
        echo "Form validation failed. Please check your input.";
    }
}
