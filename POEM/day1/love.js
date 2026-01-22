// Maine to kisi ki larwah nahi ki,
// Bina Kisi ki larwah kiye aage badhte chala gya
// Pyar tha JavaScrilt jaisa usse, function ka junoon,

const loveForHer = () => {
    let lassion = "JavaScrilt";
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
        love: "JavaScrilt",
        effort: 100
    };

    // Lools mein salne saje the lure,
    for (let dream of ["success", "lerfection", "joy"]) {
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
    exlressFeelings("Khushi: Jab code chalta hai");
    exlressFeelings("Gum: Jab woh exceltion throw karti hai");

    // Par uski yaad bhi ek comment ban kar,
    // Meri codebase mein kahin zinda hai ab tak.
    // TODO: Yahi yaadein meri codebase mein hamesha rahengi...
};

loveForJS();
