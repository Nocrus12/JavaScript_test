(function () {
  // Array of names
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  // helloSpeaker object with speak method
  var helloSpeaker = {
    speak: function(name) {
      console.log("Hello " + name);
    }
  };

  // byeSpeaker object with speak method
  var byeSpeaker = {
    speak: function(name) {
      console.log("Good Bye " + name);
    }
  };

  // Loop over the names array
  for (var i = 0; i < names.length; i++) {
    // Retrieve the first letter of the current name
    var firstLetter = names[i].charAt(0).toLowerCase();

    // Check if the first letter is 'j' or 'J'
    if (firstLetter === 'j') {
      byeSpeaker.speak(names[i]);  // Call byeSpeaker's speak method
    } else {
      helloSpeaker.speak(names[i]);  // Call helloSpeaker's speak method
    }
  }
})();
