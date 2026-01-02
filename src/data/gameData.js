export const gameData = {
    levels: [
        {
            id: 1,
            title: "The Beginning",
            theme: "How you met",
            narrative: "It all started with a simple 'Hello'... Do you remember the moment?",
            reward: {
                type: "image",
                content: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHYyNm5qcHlqZHU0Z3R6Z3ZqZ3ZqZ3ZqZ3ZqZ3ZqZ3ZqZ3ZqZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7TKVUn7iM8FMEU24/giphy.gif",
                message: "Love Letters: A collection of words I felt but never said. Every 'Hello' was a seed for this garden. ❤️"
            },
            tasks: [
                { id: 101, type: "choice", question: "The first moment we spoke... how did the world feel then?", options: ["Everything went quiet", "My heart skipped a beat", "It felt like home already"], story: "No matter how it started, it led here." },
                { id: 102, type: "choice", question: "If you could pick a color for that first day, what would it be?", options: ["Soft Gold", "Quiet Blue", "Warm Pink"], story: "Memories are the art of the heart." },
                { id: 103, type: "click", text: "A softly glowing center... touch it to feel the early days.", story: "Curiosity whispered, then comfort spoke, then warmth arrived." },
                { id: 104, type: "narrative", text: "Looking back, those tiny, ordinary moments were actually the most important ones.", story: "Anticipation is a quiet bridge." },
                { id: 105, type: "choice", question: "Which truth resonates most with you now?", options: ["It was always meant to be", "I'd do it all again", "Every second was worth it"], story: "The journey has only just begun." }
            ]
        },
        {
            id: 2,
            title: "Little Things",
            theme: "Inside jokes & habits",
            narrative: "It's the small moments that make us 'Us'. The way you laugh, our silly secrets...",
            reward: {
                type: "text",
                content: "I promise to never stop noticing the way your eyes light up, or how you hum when you're happy. I promise to keep choosing us, every single day.",
                message: "A Promise: To continue noticing, choosing, and cherishing the small things."
            },
            tasks: [
                { id: 201, type: "choice", question: "Select a fragment of us...", options: ["That one look", "The inside joke no one gets", "The midnight texts"], story: "These belong only to us." },
                { id: 202, type: "choice", question: "What habit of ours do you cherish most?", options: ["The way we say goodnight", "Sharing silly memes", "The quiet comfort"], story: "Familiarity is the highest form of love." },
                { id: 203, type: "click", text: "Tap to listen to the silence of a quiet, shared moment.", story: "Some things don't need words." },
                { id: 204, type: "click", text: "Slide the curtain... see what I've observed about you.", story: "I see you in every detail." },
                { id: 205, type: "choice", question: "Why do these little things matter?", options: ["They are our foundation", "They make life beautiful", "They mean everything"], story: "I am still choosing you." }
            ]
        },
        {
            id: 3,
            title: "Memories",
            theme: "Shared adventures",
            narrative: "Remember the places we've been and the things we've seen together?",
            reward: {
                type: "image",
                content: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHYyNm5qcHlqZHU0Z3R6Z3ZqZ3ZqZ3ZqZ3ZqZ3ZqZ3ZqZ3ZqZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26FLdmIp6wJr91JAI/giphy.gif",
                message: "Love Stamp: Officially marked, permanently cherished. Our adventures are archived forever."
            },
            tasks: [
                { id: 301, type: "choice", question: "Which archive holds our brightest memory?", options: ["The spontaneous walk", "The first movie night", "The deep late-night talks"], story: "Every frame is a treasure." },
                { id: 302, type: "choice", question: "Which moment felt most like a shift in our universe?", options: ["The first 'I love you'", "The first time we laughed 'til it hurt", "The quiet realization"], story: "Meaning is found in the smallest shifts." },
                { id: 303, type: "click", text: "Align the icons of Time, Laughter, and Place to form a memory.", story: "The pieces fit perfectly." },
                { id: 304, type: "narrative", text: "Time passes, but the way you made me feel that day stays alive in every cell of my body.", story: "Memories are the ink of our story." },
                { id: 305, type: "click", text: "Prepare the archive... press the stamp to finalize.", story: "Marked forever." }
            ]
        },
        {
            id: 4,
            title: "Growth",
            theme: "Challenges & support",
            narrative: "We've faced storms, but we've always found the rainbow together.",
            reward: {
                type: "text",
                content: "Te Amo (Spanish), Je t'aime (French), Ich liebe dich (German), Ti amo (Italian), Aishiteru (Japanese)... In every tongue, in every land, it remains true: I love you.",
                message: "I Love You in 100 Languages: Love transcends words, places, and struggles."
            },
            tasks: [
                { id: 401, type: "choice", question: "In the middle of the storm, what was our anchor?", options: ["Your patience", "Our communication", "Just holding on"], story: "Strength is found in 'Us'." },
                { id: 402, type: "narrative", text: "Falling is easy. Staying, supporting, and choosing to climb back up together—that is the real gift.", story: "We are still here." },
                { id: 403, type: "choice", question: "What did we learn on the hardest day?", options: ["We are stronger than we think", "Love is a choice", "Trust is everything"], story: "Growth is a beautiful friction." },
                { id: 404, type: "click", text: "Merge the separate fragments... form the heart of our resilience.", story: "Two separate shapes, one shared heart." },
                { id: 405, type: "click", text: "Tap through the frequencies... listen to the words that never change.", story: "Love, everywhere." }
            ]
        },
        {
            id: 5,
            title: "Always",
            theme: "The future together",
            narrative: "The final chapter... which is actually just the preface to our future.",
            reward: {
                type: "image",
                content: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHYyNm5qcHlqZHU0Z3R6Z3ZqZ3ZqZ3ZqZ3ZqZ3ZqZ3ZqZ3ZqZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7TKVUn7iM8FMEU24/giphy.gif",
                message: "A Date: A plan to spend time choosing each other, today and every 'tomorrow' we get."
            },
            tasks: [
                { id: 501, type: "choice", question: "What is the biggest dream you want to weave into our future?", options: ["A home filled with light", "Travels without expiration", "Just growing old together"], story: "Dreams are the maps of our hearts." },
                { id: 502, type: "narrative", text: "Visualize us years from now. Different, perhaps older, but still holding hands in the quiet.", story: "Wherever we go, there we are." },
                { id: 503, type: "click", text: "Final commitment required. Confirm presence for the future.", story: "Yes. Always yes." },
                { id: 504, type: "narrative", text: "This isn't an end. It's just the moment we decide to keep going forever.", story: "Still us. Always us." },
                { id: 505, type: "click", text: "Click forward into the glowing horizon.", story: "One more step..." }
            ]
        }
    ]
};
