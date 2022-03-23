# HW-3-Password-Generator

#Task

As a new developer, I was tasked with creating a randomized password that allowed the user to:
- Select a range of characters between 8-128
- when prompted, choose to include numbers, uppercase letter, lowercase letters, and/ or special characters
- return a randomized password that includes the user's specifications. 

#Method

I order to do this, I created arrays for each input (uppercase array, lowercase array, etc. ). I then created two blank arrays in order and used the push method to push the user choices into a one blank array that would collect all of the choices, depending on what characters were chosen by the user. I then returned the blank Random Password array and made it += to the new array crated by the push and used math.floor and math.random to make randomize it. 

# Images

[proof of functionality](./images/password.png)

# GithubURL

https://xleonard1.github.io/HW-3-Password-Generator/
