# DINOSAUR QUIZ

This is a simple dinosaur quiz that showcases the application of javascript, html, and css. It is an adaptation of a youtube tutorial by GreatStack who demonstrated how to create the starting blocks of a quiz, which I have used but then expanded upon to create what see you below in the screenshots.

The quiz consists of 3 main categories of land, sea, and air based dinosaur related questions where the user firstly inputs their name, presses start quiz to then enjoy answering the 12 questions, which have 4 multiple choice answers. At completion the quiz says well done "x" you have scored "x" out of 12. They are then offered to play again or go to more info, which will take them to a quiz answers and explanation page, that features a play again button to direct them back to the beginning.

## SCREENSHOTS

![screenshots of website](/assets/readme/responsive-screenshots2.jpg)

## DEFENSIVE USER EXPERIENCE

This project set out to build an interactive front-end site that responds to users' actions, to allow them to actively engage with data, and alter the way the site displays the information to achieve their preferred goals. Whilst reducing human error as much as possible and providing a smooth ride throughout the course of the interaction.

### TARGET AUDIENCE:

Given the simplicity and "easy-to-use" design. The quiz can be used as a fun educational tool for young children who may be studying prehistoric topics at school. Gamifying education is always beneficial for learning in a few ways 1. keeps engagement levels high 2. the scoring feature will entice children to improve upon their previous score 3. the score may also induce a competitive nature between their fellow friends and students.

### KEY DEFENSIVE MEASURES

#### INSTRUCTIONS

![screenshots of instructions](/assets/readme/instructions.jpg)

- Clear and simple instructions that outlines the whole point/purpose of the quiz - provides landing/intro page rather than just entering the quiz section.

#### ALERT

![screenshots of alert](/assets/readme/alert.jpg)

- The alert ensures the user inputs their name prior to starting the quiz. This is clear application of a defensive user measure

#### ANSWER FEEDBACK

![screenshots of feedback](/assets/readme/answer-feedback.jpg)
![screenshots of feedback](/assets/readme/incorrect-answer-feedback.jpg)

- Green for correct and red for incorrect helps the user to understand that 1. they are having feedback when they select answer 2. That they then cannot change their selected answer. This ensures that there is smooth transitioning/good & efficient flow throughout the quiz.

#### TIMER

![screenshots of timer](/assets/readme/timer.jpg)

- A timer is displayed to force the user to think of a question within a timely manner, which should encourage quiz engagement rather than just staying on one question for a prolonged period of time. This prevents the adverse event of the user exiting the application/quiz and promotes completion.

#### SCORE REVEAL

![screenshots of score reveal](/assets/readme/score-reveal.jpg)

- Once the user has completed the quiz they will be greeted with a personalized message that starts with a congratulations! Followed by their name that they entered at the start of the quiz and their achieved score. The play again is positioned below to encourage easy replayability.

#### EXPLANATIONS

![screenshots of explanations](/assets/readme/explanation-options.jpg)
![screenshots of explanations](/assets/readme/answers.jpg)
![screenshots of explanations](/assets/readme/play-again-answers.jpg)

- For the users who are more inquisitive/curious. I added an entirely separate info.index file that features a table of all the correct answers of each question with an explanation that expands upon just a one word answer. This provides an educational element to the quiz which provides a genuine use for places of learning i.e., schools/youth clubs etc. I ensured that the styling is consistent with the intro/quiz/score sections.

#### 404 PAGE

![screenshots of error page](/assets/readme/dinosaur-error-page.jpg)

- If a users so happens to stumble at the first hurdle and doens't reach the site. They will be greeted with this 404 error page that has a functioning button that takes them to the correct URL from githubs-pages section.

## TESTING

### VALIDATING

Validating the code to ensure it passes with best practices maintained throughout.

#### JAVASCRIPT

- JAVASCRIPT is 100% validated using JShint. Just states what syntax is available in each version of javascript.

#### HTML

- W3C no errors apart from the forward slash with the prettier extension.

#### CSS

- W3Jigsaw no errors

### FUNCTIONALITY

Using the catch & error, debugger, and console.log methods the following functions have been tested and results are as follows:

