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