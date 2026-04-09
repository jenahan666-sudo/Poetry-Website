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
  { name: 'SelfAwareness', count: 3, description: 'Bewusstsein und Selbstreflexion' },
  { name: 'Growth', count: 7, description: 'Wachstum und Entwicklung' },
  { name: 'Meaning', count: 4, description: 'Sinn und Zweck' },
  { name: 'Resilience', count: 3, description: 'Widerstandskraft und innere Stärke' },
  { name: 'SelfRespect', count: 4, description: 'Selbstrespekt und Selbstachtung' },
  { name: 'Wisdom', count: 2, description: 'Weisheit und Einsicht' },
  { name: 'Purpose', count: 3, description: 'Zweck und Motivation' },
  { name: 'Clarity', count: 4, description: 'Klarheit und Verständnis' }
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
