if (annyang) {
  // Let's define a command.
  const commands = {
    'hello': () => { alert('Hello world!'); },
    'go to blog': () => { window.location.href = 'https://blog.marcusj.tech' },
    'ask (me) my *thing': (thing) => { prompt('What is your ' + thing + '?') },
    'search (for) *query': (query) => { window.location.href = 'https://google.com/search?q=' + query },
    'calculate :quarter stats': {'regexp': /^calculate (January|April|July|October) stats$/, 'callback': console.log},
  };

  // Add our commands to annyang
  annyang.addCommands(commands);

  annyang.addCallback('start', function() {
      document.getElementById('running').innerText = 'True';
  })
  annyang.addCallback('end', function() {
      document.getElementById('running').innerText = 'False';
  })

  annyang.addCallback('resultMatch', function(phrase, match, alt) {
      document.getElementById('phrase').innerText = phrase;
      document.getElementById('match').innerText = match;
      document.getElementById('alt').innerText = alt;
  })

  // Start listening.
  annyang.start();
}