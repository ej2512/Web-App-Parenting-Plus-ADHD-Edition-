//Switches the displayed content
function changeContent(pageId) {
  // Hide all content sections.
  document.querySelectorAll(".page-content").forEach((page) => {
    page.style.display = "none";
  });

  // Show the selected content section.
  const selectedPage = document.getElementById(pageId);
  if (selectedPage) {
    selectedPage.style.display = "block";
  }
}

// Attach click events to sidebar buttons to change content.
document
  .getElementById("forums-btn")
  .addEventListener("click", () => changeContent("forums-page"));
document
  .getElementById("calendar-btn")
  .addEventListener("click", () => changeContent("calendar-page"));
document
  .getElementById("help-support-btn")
  .addEventListener("click", () => changeContent("help-support-page"));
document
  .getElementById("community-btn")
  .addEventListener("click", () => changeContent("community-page"));
document
  .getElementById("activity-btn")
  .addEventListener("click", () => changeContent("activity-page"));

/////////right-content//////////
// Define session data
const sessions = [
  {
    time: "08:00 - 09:00 AM",
    title: "Your Child’s Treatment Plan",
    hosts: [
      "https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
      "https://images.unsplash.com/photo-1476657680631-c07285ff2581?ixlib=rb-1.2.1&auto=format&fit=crop&w=2210&q=80",
      "https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80",
      "https://images.unsplash.com/photo-1455504490126-80ed4d83b3b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80"
    ],
    color: "yellow"
  },
  {
    time: "10:00 - 11:00 AM",
    title: "ADHD in Teens (upcoming)",
    hosts: [
      "https://images.unsplash.com/photo-1484688493527-670f98f9b195?ixlib=rb-1.2.1&auto=format&fit=crop&w=2230&q=80",
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80",
      "https://images.unsplash.com/photo-1455504490126-80ed4d83b3b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80"
    ],
    color: "blue"
  },
  {
    time: "01:00 - 02:00 PM",
    title: "Behavior & Discipline (upcoming)",
    hosts: [
      "https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
      "https://images.unsplash.com/photo-1475552113915-6fcb52652ba2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "https://images.unsplash.com/photo-1493752603190-08d8b5d1781d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1484688493527-670f98f9b195?ixlib=rb-1.2.1&auto=format&fit=crop&w=2230&q=80"
    ],
    color: "red"
  },
  {
    time: "03:00 - 04:00 PM",
    title: "Behavior Modification Therapy and Medication (upcoming)",
    hosts: [
      "https://images.unsplash.com/photo-1523419409543-a5e549c1faa8?ixlib=rb-1.2.1&auto=format&fit=crop&w=943&q=80",
      "https://images.unsplash.com/photo-1519742866993-66d3cfef4bbd?ixlib=rb-1.2.1&auto=format&fit=crop&w=881&q=80",
      "https://images.unsplash.com/photo-1521122872341-065792fb2fa0?ixlib=rb-1.2.1&auto=format&fit=crop&w=2208&q=80",
      "https://images.unsplash.com/photo-1486302913014-862923f5fd48?ixlib=rb-1.2.1&auto=format&fit=crop&w=3400&q=80",
      "https://images.unsplash.com/photo-1484187216010-59798e9cc726?ixlib=rb-1.2.1&auto=format&fit=crop&w=955&q=80"
    ],
    color: "green"
  },
  {
    time: "Recording",
    title: "DHD in Our Children",
    hosts: [
      "https://images.unsplash.com/photo-1523419409543-a5e549c1faa8?ixlib=rb-1.2.1&auto=format&fit=crop&w=943&q=80",
      "https://images.unsplash.com/photo-1519742866993-66d3cfef4bbd?ixlib=rb-1.2.1&auto=format&fit=crop&w=881&q=80",
      "https://images.unsplash.com/photo-1521122872341-065792fb2fa0?ixlib=rb-1.2.1&auto=format&fit=crop&w=2208&q=80",
      "https://images.unsplash.com/photo-1486302913014-862923f5fd48?ixlib=rb-1.2.1&auto=format&fit=crop&w=3400&q=80",
      "https://images.unsplash.com/photo-1484187216010-59798e9cc726?ixlib=rb-1.2.1&auto=format&fit=crop&w=955&q=80"
    ],
    color: "blue"
  },
  {
    time: "Recording",
    title: "How Parent-Training Programs Work",
    hosts: [
      "https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
      "https://images.unsplash.com/photo-1476657680631-c07285ff2581?ixlib=rb-1.2.1&auto=format&fit=crop&w=2210&q=80",
      "https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80",
      "https://images.unsplash.com/photo-1455504490126-80ed4d83b3b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80"
    ],
    color: "red"
  }
];

