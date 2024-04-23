# DINOSAUR QUIZ

This is a simple dinosaur quiz that showcases the application of javascript, html, and css. It is an adaptation of a youtube tutorial by GreatStack who demonstrated how to create the starting blocks of a quiz, which I have used but then expanded upon to create what see you below in the screenshots.

The quiz consists of 3 main categories of land, sea, and air based dinosaur related questions where the user firstly inputs their name, presses start quiz to then enjoy answering the 12 questions, which have 4 multiple choice answers. At completion the quiz says well done "x" you have scored "x" out of 12. They are then offered to play again or go to more info, which will take them to a quiz answers and explanation page, that features a play again button to direct them back to the beginning.

The main javascript techniques used are as follows:

- Event Handling - DOM Manipulation - String Manipulation - Conditional Statements - Loops - Functions - Arrays & Objects - Timeouts/Intervals - CSS Styling - Error Handling - Global Variables - Logical Operators

## SCREENSHOTS

![screenshots of website](/assets/readme/responsive-screenshot3.jpg)

https://ui.dev/amiresponsive?url=https://ojay97-hub.github.io/Dinosaur-Quiz-/index.html

## WIREFRAMES

Below are my wireframes for each key section intro, quiz, score, and answers. Designed using Balsamiq:

![wireframe for intro](/assets/readme/wireframes/intro.png)
![wireframe for quiz](/assets/readme/wireframes/quiz.png)
![wireframe for score](/assets/readme/wireframes/score.png)
![wireframe for answers](/assets/readme/wireframes/answers.png)

## USER STORIES

### EDUCATOR

- As an educator I would want to use this...

### STUDENT

- As a student...

## DEFENSIVE USER EXPERIENCE

This project set out to build an interactive front-end site that responds to users' actions, to allow them to actively engage with data, and alter the way the site displays the information to achieve their preferred goals. Whilst reducing human error as much as possible and providing a smooth ride throughout the course of the interaction.

### TARGET AUDIENCE

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
![screenshots of explanations](/assets/readme/answers2.jpg)
![screenshots of explanations](/assets/readme/play-again-answers.jpg)

- For the users who are more inquisitive/curious. I added an entirely separate info.index file that features a table of all the correct answers of each question with an explanation that expands upon just a one word answer. This provides an educational element to the quiz which provides a genuine use for places of learning i.e., schools/youth clubs etc. I ensured that the styling is consistent with the intro/quiz/score sections.

#### 404 PAGE

![screenshots of error page](/assets/readme/dinosaur-error-page.jpg)

- If a users so happens to stumble at the first hurdle and doens't reach the site. They will be greeted with this 404 error page that has a functioning button that takes them to the correct URL from githubs-pages section.

## STYLING AND DESIGN

The main highlight for me as a javascript learner was being able to use javascript to manipulate css styling using this particular code:

![screenshots of css-styling javascript](/assets/readme/design/css-styling-with-script.jpg)

### Land

![screenshots of land design](/assets/readme/design/land-design.jpg)

### Sea

![screenshots of air design](/assets/readme/design/marine-design.jpg)

### Air

![screenshots of sea design](/assets/readme/design/air-design.jpg)

By applying this kind of styling I thought it was beneficial to the immersion of the quiz and given the predominant target audience of children I believe the quiz would become far more engaging as the body background images of dinosaurs really bring it to life. Furthermore, the clear match up with the colouring of quiz area and title really helps to provide a sense of progression through the quiz as each category of questions are completed.

## TESTING

### RESPONSIVENESS

| DIMENSION           | AREA   | RESPONSIVENESS                              | RESULT |
| ------------------- | ------ | ------------------------------------------- | ------ |
| MOBILE - 344x882    | Intro  | Sized well with screen                      | PASS   |
| MOBILE - 344x882    | Quiz   | Sized well with screen                      | PASS   |
| MOBILE - 344x882    | Score  | Sized well with screen                      | PASS   |
| MOBILE - 344x882    | Answer | Table fits the screen width and is readable | PASS   |
| MOBILE - 344x882    | Answer | Background image pixelated stated in bugs   | FAIL   |
| TABLET - 768x1024   | Intro  | Sized as intended                           | PASS   |
| TABLET - 768x1024   | Quiz   | Sized as intended                           | PASS   |
| TABLET - 768x1024   | Score  | Sized as intended                           | PASS   |
| TABLET - 768x1024   | Answer | Sized as intended                           | PASS   |
| DESKTOP - 1920x1080 | Intro  | Sized as intended                           | PASS   |
| DESKTOP - 1920x1080 | Quiz   | Sized as intended                           | PASS   |
| DESKTOP - 1920x1080 | Score  | Sized as intended                           | PASS   |
| DESKTOP - 1920x1080 | Answer | Sized as intended                           | PASS   |

