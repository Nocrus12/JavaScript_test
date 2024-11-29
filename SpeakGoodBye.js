(function () {
  // Step 7: Create the byeSpeaker object
  var byeSpeaker = {
    // Step 8: Attach the speak method to the byeSpeaker object
    speak: function(name) {
      var speakWord = "Good Bye";  // Define the variable inside the method scope
      console.log(speakWord + " " + name);
    }
  };

  // Step 9: Expose the byeSpeaker object to the global scope
  window.byeSpeaker = byeSpeaker;  // Use 'window' to expose it globally
})();
