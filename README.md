# Frontend Mentor - Ping coming soon page solution

This is a solution to the [Ping coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ping-single-column-coming-soon-page-5cadd051fec04111f7b848da). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Submit their email address using an `input` field
- Receive an error message when the `form` is submitted if:
	- The `input` field is empty. The message for this error should say *"Whoops! It looks like you forgot to add your email"*
	- The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Please provide a valid email address"*

### Screenshot

![](./screenshot.jpg)

This is my solution for challenge Ping coming soon page master. I think this challenge was easier that others, but I found difficult to make responsive the website with the transition of the form. However, is always good to practice some javascript.

### Links

- Solution URL: [Github](https://github.com/tchock42/Ping-Coming-Soon-Page-Master)
- Live Site URL: [Netlify](https://cheerful-pavlova-ebb651.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow


### What I learned

I learn a little about svg files. In order to make the hover state for icons, I found that atributtes fill and stroke can change the colors of the images.

To see how you can add code snippets, see below:


```css
.icon:hover .svg{
    stroke:"none";
    fill:#FFFFFF;
    cursor: pointer;
}
.icon:hover .path{
    cursor:pointer;
    fill:#4F7DF3;
}

```


### Continued development

In the future, I would like to make a challenge where I have to change the whole form for a web notification that the form was correctelly filled and the data sent.

### Useful resources

- [Table Icons](https://tablericons.com/) - This is where I found the icons I used.
- [W3docs](https://www.w3docs.com/learn-html/svg-stroking.html) - This site gave me infomation about how to edit the svg files colors-


## Author

- Website - [Jacob Gomez Carrillo](https://www.github.com/tchock42)
- Frontend Mentor - [@tchock42](https://www.frontendmentor.io/profile/tchock42)
