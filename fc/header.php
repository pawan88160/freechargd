<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style/style.css?v=<?php echo time();?>">
</head>
<body>
    <header>
        <nav>
            <div class="nav-containor">
               <div id="resCont" class="nav-res-cont">
                     <div id="nav-resp" class="nav-resp">
                        <ul>
                            <li>
                                <img  class="img_not" src="image/offers.png" alt="">
                                <span title="Offers">
                                Offers
                                </span>
                            </li>
                            <li>
                                <img src="image/blog_icon.png" alt="">
                                <span title="Blog">
                                Blog
                                </span>
                            </li>
                            <li>
                                <img src="image/help.png" alt="">
                                <span title="Help and Support">
                                Help and Support
                                </span>
                            </li>
                        </ul>
                    </div>
               </div>
                <div class="nav-inner-left">
                    <div id="hamburger" class="hamburger">
                        <span id="ham" class="ham" ></span>
                        <span id="hamO" class="ham"></span>
                    </div>  
                
                <img src="image/fc-logo-rebranded.png" alt="">
                </div>
                <div class="nav-inner-right">
                    <span>
                         <img src="image/login-icon.png" alt="">
                    </span>
                    <span id="log_cont">
                        <p>Login / Register</p>
                        <p>Login</p>
                    </span>
                </div>
            </div>
        </nav>
    </header>
    <!-- _______________login____________ -->
    <?php include "pages/login.php"?>
    
