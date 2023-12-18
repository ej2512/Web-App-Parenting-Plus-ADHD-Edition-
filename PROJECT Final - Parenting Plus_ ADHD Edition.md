# PROJECT Final - Parenting Plus: ADHD Edition
**Codepen:https://**

**Problem Statement:** Parents of children with ADHD struggle to find a centralized platform that combines educational resources, community support, and interactive tools to manage their child's daily activities, behavior, and development.

**Solution Description:** The web application, "Parenting Plus: ADHD Edition," is a comprehensive platform designed to streamline the management of ADHD through education, organization, and community support. Key features include:

* **Forums:** A section where users can share insights and seek advice, enhancing their understanding of ADHD. Interactive elements like adding posts, categorizing content, and a live updating interface provide an engaging user experience.
* **Activity:** This area offers ADHD-friendly games and activities that are not just educational but also help in improving various cognitive skills for children.
* **Calendar:** A dynamic calendar allows for meticulous planning and tracking of appointments, medication schedules, and routines, crucial for managing the daily challenges of ADHD.
* **Support:** Community members can financially support ADHD-focused organizations. This feature facilitates direct donations, enabling users to contribute to the betterment of ADHD care and resources. 
* **Community:** Envisioned as a networking space, this unreleased feature aims to foster connections between users, enabling private conversations and friend-making, further building the support community.
* **Live Seminar:** An educational section that features live and recorded sessions by experts, providing valuable learning opportunities for parents.

