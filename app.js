const messages = [
  "Trust no one.",
  "Give into your emotions.",
  "Love more.",
  "Face what you are running from.",
  "Give less of you.",
  "Enjoy what you have right now.",
  "Forgive.",
  "Let go.",
  "Love more.",
  "Love less.",
  "Embrace change.",
  "Find strength.",
  "Live with intention.",
  "Listen twice as much as you speak.",
  "Believe in your potential.",
  "Value experiences over possessions.",
  "Take risks, for they lead to growth.",
  "Kindness is never wasted, even when it goes unnoticed.",
  "Learn from the past, but don't dwell on it.",
  "Choose empathy over apathy.",
  "Celebrate small victories along the way.",
  "Nourish your mind, body, and soul daily.",
  "Let go of grudges, they only weigh you down.",
  "Strive for progress, not perfection.",
  "Embrace solitude, it's where self-discovery begins.",
  "Be the light in someone's darkness.",
  "Practice patience, for great things take time.",
  "Speak your truth, even if your voice shakes.",
  "Find joy in the little things.",
  "Appreciate the beauty in simplicity.",
  "Take care of your inner world, for it shapes your outer world.",
  "Let your actions speak louder than your words.",
  "Cultivate a spirit of curiosity and wonder.",
  "Hold onto your dreams, for they are the blueprints of your reality.",
  "Seek knowledge and wisdom from every source.",
  "Remember, you are worthy of love and belonging.",
  "Embrace challenges as opportunities for growth.",
  "Create a life that reflects your values.",
  "Practice gratitude, even in difficult times.",
  "Choose kindness over being right.",
  "Let go of comparison, it steals your joy.",
  "Live in the moment, not in the past or future.",
  "Take care of your mental and emotional well-being.",
  "Find balance in all aspects of your life.",
  "Be the change you wish to see in the world.",
  "Treasure the relationships that bring positivity and support.",
];

const signs = [
  "Aries",
  "Taurus",
  "Gemini",
  "Cancer",
  "Leo",
  "Virgo",
  "Libra",
  "Scorpio",
  "Sagittarius",
  "Capricorn",
  "Aquarius",
  "Pisces",
];

const createMessage = () => {
  let result = "";
  const randMessage = messages[Math.floor(Math.random() * messages.length)];
  const randSign = signs[Math.floor(Math.random() * signs.length)];
  result = `Your sign today is: ${randSign} \nToday you should: ${randMessage}`;
  return result;
};

console.log(createMessage());