// Function to create a session box element
function createSessionBox(session) {
  const liveBox = document.createElement("div");
  liveBox.className = `live-box ${session.color}`;

  const descriptionLive = document.createElement("div");
  descriptionLive.className = "description-live";
  descriptionLive.innerHTML = `
        <div class="time">${session.time}</div>
        <div class="live-name">${session.title}</div>
    `;

  const moreButton = document.createElement("div");
  moreButton.className = "more-button";

  const hostsDiv = document.createElement("div");
  hostsDiv.className = "hosts";
  session.hosts.forEach((hostUrl) => {
    const img = document.createElement("img");
    img.src = hostUrl;
    hostsDiv.appendChild(img);
  });

  liveBox.appendChild(descriptionLive);
  liveBox.appendChild(moreButton);
  liveBox.appendChild(hostsDiv);

  return liveBox;
}

// Select the right sidebar element
const rightBar = document.querySelector(".right-bar");

// Create a container for all session boxes and add them
const rightContent = document.createElement("div");
rightContent.className = "right-content";
sessions.forEach((session) => {
  rightContent.appendChild(createSessionBox(session));
});

// Append the container with all session boxes to the right sidebar
rightBar.appendChild(rightContent);

/////////Forums Page/////////
let dynamicPosts = [
  // Array of regular posts
  { title: "Hi! Help Me Understand ADHD!", tag: "Advice", important: false },
  { title: "Battling with my head space", tag: "Stories", important: false },
  { title: "A digital service for ADHD", tag: "Resources", important: false },
  { title: "ADHD and love", tag: "Stories", important: false },
  { title: "Private diagnosis help!!", tag: "Advice", important: false },
  {
    title: "Dr. Russell Barkley and Dr. Daniel Amen",
    tag: "Resources",
    important: false
  }
];

let specialTopicPosts = [
  // Array of special topic posts
  {
    title: "Struggling with Potential ADHD Realisation",
    tag: "Featured",
    important: false
  },
  {
    title: "I Can’t Wake Up! Mirtazapine and Elvanse",
    tag: "Featured",
    important: false
  },
  { title: "ADHD Sleeping Issues", tag: "Featured", important: false },
  {
    title: "Behavior Modification Therapy and Medication",
    tag: "Featured",
    important: false
  }
];

// Select the parent element where posts will be appended
let postsWrapper = document.querySelector(".posts-wrapper");

// Function to create and append post elements
function appendPostElement(post, isSpecialTopic = false, prepend = false) {
  // Create a new post element
  let postElement = document.createElement("div");
  postElement.className = "post";
  postElement.setAttribute("data-category", post.category);
  // Add special topic class if applicable
  if (isSpecialTopic) {
    postElement.classList.add("special-topic");
  }
  // Create and setup the checkbox
  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "post-item";
  checkbox.id = `item-${Math.random().toString(36).substr(2, 9)}`; // Generate a unique ID

  // Create and setup the label
  let label = document.createElement("label");
  label.htmlFor = checkbox.id;
  label.innerHTML += `<span class="label-text">${post.title}</span>`;

  // Create and setup the tag span
  let tagSpan = document.createElement("span");
  tagSpan.className = `tag ${post.tag.toLowerCase()}`;
  tagSpan.textContent = post.tag;

  // Append checkbox, label, and tag span to the post element
  postElement.appendChild(checkbox);
  postElement.appendChild(label);
  postElement.appendChild(tagSpan);

  // Create a container to wrap the tag and delete button
  let tagAndButtonContainer = document.createElement("div");
  tagAndButtonContainer.className = "tag-button-container";

  // Create a delete button
  let deleteButton = document.createElement("img");
  deleteButton.src =
    "https://assets.codepen.io/10958332/trash-svgrepo-com+%282%29.svg";
  deleteButton.className = "delete-button";
  deleteButton.alt = "Delete Post";

  // Add an event listener to the delete button (implement the delete logic as needed)
  deleteButton.addEventListener("click", function () {
    postElement.setAttribute("data-category", "trash"); // Set the post's category to Trash
    updatePostsVisibility(); // Update the visibility state of the post
  });

  // Add the tag and delete button to the container
  tagAndButtonContainer.appendChild(tagSpan);
  tagAndButtonContainer.appendChild(deleteButton);

  // Add the container to the post element
  postElement.appendChild(tagAndButtonContainer);

  // Now decide whether to display the new post based on the currently selected category
  const selectedCategory = document
    .querySelector('input[name="nav"]:checked + label')
    .innerText.toLowerCase();

  // 如果当前分类是 'all' 且新帖子不是草稿，或者新帖子的分类与当前选中的分类匹配，则显示新帖子
  if (
    (selectedCategory === "all" && post.category !== "draft") ||
    selectedCategory === post.category
  ) {
    postElement.style.display = "";
  } else {
    postElement.style.display = "none";
  }
  // Prepend or append the post element based on the prepend flag
  if (prepend) {
    let firstPost = postsWrapper.querySelector(".post");
    if (firstPost) {
      postsWrapper.insertBefore(postElement, firstPost);
    } else {
      postsWrapper.appendChild(postElement);
    }
  } else {
    postsWrapper.appendChild(postElement);
  }

  // Add event listener to update post category on checkbox change
  checkbox.addEventListener("change", function () {
    if (this.checked) {
      postElement.setAttribute("data-category", "all starred");
    } else {
      postElement.setAttribute("data-category", "all");
    }
    updatePostsVisibility();
  });
}

