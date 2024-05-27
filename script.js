
let lastScrollTop = 20;

window.addEventListener('scroll', function() {
    const svgContainer = document.querySelector('.svg-container');
    const svgElement = document.getElementById('mySVG');
    const navButtons = document.querySelector('.navbar');
    const outputDiv = document.getElementById('output');
    const wordDiv = document.getElementById('word');
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop < 200) {
        if (scrollTop < lastScrollTop) {
            document.body.classList.add('scrolled-up');
            svgElement.src = 'logo.svg';
            svgContainer.style.top = '44.5%';
            svgContainer.style.left = '48.5%';
            svgContainer.style.transform = 'translate(-50%, -50%)';
            svgContainer.style.width = '250px';
            svgContainer.style.height = '22px';
            navButtons.style.display = 'none';
            //outputDiv.style.display = 'block';
            wordDiv.style.fontSize = '28px';
            
        } else {
            document.body.classList.remove('scrolled-up');
            svgElement.src = 'navlogo.svg';
            svgContainer.style.top = '10px';
            svgContainer.style.left = '50px';
            svgContainer.style.transform = 'translate(0, 0)';
            svgContainer.style.width = '250px';
            svgContainer.style.height = '26px';
            navButtons.style.display = 'block';
            //outputDiv.style.display = 'none';
            wordDiv.style.fontSize = '14px';
            
        }
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});


function printSentenceWithBlinking(sentences) {
    const output = document.getElementById("word");
    let sentenceIndex = 0;
    let index = 0;
    let printInterval;
    function printWithBlinkingUnderscore() {
      const currentSentence = sentences[sentenceIndex];
      printInterval = setInterval(() => {
        if (index <= currentSentence.length) {
          if (index < currentSentence.length) {
            output.innerHTML = currentSentence.substring(0, index) + '<span class="blink">_</span>';
          } else {
            output.innerHTML = currentSentence.substring(0, index); // Ensure the full sentence is displayed before backspacing
          }
          index++;
        } else {
          clearInterval(printInterval);
          setTimeout(() => {
            removeBackward(currentSentence);
          }, 500); // Delay before backspacing starts
        }
      }, 200); // Adjust interval for faster printing
    }
    function removeBackward(sentence) {
      printInterval = setInterval(() => {
        if (index >= 0) {
          output.innerHTML = sentence.substring(0, index) + '<span class="blink">_</span>';
          index--;
        } else {
          clearInterval(printInterval);
          // Move to the next sentence
          sentenceIndex++;
          if (sentenceIndex >= sentences.length) {
            sentenceIndex = 0; // Reset to the first sentence
          }
          setTimeout(() => {
            index = 0;
            printWithBlinkingUnderscore(); // Print the next sentence
          }, 1000); // Delay before printing the next sentence
        }
      }, 100); // Adjust interval for faster backspacing
    }
  
    printWithBlinkingUnderscore(); // Start the initial printing
  }
  
  const sentences = [
    "CU_Jharkhand",
    "Let's go out of the CodeSpace"
    
    // Add more sentences as needed
  ];
  
  printSentenceWithBlinking(sentences); // Call the function with the array of sentences
  
//navigation
//for responsive navbar
function toggleNav() {
    var nav = document.getElementById("myNav");
    var bars = document.querySelector('.container');
    
    // Toggle navigation visibility
    if (nav.style.display === "block") {
        nav.style.display = "none";
        bars.classList.remove("change");
    } else {
        nav.style.display = "block";
        bars.classList.add("change");
    }
}

// Reset navigation when a link is clicked
document.addEventListener('click', function(event) {
    var nav = document.getElementById("myNav");
    var bars = document.querySelector('.container');

    // Check if the clicked element is a link within the navigation
    if (event.target.tagName.toLowerCase() === 'a' && nav.contains(event.target)) {
        nav.style.display = "none";
        bars.classList.remove("change");
    }
});
