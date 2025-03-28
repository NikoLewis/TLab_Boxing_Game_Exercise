<div align="center"></div>
<h1 align="center">Boxing Game</h1>
<p align="center"><strong>Innovation Fellowship Lab Assignment</strong>
<br/>
<div align="center"><img src="demo.gif"></img></div>

<h2>Goal and requirements</h2>

> When the program runs, it alternates hits between the two boxers, displaying the results of each hit until one boxer is knocked out. Below you can see the desired output you should find in your VSCode terminal.


### Overall Gameplay

- Players take turns delivering damage to their opponent. 
- Damage is randomly set between 1 and 10 points.
  - Basic Hit: Damage less than 6.
  - Critical Hit: Damage between 6 and 9 (inclusive).
  - Knockout: Damage equal to 10.
- If either player's health drops to 0 or below, they are knocked out, and the game ends.

### Gameplay Sequence
Below is the sequence of events you should see emulated in your boxing game. We use this logic to determine the direction our code should go in. This would be a good example of developing pseudo code before jumping into our scripts.
1. Check whose turn it is to determine who is taking damage
2. Set damage to a random number
3. Check what category the damage falls under
4. Reduce damage the player receiving the hit
5. Check their health at its current state to determine a knockout
6. Switch player turns

### example output:

```
Starting the Boxing Game!
Player 1 vs Player 2
Player 1 lands a critical hit on Player 2!
Player 2's health is now 93.
It's now Player 2's turn.
Player 2 lands a basic hit on Player 1!
Player 1's health is now 97.
It's now Player 1's turn.
Player 1 lands a basic hit on Player 2!
Player 2's health is now 92.
It's now Player 2's turn.
Player 2 lands a basic hit on Player 1!
Player 1's health is now 93.
It's now Player 1's turn.
Player 1 lands a KNOCKOUT on Player 2!🥊
Player 2's health is now 0.
Player 2 has been knocked out!
Player 1 is the WINNER! 🏆
```


<h2>Key learnings</h2>

- Apply if, else if, and else statements to handle different gameplay scenarios (e.g., basic hit, critical hit, knockout) to exemplify understanding of conditional branching.

- Using conditionals to determine game outcomes and player health status, students will problem-solve and troubleshoot their projects to create functional gameplay via the VSCode terminal

#### Extras
> Made it so that game runs in the browser not just with node in the terminal

> light styling for additional practice

<h2>Project Stages</h2>

1. Review requirements and expectations
2. Create detailed readme
3. Create a new public GitHub Repo
  - adding instructors as contributers if needed
4. Create file required file structure
  - boxing.js   
5. Proceed with assignment instructions
  - [found here:](https://docs.google.com/document/d/1-J6bcUs7NsEIDzXn6dm9EQKCFlBpjnL-PElacz-Kjz0/edit?tab=t.0)
  
    

<h2>Project status</h2>
Completed

<h2>Credits</h2>

- Coded by: <a href="https://www.linkedin.com/in/nikolewis/)" target="_blank">Niko Lewis</a>
- Illustrations - tbd
- Colors - tbd
- Any material - tbd

<h2>Copyright 2025</h2>
This project is licensed under the terms of the MIT license
 and protected by The Knowledge House Honor Code and Community Code of Conduct.