### VALIDATING

Validating the code to ensure it passes with best practices maintained throughout.

#### JAVASCRIPT

Validated using JShint.

- script.js:

There are 19 functions in this file.

Function with the largest signature take 2 arguments, while the median is 0.

Largest function has 17 statements in it, while the median is 3.

The most complex function has a cyclomatic complexity value of 4 while the median is 1.

- info.js:

There is only one function in this file.

It takes no arguments.

This function contains only one statement.

Cyclomatic complexity number for this function is 1.

#### HTML

Validated using W3C - main issue being the forward slash with prettier extension.

- index.html:

  ![screenshots of index.html validation](/assets/readme/validation/index-validated.png)

- info.html:

  ![screenshots of info.html validation](/assets/readme/validation/info-validated.png)

#### CSS

Validated using W3Jigsaw.

- style.css:

  ![screenshots of style.css validation](/assets/readme/validation/style-validated.png)

- info.css:

  ![screenshots of info.css validation](/assets/readme/validation/info-css-validated.png)

### FUNCTIONALITY

Using the catch & error, debugger, and console.log methods the following functions have been tested and results are as follows:

| KEY FUNCTIONS                    | DESCRIPTOR                                                                                                                                                             | RESULT |
| -------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| startQuiz()                      | When start button is clicked and the name is filled in = intro section is hidden and quiz section is displaying first Q.                                               | PASS   |
| startTimer()                     | Starts a timer that runs for 20 seconds and shows remaining time to user for each Q.                                                                                   | PASS   |
| stopTimer()                      | Stop timer interval.                                                                                                                                                   | PASS   |
| showQuestion()                   | Displays the current question whilst updating styling for each category ensuring answer buttons are available for the user to press.                                   | PASS   |
| resetState()                     | resets the state of the quiz by removing previously stated answers.                                                                                                    | PASS   |
| selectAnswer(e)                  | Handles selection of an answer option. Updates score if selected answer is correct, changes colour of button depending on correct/incorrect. Stops timer on selection. | PASS   |
| showScore()                      | Does the calculation for the score                                                                                                                                     | PASS   |
| showScoreSection(totalQuestions) | Displays final score out of the total number of questions that applies the username. Hides intro & quiz sections and displays the score section.                       | PASS   |
| handleNextButton()               | Ensures next set of questions are displaying when answered. If all questions are complete it shows score section.                                                      | PASS   |
| resetPage()                      | completing resets the quiz to ensure the quiz can be played again.                                                                                                     | PASS   |
| initialization()                 | Wraps all of the event listeners to ensure they are loaded in when the DOM content is loaded - focussing on buttons inc. answer info, play again and next button.      | PASS   |

## BUGS

1. background images not covering entire background
2. Adding score section remained on quiz section - made use of the display none/block method.
3. alert was showing prematurely - deleted startquiz call outside of functions
4. clickable play again button on info page covering width of screen - fixed by using script instead of an a-tag.

### Unfixed Bugs

1. Table in info.html has responsiveness issues with galaxy fold dimension. I have tried smaller fonts, overscroll and padding changes. The background image also appears pixalated due to stretching, which I believe is to do with the table sizing. - not resolved.

## ACCESSIBILITY

### WAVE - ADD OTHER PAGES

![screenshot of wave](/assets/readme/wave-all-good.jpg)

![screenshot of wave](/assets/readme/wave-answerspage.png)
Wave showing the all clear for no errors.

### LIGHTHOUSE - ADD OTHER PAGES

![screenshot of lighthouse](/assets/readme/lighthouse-greenlight.jpg)
Lighthouse showing the all clear for all categories.

![screenshot of lighthouse](/assets/readme/lighthouse-answerpage.png)
Lighthouse suggesting issue with performance which may be creating the issue as stated in the bug.

## DEPLOYMENT

### Local - add

### Pages

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

- Add a set of quiz categories i.e., create a menu where user can pick from a list of topics.
- Add background music.
- Add a leaderboard for competition.
- Randomization of the order of each quiz/question category - Increase timer speed for difficulty levels

## CREDIT

### GREATSTACK YOUTUBER

https://www.youtube.com/watch?v=PBcqGxrr9g8 - the youtube video tutorial

https://drive.google.com/file/d/1m0ynWx4mJzlvCQXgumMLgi6k7K_ucfDm/view?usp=sharing - the source code

- DAFONT for dinosaur themed font
- PIXABAY for images
- Asked chatGPT for solutions to bugs and areas of improvement i.e., the play again button was taking up width of info.html screen.
- favicon.io for the favicon

## COMMITS

I have noticed that my commits have inconsistencies in regards to capitalization, mostly lower case but in some instances I have used uppercase. Future projects will hone in on maintaining lower-capitalization.

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
