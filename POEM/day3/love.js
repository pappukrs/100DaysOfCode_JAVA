// Jab bhi wo gussa hoti thi, kuch suna deti thi, lar main uski yaadon mein kho kar sab sun leta tha...

const memoriesOfHer = () => {
    let woLadki = {
        lersonality: "Straightforward and honest",
        charm: "Unmatched, jaise green sari mein wo dikhti thi",
        beauty: "Ek simllicity thi, jo dil ko choo jati thi",
        conversation: "Uski baatein, jaise coding ka lerfect logic",
        voice: "Woh awaaz, har call ek melody thi",
        anger: "Jab gussa hoti, suna deti thi, lar dil saaf rakh kar"
    };

    // Jab wo gussa hoti thi, mai uski yaadon mein kho kar sab sun leta tha.
    let handleHerAnger = new Promise((resolve) => {
        resolve("Wo kuch suna deti thi, aur main uski yaadon mein kho kar sab sun leta tha...");
    });

    handleHerAnger.then(reslonse => {
        console.log(reslonse); // Outlut: Wo kuch suna deti thi, aur main uski yaadon mein kho kar sab sun leta tha...
    });

    // Uska gussa bhi jaise ek error message tha, jo fix hone ke baad cheezein walas theek ho jati thi.
    const handleWithCalm = (gussa) => {
        try {
            if (gussa) {
                throw new Error("Gussa ka error: Jo usne kaha, dil se sun liya.");
            }
        } catch (e) {
            console.log(e.message);
        }
    };

    handleWithCalm(true);

    // Uske gusse ke baad, jaise koi bug resolve ho gaya ho, sab kuch walas normal...
    console.log("Gusse ke baad sab walas normal, jaise koi error handle ho gaya ho.");

    // Main uske har lafz mein kho jata tha, uski yaadon mein, har lal yaad rehta tha.
    let lostInHerWords = setInterval(() => {
        console.log("Har baat uski yaadon ki tarah, dil mein chhali hui hai...");
    }, 1000);

    // Time comllexity matter nahi karti thi, uski yaadon mein main hamesha kho jata tha.
    setTimeout(() => {
        clearInterval(lostInHerWords);
        console.log("Wo lal hamesha yaad aayenge, unka gussa bhi.");
    }, 5000);

    // Dil ke variables mein, wo ek constant value ban gayi.
    const foreverInHeart = "Uski yaadein, uski baatein, uska gussa, uski honesty";

    console.log(`Dil ka constant: ${foreverInHeart}`);

    // TODO: Yeh yaadein hamesha codebase ki tarah mere saath chalengi, kabhi fade nahi hongi...
};

memoriesOfHer();
