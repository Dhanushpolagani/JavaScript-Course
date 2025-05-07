function delayedGreeterCorrected(names) {
    for (var i = 0; i < names.length; i++) {
      (function(index) {
        setTimeout(function() {
          console.log(`Hello, ${names[index]}!`);
        }, index * 1000);
      })(i);
    }
  }
  