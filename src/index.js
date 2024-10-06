const homeButton = document.getElementById('homeButton');

const homePage = document.querySelector('.home-page');
const pageTwo = document.querySelector('.page-two');
const keaIntroduction = document.querySelector('.kea-introduction');
const sulfideAbyssTopic = document.querySelector('.sulfide-abyss-topic');
const creatureTopic = document.querySelector('.creature-topic');
const plantTopic = document.querySelector('.plant-topic');

const getStartedButton = document.querySelector('.get-started');
const nextButton = document.querySelector('.button-next');
const sulfideAbyssButton = document.querySelectorAll('.topic-button')[0];
const creaturesButton = document.querySelectorAll('.topic-button')[1];
const plantsButton = document.querySelectorAll('.topic-button')[2];

homeButton.addEventListener('click', function() {
    homePage.style.display = 'none';
    pageTwo.style.display = 'none';
    sulfideAbyssTopic.style.display = 'none';
    creatureTopic.style.display = 'none';
    plantTopic.style.display = 'none';

    keaIntroduction.style.display = 'block';
});

getStartedButton.addEventListener('click', function() {
  homePage.style.display = 'none';
  pageTwo.style.display = 'flex';
});

nextButton.addEventListener('click', function() {
    pageTwo.style.display = 'none';
    keaIntroduction.style.display = 'block';
  });

  sulfideAbyssButton.addEventListener('click', function() {
    keaIntroduction.style.display = 'none';
    sulfideAbyssTopic.style.display = 'flex';
  });

  creaturesButton.addEventListener('click', function() {
    keaIntroduction.style.display = 'none';
    creatureTopic.style.display = 'flex';
  });

  plantsButton.addEventListener('click', function() {
    keaIntroduction.style.display = 'none';
    plantTopic.style.display = 'block';
  });