(function () {
  // Step 3: Create the helloSpeaker object
  var helloSpeaker = {
    // Step 4: Attach the speak method to the helloSpeaker object
    speak: function(name) {
      var speakWord = "Hello";  // Define the variable inside the method scope
      console.log(speakWord + " " + name);
    }
  };

  // Step 5: Expose helloSpeaker object to the global scope
  window.helloSpeaker = helloSpeaker;  // Use 'window' to expose it globally
})();
