# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Yaseen Khan**

Time spent: **4** hours spent in total

Link to project: [Memory Game Project](https://bottlenose-developing-xenon.glitch.me)



## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [ ] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [ ] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:  
  
Player Loses Game:
![Player Loses Game:](https://cdn.glitch.global/672d4ca3-4bfe-456f-8481-01b7667fd537/user_loses.gif?v=1650677224691)

Player Wins Game:
![Player Wins Game:](https://cdn.glitch.global/672d4ca3-4bfe-456f-8481-01b7667fd537/user_wins.gif?v=1650677416549)
![](gif3-link-here)
![](gif4-link-here)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.  
  

a. [Codepath's Prework](https://courses.codepath.org/snippets/summer_internship_for_tech_excellence/prework.md#heading-2-setup-a-glitch-project)

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)  
  

One challenge I encountered in this project was speeding up each playback turn. If the playback turn is too fast, the player would have difficulties in following the pattern but if the playback turn is too slow, there would not be much challenge for the player to match the pattern. To find the ideal playback speed, I decreased the clue time by a fixed amount for each turn and then tested the game to see if I could keep up the pattern. I adjusted the amount to decrease the clue time based on the speed of the pattern. 
If the pattern is too fast, I decreased the clue time by a smaller amount and if the pattern is too slow, I decreased the clue time by a larger amount. After a few attempts, decreasing the clue time by 75 ms each turn made the game easy to follow in the beginning but becomes more challenging towards the end.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)  
  
  
a. How do you determine the frameworks and tools needed for a project?  
b. What are some of the best practices for web development?  
c. What do web developers have in mind when developing a website?

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)  
  

If I had a few more hours, I would add images to the game buttons, style the game more, and add a timer for the user to guess the pattern. Additionally, I would also add a visual cue to show the player how many lives they have left. Lastly, I would show the user the number of turns they have left until they win.



## Interview Recording URL Link

[My 5-minute Interview Recording](https://cdn.glitch.me/672d4ca3-4bfe-456f-8481-01b7667fd537/SITE%20interview%20questions.mp4?v=1650692901839)


## License

    Copyright [Yaseen Khan]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