| KEY FUNCTIONS                    | DESCRIPTOR                                                                                                                                                        | RESULT |
| -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| startQuiz()                      | When start button is clicked and the name is filled in = intro section is hidden and quiz section is displaying first Q.                                          | PASS   |
| startTimer()                     | Starts a timer that runs for 20 seconds and shows remaining time to user for each Q.                                                                              | PASS   |
| stopTimer()                      | Stop timer interval.                                                                                                                                              | PASS   |
| showQuestion()                   | Displays the current question whilst updating styling for each category ensuring answer buttons are available for the user to press.                              | PASS   |
| resetState()                     | resets the state of the quiz by removing previously stated answers.                                                                                               | PASS   |
| selectAnswer(e)                  | Handles selection of an answer option. Updates score if selected answer is correct, changes colour of button depending on correct/incorrect.                      | PASS   |
| showScore()                      | Does the calculation for the score                                                                                                                                | PASS   |
| showScoreSection(totalQuestions) | Displays final score out of the total number of questions that applies the username. Hides intro & quiz sections and displays the score section.                  | PASS   |
| handleNextButton()               | Ensures next set of questions are displaying when answered. If all questions are complete it shows score section.                                                 | PASS   |
| resetPage()                      | completing resets the quiz to ensure the quiz can be played again.                                                                                                | PASS   |
| initialization()                 | Wraps all of the event listeners to ensure they are loaded in when the DOM content is loaded - focussing on buttons inc. answer info, play again and next button. | PASS   |

## BUGS

1. background images not covering entire background
2. Adding score section remained on quiz section - made use of the display none/block method.
3. alert was showing prematurely - deleted startquiz call outside of functions
4. clickable play again button on info page covering width of screen - fixed by using script instead of an a-tag.
5. Had a go at creating randomization for the questions. However, I couldn't manage to keep the styling to follow the random questions.

## ACCESSIBILITY

### WAVE

![screenshot of wave](/assets/readme/wave-all-good.jpg)
Wave showing the all clear for no errors.

### LIGHTHOUSE

![screenshot of lighthouse](/assets/readme/lighthouse-greenlight.jpg)
Lighthouse showing the all clear for all categories.

## DEPLOYMENT

The site was deployed onto github pages:

1. On the repository click settings.
2. On the source click main branch.
3. Click save.
4. Page will refresh.
5. Retrieve the page link under github pages header.
6. Back on the repo page you can head to deployments.
7. The link should display under github-pages deployments.
8. The website was deployed on github and can be accessed here: https://ojay97-hub.github.io/Dinosaur-Quiz-/

## FUTURE FEATURES

- ADD A SET OF QUIZ CATEGORIES i.e., create a menu where user can pick from a list of topics.
- ADD BACKGROUND MUSIC
- ADD LEADERBOARD FOR COMPETITION
- RANDOMIZATION OF THE ORDER OF EACH QUIZ QUESTION/CATEGORY
- INCREASE TIMER SPEED FOR DIFFICULTY LEVELS

## CREDIT

- GREATSTACK: https://www.youtube.com/watch?v=PBcqGxrr9g8 - base code that was expanded upon.
- DAFONT for dinosaur themed font
- PIXABAY for images

### References:

#### Land:

- https://blog.paultonspark.co.uk/the-most-terrifying-t-rex-facts-revealed/
- https://www.trivianerd.com/topic/dinosaurs-trivia
- https://edition.cnn.com/2023/03/15/world/dinosaur-with-record-long-neck-scn/index.html#:~:text=Mamenchisaurus%20sinocanadorum%20had%20the%20longest,any%20known%20dinosaur%2C%20researchers%20said.

#### Sea:

- https://www.mydinosaurs.com/blog/top-10-biggest-water-dinosaurs-ever-ln-history/#:~:text=One%20of%20the%20largest%20sea,teeth%20for%20killing%20its%20prey.
- https://www.bbc.co.uk/newsround/62319250#:~:text=Some%20people%20believe%20that%20the,a%20freshwater%20loch%20or%20lake
- https://www.zmescience.com/feature-post/natural-sciences/geology-and-paleontology/dinosaurs/water-dinosaurs/#Water_Dinosaur_Examples_A_Roster_of_Legends
- https://www.baresports.com/blog/just-how-big-were-those-ancient-sea-creatures/

#### AIR:

- https://eartharchives.org/articles/quetzalcoatlus-the-largest-flying-animal-of-all-time/index.html
- https://en.wikipedia.org/wiki/Pterosaur_size
- https://en.wikipedia.org/wiki/Quetzalcoatlus
