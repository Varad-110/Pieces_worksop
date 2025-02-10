const facts = [
    "This ain't your average code monkey!  Not only can they whip up a website faster than you can say 'React JS,' but they're also a tabla-playing maestro! That's right, they've been serenading the world with rhythmic beats since the tender age of seven.",
    "Mountains? Conquered! This adventurous soul practically lives in the Sahyadri mountain range, trekking every few months like it's a casual stroll in the park.",
    "Fashion-forward techie? You bet! They may speak the language of Java and NetBeans, but their heart secretly yearns for the world of fashion design.",
    "Prepare to be schooled in the art of debate! Armed with logic as sharp as a tack, this individual could out-debate a room full of philosophers.",
    "Riding in style on a maroon steed!  Forget chariots, this modern-day knight navigates the world astride a majestic maroon Royal Enfield Hunter 350.",
    "Unlocking the secrets of Sanskrit! 🇮🇳  Here's a fun fact that's as rare as a unicorn wearing a monocle - they're into lyrical translations of poetry into Sanskrit!",
    "Stage presence? Check!  From tech talks to JavaFX tutorials, this individual owns the stage like a rockstar."
  ];
  
  let currentFactIndex = 0;
  
  function showNextFact() {
    document.getElementById("fact-display").innerText = facts[currentFactIndex];
    currentFactIndex = (currentFactIndex + 1) % facts.length;
  }
  