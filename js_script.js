<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Drop Problem Project</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>

<!-- LOGIN SECTION -->
<div class="container" id="loginSection">
    <h2>Login</h2>
    <input type="text" id="username" placeholder="Username" required>
    <input type="password" id="password" placeholder="Password" required>
    <button onclick="showProblemForm()">Login</button>
</div>

<!-- PROBLEM SUBMISSION SECTION -->
<div class="container" id="problemSection" style="display:none;">
    <h2>Drop a Problem</h2>

    <select id="subject" required>
        <option value="">Select Subject</option>
        <option value="maths">Maths</option>
        <option value="physics">Physics</option>
        <option value="chemistry">Chemistry</option>
    </select>

    <textarea id="problemText" rows="5" placeholder="Write your problem here..." required></textarea>

    <button onclick="submitProblem()">Submit Problem</button>
</div>

<script src="js/script.js"></script>

</body>
</html>