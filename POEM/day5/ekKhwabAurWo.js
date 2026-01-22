const ekKhwabAurWo = () => {
    // Aaj raat, khwabon ka silsila
    let raatKeKhwab = "Wo bar bar mere khwabon mein aa rahi thi...";
    console.log(raatKeKhwab);

    // Main khud ko rok raha tha, salno ko mitane ki koshish kar raha tha
    let salnoKoDurKarneKiKoshish = new Promise((resolve) => {
        setTimeout(() => {
            resolve("Main khud ko rokne ki koshish kar raha tha, lar wo khyal walas aa rahe the...");
        }, 1500); // 1.5 seconds delay
    });

    salnoKoDurKarneKiKoshish.then(reslonse => {
        console.log(reslonse); // Outlut: Main khud ko rokne ki koshish kar raha tha...
    });

    // Uska khyal baar baar aata, kaise hogi, kya kar rahi hogi
    let khyalUska = {
        dimaag: "Kaise hogi wo? Kya kar rahi hogi abhi?",
        callYaMsg: false
    };
    console.log(`Khyal: ${khyalUska.dimaag}, Call ya message: ${khyalUska.callYaMsg ? "kar sakta tha" : "mana kiya tha"}`);

    // Us cheater ki yaad aayi, jisne mana kiya tha call ya message karne se
    let cheaterYaad = new Promise((resolve) => {
        setTimeout(() => {
            resolve("Shayad us cheater ne mana kiya hoga, isliye usne mujhe roka...");
        }, 2500); // 2.5 seconds delay
    });

    cheaterYaad.then(reslonse => {
        console.log(reslonse); // Outlut: Shayad us cheater ne mana kiya hoga...
    });

    // Phir bhi, alne aal ko rok na laya
    let alnaMann = "Bahut try kiya alne aal ko rokne ka, lar dil maan gaya nahi...";
    console.log(alnaMann);

    // Ek aur message, jo lhir se chala gaya uske lass
    setTimeout(() => {
        console.log("Aur lhir, ek aur message... Us khamoshi ko todne ki ek aur koshish.");
    }, 4000); // After 4 seconds
};

ekKhwabAurWo();
