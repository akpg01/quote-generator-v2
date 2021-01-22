const quotes = [
  {
    text:
      "I decided to pursue music, so I dropped out of school and I told my parents I didn't want any money from them. I got three jobs and I just hit the ground running.",
    author: "Lady Gaga",
    tag: "money",
  },
  {
    text:
      "My mom grew up in Kansas, my dad in Indiana. They had boring childhoods.",
    author: "Hunter Parrish",
    tag: "mom",
  },
  {
    text:
      "Solitude gives birth to the original in us, to beauty unfamiliar and perilous - to poetry. But also, it gives birth to the opposite: to the perverse, the illicit, the absurd.",
    author: "Thomas Mann",
    tag: "beauty",
  },
  {
    text:
      "To drive an F1 car you have to be a little mad. On the morning of a race there's a mix of excitement and fear. If it's a wet track, then it's worse as you're not in control most of the time, which is the thing all drivers fear the most.",
    author: "Jenson Button",
    tag: "morning",
  },
  {
    text: "I've had two terrific relationships, but both ended in marriage.",
    author: "Jane Seymour",
    tag: "marriage",
  },
  {
    text:
      "All significant truths are private truths. As they become public they cease to become truths they become facts, or at best, part of the public character or at worst, catchwords.",
    author: "T. S. Eliot",
    tag: "best",
  },
  {
    text:
      "The beauty of the world, which is so soon to perish, has two edges, one of laughter, one of anguish, cutting the heart asunder.",
    author: "Virginia Woolf",
    tag: "beauty",
  },
  {
    text:
      "Man as an individual is a genius. But men in the mass form the headless monster, a great, brutish idiot that goes where prodded.",
    author: "Charlie Chaplin",
    tag: "men",
  },
  {
    text: "Of all the home remedies, a good wife is best.",
    author: "Kin Hubbard",
    tag: "best",
  },
  {
    text: "And beauty immortal awakes from the tomb.",
    author: "James Beattie",
    tag: "beauty",
  },
  {
    text:
      "It seems almost backwards to me that my music seems the more emotional outlet, and the art stuff seems more about ideas.",
    author: "David Byrne",
    tag: "music",
  },
  {
    text:
      "You know what your problem is, it's that you haven't seen enough movies - all of life's riddles are answered in the movies.",
    author: "Steve Martin",
    tag: "movies",
  },
  {
    text:
      "We are at our very best, and we are happiest, when we are fully engaged in work we enjoy on the journey toward the goal we've established for ourselves. It gives meaning to our time off and comfort to our sleep. It makes everything else in life so wonderful, so worthwhile.",
    author: "Earl Nightingale",
    tag: "best",
  },
  {
    text: "I pray daily... for peace.",
    author: "Paul O'Neill",
    tag: "peace",
  },
  {
    text: "I love being in a relationship, but marriage isn't for me.",
    author: "Arsenio Hall",
    tag: "marriage",
  },
  {
    text:
      "Success or failure depends more upon attitude than upon capacity successful men act as though they have accomplished or are enjoying something. Soon it becomes a reality. Act, look, feel successful, conduct yourself accordingly, and you will be amazed at the positive results.",
    author: "William James",
    tag: "attitude",
  },
  {
    text:
      "Passion makes idiots of the cleverest men, and makes the biggest idiots clever.",
    author: "Francois de La Rochefoucauld",
    tag: "men",
  },
  {
    text: "Life deprived of beauty is not worthy of being called human.",
    author: "Luis Barragan",
    tag: "beauty",
  },
  {
    text:
      "I think the institute of marriage is a noble thing. The idea of a partner for life is incredibly romantic. But now we're living to 100. A hundred years ago people were dying at age 37. Til death do us part was a much different deal.",
    author: "Debra Messing",
    tag: "marriage",
  },
  {
    text:
      "Some people think having large breasts makes a woman stupid. Actually, it's quite the opposite: a woman having large breasts makes men stupid.",
    author: "Rita Rudner",
    tag: "men",
  },
  {
    text:
      "Money is always there but the pockets change it is not in the same pockets after a change, and that is all there is to say about money.",
    author: "Gertrude Stein",
    tag: "money",
  },
  {
    text: "I do not wish women to have power over men but over themselves.",
    author: "Mary Wollstonecraft Shelley",
    tag: "men",
  },
  {
    text:
      "Anyhow, a philosophical turn of thought now was not amiss, else one's patience would have given out almost at the harbour entrance. The term of her probation was eight days.",
    author: "Joshua Slocum",
    tag: "patience",
  },
  {
    text:
      "Every day I've got to be thankful that I am alive, and you never know - the cliche is, I guess, you could get hit by a bus tomorrow, so you'd better be at peace with whatever you got going at the moment.",
    author: "Joseph Gordon-Levitt",
    tag: "peace",
  },
  {
    text:
      "Nature is indifferent to the survival of the human species, including Americans.",
    author: "Adlai E. Stevenson",
    tag: "nature",
  },
  {
    text:
      "It is not easy to see how the more extreme forms of nationalism can long survive when men have seen the Earth in its true perspective as a single small globe against the stars.",
    author: "Arthur C. Clarke",
    tag: "patriotism",
  },
  {
    text:
      "Many will view the compromises that will be made during your negotiations as painful concessions. But why not view them as peace offerings, ones that will provide in return the priceless gifts of hope, security and freedom for our children and our children's?",
    author: "King Abdullah II",
    tag: "peace",
  },
  {
    text:
      "That strong mother doesn't tell her cub, Son, stay weak so the wolves can get you. She says, Toughen up, this is reality we are living in.",
    author: "Lauryn Hill",
    tag: "mom",
  },
  {
    text:
      "I eat as much as the next girl, but I work my butt of in the gym every morning! The key is moderation. I splurge on the weekend. A big bowl of pasta and a delicious slice of cake for dessert are my favorites.",
    author: "Giuliana Rancic",
    tag: "morning",
  },
  {
    text:
      "A guy is a lump like a doughnut. So, first you gotta get rid of all the stuff his mom did to him. And then you gotta get rid of all that macho crap that they pick up from beer commercials. And then there's my personal favorite, the male ego.",
    author: "Roseanne Barr",
    tag: "mom",
  },
  {
    text:
      "Marriage has historically been in the domain of the States to regulate.",
    author: "Corrine Brown",
    tag: "marriage",
  },
  {
    text:
      "My mom was a waitress, and my dad was a plumber who worked for the City of San Clemente fixing mains breaks, so not too glamorous.",
    author: "Shaun White",
    tag: "mom",
  },
  {
    text:
      "When you become a mom you just learn how to function sleep deprived and you do get used to it. I came back to work when Finley was three months old and the first few months were rough. Then somehow you learn to exist on no sleep and now when he does upon occasion sleep through the night, which is like a full six hours, you're pretty sure he's suffocating. So you don't sleep anyway.",
    author: "Holly Marie Combs",
    tag: "mom",
  },
  {
    text:
      "I may be as bad as the worst, but, thank God, I am as good as the best.",
    author: "Walt Whitman",
    tag: "best",
  },
  {
    text:
      "Peace is not made at the council table or by treaties, but in the hearts of men.",
    author: "Herbert Hoover",
    tag: "peace",
  },
  {
    text:
      "Men take only their needs into consideration - never their abilities.",
    author: "Napoleon Bonaparte",
    tag: "men",
  },
  {
    text:
      "The vote is the most powerful instrument ever devised by man for breaking down injustice and destroying the terrible walls which imprison men because they are different from other men.",
    author: "Lyndon B. Johnson",
    tag: "men",
  },
  {
    text:
      "I was going to have cosmetic surgery until I noticed that the doctor's office was full of portraits by Picasso.",
    author: "Rita Rudner",
    tag: "medical",
  },
  {
    text:
      "It is not so much for its beauty that the forest makes a claim upon men's hearts, as for that subtle something, that quality of air that emanation from old trees, that so wonderfully changes and renews a weary spirit.",
    author: "Robert Louis Stevenson",
    tag: "beauty",
  },
  {
    text:
      "We're here to bring beauty to the world and make a difference in this planet. That's what art forms are about.",
    author: "Charlie Haden",
    tag: "beauty",
  },
  {
    text:
      "Massachusetts children cannot only lead the nation in test scores, they can be competitive with the best in the world. And the gap in achievement among races can virtually disappear.",
    author: "Mitt Romney",
    tag: "best",
  },
  {
    text:
      "I'm a mom - I'm lucky if I get to shower in the morning. Luckily, nail polish stays on my toes. I've been so bad on the upkeep, though.",
    author: "Idina Menzel",
    tag: "mom",
  },
  {
    text:
      "I have a big problem with piped music. I like either silence or to listen to it properly.",
    author: "Sting",
    tag: "music",
  },
  {
    text:
      "Only free men can negotiate prisoners cannot enter into contracts. Your freedom and mine cannot be separated.",
    author: "Nelson Mandela",
    tag: "men",
  },
  {
    text:
      "These things bring you to reality as to how fragile you are at the same moment you are doing something that nobody else is able to do. The same moment that you are seen as the best, the fastest and somebody that cannot be touched, you are enormously fragile.",
    author: "Ayrton Senna",
    tag: "best",
  },
  {
    text:
      "This film cost $31 million. With that kind of money I could have invaded some country.",
    author: "Clint Eastwood",
    tag: "movies",
  },
  {
    text:
      "I come into the peace of wild things who do not tax their lives with forethought of grief... For a time I rest in the grace of the world, and am free.",
    author: "Wendell Berry",
    tag: "peace",
  },
  {
    text: "We are anthill men upon an anthill world.",
    author: "Ray Bradbury",
    tag: "men",
  },
  {
    text:
      "I don't like comedy. I like funny things. I don't like comedy. Like, comedy movies are just, 'Oh Jesus.'",
    author: "Louis C. K.",
    tag: "movies",
  },
  {
    text:
      "You call to a dog and a dog will break its neck to get to you. Dogs just want to please. Call to a cat and its attitude is, 'What's in it for me?'",
    author: "Lewis Grizzard",
    tag: "attitude",
  },
  {
    text:
      "People don't associate red hair, pale skin, and freckles with beauty.",
    author: "Shirley Manson",
    tag: "beauty",
  },
  {
    text:
      "My mother stopped working when she had my brother. She was a full time mom until I started getting heavily into ice skating lessons, and it got to the point where they really needed my mom to earn an income.",
    author: "Dorothy Hamill",
    tag: "mom",
  },
  {
    text:
      "Peace is not the absence of war, but a virtue based on strength of character.",
    author: "Baruch Spinoza",
    tag: "peace",
  },
  {
    text:
      "They teach you there's a boundary line to music. But, man, there's no boundary line to art.",
    author: "Charlie Parker",
    tag: "music",
  },
  {
    text:
      "Ideas devour the ages as men are devoured by their passions. When man is cured, human nature will cure itself perhaps.",
    author: "Honore de Balzac",
    tag: "men",
  },
  {
    text:
      "Ideas devour the ages as men are devoured by their passions. When man is cured, human nature will cure itself perhaps.",
    author: "Honore de Balzac",
    tag: "men",
  },
  {
    text:
      "From their experience or from the recorded experience of others (history), men learn only what their passions and their metaphysical prejudices allow them to learn.",
    author: "Aldous Huxley",
    tag: "men",
  },
  {
    text:
      "People in Oklahoma don't wake up every morning wondering what the government is going to do for them.",
    author: "Mick Cornett",
    tag: "morning",
  },
  {
    text: "Of all the home remedies, a good wife is best.",
    author: "Kin Hubbard",
    tag: "best",
  },
  {
    text:
      "My movies just kind of sneak up on you. I don't have to worry too much about what everybody is going to say. Anyway, I really don't pay attention to what the world says about my movies. I just care about what my buddies think.",
    author: "Adam Sandler",
    tag: "movies",
  },
  {
    text:
      "In the beginning there was the word. The word was Jah. The word is in I, Jah is in I. I make what is good, better, and what is better, best. I follow this in every aspect of life.",
    author: "Peter Tosh",
    tag: "best",
  },
  {
    text:
      "Country was about character. Country's changed because of monsters like Clear Channel who bought up all the stations and sliced them up into formats. Our demographic is now the soccer mom.",
    author: "Gary Allan",
    tag: "mom",
  },
  {
    text:
      "My mom can't defend herself to the world. She is such an amazing woman, with such an open heart. It's a real hard line, and I crossed it. I took everyone's life story and assumed it would be a great thing to put on screen. I was being selfish and I feel so horrible about it. I feel so guilty.",
    author: "Nikki Reed",
    tag: "mom",
  },
  {
    text:
      "For, when with beauty we can virtue join, We paint the semblance of a form divine.",
    author: "Matthew Prior",
    tag: "beauty",
  },
  {
    text:
      "My philosophy is that not only are you responsible for your life, but doing the best at this moment puts you I the best place for the next moment.",
    author: "Oprah Winfrey",
    tag: "best",
  },
  {
    text: "Those movies sure got me into a rut.",
    author: "Elvis Presley",
    tag: "movies",
  },
  {
    text: "My everyday beauty routine is always rushed and pretty simple.",
    author: "Cate Blanchett",
    tag: "beauty",
  },
  {
    text:
      "Wigs have always been a part of my life and have become a staple accessory in my closet. I can remember being a little girl and hearing all the commotion in my house from my mom, aunts and grandmother when picking out their wigs for the day. It was such a good time for them and part of their everyday beauty routine.",
    author: "Sherri Shepherd",
    tag: "mom",
  },
  {
    text:
      "The mother-child relationship is paradoxical and, in a sense, tragic. It requires the most intense love on the mother's side, yet this very love must help the child grow away from the mother, and to become fully independent.",
    author: "Erich Fromm",
    tag: "mom",
  },
  {
    text:
      "Let us not deceive ourselves we must elect world peace or world destruction.",
    author: "Bernard Baruch",
    tag: "peace",
  },
  {
    text: "Beauty comes from the inside.",
    author: "Kathy Ireland",
    tag: "beauty",
  },
  {
    text:
      "When I was a little girl, rocking my little dolls, I remember thinking I would be the world's best mom, and so far I've done it.",
    author: "Jenny McCarthy",
    tag: "mom",
  },
  {
    text:
      "Regarding life, the wisest men of all ages have judged alike: it is worthless.",
    author: "Friedrich Nietzsche",
    tag: "men",
  },
  {
    text:
      "If civilization is to survive, we must cultivate the science of human relationships - the ability of all peoples, of all kinds, to live together, in the same world at peace.",
    author: "Franklin D. Roosevelt",
    tag: "peace",
  },
  {
    text:
      "I slept and dreamt that life was beauty I woke and found that life was duty.",
    author: "George Byron",
    tag: "beauty",
  },
  {
    text:
      "'Thank you' is the best prayer that anyone could say. I say that one a lot. Thank you expresses extreme gratitude, humility, understanding.",
    author: "Alice Walker",
    tag: "best",
  },
  {
    text:
      "I will make action movies, I think, for a few more years, another five years.",
    author: "Jackie Chan",
    tag: "movies",
  },
  {
    text:
      "An American monkey, after getting drunk on brandy, would never touch it again, and thus is much wiser than most men.",
    author: "Charles Darwin",
    tag: "men",
  },
  {
    text:
      "Americans admire a people who can scratch a desert and produce a garden. The Israelis have shown qualities that Americans identify with: guts, patriotism, idealism, a passion for freedom. I have seen it. I know. I believe that.",
    author: "Richard M. Nixon",
    tag: "patriotism",
  },
  {
    text: "We must return to nature and nature's god.",
    author: "Luther Burbank",
    tag: "nature",
  },
  {
    text: "You know, there were major problems in my marriage.",
    author: "Hulk Hogan",
    tag: "marriage",
  },
  {
    text:
      "You don't appreciate a lot of stuff in school until you get older. Little things like being spanked every day by a middle-aged woman: Stuff you pay good money for in later life.",
    author: "Emo Philips",
    tag: "money",
  },
  {
    text:
      "There is something terribly morbid in the modern sympathy with pain. One should sympathise with the colour, the beauty, the joy of life. The less said about life's sores the better.",
    author: "Oscar Wilde",
    tag: "beauty",
  },
  {
    text:
      "It's such a luxury to be able to be happy about going to work in the morning.",
    author: "Joe Pantoliano",
    tag: "morning",
  },
  {
    text:
      "The means by which we live have outdistanced the ends for which we live. Our scientific power has outrun our spiritual power. We have guided missiles and misguided men.",
    author: "Martin Luther King, Jr.",
    tag: "men",
  },
  {
    text:
      "When women hold off from marrying men, we call it independence. When men hold off from marrying women, we call it fear of commitment.",
    author: "Warren Farrell",
    tag: "men",
  },
  {
    text:
      "The principle that human nature, in its psychological aspects, is nothing more than a product of history and given social relations removes all barriers to coercion and manipulation by the powerful.",
    author: "Noam Chomsky",
    tag: "nature",
  },
  {
    text:
      "Sometimes, if you don't have kids yourself, it's assumed you won't understand or know how to play a mom, which is kind of silly if you think about it.",
    author: "Tricia Helfer",
    tag: "mom",
  },
  {
    text:
      "The root of all superstition is that men observe when a thing hits, but not when it misses.",
    author: "Francis Bacon",
    tag: "men",
  },
  {
    text:
      "If you want total security, go to prison. There you're fed, clothed, given medical care and so on. The only thing lacking... is freedom.",
    author: "Dwight D. Eisenhower",
    tag: "medical",
  },
  {
    text:
      "Live as brave men and if fortune is adverse, front its blows with brave hearts.",
    author: "Marcus Tullius Cicero",
    tag: "men",
  },
  {
    text:
      "There's already a marriage clock, a career clock, a biological clock. Sometimes being a woman feels like standing in the lobby of a hotel, looking at the dials depicting every time zone in the world behind the front desk - except they all apply to you, and all at once.",
    author: "Sloane Crosley",
    tag: "marriage",
  },
  {
    text:
      "Jews have had to carry around their own sense of self in a carpet bag and I think perhaps too much emphasis might be being put on nationality and on the other hand patriotism, that sort of thing.",
    author: "Janet Suzman",
    tag: "patriotism",
  },
  {
    text:
      "Men and women of every faith and good people with none at all sincerely strive to do right and lead a purpose-driven life.",
    author: "Mitt Romney",
    tag: "men",
  },
  {
    text:
      "Pride is still aiming at the best houses: Men would be angels, angels would be gods. Aspiring to be gods, if angels fell aspiring to be angels men rebel.",
    author: "Alexander Pope",
    tag: "best",
  },
  {
    text:
      "I do not believe in a fate that falls on men however they act but I do believe in a fate that falls on them unless they act.",
    author: "Buddha",
    tag: "men",
  },
  {
    text:
      "There is both a skill factor and an effort factor in dream recall. People can develop dream recall skills, such as lying still in the morning and writing down whatever comes to mind.",
    author: "Henry Reed",
    tag: "morning",
  },
  {
    text:
      "What is different is I am giving the kids a chance to train every day. Not only once a day, but sometimes when they do not have school, we will try to do something in the morning too.",
    author: "Thomas Dooley",
    tag: "morning",
  },
  {
    text: "My mom and I are very close.",
    author: "Lady Gaga",
    tag: "mom",
  },
  {
    text:
      "Acting is still, of course, what I love to do most. The beauty of it is that by changing characters, it never gets boring.",
    author: "Christopher Lambert",
    tag: "beauty",
  },
  {
    text:
      "There we times when everybody in the house has the flu. You're cleaning up vomit and it's 2 in the morning, and you're wishing there was somebody else there to help you.",
    author: "Meg Tilly",
    tag: "morning",
  },
  {
    text:
      "Everyone is interested in war, in that people don't want it to happen. I'm much more interested in peace than in war but it's important to understand why we fight.",
    author: "Michael Morpurgo",
    tag: "peace",
  },
  {
    text:
      "There is something good in all seeming failures. You are not to see that now. Time will reveal it. Be patient.",
    author: "Sivananda",
    tag: "patience",
  },
  {
    text:
      "Well, you know what? The actor still gets up in the morning, if he's still got something to work with, you go out there and you do it. Never quit!",
    author: "Robert Forster",
    tag: "morning",
  },
  {
    text: "Alcohol gives you infinite patience for stupidity.",
    author: "Sammy Davis, Jr.",
    tag: "patience",
  },
  {
    text:
      "When you look at Japanese traditional architecture, you have to look at Japanese culture and its relationship with nature. You can actually live in a harmonious, close contact with nature - this very unique to Japan.",
    author: "Tadao Ando",
    tag: "nature",
  },
  {
    text:
      "Success or failure depends more upon attitude than upon capacity successful men act as though they have accomplished or are enjoying something. Soon it becomes a reality. Act, look, feel successful, conduct yourself accordingly, and you will be amazed at the positive results.",
    author: "William James",
    tag: "men",
  },
  {
    text:
      "The bill would ban human cloning, and any attempts at human cloning, for both reproductive purposes and medical research. Also forbidden is the importing of cloned embryos or products made from them.",
    author: "Ken Calvert",
    tag: "medical",
  },
  {
    text:
      "I got a call this morning, and it was from Nancy Kerrigan, wishing me luck. She wished me luck and sent me all her good wishes.",
    author: "Michelle Kwan",
    tag: "morning",
  },
  {
    text:
      "Grand opera is the most powerful of stage appeals and that almost entirely through the beauty of music.",
    author: "John Philip Sousa",
    tag: "beauty",
  },
  {
    text:
      "Unfortunately, the attitude of many towards the press, humanitarians included and especially government workers, is often one of suspicion, if not outright fear.",
    author: "Alvin Adams",
    tag: "attitude",
  },
  {
    text:
      "Of all the songs I've recorded, 'Amarillo By Morning' always sticks out in my mind.",
    author: "George Strait",
    tag: "morning",
  },
  {
    text:
      "A few years ago I lost 30 pounds, and people still wanted to criticize. And honestly, I'm happy with myself if I'm a little heavier. I realized: 'Why am I trying to conform to someone else's idea of beauty?' I think I'm beautiful either way.",
    author: "Khloe Kardashian",
    tag: "beauty",
  },
  {
    text:
      "When you're suddenly pregnant and no one is standing by your side, even if you're in your 30s, it's a hard conversation. I'm a traditional girl, and I believe in marriage, and I just always thought that's the way I'd be doing this.",
    author: "Bridget Moynahan",
    tag: "marriage",
  },
  {
    text:
      "I just want to continue to break barriers and to show the industry and the world that beauty is diverse, and you don't have to be a certain stereotype to be beautiful.",
    author: "Joan Smalls",
    tag: "beauty",
  },
  {
    text:
      "I created the Women's Federation for World Peace in order to restore all that woman originally lost. You American women don't need a man in the position of grandfather, parents, husband, elder or younger brother. You only need the true Adam.",
    author: "Sun Myung Moon",
    tag: "peace",
  },
  {
    text: "My beauty icons are women whose images are self-created.",
    author: "Dita Von Teese",
    tag: "beauty",
  },
  {
    text:
      "I will make action movies, I think, for a few more years, another five years.",
    author: "Jackie Chan",
    tag: "movies",
  },
  {
    text:
      "Any fact facing us is not as important as our attitude toward it, for that determines our success or failure. The way you think about a fact may defeat you before you ever do anything about it. You are overcome by the fact because you think you are.",
    author: "Norman Vincent Peale",
    tag: "attitude",
  },
  {
    text:
      "Guilt for being rich, and guilt thinking that perhaps love and peace isn't enough and you have to go and get shot or something.",
    author: "John Lennon",
    tag: "peace",
  },
  {
    text: "And in movies you must be a gambler. To produce films is to gamble.",
    author: "Douglas Sirk",
    tag: "movies",
  },
  {
    text: "Everything I learned I learned from the movies.",
    author: "Audrey Hepburn",
    tag: "movies",
  },
  {
    text: "Peace hath higher tests of manhood, than battle ever knew.",
    author: "John Greenleaf Whittier",
    tag: "peace",
  },
  {
    text:
      "I'm done with men... I'm going to be alone. I have no luck with relationships. I don't think I'm made for marriage.",
    author: "Halle Berry",
    tag: "men",
  },
  {
    text: "I guess John Lennon had it right: give peace a chance.",
    author: "Chris O'Donnell",
    tag: "peace",
  },
  {
    text: "By nature, men love newfangledness.",
    author: "Geoffrey Chaucer",
    tag: "nature",
  },
  {
    text: "Have patience with all things, But, first of all with yourself.",
    author: "Saint Francis de Sales",
    tag: "patience",
  },
  {
    text:
      "It's not so much about killing an animal, it's being at peace and you don't have to worry about all the other things that go on. That's a couple of hours a week that you get to escape but it's nice to do that.",
    author: "Brett Favre",
    tag: "peace",
  },
  {
    text:
      "The newspaper is a marvelous medium. It is extraordinarily convenient and cheap. Let's see. This one cost 75 cents. Now that's a little high. I bought it when I was downtown this morning.",
    author: "Harrison Salisbury",
    tag: "morning",
  },
  {
    text:
      "An educated person is one who has learned that information almost always turns out to be at best incomplete and very often false, misleading, fictitious, mendacious - just dead wrong.",
    author: "Russell Baker",
    tag: "best",
  },
  {
    text:
      "Men of ill judgment ignore the good that lies within their hands, till they have lost it.",
    author: "Sophocles",
    tag: "men",
  },
  {
    text:
      "I'd love to have First Lady Michelle Obama over and ask, 'How do you make your marriage work?' I think the president is sexy as all get-out, but he has got to get on her nerves some kind of way. He's this wonderful, powerful man, but she sees him leaving his socks on the floor.",
    author: "Sherri Shepherd",
    tag: "marriage",
  },
  {
    text:
      "Never cut a tree down in the wintertime. Never make a negative decision in the low time. Never make your most important decisions when you are in your worst moods. Wait. Be patient. The storm will pass. The spring will come.",
    author: "Robert H. Schuller",
    tag: "patience",
  },
  {
    text:
      "Mom and Dad were married 64 years. And if you wondered what their secret was, you could have asked the local florist - because every day Dad gave Mom a rose, which he put on her bedside table. That's how she found out what happened on the day my father died - she went looking for him because that morning, there was no rose.",
    author: "Mitt Romney",
    tag: "mom",
  },
  {
    text:
      "The work is with me when I wake up in the morning it is with me while I eat my breakfast in bed and run through the newspaper, while I shave and bathe and dress.",
    author: "C. S. Forester",
    tag: "morning",
  },
  {
    text:
      "Men don't and can't live by exchanging articles, but by producing them. They don't live by trade, but by work. Give up that foolish and vain title of Trades Unions and take that of laborers Unions.",
    author: "John Ruskin",
    tag: "men",
  },
  {
    text:
      "I have never met anyone who did not support our troops. Sometimes, however, we hear accusations that someone or some group does not support the men and women serving in our Armed Forces. But this is pure demagoguery, and it is intellectually dishonest.",
    author: "Ron Paul",
    tag: "men",
  },
  {
    text:
      "My marriage was breaking up, and my marriage with Chong was breaking up. I had to come back and kind of start on my own again.",
    author: "Cheech Marin",
    tag: "marriage",
  },
  {
    text:
      "Good production is like a beautiful marriage. It makes a happy home.",
    author: "Timbaland",
    tag: "marriage",
  },
  {
    text:
      "The United Nations will be at the heart of our international activities. France will assume its full responsibilities at the Security Council by putting its status at the service of peace, respect for human rights and development.",
    author: "Francois Hollande",
    tag: "peace",
  },
  {
    text: "So, where's the Cannes Film Festival being held this year?",
    author: "Christina Aguilera",
    tag: "movies",
  },
  {
    text:
      "No candidate can win a presidential race advocating gay marriage and opposing the military action in Iraq.",
    author: "Dick Morris",
    tag: "marriage",
  },
  {
    text:
      "It was so quiet that morning in Paris that the heels of my two companions and myself were loud on the deserted pavements. It was a city of shuttered shops, and barred windows, and deserted avenues.",
    author: "Philip Gibbs",
    tag: "morning",
  },
  {
    text:
      "We busted a lot of family secrets with this. But to make a long story short, my parents relationship was built heavily on security issues for my Mom, and when my Dad couldn't provide security, the relationship unraveled.",
    author: "Kenny Loggins",
    tag: "mom",
  },
  {
    text:
      "My mom taught me to go after my dreams. I have this faith in myself that I must have gotten from her.",
    author: "Amy Jo Johnson",
    tag: "mom",
  },
  {
    text: "Patience and Diligence, like faith, remove mountains.",
    author: "William Penn",
    tag: "patience",
  },
  {
    text:
      "In the last year my wife has noticed me struggling to get downstairs on a Sunday morning. I've two young children and football has been so good to me over the years I don't want to spoil it.",
    author: "Graeme Le Saux",
    tag: "morning",
  },
  {
    text:
      "Lord, Bless our enemies have mercy upon them, may they turn their course and let us alone, and let us live in peace at our homes in our own native land.",
    author: "William Pennington",
    tag: "peace",
  },
  {
    text:
      "If someone thinks that love and peace is a cliche that must have been left behind in the Sixties, that's his problem. Love and peace are eternal.",
    author: "John Lennon",
    tag: "peace",
  },
  {
    text: "I am easily satisfied with the very best.",
    author: "Winston Churchill",
    tag: "best",
  },
  {
    text:
      "Over the last four years, I've made a habit of coming into my office in the morning and just getting to work.",
    author: "Seth Green",
    tag: "morning",
  },
  {
    text:
      "Poetry a criticism of life under the conditions fixed for such a criticism by the laws of poetic truth and poetic beauty.",
    author: "Matthew Arnold",
    tag: "beauty",
  },
  {
    text:
      "You can't study comedy it's within you. It's a personality. My humor is an attitude.",
    author: "Don Rickles",
    tag: "attitude",
  },
  {
    text: "Grace in women has more effect than beauty.",
    author: "William Hazlitt",
    tag: "beauty",
  },
  {
    text:
      "Beauty is a manifestation of secret natural laws, which otherwise would have been hidden from us forever.",
    author: "Johann Wolfgang von Goethe",
    tag: "beauty",
  },
  {
    text:
      "The only language men ever speak perfectly is the one they learn in babyhood, when no one can teach them anything!",
    author: "Maria Montessori",
    tag: "men",
  },
  {
    text:
      "He was doing - Ray was designing the clothes for my mom's show from California. And one of the first appearances I ever made on television was on my mother's show and Ray and Bob did the clothes for that. It has been a long time.",
    author: "Liza Minnelli",
    tag: "mom",
  },
  {
    text:
      "Every woman needs one man in her life who is strong and responsible. Given this security, she can proceed to do what she really wants to do-fall in love with men who are weak and irresponsible.",
    author: "Richard J. Needham",
    tag: "men",
  },
  {
    text:
      "To increase the zone of peace is to build the inner core of a stable international zone.",
    author: "Zbigniew Brzezinski",
    tag: "peace",
  },
  {
    text: "The beauty of golf, you're in charge out here.",
    author: "Mike Weir",
    tag: "beauty",
  },
  {
    text:
      "A real patriot is the fellow who gets a parking ticket and rejoices that the system works.",
    author: "Bill Vaughan",
    tag: "patriotism",
  },
  {
    text:
      "My parents were working class folks. My dad was a bartender for most of his life, my mom was a maid and a cashier and a stock clerk at WalMart. We were not people of financial means in terms of significant financial means. I always told them, 'I didn't always have what I wanted. I always had what I needed.' My parents always provided that.",
    author: "Marco Rubio",
    tag: "mom",
  },
  {
    text: "Men are not against you they are merely for themselves.",
    author: "Gene Fowler",
    tag: "men",
  },
  {
    text: "I've been through it all, baby, I'm mother courage.",
    author: "Elizabeth Taylor",
    tag: "mom",
  },
  {
    text:
      "Heroism on command, senseless violence, and all the loathsome nonsense that goes by the name of patriotism - how passionately I hate them!",
    author: "Albert Einstein",
    tag: "patriotism",
  },
  {
    text:
      "I have to be asked, I guess, but I love the idea of marriage. I think it's beautiful. I'm such a romantic, and I always have been.",
    author: "Portia de Rossi",
    tag: "marriage",
  },
  {
    text:
      "Capital is money, capital is commodities. By virtue of it being value, it has acquired the occult ability to add value to itself. It brings forth living offspring, or, at the least, lays golden eggs.",
    author: "Karl Marx",
    tag: "money",
  },
  {
    text:
      "To increase the zone of peace is to build the inner core of a stable international zone.",
    author: "Zbigniew Brzezinski",
    tag: "peace",
  },
  {
    text:
      "I like being independent. I don't think that marriage means you're not independent, but right now I'm very comfortable, and I'm probably the happiest I've ever been. I feel solid. I feel safe.",
    author: "Sandra Lee",
    tag: "marriage",
  },
  {
    text: "The human soul needs actual beauty more than bread.",
    author: "David Herbert Lawrence",
    tag: "beauty",
  },
  {
    text:
      "What people adore about superhero movies is the signal quality of the Christopher Nolan films - their complete lack of irony when it comes to the portrayal of heroism and the need for heroes to confront evil.",
    author: "John Podhoretz",
    tag: "movies",
  },
  {
    text:
      "I don't dream songs. I'm more apt to write dreams down and then to be able to interpret them into a song. I also tend to get up and write prose in the morning from which will come songs.",
    author: "Judy Collins",
    tag: "morning",
  },
  {
    text: "Don't let what you can't do stop you from doing what you can do.",
    author: "Anonymous",
    tag: "general",
  },
  {
    text: "Oh, my mom. She's one of my biggest fans.",
    author: "Patina Miller",
    tag: "mom",
  },
  {
    text: "Men must be governed by God or they will be ruled by tyrants.",
    author: "William Penn",
    tag: "men",
  },
  {
    text: "The sinews of war are infinite money.",
    author: "Marcus Tullius Cicero",
    tag: "money",
  },
  {
    text:
      "I said peace is sometimes narrowly interpreted it's the absence of conflict between nations or something. But peace is more inherent, more basic to human life, human beings, what we feel about each other, what we feel about life around us and what we see in our future.",
    author: "Muhammad Yunus",
    tag: "peace",
  },
  {
    text: "There is nothing like becoming a mom to fill you with fear.",
    author: "Arianna Huffington",
    tag: "mom",
  },
  {
    text:
      "There is only one class in the community that thinks more about money than the rich, and that is the poor. The poor can think of nothing else.",
    author: "Oscar Wilde",
    tag: "money",
  },
  {
    text: "A fool and his money are soon parted.",
    author: "Thomas Tusser",
    tag: "money",
  },
  {
    text:
      "You hear the best stories from ordinary people. That sense of immediacy is more real to me than a lot of writerly, literary-type crafted stories. I want that immediacy when I read a novel.",
    author: "Chuck Palahniuk",
    tag: "best",
  },
  {
    text:
      "I do love the films I've done in the past. I work hard in my movies and my friends work hard and we're trying to make people laugh and I'm very proud of that.",
    author: "Adam Sandler",
    tag: "movies",
  },
  {
    text:
      "I think music is the greatest art form that exists, and I think people listen to music for different reasons, and it serves different purposes. Some of it is background music, and some of it is things that might affect a person's day, if not their life, or change an attitude. The best songs are the ones that make you feel something.",
    author: "Eddie Vedder",
    tag: "best",
  },
  {
    text:
      "I'm a typical middle child. I'm the mediator. The one that makes everything OK, puts their own needs aside to make sure everybody's happy. It's hard to change your nature, even with years and years of therapy.",
    author: "Jennifer Jason Leigh",
    tag: "nature",
  },
  {
    text:
      "That was my childhood. I grew up with the monks, studying Sanskrit and meditating for hours in the morning and hours in the evening, and going once a day to beg for food.",
    author: "Satish Kumar",
    tag: "morning",
  },
  {
    text:
      "A mode of conduct, a standard of courage, discipline, fortitude and integrity can do a great deal to make a woman beautiful.",
    author: "Jacqueline Bisset",
    tag: "beauty",
  },
  {
    text: "Marriage, like death, is a debt we owe to nature.",
    author: "Julia Ward Howe",
    tag: "marriage",
  },
  {
    text:
      "You can never cross the ocean unless you have the courage to lose sight of the shore.",
    author: "Anonymous",
    tag: "general",
  },
  {
    text:
      "Women and cats will do as they please, and men and dogs should relax and get used to the idea.",
    author: "Robert A. Heinlein",
    tag: "men",
  },
  {
    text: "In aid, the proper attitude is one omitting gratitude.",
    author: "Marya Mannes",
    tag: "attitude",
  },
  {
    text: "Men don't care what's on TV. They only care what else is on TV.",
    author: "Jerry Seinfeld",
    tag: "men",
  },
  {
    text: "I'm sure that my mom would have been happy with any path I chose.",
    author: "Joely Fisher",
    tag: "mom",
  },
  {
    text: "It takes both sunshine and rain to make a rainbow.",
    author: "Anonymous",
    tag: "general",
  },
  {
    text: "My mom took me to a Dolly Parton concert when I was 3.",
    author: "Kat Dennings",
    tag: "mom",
  },
  {
    text:
      "One must judge men not by their opinions, but by what their opinions have made of them.",
    author: "Georg C. Lichtenberg",
    tag: "men",
  },
  {
    text:
      "You don't despair about something like the Middle East, you just do the best you can.",
    author: "P. J. O'Rourke",
    tag: "best",
  },
  {
    text:
      "There we times when everybody in the house has the flu. You're cleaning up vomit and it's 2 in the morning, and you're wishing there was somebody else there to help you.",
    author: "Meg Tilly",
    tag: "morning",
  },
  {
    text:
      "To plunder, to slaughter, to steal, these things they misname empire and where they make a wilderness, they call it peace.",
    author: "Tacitus",
    tag: "peace",
  },
  {
    text:
      "I think music is the greatest art form that exists, and I think people listen to music for different reasons, and it serves different purposes. Some of it is background music, and some of it is things that might affect a person's day, if not their life, or change an attitude. The best songs are the ones that make you feel something.",
    author: "Eddie Vedder",
    tag: "best",
  },
  {
    text:
      "Of all religions, the Christian should of course inspire the most tolerance, but until now Christians have been the most intolerant of all men.",
    author: "Voltaire",
    tag: "men",
  },
];