// Append regular posts
dynamicPosts.forEach((post) => {
  appendPostElement(post);
});

// Create and append the "Special Topics" header
let specialTopicsHeader = document.createElement("div");
specialTopicsHeader.className = "header special-topics";
specialTopicsHeader.textContent = "Special Topics";
postsWrapper.appendChild(specialTopicsHeader);

// Append special topic posts
specialTopicPosts.forEach((post) => {
  appendPostElement(post, true);
});
// Function to show or hide posts based on the selected filter
function updatePostsVisibility() {
  const selectedCategory = document
    .querySelector('input[name="nav"]:checked + label')
    .innerText.toLowerCase();
  let allPosts = document.querySelectorAll(".post");

  allPosts.forEach((post) => {
    let categories = post.getAttribute("data-category").split(" ");
    if (selectedCategory === "all") {
      // Display all posts except those marked as 'draft' or 'trash'
      post.style.display =
        !categories.includes("draft") && !categories.includes("trash")
          ? ""
          : "none";
    } else if (selectedCategory === "starred") {
      // Display only posts marked as 'starred'
      post.style.display = categories.includes("starred") ? "" : "none";
    } else {
      // For 'draft' and 'trash', display only posts of the corresponding category
      post.style.display = categories.includes(selectedCategory) ? "" : "none";
    }
  });
}
// Initialize post visibility based on the default filter
updatePostsVisibility();

// Add event listeners to update post visibility when changing filters
document.querySelectorAll('input[name="nav"]').forEach((radio) => {
  radio.addEventListener("change", updatePostsVisibility);
});

/////////Forums Page/////////
var postModal = document.getElementById("addPostModal");
var postModalBtn = document.querySelector(".add-post-btn");
var postCloseBtn = postModal.getElementsByClassName("close")[0];

// Open the modal when the button is clicked
postModalBtn.onclick = function () {
  postModal.style.display = "block";
};

// Close modal
postCloseBtn.onclick = function () {
  postModal.style.display = "none";
};

// Handle the submission of a new post
document.getElementById("newPostForm").onsubmit = function (event) {
  event.preventDefault(); // Prevent the default form submission

  var title = document.getElementById("newPostTitle").value;

  // Create a new post object
  var newPost = {
    title: title,
    tag: "New", // the tag for new posts is 'New'
    important: false
  };

  // Add the new post to the beginning of the dynamicPosts array
  dynamicPosts.unshift(newPost);

  // Add the new post to the page using the appendPostElement function
  appendPostElement(newPost, false, true);

  // Clear the input field
  document.getElementById("newPostTitle").value = "";
  document.getElementById("newPostContent").value = "";
  // Close the modal window
  postModal.style.display = "none";
};

// Handle the saving of a draft
document.getElementById("saveDraftButton").onclick = function (event) {
  event.preventDefault(); // Prevent the default form submission

  var title = document.getElementById("newPostTitle").value;
  var content = document.getElementById("newPostContent").value; // Get the content

  // Create a new draft object
  var newDraft = {
    title: title,
    content: content,
    tag: "Draft",
    important: false,
    category: "draft" // Draft category
  };

  // Add the new draft to the beginning of the dynamicPosts array
  dynamicPosts.unshift(newDraft);

  // Use the appendPostElement function to add the new draft to the page
  appendPostElement(newDraft, false, true);

  // Clear the input fields
  document.getElementById("newPostTitle").value = "";
  document.getElementById("newPostContent").value = "";

  // Close the modal window
  postModal.style.display = "none";
};

