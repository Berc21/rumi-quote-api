const express = require('express');


const port = process.env.PORT || 3000;


const quotes = [
"Let the beauty of what you love be what you do.",
"Everything that is made beautiful and fair and lovely is made for the eye of one who sees.",
"Don't grieve. Anything you lose comes round in another form.",
"Beauty surrounds us, but usually we need to be walking in a garden to know it.",
"The garden of love is green without limit and yields many fruits other than sorrow or joy. Love is beyond either condition: without spring, without autumn, it is always fresh.",
"May this marriage be full of laughter, our every day in paradise.",
"Listen! Clam up your mouth and be silent like an oyster shell, for that tongue of yours is the enemy of the soul, my friend. When the lips are silent, the heart has a hundred tongues.",
"The minute I heard my first love story, I started looking for you, not knowing how blind that was. Lovers don't finally meet somewhere. They're in each other all along.",
"We are born of love; Love is our mother.",
"Everyone has been made for some particular work, and the desire for that work has been put in every heart.",
"That which is false troubles the heart, but truth brings joyous tranquillity.",
"Grief can be the garden of compassion. If you keep your heart open through everything, your pain can become your greatest ally in your life's search for love and wisdom.",
"Woman is a ray of God. She is not that earthly beloved: she is creative, not created.",
"Your depression is connected to your insolence and refusal to praise.",
"Your task is not to seek for love, but merely to seek and find all the barriers within yourself that you have built against it.",
"Oh, bird of my soul, fly away now, For I possess a hundred fortified towers.",
"This is love: to fly toward a secret sky, to cause a hundred veils to fall each moment. First to let go of life. Finally, to take a step without feet.",
"May these vows and this marriage be blessed.",
"Why should I be unhappy? Every parcel of my being is in full bloom.",
"The moment I first heard love I gave up my soul, my heart, and my eyes",
"Through Love all that is bitter will be sweet, Through Love all that is copper will be gold, Through Love all dregs will become wine, through Love all pain will turn to medicine.",
"Love will find its way through all languages on its own.",
"It may be that the satisfaction I need depends on my going away, so that when I've gone and come back, I'll find it at home.",
"I am neither of the East nor of the West, no boundaries exist within my breast.",
"That which God said to the rose, and caused it to laugh in full-blown beauty, He said to my heart, and made it a hundred times more beautiful.",
"You know the value of every article of merchandise, but if you don't know the value of your own soul, it's all foolishness.",
"You left and I cried tears of blood. My sorrow grows. Its not just that You left. But when You left my eyes went with You. Now, how will I cry?",
"Sunlight fell upon the wall; the wall received a borrowed splendor. Why set your heart on a piece of earth, O simple one? Seek out the source which shines forever.",
"There are a thousand ways to kneel and kiss the ground; there are a thousand ways to go home again.",
"The gifts of lovers to one another are, in respect to love, nothing but forms; yet, they testify to invisible love.",
"If you find the mirror of the heart dull, the rust has not been cleared from its face.",
"When I die, I shall soar with angels, and when I die to the angels, what I shall become you cannot imagine.",
"There is an invisible strength within us; when it recognizes two opposing objects of desire, it grows stronger.",
"I have no companion but Love, no beginning, no end, no dawn. The Soul calls from within me: 'You, ignorant of the way of Love, set Me free.",
"Something opens our wings. Something makes boredom and hurt disappear. Someone fills the cup in front of us: We taste only sacredness.",
"When someone beats a rug, the blows are not against the rug, but against the dust in it.",
"However much I might try to expound or explain Love, when I come to Love itself, I am ashamed of my explanations... Love alone can explain the mysteries of love and lovers.",
"And so it is, that both the Devil and the angelic Spirit present us with objects of desire to awaken our power of choice.",
"Water, stories, the body, all the things we do, are mediums that hid and show what's hidden.",
"Plant the love of the holy ones within your spirit; don't give your heart to anything, but the love of those whose hearts are glad.",
"I have seen the king with a face of Glory, He who is the eye and the sun of heaven, He who is the companion and healer of all beings, He who is the soul and the universe that births souls.",
"Beg of God the removal of envy, that God may deliver you from externals, and bestow upon you an inward occupation, which will absorb you so that your attention is not drawn away.",
"You've come to know the fortunate and the inauspicious stars, but you don't know whether you yourself are fortunate or lucky.",
"What shall I say, O Muslims, I know not myself, I am neither a Christian, nor a Jew, nor a Zoroastrian, nor a Muslim.",
"This is the essence of all sciences - that you should know who you will be when the Day of Reckoning arrives.",
"The way the Beloved can fit in my heart, two thousand lives could fit in this body of mine. One kernel could contain a thousand bushels, and a hundred worlds pass through the eye of the needle."
]

const app = express();


app.get('/quotegi', (req, res) => {

  res.setHeader('Content-Type', 'application/json');
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  const randomQuoteIndex = Math.floor(Math.random()*quotes.length) ; 
  const quoteText = quotes[randomQuoteIndex];

  const quote = {
    author: "Rumi",
    quote: quoteText
  }

  res.send(quote);

});

app.listen(port, () =>{
  console.log(`Listening on port ${port}`);
});