## Wireframe:
![Screenshot 2023-12-17 at 14.19.10](https://hackmd.io/_uploads/r1AycThUa.png)
![Screenshot 2023-12-17 at 14.19.27](https://hackmd.io/_uploads/SJqe5a2Ua.png)
![Screenshot 2023-12-17 at 14.19.42](https://hackmd.io/_uploads/r1QzqTh8p.png)
![Screenshot 2023-12-17 at 14.19.52](https://hackmd.io/_uploads/ryzNca2I6.png)




## Navigation Menu & Live Seminar Feature:
> The left and right bars serve as critical components of the user interface, offering easy navigation and access to diverse functionalities within the application. The left bar's clear icons and labels facilitate effortless movement across various sections, while the right bar's live seminar feature provides informative content that supports the application's educational goals. The implementation details, from the event listeners to the dynamic DOM manipulation, highlight a user-centric design approach that prioritizes accessibility and interactivity.
1.  **Left Bar - Navigation Menu**

    **Feature Description:** The left bar acts as a navigation panel, allowing users to switch between different sections of the application such as Forums, Activity, Calendar, Support, and Community. Each item is represented by an icon and a label for clear identification.
* **Navigation Buttons:** Each button is paired with an icon and labeled for intuitive navigation. When clicked, they invoke the `changeContent` function to switch the displayed content on the main page.
```javascript=
document.getElementById("forums-btn").addEventListener("click", () => changeContent("forums-page"));
// Additional buttons are similarly wired to their respective content IDs.
```
* **Dynamic Content Switching:** The changeContent function hides all content sections and then displays the one associated with the clicked button.
```javascript=
function changeContent(pageId) {
  document.querySelectorAll(".page-content").forEach((page) => {
    page.style.display = "none";
  });
  const selectedPage = document.getElementById(pageId);
  if (selectedPage) {
    selectedPage.style.display = "block";
  }
}
```
2. **Right Bar - Live Seminar**

    **Feature Description:** The right bar showcases upcoming live seminars, including a brief on the topic, time, and a visual indicator of the session's subject through colored coding. This feature enriches the application by providing educational resources to users.
* **Dynamic Session Display:** Sessions are dynamically created and appended to the right bar. Each session box has a color-coded indicator, a title, a time, and the hosts' images.
```javascript=
sessions.forEach((session) => {
  rightContent.appendChild(createSessionBox(session));
});
```
* **Creating Session Elements:** The `createSessionBox` function constructs the HTML structure for each session box, including the time, title, and host images, then styles it according to the session type.
```javascript=
function createSessionBox(session) {
  // ...construct elements and assign properties
  // ...append child elements to liveBox
  return liveBox;
}
```

## Forums Page:
> The interactive features of the "Forums" page are designed to provide a seamless experience, allowing users to create, manage, and filter posts with immediate visual feedback. The use of JavaScript for handling events, manipulating the DOM, and managing the application state results in an engaging and responsive user interface that encourages active participation in the forum community. The features are implemented with a clear understanding of user-centric design, focusing on ease of use and intuitive navigation.
1.  **Adding New Posts and Drafts**

    **Feature Description:** Users can contribute to the forums by creating new posts or saving drafts for later completion.
    **Key Functions and Code Explanation:** The `onclick` event listener is attached to the "Add Post" button, which toggles the display of the modal for post entry.
* **Opening the Modal:** The `postModalBtn.onclick` function assigns an event to the "+ Add Post" button that changes the display property of the modal, making it visible to the user.
```javascript=
var postModalBtn = document.querySelector(".add-post-btn");
postModalBtn.onclick = function () {
  postModal.style.display = "block";
};
```
* **Submitting a New Post:** The form within the modal captures user input. When the form is submitted, the `onsubmit` event is triggered. This event prevents the default form submission action, captures the values from the form, creates a new post object, inserts it at the beginning of the `dynamicPosts` array, and calls `appendPostElement` to update the UI. The modal is then hidden.
```javascript=
document.getElementById("newPostForm").onsubmit = function (event) {
  event.preventDefault();
  var title = document.getElementById("newPostTitle").value;
  var newPost = { title: title, tag: "New", important: false };
  dynamicPosts.unshift(newPost);
  appendPostElement(newPost, false, true);
  postModal.style.display = "none";
    // Prevent default, create new post object, add to posts array, call appendPostElement
};
```
* **Saving a Draft:** Similar to submitting a new post, the "Save Draft" button's click event triggers a function that creates a draft object and updates the UI accordingly.
```javascript=
document.getElementById("saveDraftButton").onclick = function (event) {
  event.preventDefault();
  var title = document.getElementById("newPostTitle").value;
  var content = document.getElementById("newPostContent").value;
  var newDraft = { title: title, content: content, tag: "Draft", important: false, category: "draft" };
  dynamicPosts.unshift(newDraft);
  appendPostElement(newDraft, false, true);
  postModal.style.display = "none";
};
```
2. **Closing Modals on Outside Click**

    **Feature Description:** The application enhances the user experience by allowing modals to be closed when a user clicks outside of the modal's content area. It provides an intuitive way for users to dismiss pop-up elements without needing to interact with a specific close button.
    **Key Functions and Code Explanation:** The window.onclick event is used to detect all clicks on the page. The function checks if the click target is not the modal itself or the buttons used to open the modal. If the click is outside these elements, the modal is closed.
```javascript=
window.onclick = function(event) {
  // Check if the click is not on the modal button
  if (event.target !== postModalBtn && event.target !== taskModalBtn) {
    // Check if the click is outside the post modal
    if (postModal && !postModal.contains(event.target)) {
      postModal.style.display = "none";
    }
    // Check if the click is outside the task modal
    if (taskModal && !taskModal.contains(event.target)) {
      taskModal.style.display = "none";
    }
  }
};
```
It ensures that if a click is detected outside the designated areas, the modals will close, streamlining the navigation and maintaining a clean and user-friendly interface.
3. **Categorization and Filtering of Posts**
    
    **Feature Description:** Posts can be filtered by categories such as "All," "Starred," "Draft," and "Trash." This is handled through radio buttons, allowing users to sort and view posts according to these predefined categories.
* **Filtering Posts:** The `updatePostsVisibility` function is called whenever a radio button's state changes. This function iterates over all posts and sets their display style based on the currently selected category.
```javascript=
function updatePostsVisibility() {
  const selectedCategory = document.querySelector('input[name="nav"]:checked + label').innerText.toLowerCase();
  let allPosts = document.querySelectorAll(".post");
  allPosts.forEach((post) => {
    let categories = post.getAttribute("data-category").split(" ");
    post.style.display = categories.includes(selectedCategory) ? "" : "none";
  });
}
```
```javascript=
document.querySelectorAll('input[name="nav"]').forEach((radio) => {
  radio.addEventListener("change", updatePostsVisibility);
});
```
4. **Dynamic Rendering of Posts and Special Topics**

    **Feature Description:** The page dynamically generates post elements from the dynamicPosts array. This allows for the posts to be rendered programmatically, reflecting real-time additions or changes.
* **Appending Posts to the DOM:** The `appendPostElement` function is a crucial part of the dynamic rendering. It creates HTML elements for each post and appends or prepends them to the `postsWrapper`. It also assigns unique IDs for interaction purposes.
```javascript=
function appendPostElement(post, isSpecialTopic = false, prepend = false) {
  // Element creation and setup
  // (Including creating checkboxes, labels, and delete buttons)
  // ...
}
```
5. **Interactive Post Management**

    **Feature Description:** Posts can be interacted with directly; for example, they can be starred or moved to trash.
* **Managing Post States:** Each post has a checkbox and a delete button. The delete button has an event listener attached that, when clicked, changes the post's category to "trash" and calls `updatePostsVisibility` to reflect the change immediately.
```javascript=
let deleteButton = document.createElement("img");
deleteButton.addEventListener("click", function () {
  postElement.setAttribute("data-category", "trash");
  updatePostsVisibility();
});
```

## Calendar Page:
> The "Calendar Page" in the web application serves as a scheduling tool for users to manage tasks and events related to their child's ADHD management. It presents a monthly view, allows for the addition of tasks, and displays a list of scheduled tasks. Through the use of JavaScript, the application facilitates the addition, display, and management of tasks. Dynamic rendering ensures that the user interface is always up-to-date with the current date and tasks list, improving the overall user experience.
1. **Dynamic Calendar Display**

    **Feature Description:** The Calendar Page provides a visual representation of the current month, allowing users to see at a glance which day it is today and the layout of the days in the month.
* **Building the Calendar Grid:** The `createCalendar` function initializes the calendar by determining the days in the current month and appropriately placing them in the grid. 
```javascript=
function createCalendar() {
  // ...initialize date variables
  // Clear previous calendar entries
  monthContainer.innerHTML = "";

  // Create calendar days based on the month
  for (let day = 1; day <= daysInMonth; day++) {
    // ...create and append day elements
  }
}
```
2. **Adding Tasks to the Calendar**

    **Feature Description:** Users can add tasks to specific dates, allowing them to keep track of important events and obligations.
* **Modal for Task Entry:** A modal is used to input new tasks, providing a form without navigating away from the calendar page.
```javascript=
taskModalBtn.addEventListener("click", function () {
  taskModal.style.display = "block";
});
```
* **Form Submission for New Tasks:** Upon submitting the form, the event listener captures the data, adds a new task to the task list, and updates the display.
```javascript=
document.getElementById("newTaskForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Stop form from submitting normally
  // ...capture form data and update task list
  renderTasks(); // Update the displayed task list
  taskModal.style.display = "none"; // Hide the modal
});
```
3. **Task List Display**

    **Feature Description:** A timeline of tasks for the current day or selected date is displayed, providing a detailed agenda to the user.
* **Rendering Tasks:** The `renderTasks` function iterates through the task list and creates a visual representation in the timeline.
```javascript=
function renderTasks() {
  // ...clear existing tasks
  tasks.forEach(function (task) {
    // ...create task elements and append to the timeline
  });
}
```
4. **Interactivity and User Feedback**

    **Feature Description:** The page is interactive, allowing users to add, view, and manage tasks with instant feedback on their actions.
* **Interactive Elements:** The "Add Task" button, checkboxes for task completion, and options to edit or remove tasks are interactive elements that provide immediate response to user actions.
```javascript=
var taskModalBtn = document.querySelector(".add-task-btn");
taskModalBtn.addEventListener("click", function () {
  // ...show the modal for task entry
});
```

## Support Page:
> The Support Page's donation form is designed with user-friendly interaction in mind, allowing for a seamless and hassle-free donation process. The incorporation of jQuery for handling click events and updating input values, combined with HTML form validation, provides a robust and reliable user experience. 
1. **Dynamic Calendar Display**

    **Feature Description:** The Support Page features a donation form that allows users to contribute financially to the community. It provides preset donation amounts and the option for custom contributions, as well as the choice between one-time and recurring donations.
* **Preset Donation Selection:** Users can choose from predefined donation amounts. Clicking on a label automatically updates the donation amount input field to reflect the selected amount.
```javascript=
$("#intervalDonateForm .input-price-options label").click(function() {
  var newAmount = $(this).prev("input").val();
  $("#donationAmount").val(newAmount);
});
```
* **Custom Donation Amount:** The form allows users to enter a custom donation amount. Clicking on the custom amount field unchecks the preset donation options.
```javascript=
$("#donationAmount").click(function() {
  $(".input-price-options input").prop("checked", false);
});
```
* **Form Validation and Submission:** The form includes validation to ensure that required fields are filled before submission. The user can submit their personal information and proceed to enter their card information for the donation.
```htmlembedded=
<input type="text" class="input-half required" name="first_name" id="firstName" placeholder="First name" required="">
<!-- Additional required fields for last name and email -->
<button href="#donation-form" type="submit" id="donate_card_info" class="btn btn--submit btn--enter">Enter Card Info</button>
```
* **Donation Frequency Option:** Users can select whether their donation is a one-time contribution or a monthly recurring donation.
```htmlembedded=
<input name="recurring" type="radio" value="1" id="choice_4_1">
<label for="choice_4_1">Monthly recurring donation</label>
<!-- Additional option for one-time donation -->
```

## Activity Page:
> The Activity Page is thoughtfully designed to be an interactive hub for children with ADHD. It provides a variety of games, each with a specific focus area, allowing users to choose according to their interests or therapeutic needs. The use of JavaScript to handle the click events and the dynamic nature of the content ensures that the page can be easily updated with new games or features, promoting ongoing engagement. The seamless integration of educational content with interactive gaming elements exemplifies a modern approach to learning and therapy in digital environments.
1. **Dynamic Calendar Display**

    **Feature Description:** The Activity Page is dedicated to providing engaging games designed to assist with ADHD management. It offers a selection of games that target attention, memory, and cognitive skills, each with a "Play" button for easy access.
* **Game Selection Cards:** The page features multiple cards, each representing a different game. These cards are visually appealing, containing game images, titles, descriptions, and a "Play" button.
* **Launching Games:** Each game card has a "Play" button that, when clicked, redirects the user to the game's URL in a new tab
```javascript=
var playButtons = document.querySelectorAll(".play-button");
playButtons.forEach(function (button, index) {
  button.addEventListener("click", function () {
    var url = ""; // URL is determined by the index of the button
    window.open(url, "_blank");
  });
});
```
2. **Dynamic Content Rendering**

    **Feature Description:** When the page loads, it dynamically renders the list of games, which can be easily updated or expanded by modifying the underlying data structure.
* **Document Ready Event:** An event listener waits for the DOM to be fully loaded before initializing game-related functionalities, ensuring all elements are rendered and interactive.
```javascript=
document.addEventListener("DOMContentLoaded", function () {
  // Initialization code here
});
```
## Activity Page-Memory Game
1. **Starting the Game**
    **Feature Description:** The game begins with a "Ready" overlay that prompts the user to start the game.
* The `readyButton` event listener waits for the user to signal they are ready by clicking the "Ready" button, which then hides the overlay and starts the background music.
```javascript=
const readyButton = document.getElementById("readyButton");
readyButton.addEventListener("click", () => {
    readyOverlay.style.display = "none";
    const backgroundMusic = document.getElementById("backgroundMusic");
    if (backgroundMusic) {
        backgroundMusic.play();
    }
});
```
2. **Card Shuffling and Game Reset**:
    **Feature Description:** Before the game starts, all cards are shuffled to ensure a random setup each time. A reset button allows the user to restart the game at any time.
* The `shuffleCards` function randomizes the order of the cards using the Fisher-Yates Shuffle(an algorithm for shuffling a finite sequence).
```javascript=
function shuffleCards(cards) {
    for (let i = cards.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [cards[i].style.order, cards[j].style.order] = [cards[j].style.order, cards[i].style.order];
    }
}
```
3. **Gameplay Interactivity**:
    **Feature Description:** Players interact with the game by clicking on cards to flip them and find matching pairs.
* The `flipCard` function handles the card flip action. If two flipped cards match, they remain flipped; otherwise, they flip back after a short delay.
```javascript=
function flipCard() {
    if (isGameOver || selectedCards.length === 2 || this.classList.contains("flipped")) {
        return;
    }
    this.classList.add("flipped");
    selectedCards.push(this);
    // Additional logic for checking matches or flipping back
}
```
4. **Game Timer**:
    **Feature Description:** The game includes a countdown timer that adds urgency to the gameplay.
* The `startTimer` function initializes the countdown, and `updateTimer` updates the timer display every second. If time runs out, the game ends.
```javascript=
function startTimer() {
    targetTime = new Date(new Date().getTime() + countdownDuration * 1000);
    timerInterval = setInterval(updateTimer, 1000);
    updateTimer();
}
```
5. **Audio Feedback**:
    **Feature Description:** Audio cues give feedback for flipping cards, finding matches, winning, or when time is up.
* Each action like flipping a card or finding a match triggers a corresponding sound effect.
```javascript=
document.getElementById('flipSound').play();
document.getElementById('matchSound').play(); 
}
```
6. **End-of-Game Modals**:
    **Feature Description:** When the game concludes, either by matching all cards or running out of time, modals appear to inform the player and provide options to try again or play again.
* The `showModal` function displays the appropriate modal based on whether the player won or the time ran out.
```javascript=
function showModal(modalId) {
    const modalToShow = document.getElementById(modalId);
    modalToShow.style.display = 'flex';
    stopTimer();
    isGameOver = true;
}
```
7. **Reset Game**:
    **Feature Description:** Allows players to start over at any point, resetting the game to its initial state.
* The `resetGame` function is triggered by clicking the "Reset Game" button. It clears the game state, shuffles the cards, and restarts the timer.
```javascript=
const resetButton = document.getElementById("resetButton");
resetButton.addEventListener("click", resetGame);

function resetGame() {
  selectedCards = [];
  matchesFound = 0;
  timerStarted = false;
  isGameOver = false;
  cards.forEach((card) => {
    card.classList.remove("flipped", "matched", "mismatched");
  });
  shuffleCards(cards);
  resetTimer();
  startTimer(); 
}
```
8. **Show All Cards**:
    **Reveals all cards for a brief moment, giving players a sneak peek to aid their memory.
* The `showAllCards` function is bound to the "Show All" button, flipping all cards face-up temporarily.
```javascript=
const showAllButton = document.getElementById("showAllButton");
showAllButton.addEventListener("click", showAllCards);

function showAllCards() {
  cards.forEach((card) => {
    card.classList.add("flipped");
  });
  // Potential addition of a timeout function to flip the cards back over after a short period.
  setTimeout(() => {
    cards.forEach((card) => {
      if (!card.classList.contains("matched")) {
        card.classList.remove("flipped");
      }
    });
  }, 3000); //
}
```
## Activity Page-Spot the difference Game
1. **Game Round Setup**:
    **Feature Description:** Each round presents a new set of images where players must spot the difference.
* The `setupNewRound` function assigns images to cards and sets one card as unique. Players click on cards to check if it's the unique one.
```javascript=
function setupNewRound() {
  // ... setup logic ...
  cards.forEach((card, index) => {
    const img = card.querySelector('img');
    img.src = index === uniqueCardIndex ? unique : common;
    card.onclick = () => checkCard(index === uniqueCardIndex);
  });
  // ... setup logic ...
}
```
2. **Checking for Differences**:
    **Feature Description:** Clicking on a card triggers a check to see if it's the unique one.
* The `checkCard` function plays the appropriate sound based on the player's choice and sets up a new round if correct.
```javascript=
function checkCard(isUnique) {
  if (isUnique) {
    document.getElementById("rightSound").play();
    setupNewRound();
  } else {
    document.getElementById("wrongSound").play();
  }
}
```
---
## Additional Thoughts on Refactoring the App
The transition of the ADHD app from a static HTML framework to a dynamic JavaScript construct was initiated under the insightful guidance of Professor Jin. The refactoring journey of the ADHD app was similar to renovating a house while preserving its original charm.

   Initially, the posts within the `posts-wrapper` were hard-coded—each post a fixed element in the HTML file:
```htmlembedded=
<div class="post" data-category="all">
  <input class="post-item" type="checkbox" id="item-1">
  <label for="item-1">...</label>
</div>
```
This static list was reimagined into a dynamic array of objects, each representing a post. A function, `appendPostElement`, was created to iterate over this array, inserting the post elements into the DOM on the fly. The function was designed to be versatile, allowing for posts to be added or categorized dynamically:
```javascript=
let dynamicPosts = [
  { title: "Understanding ADHD", tag: "Advice" },
  // ... other posts
];

dynamicPosts.forEach((post) => {
  appendPostElement(post);
});
```
The `appendPostElement` function encapsulates the creation of HTML elements, such as checkboxes and labels, assigning them unique IDs and event listeners for interactivity. This not only made the posts dynamically generated but also allowed for real-time user interactions, such as starring or deleting posts, which were immediately reflected in the app without needing a page reload.

For the calendar page, I replaced the static dates with a dynamically generated calendar grid, which responded to user actions and the passage of time:
```htmlembedded=
// Static HTML for calendar dates
<div class="day">1</div> <!-- and so on... -->
```
```javascript=
// Dynamic JavaScript to generate calendar dates
createCalendar(); // Function that populates the calendar based on the current month and year
```
For the live seminar section, each live session was originally a separate block in the HTML. By employing JavaScript arrays and objects, the app could now host an expandable roster of seminars:
```javascript=
const sessions = [
  { time: "08:00 AM", title: "Your Child’s Treatment Plan", hosts: [...] },
  // ... other sessions
];

sessions.forEach(session => {
  rightBar.appendChild(createSessionBox(session));
});
```
The `createSessionBox` function dynamically generated the seminar information and host images, adding a new dimension of interactivity and management to the seminars.

This refactoring journey was not without its challenges. It required a deep dive into the DOM API, meticulous attention to maintaining CSS styling, and ensuring that the original functionality remained intact. Debugging became a routine task, as the newly written JavaScript logic had to interact seamlessly with existing code.

## Reflections
Reshaping the ADHD app from static HTML to dynamic JavaScript, I found myself at the intersection of challenge and growth. In the beginning, the prospect of overhauling an already functional application was daunting. The comfort of static HTML was replaced by the uncertainties of dynamic content generation. Converting static posts into a dynamic array was not just a coding exercise; it was a lesson in envisioning flexible and scalable solutions.

One of the most interesting aspects was maintaining the interactivity and style of the application while transitioning to JavaScript. It was similar to solving a complex puzzle where each piece had to fit perfectly without changing the established aesthetic.

Not every moment was a breakthrough. There were times of frustration, particularly when debugging elusive errors or when JavaScript logic conflicted with existing functionalities. These moments, however, were valuable lessons in patience and perseverance. Each bug fixed and each problem solved boosted my confidence.

By learning Vue.js and Firebase next semester, I could use their strengths to further refactor and enhance my ADHD app. Vue.js can streamline my frontend development with a more structured and reactive approach, while Firebase can provide a powerful backend service for data management, user authentication. 

For instance, each part of the app (like the forums, calendar, and activities) could be a separate Vue component, leading to cleaner and more maintainable code. The posts and tasks can be managed more efficiently with Vue's reactive data properties, reducing the need for explicit DOM manipulations.

Firebase provides a real-time database that could be used to store and sync the app’s data in real-time. It can significantly enhance the dynamic aspects of the app, like updating posts, tasks, or calendar events across all users instantaneously.

**Reference**: 
https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js
http://www.w3.org/2000/svg
https://www.chosic.com
https://www.svgrepo.com
https://www.mentalup.co/
https://dribbble.com/uigeek
> [name=Echo Jin]
> [time=Sun, Dec 17, 2023]
