var quotes = [
    { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
    { text: "Your time is limited, so don't waste it living someone else's life.", author: "Steve Jobs" },
    { text: "If life were predictable it would cease to be life, and be without flavor.", author: "Eleanor Roosevelt" },
    { text: "If you look at what you have in life, you'll always have more.", author: "Oprah Winfrey" },
    { text: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.", author: "James Cameron" },
    { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { text: "Spread love everywhere you go. Let no one ever come to you without leaving happier.", author: "Mother Teresa" },
    { text: "When you reach the end of your rope, tie a knot in it and hang on.", author: "Franklin D. Roosevelt" },
    { text: "Always remember that you are absolutely unique. Just like everyone else.", author: "Margaret Mead" },
    { text: "Don't judge each day by the harvest you reap but by the seeds that you plant.", author: "Robert Louis Stevenson" }
]

function getRandomQuote() {
    var quoteText = document.getElementById('quote');
    var quoteAuthor = document.getElementById('author');

    var randomIndex = Math.floor(Math.random() * quotes.length);
    var randomQuote = quotes[randomIndex];

    quoteText.textContent = `"${randomQuote.text}"`;
    quoteAuthor.textContent = `- ${randomQuote.author}`;
}


function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var message = document.getElementById('message');

    if (username === 'admin' && password === 'password') {
        message.textContent = 'Login successful!';
        message.style.color = 'green';
    } else {
        message.textContent = 'Invalid username or password.';
        message.style.color = 'red';
    }
}
