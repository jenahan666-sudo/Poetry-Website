export interface Poem {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  body: string;
  date: string;
  week: number;
  tags: string[];
  readingTime: number;
}

export interface Tag {
  name: string;
  count: number;
  description?: string;
}

export const poems: Poem[] = [
  {
    id: '19',
    slug: 'there-is-no-plan-b',
    title: 'There Is No Plan B',
    excerpt: 'Stop hoping you will make it. Decide that you have to.',
    body: `Do you want to fight?

This question from Zangetsu to Ichigo has stuck with me ever since I watched Bleach.
Because as we see throughout Bleach, Ichigo wasn't fighting because he thought winning was guaranteed.
He was fighting because he had to win.
Losing wasn't an option.
And that's a different mentality.

When you tell yourself, "I hope I win, I hope I get my dreams, I hope I get this promotion," you're already accepting that there is a possibility you will lose and that you may not get the opportunity you want.
But when you decide, "I have to win, I will get this opportunity, I will achieve these goals I have in my mind," your whole approach changes.
You don't fold just because you failed.
You don't start questioning your dream every time something goes wrong.

Look at it like this.
At the end of the day, you are going to find a way to get the money for your rent.
Because it's do or die.
You need a place to live.
That's the same mentality you need to have with your dreams and goals.

There is no Plan B.
It's either I reach this goal or I die trying.
That's the mentality you need to have.
And once you have that, there is no Plan B in your head.

The only question you have to ask yourself is: How am I going to get there?
How am I going to get to that goal?
How long is it going to take?
What do I need to do?

You won't be able to control every obstacle.
You can't control how long this journey will take either.
But you can control you.

So stop hoping.
Start doing.
Start knowing that it's going to happen for you.
Speak it into existence and go get it.

There is no Plan B.
You got this.`,
    date: '2026-10-17',
    week: 42,
    tags: ['Purpose', 'Resilience', 'Discipline', 'Growth'],
    readingTime: 2
  },
  {
    id: '18',
    slug: 'im-back',
    title: "I'm Back",
    excerpt: 'Sometimes you have to step away to remember why you started.',
    body: `It's been a few months since my last post.
I didn't plan to disappear. I simply reached a point where I had nothing meaningful left to say.
For a long time I was carrying Jena-Writes every single day, always thinking about what came next.
From the outside, it probably looked like I was doing everything right.
Inside, I felt empty.

When showing up becomes difficult

I kept asking myself the same question.
What am I actually working toward?
I was showing up every day, but somewhere along the way I stopped looking forward to it. The spark that made creating feel meaningful slowly disappeared.
So I stepped away.
Not because I wanted to quit.
Because I needed enough distance to remember why I started in the first place.

Stepping back isn't always moving backwards

There is often pressure to keep producing, keep growing, and keep moving.
But sometimes the most important step forward is knowing when to pause.
Taking a step back gave me something I hadn't felt in a long time.
Clarity.
It reminded me that my purpose was never to post for the sake of posting. It was to create something that genuinely helps people think differently about their life.
That is why Jena-Writes existed in the first place.

Jena-Writes returns

So I'm coming back.
Not because I suddenly found endless motivation.
Not because everything is perfectly figured out.
I'm coming back because writing these letters is something I genuinely enjoy. They allow me to slow down, reflect, and share ideas.
One letter at a time.
Thank you for staying here.
It means more than you probably realize.
Until next time, keep growing 1 percent every day.`,
    date: '2026-10-17',
    week: 42,
    tags: ['Clarity', 'Purpose', 'Growth', 'SelfAwareness'],
    readingTime: 2
  },
  {
    id: '17',
    slug: 'the-art-of-the-strongest',
    title: 'The Art of the Strongest',
    excerpt: 'You only win when your mind is stronger than your emotions.',
    body: `As long as I live I have infinite chances.
That has to be one of my favourite anime quotes of all time, coming from Luffy.
You can lose a job, you can lose money, you can get rejected by a girl, and you can completely embarrass yourself.
As long as you live, none of it matters because you can always go again.
Tomorrow will always be another attempt and that's exactly how you need to think going forward.

Luffy gets beaten down.
He loses consistently, almost like Mark Grayson, maybe not as bad.
People laugh at his dream and yet he always pursues his dream.
He understands that so long as he lives there's always going to be an opportunity out there for him.
There's no point in quitting after one chapter.
If you feel like it's your calling, you have to keep on writing your story.
After all you're still breathing.`,
    date: '2026-08-06',
    week: 32,
    tags: ['Resilience', 'Purpose', 'Growth', 'Discipline'],
    readingTime: 1
  },
  {
    id: '16',
    slug: 'a-beautiful-heart',
    title: 'A Beautiful Heart',
    excerpt: 'A face may catch the eye, but only a beautiful heart can make the soul feel at home.',
    body: `Beautiful faces
catch the eye first.

They arrive like light,
quick and easy to notice.

But the soul
does not stay
for beauty alone.

It stays
where kindness lives,
where warmth is honest,
where a heart
knows how to hold
without owning.

A face may turn your head.

But only a beautiful heart
can make your soul
feel at home.`,
    date: '2026-07-18',
    week: 29,
    tags: ['Meaning', 'Wisdom', 'SelfRespect'],
    readingTime: 1
  },
  {
    id: '15',
    slug: 'out-of-sight-out-of-mind',
    title: 'Out of Sight, Out of Mind',
    excerpt: 'Some people do not disappear because they meant nothing, but because their meaning is complete.',
    body: `Out of sight,
out of mind,

but sometimes
it feels stranger than that.

You close a door
between two lives,
and suddenly
the whole street forgets
how to lead you
to their face.

They may live close enough
to cross your shadow,
close enough
to stand beside you
inside an ordinary day.

And still,
you never see them again.

As if the world
quietly removes
what the heart
has already released.

Maybe absence
is not always punishment.

Maybe some people
come carrying a key
only for one room
inside us.

They open it.
They show us
what we could not see.
They leave a window
where there used to be a wall.

And when the lesson
has finished breathing,
life moves them
out of the frame.

Not because they meant nothing.

Because their meaning
was complete.

Then space appears.

For another voice,
another mirror,
another world
waiting to teach us
how wide
our own life can become.`,
    date: '2026-07-07',
    week: 28,
    tags: ['Meaning', 'Growth', 'Clarity', 'SelfAwareness'],
    readingTime: 2
  },
  {
    id: '14',
    slug: 'become-through-fire',
    title: 'Become Through Fire',
    excerpt: 'Nothing meaningful is born in comfort. Every version of you is earned.',
    body: `You do not become a mountain
the day you choose to climb.

Stone remembers
every storm,
every fracture,
every season
that refused to spare it.

So do you.

The strongest hearts
are not the loudest.
They are the ones
that kept beating
long after hope
forgot their name.

Growth arrives quietly.

It hides
inside the mornings
you wanted to surrender,
inside the nights
no one applauded,
inside the weight
you thought would break you
but slowly taught you
how to carry the world.

Do not envy
the finished masterpiece.

Love
the unfinished sculpture.

Every crack
is another place
where light
learns your name.

The fire is not your enemy.

It is the artist.

Pain is not the end.

It is the chisel.

Time is not stealing you.

It is revealing you.

And when the day comes
that your spirit rises
beyond the person
you once believed possible,

it will not feel
like becoming someone new.

It will feel

like finally meeting
the person
who was waiting for you
all along.`,
    date: '2026-07-07',
    week: 28,
    tags: ['Growth', 'Resilience', 'Discipline'],
    readingTime: 3
  },
  {
    id: '13',
    slug: 'win-and-loss',
    title: 'Win and Loss',
    excerpt: 'Wins should pass lightly, and losses should fall without soaking the soul.',
    body: `Let wins fly past you
like wind through your hair
and losses fall like rain
that never soaks the soul.`,
    date: '2026-06-07',
    week: 23,
    tags: ['Wisdom', 'Clarity', 'SelfRespect'],
    readingTime: 1
  },
  {
    id: '12',
    slug: 'what-courage-could-have-taught-once',
    title: 'What Courage Could Have Taught Once',
    excerpt: 'Pain warns first. Failure arrives later as the price of refusing the fire.',
    body: `A man who fears pain
more than failure
will meet them both.

He will turn from the fire,
then freeze in the cold.
He will guard his skin
and lose his soul.

Pain comes first
as a warning.
Failure comes later
as the price.

The road does not spare
the one who waits.
It only teaches harder
what courage could have taught once.

So step into the ache.
Let the fear burn clean.

Because the man
who runs from pain
does not escape suffering.

He only arrives at failure
tired.`,
    date: '2026-06-03',
    week: 23,
    tags: ['Resilience', 'SelfRespect', 'Growth', 'Wisdom'],
    readingTime: 1
  },
  {
    id: '11',
    slug: 'strength-comes-to-a-need-not-for-a-desire',
    title: 'Power Answers Need',
    excerpt: 'Strength comes to a need, not for a desire.',
    body: `Power does not wake
because a man wants glory.

It rises when the road burns,
when the lungs turn to fire,
when the body begs for silence
and the soul says,
not yet.

Six hundred kilometres
through Death Valley,
where the sun does not forgive,
where every step asks
who sent you here?

Not desire.
Desire would have left
when the heat became honest.

Need stayed.

Need tied the shoes again.
Need swallowed the pain.
Need looked at the impossible
and called it one more step.

And somewhere between dust,
thirst,
and the breaking point,
strength arrived.

Not as a gift.
Not as a miracle.

As an answer.`,
    date: '2026-05-07',
    week: 19,
    tags: ['Resilience', 'Purpose', 'Growth'],
    readingTime: 1
  },
  {
    id: '10',
    slug: 'what-strength-was-meant-to-protect',
    title: 'What Strength Was Meant to Protect',
    excerpt: 'Distance can make us stronger, but sometimes strength forgets what it was meant to protect.',
    body: `Keep your emotions out of it.

As if clarity lives
somewhere far away from feeling.

But every decision I trusted
came from somewhere deeper
than logic could reach.

Still
I practiced distance.

Still
I learned restraint.

And now I stand here stronger
yes

but I am still deciding
what strength was meant to protect.`,
    date: '2026-04-26',
    week: 17,
    tags: ['Clarity', 'SelfAwareness', 'SelfRespect'],
    readingTime: 1
  },
  {
    id: '9',
    slug: 'what-we-call-reality',
    title: 'What We Call Reality',
    excerpt: 'Reality is shaped by what we know, what we notice, and what we mistake for truth.',
    body: `Each of us lives,
dependent and bound
by our individual knowledge
and our awareness.

That alone
is what we call reality.

However,
both knowledge and awareness
are equivocal.

What is real to one
may be illusion to another.`,
    date: '2026-04-17',
    week: 16,
    tags: ['SelfAwareness', 'Meaning', 'Clarity'],
    readingTime: 1
  },

  {
    id: '8',
    slug: 'the-past-and-future',
    title: 'The past and future',
    excerpt: 'The past leaves its weight behind. What comes next is shaped by how gently we carry it.',
    body: `The past moves through mirrors,
showing who we were.
Every moment carries weight.

The future has not been settled.
The past falls.
The stone keeps count.

The impact is now,
but the mark is still being made.

Only those who feel the weight of the past
can lighten what comes next.`,
    date: '2026-04-09',
    week: 15,
    tags: ['Meaning', 'Growth', 'Clarity'],
    readingTime: 1
  },
  {
    id: '7',
    slug: 'the-cookie-tin',
    title: 'The Cookie Tin',
    excerpt: 'Not nostalgia, but proof. A quiet record of every morning survived.',
    body: `As a child it was only sugar
or the tin where mother kept her sewing things.
A tin on the shelf,
a hand reaching inside,
a moment of happiness.

Later there was nothing sweet left.
Only distance.
Pain.
Nights without a way out.

So I began to collect.

Every morning I survived
one cookie.
Every step
I could have left behind
but did not.

Not a memory from nostalgia,
but proof.

When the body screams stop,
I open the tin.
Not to escape,
but to keep going.

I do not reach for hope.
I reach for facts.

You have survived this before.
You were weaker than you are now.
You are not here
because someone saved you,
but because you stayed.

The tin does not fill itself.
It is filled
with blood,
with shame,
with endurance without applause.

And when it seems empty,
that is only the moment
when you learn
to earn a new cookie.`,
    date: '2026-04-05',
    week: 14,
    tags: ['Resilience', 'SelfRespect', 'Clarity'],
    readingTime: 2
  },
  {
    id: '6',
    slug: 'ultra-instinct',
    title: 'Ultra Instinct',
    excerpt: 'An empty mind is sometimes exactly what you need',
    body: `Luffy is always laughing right before he fights someone who should realistically destroy him. Most people think it is just blind, reckless anime confidence. But it is actually a real mental state that samurai spent their entire lives trying to understand.

In Japanese it is called Mushin. It means "mind without mind."

It is the state where your body acts completely on instinct before your brain has time to interfere with doubt.

If you have ever stepped into a ring for sparring or pushed yourself through a brutal training session, you know exactly what this feels like. The exact second you start calculating your opponent's reach or worrying about your set, your body tightens and you slow down.

Thinking becomes the enemy of action.

There is a strange Zen contradiction here. The harder you try to force your mind to be clear, the more mental noise you create. Trying to be calm is still thinking.

That is why Luffy is so dangerous.

He does not meditate to force focus. He is the same person joking on his ship as he is when facing two emperors. The stakes do not change his internal state.

We spend so much energy trying to perfectly optimise our mindset before a heavy lift, a workout, or a race. But you cannot force your way into a clear mind.

Stop overcalculating every move.

Empty the cup.
Trust your training.
Let your body do what it already knows how to do.

Don't think.`,
    date: '2026-03-29',
    week: 13,
    tags: ['Clarity', 'Growth', 'Wisdom', 'SelfRespect'],
    readingTime: 3
  },
  {
    id: '5',
    slug: 'our-future',
    title: 'Our Future',
    excerpt: 'Confronting yourself will make you strong',
    body: `The board is quiet.

Wooden squares.
Pieces placed with care.
Every piece has a role.

The pawn walks forward.
The lance moves without turning.
The knight leaps where others cannot go.

Each one moves differently.
Each one exists for a reason.

At first you only see the game.
You think about victory.
You think about clever moves.

Two steps ahead.
Three steps.
Six steps.

You believe the king is power.

The strongest one.
The leader.
The one who stands above everyone else.

But the longer you watch the board,
the stranger the game becomes.

The king does not move much.
The king is slow.
The king depends on every other piece.

And then a question appears.

Who is the king?

You search the board.
You search the world.

You begin to understand something else.

The king is not the one with power.
The king is the one who must survive.

The future.

Children who will one day sit where we sit now.
People who do not yet know their place on the board.

And suddenly the game changes.

Every piece matters.

The pawn learns patience.
The knight learns courage.
The rook learns responsibility.

Each piece must understand one thing.

Who it is.

Because a piece that does not know its role moves without direction.

But a piece that understands itself moves with purpose.

And when purpose becomes clear,
every move gains meaning.

Not for glory.
Not for victory.

For the king
who does not yet know
that the game is already being played for him.`,
    date: '2026-03-04',
    week: 10,
    tags: ['SelfAwareness', 'Growth', 'Meaning', 'Purpose', 'Clarity'],
    readingTime: 4
  },
  {
    id: '1',
    slug: 'the-consciousness',
    title: 'The consciousness',
    excerpt: 'The depth of my consciousness causes me to suffer. Is it a curse or a blessing?',
    body: `The depth of my consciousness causes me to suffer. Is it a curse or a blessing?
I think it is a blessing in disguise.
You have to go through that. Taking it head on like drinking poison until it turns into a tonic,
girdling everything around you.

Humankind cannot gain anything without first giving something in retrun.
To obtain, something of equal value must be lost. - Alphonse Elric`,
    date: '2026-02-02',
    week: 5,
    tags: ['SelfAwareness', 'Growth', 'Meaning', 'Resilience'],
    readingTime: 2
  },
  {
    id: '3',
    slug: 'new-potential',
    title: 'New potential',
    excerpt: 'What looks like loss up close\ncan become clarity from a distance.',
    body: `Our potential is like a pointillistic art. One must take a step back to rediscover a bigger picture. Not every setback should be a reason to give up. Maybe it is for the better.`,
    date: '2026-01-23',
    week: 4,
    tags: ['Meaning', 'Purpose', 'Resilience', 'Growth'],
    readingTime: 2
  },
  {
    id: '2',
    slug: 'limit',
    title: 'Limit',
    excerpt: 'The cloud gathers until it forgets its own edges.\nYou don\'t.',
    body: `You're the exact opposite of a naive cloud. The upwinded sky keeps feeding it.
More vapor, more weight until the cloud forgets its own edges.

Like a sakura blossom all pink and open to the light, drinking sunlight without question,
the cloud gathers and gathers, never asking how much is to much,
eventually breaks.
It rains.

You are diffrent.
You know your limit
 and you know when to stop.

And yet you still love yourself enough
to look beyond the moment
to hold a larger picture gently.

The real art lies not in endless endurance,
but in recognizing the point where strain turns into harm.
Only there, at the moment you choose to stop does growth truly begin.`,
    date: '2026-01-06',
    week: 1,
    tags: ['SelfRespect', 'SelfAwareness', 'Growth', 'Wisdom'],
    readingTime: 2
  },
  {
    id: '4',
    slug: 'castle-of-emotions',
    title: 'Castle of Emotions',
    excerpt: 'There are spaces we enter freely and stay in far too long, without noticing when they begin to change us.',
    body: `Love between two people,
turning a place into a castle.
The bigger the emotion,
the bigger the castle.
Anger, sadness, happiness, joy.
One left the castle.
The other pays the rent.
So leave the castle
before you lose yourself
to a glimpse of hope.`,
    date: '2025-12-24',
    week: 52,
    tags: ['Growth', 'SelfRespect', 'Purpose'],
    readingTime: 1
  }
];

