# Week 1 Side Quest: Images and Shapes

## Project Description

This sketch explores how images and basic p5.js shapes can be used together in one canvas. The left side shows a sushi image loaded from the `assets/images/` folder, while the right side recreates a sushi using simple shapes such as rectangles, circles, and lines.

The goal of this sketch was to practice loading image assets, placing them on the canvas, and building a visual object with p5.js drawing functions.

## How to Run 

Open `index.html` in Google Chrome using Live Server.

If the sketch does not load correctly, make sure the image files are placed in the correct folder:

```text
assets/images/sushi.png
assets/images/wood.png

## Design Decisions

I used a 900 by 450 canvas so the sketch has a wide horizontal layout. This allowed me to divide the composition into two parts: the image reference on the left and the shape-based drawing on the right.

The sushi on the right was drawn using p5.js shapes. The rice was created with a rounded rectangle and small randomly placed circles to create texture. The salmon topping was made with layered rounded rectangles and vertical highlight lines. I also added a wooden plate underneath using rectangles and horizontal line details to make the sushi feel grounded.

The sketch keeps some simple labels to show the difference between the loaded image and the shape-based drawing.

## Process Notes

I first loaded the image assets using preload() so they would be ready before the sketch started. Then I used image() to place the sushi image and wood texture on the canvas.

After that, I recreated the sushi using shapes. I used rect() for the rice, salmon, and plate, circle() for rice texture, and line() for salmon highlights and wood grain details. I used a for loop to repeat the line details and rice texture more efficiently.

One challenge was positioning the shapes accurately. To help with this, I kept the keyPressed() function so pressing k prints the mouse coordinates in the console.

## GenAI Use

I used GenAI. I used ChatGPT model GPT-5.5 Thinking to generate the image shown on the left side of my sketch. I also used it to help create the README based on my code and to write this statement.