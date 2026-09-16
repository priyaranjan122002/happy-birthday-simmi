import { SiteContent } from '../types';

export const siteContent: SiteContent = {
  // ── Basic Info (Personalized for Simmi) ─────────────────────────
  herName: "Simmi",
  herNickname: "Meri Pyaari Gussewali ✨",
  birthdayDate: "17 September 2026",
  birthdayYear: 2026,
  birthdayTargetTimestamp: "2026-09-17T00:00:00+05:30",
  relationshipStartDate: "2023-09-17",
  heroSubtitle: "Pehle cafe wali bike ride se lekar raat-raat bhar wali video calls tak... aur aaj 3 saal baad wapis tumse baat hona ek jaadu sa lagta hai. Today is all about celebrating you, Simmi.",
  
  // ── Audio & Video Configuration ────────────────────────────────
  // Ad-free direct Bollywood romantic song bundled with the website
  bgMusicUrl: "./music/tum-se-hi.mp3",
  
  // Video file or featured tribute image
  videoUrl: "./video/tribute.mp4",
  videoPoster: "./photos/photo-1.jpg",
  videoCaption: "Tumhari har ek hasi, tumhara thoda sa gussa aur tumhare pyare nakhre mere dil ko sabse zyada bhaate hain.",
  videos: [
    {
      id: "v-1",
      title: "Reel: Moments With Simmi ✨",
      tag: "17 Sept Special Video",
      url: "./video/tribute.mp4",
      poster: "./photos/photo-1.jpg",
      caption: "All our cherished memories together, woven into our favorite song."
    }
  ],

  // ── Act 3: "Our Story" Milestones ──────────────────────────────
  milestones: [
    {
      id: "m-1",
      phase: "Chapter 1",
      title: "Pehli Mulaqat & Cafe Bike Ride",
      date: "September 2023 • Cafe Date",
      description: "Mujhe aaj bhi woh din achhe se yaad hai jab hum 3 saal pehle pehli baar mile the. Bike par baithkar us cafe jana, aur ghanto bina ruke baatein karna... It felt like time had stopped just for us.",
      iconName: "Sparkles",
      image: "./photos/photo-1.jpg",
      fallbackImage: "./photos/photo-1.jpg",
      tag: "First Date & Bike Ride"
    },
    {
      id: "m-2",
      phase: "Chapter 2",
      title: "Night-Long Video Calls (VC)",
      date: "Late Night Talks",
      description: "Screen par dekhte dekhte raat kab subah mein badal jaati thi pata hi nahi chalta tha. Tumhare cute nakhre, tumhari pyari baatein aur woh bina wajah muskurana mere din ka sabse best hissa tha.",
      iconName: "Moon",
      image: "./photos/photo-4.jpg",
      fallbackImage: "./photos/photo-4.jpg",
      tag: "Late Night VCs"
    },
    {
      id: "m-3",
      phase: "Chapter 3",
      title: "The Regret & The Silence",
      date: "The Distance",
      description: "Maine us waqt bina soche breakup bol kar bohot badi galti ki thi... Shayad main us waqt nadan tha. Par sach yeh hai ki inn 3 saalon mein ek bhi din aisa nahi gaya jab maine tumhe apne dil se yaad na kiya ho.",
      iconName: "HeartHandshake",
      image: "./photos/photo-8.jpg",
      fallbackImage: "./photos/photo-8.jpg",
      tag: "The Realization"
    },
    {
      id: "m-4",
      phase: "Chapter 4",
      title: "Reconnecting After 3 Years",
      date: "A Fresh Spark",
      description: "Poore 3 saal baad jab wapis tumse baat shuru hui, toh laga jaise meri khoi hui duniya wapis mil gayi. Tumhara woh thoda sa gussa aur cute smile dekhkar dil ko ek ajeeb sa sukoon milta hai.",
      iconName: "Coffee",
      image: "./photos/photo-12.jpg",
      fallbackImage: "./photos/photo-12.jpg",
      tag: "Talking Again"
    },
    {
      id: "m-5",
      phase: "Chapter 5",
      title: "17 September — Celebrating You",
      date: "Today • The Queen's Day",
      description: "Aaj tumhara birthday hai Simmi! Tumhare dil mein abhi mere liye kya hai mujhe nahi pata, aur main koi zabardasti nahi chahta. Bas itna jaanta hoon ki main tumse bepanah pyaar karta hoon aur hamesha tumhari khushi chahta hoon.",
      iconName: "Compass",
      image: "./photos/photo-17.jpg",
      fallbackImage: "./photos/photo-17.jpg",
      tag: "17 Sept Special"
    }
  ],

  // ── Act 4: The 21 Photos Polaroid Memory Vault ──────────────────
  memories: [
    {
      id: "p-1",
      src: "./photos/photo-1.jpg",
      fallbackSrc: "./photos/photo-1.jpg",
      title: "That Radiant Glow",
      date: "Memories With You",
      caption: "The moment that always makes my heart beat faster.",
      noteBack: "Tumhari ek smile dekhkar poore din ki thakaan gayab ho jaati hai.",
      category: "favorites",
      rotation: -2
    },
    {
      id: "p-2",
      src: "./photos/photo-2.jpg",
      fallbackSrc: "./photos/photo-2.jpg",
      title: "My Favorite Smile",
      date: "Pure Magic",
      caption: "Nothing shines brighter than your genuine happiness.",
      noteBack: "Hamesha aise hi muskurate raha karo Simmi, tum smile mein sabse pyaari lagti ho.",
      category: "favorites",
      rotation: 2.5
    },
    {
      id: "p-3",
      src: "./photos/photo-3.jpg",
      fallbackSrc: "./photos/photo-3.jpg",
      title: "Gussewali Par Pyaari",
      date: "Cute Nakhre",
      caption: "Even when you're playfully angry, you look adorable.",
      noteBack: "Jaanta hoon thoda gussa jaldi aa jata hai tumhe, par uske peeche ka pyaar sabse special hai.",
      category: "goofy",
      rotation: -1.5
    },
    {
      id: "p-4",
      src: "./photos/photo-4.jpg",
      fallbackSrc: "./photos/photo-4.jpg",
      title: "Those Late Night VCs",
      date: "Endless Conversations",
      caption: "Talking for hours and watching you on video call till 4 AM.",
      noteBack: "Woh raat raat bhar ki baatein meri zindagi ke sabse khoobsurat lamhe the.",
      category: "dates",
      rotation: 1.8
    },
    {
      id: "p-5",
      src: "./photos/photo-5.jpg",
      fallbackSrc: "./photos/photo-5.jpg",
      title: "The First Cafe Meeting",
      date: "Bike Ride Memories",
      caption: "Riding together to the cafe where it all started.",
      noteBack: "Bike par baithkar cafe jana aur ghanto baatein karna... kabhi nahi bhool sakta.",
      category: "dates",
      rotation: -2.2
    },
    {
      id: "p-6",
      src: "./photos/photo-6.jpg",
      fallbackSrc: "./photos/photo-6.jpg",
      title: "Eyes Full of Dreams",
      date: "Unspoken Words",
      caption: "There is a quiet depth in your eyes that says everything.",
      noteBack: "Tumhari aankhon mein ek aisi masoomiyat hai jo kisi aur mein nahi.",
      category: "favorites",
      rotation: 1.2
    },
    {
      id: "p-7",
      src: "./photos/photo-7.jpg",
      fallbackSrc: "./photos/photo-7.jpg",
      title: "Candid Perfection",
      date: "Natural Beauty",
      caption: "You never need to try — you are effortlessly gorgeous.",
      noteBack: "Without any filter or pose, you look absolutely breathtaking.",
      category: "favorites",
      rotation: -1.8
    },
    {
      id: "p-8",
      src: "./photos/photo-8.jpg",
      fallbackSrc: "./photos/photo-8.jpg",
      title: "My Heart's Weakness",
      date: "Precious Frame",
      caption: "The girl who holds the key to all my happiest thoughts.",
      noteBack: "No matter how much time passed, you never left my mind.",
      category: "dates",
      rotation: 2
    },
    {
      id: "p-9",
      src: "./photos/photo-9.jpg",
      fallbackSrc: "./photos/photo-9.jpg",
      title: "That Sweet Head Tilt",
      date: "Too Cute",
      caption: "The signature expression that always melts my heart.",
      noteBack: "Yeh wali photo dekh kar hamesha chehre par ek muskaan aa jaati hai.",
      category: "goofy",
      rotation: -2.5
    },
    {
      id: "p-10",
      src: "./photos/photo-10.jpg",
      fallbackSrc: "./photos/photo-10.jpg",
      title: "Queen of My Thoughts",
      date: "Golden Moments",
      caption: "Walking through life with unmatched grace and elegance.",
      noteBack: "You carry yourself with so much elegance, meri jaan.",
      category: "favorites",
      rotation: 1.5
    },
    {
      id: "p-11",
      src: "./photos/photo-11.jpg",
      fallbackSrc: "./photos/photo-11.jpg",
      title: "Soft & Gentle Vibes",
      date: "Peaceful Days",
      caption: "Just your presence makes any chaos calm down.",
      noteBack: "Tumhari aawaz sun kar hi din bhar ka sukoon mil jaata hai.",
      category: "favorites",
      rotation: -1.2
    },
    {
      id: "p-12",
      src: "./photos/photo-12.jpg",
      fallbackSrc: "./photos/photo-12.jpg",
      title: "Reconnecting With You",
      date: "After 3 Long Years",
      caption: "Starting to talk again felt like breathing fresh air after drowning.",
      noteBack: "3 saal ka intezaar ek taraf, aur wapis tumhari aawaz sunna ek taraf.",
      category: "dates",
      rotation: 2.1
    },
    {
      id: "p-13",
      src: "./photos/photo-13.jpg",
      fallbackSrc: "./photos/photo-13.jpg",
      title: "Unmatched Charm",
      date: "Stunning In Every Frame",
      caption: "The way the light hits your face makes you look unreal.",
      noteBack: "Duniya ki sabse khoobsurat ladki meri Simmi hi hai.",
      category: "favorites",
      rotation: -2
    },
    {
      id: "p-14",
      src: "./photos/photo-14.jpg",
      fallbackSrc: "./photos/photo-14.jpg",
      title: "The Goofy & Sincere You",
      date: "Little Secrets",
      caption: "All our shared inside jokes that nobody else understands.",
      noteBack: "Humaari baatein aur humaare jokes sirf hum dono hi samajh sakte hain.",
      category: "goofy",
      rotation: 1.6
    },
    {
      id: "p-15",
      src: "./photos/photo-15.jpg",
      fallbackSrc: "./photos/photo-15.jpg",
      title: "Pure & Unfiltered",
      date: "Candid Vibes",
      caption: "Caught in the middle of being completely yourself.",
      noteBack: "The most beautiful thing about you is that you are completely genuine.",
      category: "favorites",
      rotation: -1.7
    },
    {
      id: "p-16",
      src: "./photos/photo-16.jpg",
      fallbackSrc: "./photos/photo-16.jpg",
      title: "My Favorite Person",
      date: "Always & Forever",
      caption: "Every song on the radio reminds me of you.",
      noteBack: "Tum Se Hi sunte hi sirf tumhara chehra yaad aata hai.",
      category: "favorites",
      rotation: 2.3
    },
    {
      id: "p-17",
      src: "./photos/photo-17.jpg",
      fallbackSrc: "./photos/photo-17.jpg",
      title: "17 September Magic",
      date: "Your Special Day",
      caption: "Today is all about celebrating the wonderful soul you are.",
      noteBack: "May this birthday bring you everything you have ever wished for.",
      category: "dates",
      rotation: -2.1
    },
    {
      id: "p-18",
      src: "./photos/photo-18.jpg",
      fallbackSrc: "./photos/photo-18.jpg",
      title: "Grace & Elegance",
      date: "Timeless Beauty",
      caption: "Looking like poetry in motion.",
      noteBack: "Har frame mein tumhara ek alag hi noor dikhta hai.",
      category: "favorites",
      rotation: 1.4
    },
    {
      id: "p-19",
      src: "./photos/photo-19.jpg",
      fallbackSrc: "./photos/photo-19.jpg",
      title: "Sweetest Memories",
      date: "Warm Thoughts",
      caption: "Cherishing every single memory we ever shared.",
      noteBack: "Purani yaadein hamesha mere dil ke sabse kareeb rahengi.",
      category: "dates",
      rotation: -1.9
    },
    {
      id: "p-20",
      src: "./photos/photo-20.jpg",
      fallbackSrc: "./photos/photo-20.jpg",
      title: "The Girl Who Stole My Heart",
      date: "Unconditional Love",
      caption: "No matter what happens, I will always want the best for you.",
      noteBack: "Chahe jo bhi ho, mera dil hamesha tumhari khushi mangega.",
      category: "favorites",
      rotation: 2.2
    },
    {
      id: "p-21",
      src: "./photos/photo-21.jpg",
      fallbackSrc: "./photos/photo-21.jpg",
      title: "Forever Simmi ❤️",
      date: "Happy Birthday Queen",
      caption: "Wishing the happiest birthday to my favorite girl.",
      noteBack: "Happy Birthday Simmi! Hamesha khush raho, hamesha muskurati raho! ✨🎂",
      category: "favorites",
      rotation: -1.5
    }
  ],

  // ── Act 6: 30 Sweet Reasons Why I Love You ─────────────────────
  reasons: [
    { id: 1, text: "The way your eyes light up whenever you see cute dogs on the street.", category: "Sweet" },
    { id: 2, text: "How you always know exactly when I need a hug, without me uttering a single word.", category: "Emotional" },
    { id: 3, text: "Your adorable nose scrunch whenever you burst out laughing.", category: "Cute" },
    { id: 4, text: "The fact that you steal my hoodies and somehow look 1000x better in them.", category: "Goofy" },
    { id: 5, text: "How safe and peaceful your presence feels after a tiring, chaotic day.", category: "Emotional" },
    { id: 6, text: "The passionate way you talk about the little things you love.", category: "Deep" },
    { id: 7, text: "How you hold my hand in crowded places like we're the only two people there.", category: "Romantic" },
    { id: 8, text: "Your signature pout when you are playfully sulking.", category: "Cute" },
    { id: 9, text: "How you remember the smallest, most random details I mentioned weeks ago.", category: "Heartfelt" },
    { id: 10, text: "The cute voice you make when you're sleepy or just woke up.", category: "Adorable" },
    { id: 11, text: "Your kindness towards strangers and animals — your heart is genuinely pure gold.", category: "Soul" },
    { id: 12, text: "How you celebrate my tiny wins like I just won the Olympic gold medal.", category: "Emotional" },
    { id: 13, text: "The way your hair smells like sweet vanilla and rain.", category: "Sensory" },
    { id: 14, text: "Our completely unhinged 2 AM humor that no one else would ever understand.", category: "Goofy" },
    { id: 15, text: "The way you unconsciously reach out to touch my fingers when walking together.", category: "Romantic" },
    { id: 16, text: "How effortlessly gorgeous you look early in the morning with messy hair.", category: "Pure" },
    { id: 17, text: "Your patience with me even when I'm being stubborn or silly.", category: "Gratitude" },
    { id: 18, text: "The way you get excited about food like a 5-year-old on vacation.", category: "Cute" },
    { id: 19, text: "How you make any ordinary car drive feel like a scenic movie sequence.", category: "Magic" },
    { id: 20, text: "Your gentle reassurance whenever self-doubt creeps into my mind.", category: "Anchor" },
    { id: 21, text: "The way you look at me across a crowded room and give that secret wink.", category: "Butterflies" },
    { id: 22, text: "How you make even staying home on a rainy Sunday feel like the best date ever.", category: "Home" },
    { id: 23, text: "Your dramatic reactions when listening to gossip or juicy stories.", category: "Funny" },
    { id: 24, text: "How you believe in my dreams even more fiercely than I do sometimes.", category: "Deep" },
    { id: 25, text: "The sweet notes and texts you send just to check if I had lunch.", category: "Care" },
    { id: 26, text: "How you dance randomly in the kitchen when your favorite tune plays.", category: "Joy" },
    { id: 27, text: "The warmth of your forehead resting against my chest.", category: "Peace" },
    { id: 28, text: "How proud I feel whenever I introduce you as the love of my life.", category: "Pride" },
    { id: 29, text: "Because loving you is the easiest, most natural thing I have ever done.", category: "Soulmate" },
    { id: 30, text: "Because you are you — perfectly, beautifully, unapologetically my favorite person.", category: "Forever" }
  ],

  // ── Act 7: The Master Love Letter (From The Heart For Simmi) ────
  letter: {
    title: "Ek Baat Jo Dil Mein Thi ❤️",
    greeting: "Dear Simmi,",
    paragraphs: [
      "Happy Birthday Simmi! 🎂✨ Aaj 17 September hai, aur main bas chahta tha ki tumhara yeh din sach mein thoda sa special aur memorable bane.",
      "Aaj se lagbhag 3 saal pehle jab hum pehli baar mile the, bike par us cafe jana aur ghanto bina ruke baatein karna... woh lamha mujhe aaj bhi bilkul kal jaisa lagta hai. Aur woh late-night video calls, jahan screen par dekhte dekhte poori raat nikal jaati thi par baatein kabhi khatam nahi hoti thi.",
      "Phir ek waqt aaya jab maine bina soche-samjhe breakup bol diya... Sach kahun toh woh meri zindagi ki sabse badi galti thi. Us waqt shayad main itna samajhdaar nahi tha, par inn 3 saalon ke sannaate mein maine har ek din samjha ki tum mere liye kya thi aur kya ho.",
      "Jaanta hoon tumhein gussa bohot jaldi aata hai, thodi ziddi bhi ho 😉 Par sach bataun? Tumhara woh gussa, tumhari woh narazgi aur tumhare nakhre... mujhe tumhari har ek cheez se pyaar hai.",
      "3 saal baad jab abhi humari wapis baat shuru hui, toh sach mein dil ko ek ajeeb sa sukoon mila. Mujhe nahi pata Simmi ki tumhare dil mein mere liye kya hai, tum kya feel karti ho... Aur main tumpar koi pressure ya haq nahi jata raha. Bas itna batana chahta tha ki mere dil mein tumhare liye jo pyaar tab tha, woh aaj bhi utna hi saccha aur bepanah hai.",
      "Bas hamesha aise hi muskurati rehna. Bhagwan kare tumhe zindagi ki har woh khushi mile jo tum deserve karti ho. Once again, a very Happy Birthday Simmi. ❤️"
    ],
    signOff: "Dil se hamesha tumhara bhala chahne wala,",
    sender: "Tumhara Cafe & Bike Partner ✨"
  }
};
