## Website Performance Optimization portfolio project

This project is intended to optimize the online portfolio for speed. In particular, optimizing the critical rendering path and making the pages render as quickly as possible by applying the following techniques.


### Getting started

#### Part 1: Optimize PageSpeed Insights score for index.html

Some useful tips to help you get started:

1. Check out the repository
2. To inspect the site on your phone, you can run a local server

  ```bash
  $> cd /path/to/your-project-folder
  $> python -m SimpleHTTPServer 8080
  ```

3. Open a browser and visit localhost:8080
4. Download and install [ngrok](https://ngrok.com/) to the top-level of your project directory to make your local server accessible remotely.

  ``` bash
  $> cd /path/to/your-project-folder
  $> ./ngrok http 8080
  ```

Copy the public URL ngrok gives you and try running it through PageSpeed Insights!


#### Part 2: Optimizing pizza.html to render with 60fps when scrolling

###### Minor Optimizations

1.HTML/CS/JS are minified.
2.Inlined render blocking CSS.
3.Google Analytics script loaded asynchronously via async attribute.

###### Image Resize:

1. With help of gulp responsive plug-in pizzeria.jpg was resized into two images.
2. The images were further optimized via gulp imagemin.

###### Forced synchronous layout:

1.The pizzas in the background move when scrolling, it is done by a function which was triggerring the forced synchronous layout.
2.The updatePositions function was accessing DOM elements every time the function was called.

###### Pizza resize slider:

1.The resizing of pizza was also causing forced synchronous layout due to variables called in the loop.
2.Variable declarations are moved out of for-loop.
3.querySelector/querySelectorAll replaced with getElementById/getElementsByClassName.
3.getElement is also moved out of the loop so that it's not repeatedly called and appended.

