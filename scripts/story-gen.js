const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = ':startingLine:. It was a monday, when annoyed by a tantrum. She left the house. What she did not understood back then, :insertx: :inserty: :insertz:';
let insertX = ['that life is a never ending cycle of obtaining knowledge.','that we only value things once they are lost.','that things with value are always not cared for until they are lost.'];
let insertY = ['She wanted to ask, why? Why must our heads be empty when we are borned?','She wanted to curse the gods, why are they born with such low intellect.','She was annoyed that she did not know about it.'];
let insertZ = ['Nights went by as she ate what she packed and went around, thinking for an answer. With no results she gave up and left for a journey...','After days of thinking while being stranded, she gave up and decided that its best to ask those who have lived longer than me. Thus her journey started, with one that would leave many dumbfounded... ','In the end, there is no answer. Thats why the humans have intellect. We must find it ourselves. And so she embarked on a journey...'];
let startingLine = ['Life is often disappointing', 'Life is hard.', 'Life is extremely harsh.', 'Is life its own entity? If not, why is it so harsh?']
randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);
  let startingLineItem = randomValueFromArray(startingLine);

  console.log(startingLineItem)

  newStory = newStory.replace(':startingLine:',startingLineItem);
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Aline',name);
  }

  story.textContent = newStory;
}