export const tags: Tag[] = [
  { name: 'SelfAwareness', count: 7, description: 'Bewusstsein und Selbstreflexion' },
  { name: 'Growth', count: 14, description: 'Wachstum und Entwicklung' },
  { name: 'Meaning', count: 7, description: 'Sinn und Zweck' },
  { name: 'Resilience', count: 8, description: 'Widerstandskraft und innere Stärke' },
  { name: 'SelfRespect', count: 8, description: 'Selbstrespekt und Selbstachtung' },
  { name: 'Wisdom', count: 5, description: 'Weisheit und Einsicht' },
  { name: 'Purpose', count: 7, description: 'Zweck und Motivation' },
  { name: 'Clarity', count: 9, description: 'Klarheit und Verständnis' },
  { name: 'Discipline', count: 3, description: 'Disziplin und innere Ordnung' }
];

export const getPoem = (slug: string): Poem | undefined => {
  return poems.find(p => p.slug === slug);
};

export const getPoemsByTag = (tag: string): Poem[] => {
  return poems.filter(p => p.tags.includes(tag));
};

export const getRelatedPoems = (currentPoemId: string, limit: number = 3): Poem[] => {
  const currentPoem = poems.find(p => p.id === currentPoemId);
  if (!currentPoem) return poems.slice(0, limit);
  
  // Get poems with matching tags
  const related = poems
    .filter(p => p.id !== currentPoemId)
    .filter(p => p.tags.some(tag => currentPoem.tags.includes(tag)))
    .slice(0, limit);
  
  // Fill up with recent poems if not enough related
  if (related.length < limit) {
    const additional = poems
      .filter(p => p.id !== currentPoemId && !related.includes(p))
      .slice(0, limit - related.length);
    return [...related, ...additional];
  }
  
  return related;
};

export const getNextPoem = (currentSlug: string): Poem | null => {
  const currentIndex = poems.findIndex(p => p.slug === currentSlug);
  if (currentIndex === -1 || currentIndex === 0) return null;
  return poems[currentIndex - 1];
};

export const getPreviousPoem = (currentSlug: string): Poem | null => {
  const currentIndex = poems.findIndex(p => p.slug === currentSlug);
  if (currentIndex === -1 || currentIndex === poems.length - 1) return null;
  return poems[currentIndex + 1];
};