/////////Support Page/////////
$(document).ready(function () {
  // Update Amount input when a preset price is clicked

  $("#intervalDonateForm .input-price-options label").click(function () {
    var newAmount = $(this).prev("input").val();
    $("#donationAmount").val(newAmount);
  });

  // When custom amount input is clicked, uncheck preset prices
  $("#donationAmount").click(function () {
    $(".input-price-options input").prop("checked", false);
  });
});
/////////Calendar Page/////////
function createCalendar() {
  const monthContainer = document.querySelector(".month");
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  // Clear previous calendar entries
  monthContainer.innerHTML = "";

  // Create blank days for the first row of the calendar
  for (let i = 0; i < firstDayOfMonth; i++) {
    monthContainer.innerHTML += '<div class="day"></div>';
  }

  // Create day entries for each day in the month
  for (let day = 1; day <= daysInMonth; day++) {
    const dayElement = document.createElement("div");
    dayElement.className = "day";
    dayElement.textContent = day;

    // Highlight the current day
    if (day === currentDate.getDate()) {
      dayElement.classList.add("today");
    }

    monthContainer.appendChild(dayElement);
  }
}

// Call createCalendar on page load
document.addEventListener("DOMContentLoaded", createCalendar);

document.addEventListener("DOMContentLoaded", function () {
  const dateElement = document.getElementById("current-date");
  const currentDate = new Date();
  const options = { year: "numeric", month: "long", day: "numeric" };
  dateElement.textContent = currentDate.toLocaleDateString("en-US", options);
});

var tasks = [
  {
    title: "Seminar",
    content: "Your Child's Treatment Plan",
    due: "8:00 AM"
  },
  {
    title: "Take Sarah to the training program",
    content: "Take notes and have some feedbacks",
    due: "12:00 PM"
  },
  {
    title: "Check emails",
    content: "Replying back to Dr. Daniel Amen",
    due: "2:00 PM"
  }
  // add more task
];

// Render the task list to HTML
function renderTasks() {
  var timeline = document.querySelector(".timeline");
  timeline.innerHTML = ""; // Clear the existing task list.

  tasks.forEach(function (task) {
    var taskHtml = `
      <li class="task">
        <div class="badge"></div>
        <div class="timeline-body">
          <div class="row">
            <div class="col-left">
              <p class="title">${task.title}</p>
              <p class="timeline-content">${task.content}</p>
            </div>
            <div class="col-right">
              <p class="due">${task.due}</p>
            </div>
          </div>
        </div>
      </li>
    `;
    timeline.innerHTML += taskHtml;
  });
}
// Render the task list when the page loads
document.addEventListener("DOMContentLoaded", function () {
  renderTasks();
});

// Get the modal and the button for adding tasks
var taskModal = document.getElementById("addTaskModal");
var taskModalBtn = document.querySelector(".add-task-btn");
var taskCloseBtn = taskModal.getElementsByClassName("close")[0];

// Event listener to open the modal when the 'Add Task' button is clicked
taskModalBtn.addEventListener("click", function () {
  taskModal.style.display = "block";
});

// Event listener to close the modal when the close button is clicked
taskCloseBtn.addEventListener("click", function () {
  taskModal.style.display = "none";
});

// Event listener for closing the modal when clicking outside of it
window.onclick = function (event) {
  // Prevent closing if the clicked target is the button to open the modal
  if (event.target === postModalBtn || event.target === taskModalBtn) {
    return;
  }
  // Close post modal if clicked outside of it
  if (postModal && !postModal.contains(event.target)) {
    postModal.style.display = "none";
  }
  // Close task modal if clicked outside of it
  if (taskModal && !taskModal.contains(event.target)) {
    taskModal.style.display = "none";
  }
};

// Event listener for the form submission to add a new task
document
  .getElementById("newTaskForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Get the values from the form fields
    var title = document.getElementById("newTaskTitle").value;
    var content = document.getElementById("newTaskContent").value;
    var time = document.getElementById("newTaskTime").value;

    // Add the new task to the tasks array
    tasks.push({ title: title, content: content, due: time });

    // Re-render the task list to include the new task
    renderTasks();

    // Reset the form fields and close the modal
    document.getElementById("newTaskForm").reset();
    taskModal.style.display = "none";
  });

/////////activity-page/////////
document.addEventListener("DOMContentLoaded", function () {
  // Render the task list
  renderTasks();

  // Get all the play buttons
  var playButtons = document.querySelectorAll(".play-button");

  // Add a click event to each button
  playButtons.forEach(function (button, index) {
    button.addEventListener("click", function () {
      var url = "";
      if (index === 0) {
        url = "https://codepen.io/ej2512/full/XWOegpJ"; // Memory Game URL
      } else if (index === 1) {
        url = "https://codepen.io/ej2512/pen/mdvgyoq"; // Spot the Difference URL
      } else if (index === 2) {
        url = "https://example.com/game3"; // Giant Dwarf URL
      }

      window.open(url, "_blank");
    });
  });
});
