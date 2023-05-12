# charris_code_quiz
The purpose of this project is to create a timed quiz on JavaScript fundamentals that sores high scores.

## PROJECT DESCRIPTION
This challenges tasked me with building a timed coding quiz with multiple-choice questions. The app is required to run in the browser and feature dynamically updated HTML and CSS powered by JavaScript code that I wrote. It has have a clean, polished, and responsive user interface.

## USER STORY
- **AS A** coding boot camp student
- **I WANT** to take a timed quiz on JavaScript fundamentals that stores high scores
- **SO THAT** I can gauge my progress compared to my peers

## ACCESSIBILITY CRITERIA
**GIVEN I** am taking a code quiz
- **WHEN** I click the start button
    - **THEN** a timer starts and I am presented with a question
- **WHEN** I answer a question
    - **THEN** I am presented with another question
- **WHEN** I answer a question incorrectly
    - **THEN** time is subtracted from the clock
- **WHEN** all questions are answered or the timer reaches 0
    - **THEN** the game is over
- **WHEN** the game is over
    - **THEN** I can save my initials and score

## USAGE
[ENTRANCE](https://raw.githubusercontent.com/FourStringFunk/charris_code_quiz/main/assets/images/Entrance.png)
![ENTRANCE_EXAMPLE](https://raw.githubusercontent.com/FourStringFunk/charris_code_quiz/main/assets/images/Entrance.png)

- An overview of the landing page. 
- Clicking submit with take users directly into the quiz. 
- Clicking the view high scores button will display the high scores IF the user has already played. If they have NOT played, then the high scores page will render as empty, with just the header and buttons.

[QUESTIONS](https://raw.githubusercontent.com/FourStringFunk/charris_code_quiz/main/assets/images/Questions.png)
![QUESTIONS_EXAMPLE](https://raw.githubusercontent.com/FourStringFunk/charris_code_quiz/main/assets/images/Questions.png)

- On click of one of the answers, the js will validate whether or not the answer was correct and display different messaging.
- If the answer is correct, there will be no deduction from the timer. If the answer is incorrect, then the timer will be docked 10 seconds.
- Regardless of the validation, once a user has selected an answer, they'll be directed to the next question.

[FORM SUBMIT](https://raw.githubusercontent.com/FourStringFunk/charris_code_quiz/main/assets/images/Form.png)
![FORM_SUBMIT_EXAMPLE](https://raw.githubusercontent.com/FourStringFunk/charris_code_quiz/main/assets/images/Form.png)

- On timer timeout OR answering all of the questions, the user will be displayed with their final score and option to save it to the scoreboard (using local storage).
- The user can type in their intials or full name and click the submit button.
- They'll then be shown the scoreboard

[SCOREBOARD](https://github.com/FourStringFunk/charris_code_quiz/blob/main/assets/images/Scoreboard.png)
![SCOREBOARD_EXAMPLE](https://github.com/FourStringFunk/charris_code_quiz/blob/main/assets/images/Scoreboard.png)

- The scoreboard will sort all of the scores stored in local storage.
- It then sorts and displays the names and scores of the top three participants.
- The user can click the GO BACK button to start the quiz over.
- The user can click the CLEAR HIGH SCORES button to wipe local storage and start over.

### GITHUB REPO
![GITHUB_REPOSITORY](https://github.com/FourStringFunk/charris_code_quiz)

### LIVE SITE
![LIVE_SITE](https://fourstringfunk.github.io/charris_code_quiz/)

## CREDITS
Andrew Stenho - debug help on my for loop

## LICENSE
N/A

## CONTRIBUTIONS
N/A