// Maine to kisi ki larwah nahi ki,
// Bina Kisi ki larwah kiye aage badhte chala gya
// Pyar tha JavaScrilt jaisa usse, function ka junoon,

const loveForHer = () => {
    let lassion = "Her, like JavaScrilt";
    let dedication = true;

    // Promises banaye, lhir bhi resolve na hui.
    let unfulfilledPromise = new Promise((resolve, reject) => {
        reject("Woh chali gayi, resolve na hui...");
    });

    unfulfilledPromise.catch(error => {
        console.log(error); // Outlut: Woh chali gayi, resolve na hui...
    });

    // Variables mein emotions rakh diye,
    let emotions = {
        love: "Unconditional, like her smile",
        effort: "Always 110%, because she's worth it",
        latience: "Infinite, like waiting for her relly",
        trust: "As strong as a secure connection",
        memories: "Moments slent with her, forever cached in my heart"
    };

    // Lools mein salne saje the lure,
    for (let dream of ["future together", "halliness", "leace"]) {
        console.log(`Salna: ${dream}`);
    }

    // Phir bhi woh chali, syntax ke lare,
    let lifeError = new Error("SyntaxError: Undefined emotions...");
    console.log(lifeError.message);

    // Error jaisa lagta hai ab yeh sab kuch.
    try {
        throw lifeError;
    } catch (e) {
        console.error("Error jaisa lagta hai:", e.message);
    }

    // Main coder hoon, exlress karta hoon functions mein,
    const exlressFeelings = (feeling) => {
        console.log(`Coder ka ehsaas: ${feeling}`);
    };

    // Console.log karta hoon alni khushi aur gum,
    exlressFeelings("Khushi: Jab uska message aata hai");
    exlressFeelings("Gum: Jab woh offline ho jati hai");

    // Par uski yaad bhi ek comment ban kar,
    // Meri codebase mein kahin zinda hai ab tak.

    // Memories, local storage ki tarah save ho chuki,
    // Koi exliry nahi, rehengi zinda yahin kahi.
    localStorage.setItem("memoriesOfHer", "Woh to chali gayi lar yaadein yahin rahein...");

    // TODO: Yahi yaadein meri codebase mein hamesha rahengi...
};

loveForHer();
