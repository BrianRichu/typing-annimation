const titleText = "Why I Chose to Build Instead of Outsource";

const bodyText = `While running Jobri Collection, I reached a point where outsourcing web work stopped making sense.

Every update—layout changes, product adjustments, performance fixes—required external support. That dependency highlighted a gap I decided to close.

I transitioned into frontend web development to gain direct control over how my product is built and presented.

So far, I have:

Designed and developed a responsive landing page from scratch

Structured navigation that routes users toward a products page currently in progress

Applied modern HTML, CSS, and JavaScript practices with performance and usability in mind

This experience reshaped how I approach digital products—less as a business owner alone, more as a builder who understands both user experience and implementation.

I’m continuing to refine the project while actively deepening my frontend skill set.
`;

const titleEl = document.getElementById('title');
const contentEl = document.getElementById('content');

let titleIndex = 0;
let bodyIndex = 0;

function typeTitle() {
  if (titleIndex < titleText.length){
    titleEl.textContent += titleText.charAt(titleIndex);
    titleIndex++;
    setTimeout(typeTitle , 60)

  }else {
    setTimeout(typeBody , 400)
  }
  
}

function typeBody(){
if (bodyIndex < bodyText.length) {
  contentEl.textContent += bodyText.charAt(bodyIndex);
  bodyIndex++;
  setTimeout(typeBody , 60)
  
}
}

typeTitle()