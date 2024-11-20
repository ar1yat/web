<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>My Personal Webpage</title>

    <!-- Подключение Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">

    <link rel="stylesheet" href="home.css">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:ital,wght@0,100..900;1,100..900&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:ital,wght@0,100..900;1,100..900&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Lexend+Deca:wght@100..900&display=swap" rel="stylesheet">
</head>
<body>
    <!-- Навигационная панель Bootstrap -->
    <header class="container-fluid bg-light">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container">
                <a class="navbar-brand" href="#">ariyattynyshbay</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="#about">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="hobbies.html">Hobbies</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="contact.html">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>

    <!-- Контент с использованием сетки Bootstrap -->
    <div class="container mt-5">
        <div class="row align-items-center">
            <div class="col-lg-6">
<h1>Nice to meet you!<br>I'm <span class="under">Ariyat Tynyshbay</span></h1>
                <a href="contact.html" class="btn btn-primary mt-3">CONTACT ME</a>
            </div>
            <div class="col-lg-6">
                <img src="images/Photo.jpg" class="img-fluid" alt="Photo of Ariyat">
            </div>
        </div>

        <!-- О себе секция с сеткой -->
        <div class="row mt-5">
            <div class="col-lg-12">
<h1>About me</h1>
<p>My name is Ariyat Tynyshbay, and I am a student at Astana IT University specializing in Software Engineering. I am passionate about studying frontend development, and strive to put my knowledge into practice through various projects and initiatives.</p>
<p>If you have any questions or suggestions, feel free to contact me!</p>
            </div>
        </div>

        <!-- Карточки Bootstrap -->
        <div class="row mt-5">
            <div class="col-lg-4">
                <div class="card">
                    <img src="images/hobby1.jpg" class="card-img-top" alt="Hobby 1">
                    <div class="card-body">
                        <h5 class="card-title">Hobby 1</h5>
                        <p class="card-text">Description of hobby 1.</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="card">
                    <img src="images/hobby2.jpg" class="card-img-top" alt="Hobby 2">
                    <div class="card-body">
                        <h5 class="card-title">Hobby 2</h5>
                        <p class="card-text">Description of hobby 2.</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="card">
                    <img src="images/hobby3.jpg" class="card-img-top" alt="Hobby 3">
                    <div class="card-body">
                        <h5 class="card-title">Hobby 3</h5>
                        <p class="card-text">Description of hobby 3.</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Карусель Bootstrap -->
        <div id="carouselExampleControls" class="carousel slide mt-5" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="images/slide1.jpg" class="d-block w-100" alt="Slide 1">
                </div>
                <div class="carousel-item">
                    <img src="images/slide2.jpg" class="d-block w-100" alt="Slide 2">
                </div>
                <div class="carousel-item">
                    <img src="images/slide3.jpg" class="d-block w-100" alt="Slide 3">
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div>

    <!-- Скрипт Bootstrap -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
