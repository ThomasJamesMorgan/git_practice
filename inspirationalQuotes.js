const insQuote = () => {
    const randQuote = Math.floor(Math.random() * 3);
    switch (randQuote) {
      case 0:
        return 'You can do this!';
      case 1:
        return 'You\'re amazing!';
      case 2:
        return 'You\re the best!';
    }
  };
  
  console.log(insQuote());