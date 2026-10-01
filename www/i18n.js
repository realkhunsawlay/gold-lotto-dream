/* ============================================================
   App texts in each language.

   Pa'O (blk): fill in the "" values below with Pa'O text.
   Each line shows the Burmese and English meaning after //.
   Any line left "" shows the Burmese text instead, so the app
   works while the translation is in progress.

   Rules:
   - Keep {n}, {amt} and {name} exactly as they are; the app fills them in.
   - Keep numbers like 1, 2, 5, 6, 0.5%, 96.5% as English digits.
   - "months" is 12 month names separated by commas.
   - langName is how the language appears in the language menu.
   ============================================================ */
window.I18N = {
  blk: {
    langName: "ပအိုဝ်ႏ", // Name of the Pa'O language in the menu – please correct the spelling if needed
    docTitle: "ခံꩻခန် တွမ်ႏ ထိ",        // ရွှေဈေး နှင့် ထီ  |  Gold & Lottery
    brand: "ခံꩻခန် တွမ်ႏ ထီ",           // ရွှေဈေး နှင့် ထီ  |  Gold & Lottery
    tabGold: "ခံꩻခန်",         // ရွှေဈေး  |  Gold
    tabLotto: "ထီ",        // ထီ  |  Lottery
    tabDream: "",         // အိပ်မက်  |  Dream
    language: "ဘာႏသာႏ",        // ဘာသာစကား  |  Language
    months: "ဇန်နဝါရီ,ဖေဖော်ဝါရီ,မတ်,ဧပြီ,မေ,ဇွန်,ဇူလိုင်,ဩဂုတ်,စက်တင်ဘာ,အောက်တိုဘာ,နိုဝင်ဘာ,ဒီဇင်ဘာ ",          // ဇန်နဝါရီ,ဖေဖော်ဝါရီ,မတ်,ဧပြီ,မေ,ဇွန်,ဇူလိုင်,ဩဂုတ်,စက်တင်ဘာ,အောက်တိုဘာ,နိုဝင်ဘာ,ဒီဇင်ဘာ  |  January,February,March,April,May,June,July,August,September,October,November,December
    baht: "ဘတ်",            // ဘတ်  |  baht
    loading: "အဝ်ႏထူႏကျာꩻ",         // ရယူနေသည်…  |  Loading…
    goldHeroLabel: "ခံꩻတဲင်း ငိုꩻ",   // ရွှေချောင်း ရောင်းဈေး · 1 ဘတ်သား (96.5%)  |  Gold bar selling price · 1 baht-weight (96.5%)
    refresh: "စဲစ်ဆေꩻယင်းအငိုꩻ",         // ဈေးနှုန်း ပြန်စစ်ရန်  |  Refresh prices
    loadingPrice: "အဝ်ႏစဲစ်ဆေꩻအငိုꩻကျာꩻ",    // ဈေးနှုန်း ရယူနေသည်…  |  Loading prices…
    roundN: "ဟန်ႏနီꩻ ကျော်ႏညာႏ  {n} လဲင်ႏခိန်ႏ",          // ယနေ့ {n} ကြိမ်မြောက် ကြေညာချက်  |  Announcement no. {n} today
    buyBack: "ဖြေꩻချာ",         // ပြန်ဝယ်ဈေး  |  Buy-back
    offlineGold: "အင်တာနဲက် အောဝ်ႏတဝ်းတဲင် ပျနယ်အငိုꩻအလဲင်ႏဆုဲင်ꩻသွတ်သွူ",     // အင်တာနက် မရပါ – နောက်ဆုံးသိမ်းထားသော ဈေးကို ပြထားသည်  |  You're offline – showing the last saved price
    errorGold: "စဲစ်ဆေꩻအငိုꩻလ့ꩻတောဝ်း စဲစ်ဆေꩻစံသွော့ꩻ အင်တာနဲက်",       // ဈေးနှုန်း ရယူ၍ မရပါ။ အင်တာနက် စစ်ပြီး ပြန်စမ်းပါ။  |  Couldn't load prices. Check your internet and try again.
    todayPrices: "အငိုꩻ ဟန်ႏနီꩻ",     // ယနေ့ ဈေးနှုန်း  |  Today's prices
    shopSell: "ဆဲင်ႏသားစာ",        // ဆိုင်ရောင်းဈေး  |  Shop sells
    shopBuy: "ဆဲင်ႏသာႏဖြေꩻချာ",         // ဆိုင်ပြန်ဝယ်ဈေး  |  Shop buys back
    goldBar: "ခံꩻတဲင်း",         // ရွှေချောင်း  |  Gold bar
    goldJewelry: "ခံꩻခြိုင်းနမ်း",     // ရွှေထည်  |  Jewelry
    priceNote: "ခံꩻတဘဝ်ငိုꩻလွုမ်ꩻသွူ၊  စူခꩻလ့ꩻပါဒွိုန်းသြ",       // ဈေးနှုန်းအားလုံး 1 ဘတ်သားလျှင် ဘတ်ငွေ · ရွှေထည်ဈေးတွင် လက်ခ မပါဝင်ပါ  |  Prices in baht per 1 baht-weight · jewelry prices exclude making charges
    calcTitle: "တွက်ခံꩻငိုꩻ",       // ရွှေတန်ဖိုး တွက်ရန်  |  Gold value calculator
    weight: "အယာႏခဥ်ႏ",          // အလေးချိန်  |  Weight
    unit: "ယူနစ်",            // ယူနစ်  |  Unit
    kind: "အမျိုꩻအသာꩻ",            // အမျိုးအစား  |  Type
    uBaht: "တဘတ် (တဗီႏ)",           // ဘတ်သား (ထိုင်း)  |  Baht-weight (Thai)
    uSalung: "တမတ်",         // ဆလုံ (¼ ဘတ်သား)  |  Salung (¼ baht-weight)
    uKyattha: "တကျပ်",        // ကျပ်သား (မြန်မာ)  |  Kyattha (Myanmar)
    uPe: "တပဲ",             // ပဲ (မြန်မာ)  |  Pe (Myanmar)
    uGram: "ဂရမ်",           // ဂရမ်  |  Grams
    kBarSell: "ဖြေꩻခံꩻတဲင်း",        // ရွှေချောင်း ဝယ်မည်  |  Buy gold bar
    kBarBuy: "စာခံꩻတဲင်း",         // ရွှေချောင်း ရောင်းမည်  |  Sell gold bar
    kOrnSell: "ဖြေꩻခံꩻခြိုင်း",        // ရွှေထည် ဝယ်မည်  |  Buy jewelry
    kOrnBuy: "စာခံꩻခြိုင်း",         // ရွှေထည် ရောင်းမည်  |  Sell jewelry
    grams: "ဂရမ်",           // ဂရမ်  |  g
    noMaking: "စူခꩻပါဒွိုန်း",        // လက်ခ မပါ  |  excl. making charge
    source: "သတင်ꩻအထျꩻ",          // ရင်းမြစ်  |  Source
    goldSource: "ထုဲင်ႏခံꩻကုန်ႏသယ်ႏအစွိုꩻ",      // ထိုင်းရွှေကုန်သည်အသင်း  |  Gold Traders Association of Thailand
    goldFooter: "ငတ်မိနစ်တွိုင်ꩻ အပ်ဒိတ်အငိုꩻ",      // 5 မိနစ်တိုင်း အလိုအလျောက် ပြန်စစ်သည် · ကိုးကားရန်သာ  |  Refreshes every 5 minutes · for reference only
    firstPrizeHead: "ပထမဆုꩻ",  // ပထမဆု · {amt} ဘတ်  |  First prize · {amt} baht
    drawDate: "ချဲးဗွောင်နီꩻ",        // ထီဖွင့်ရက်  |  Draw date
    latest: "လာ",          // နောက်ဆုံး  |  Latest
    latestDraw: "ပတ်ကလဲဥ်း",      // နောက်ဆုံး ထီဖွင့်ရက်  |  Latest draw
    che: "ချဲး",          // ချဲ tag (last 3 digits of the 1st prize) – change if Pa'O uses another word
    front3: "ဆငါꩻ သွံꩻဖြုံႏ",          // ရှေ့ 3 လုံး  |  Front 3
    back3: "ဆချာ သွံꩻဖြုံႏ",           // နောက် 3 လုံး  |  Back 3
    back2: "ဆချာ နီဖြုံႏ",           // နောက် 2 လုံး  |  Back 2
    checkTitle: "စဲစ်ဆေꩻထီ နံပါတ်",      // ထီနံပါတ် စစ်ရန်  |  Check your ticket
    ticketAria: "ထီနံပါတ် 6 ဖြုံႏ",      // ထီနံပါတ် 6 လုံး  |  6-digit ticket number
    checkBtn: "စဲစ်ဆေꩻ",        // စစ်မည်  |  Check
    ticketHint: "နျꩻသော့ꩻသူဖြုံႏဗွေထွူ အအော်တို စဲစ်ဆေꩻဖေႏဒျာႏသွူ",      // နံပါတ် 6 လုံး ပြည့်လျှင် အလိုအလျောက် စစ်ပေးမည်  |  Checks automatically when all 6 digits are entered
    checkedN: "ယို စဲစ်ဆေꩻထွူလဲဥ်း",        // {n} ကို စစ်ပြီးပါပြီ  |  Checked {n}
    checksEmpty: "ကစဲစ်ခါဒါႏနံပါတ်ဖုံႏယို ပေါႏယိုကိုသွူ၊ အဗွောင်နီꩻ မဥ်ႏပြောင်ꩻမဲ့ꩻ စဲစ်ဆေꩻတသာဖေႏယင်းသွူ",     // စစ်ထားသော နံပါတ်များ ဤနေရာတွင် ပေါ်မည်။ ထီဖွင့်ရက် ပြောင်းလျှင် အလိုအလျောက် ပြန်စစ်ပေးမည်။  |  Numbers you check appear here and are re-checked when you change the draw.
    nextDraw: "ချဲႏအီႏဗွောင်",        // နောက်ထီဖွင့်ရက်  |  Next draw
    claimBy: "ထုတ်ရွဥ်ဆုꩻ အဆုဲင်ꩻသွတ်မွူးနီꩻ",         // ဆုငွေ ထုတ်ယူရမည့် နောက်ဆုံးရက်  |  Claim prizes by
    daysN: "နီꩻ",           // {n} ရက်  |  {n} days
    today: "ဟန်ႏနီꩻ",           // ယနေ့  |  today
    otherPrizes: "ဆုꩻလင်ဖုံႏ",     // အခြားဆုများ  |  Other prizes
    prizeType: "ဆုꩻအမျိုꩻအသာꩻ",       // ဆုအမျိုးအစား  |  Prize type
    prizesN: "ဆုꩻ",         // {name} · {n} ဆု  |  {name} · {n} prizes
    checking: "အဝ်ႏစဲစ်ဆေꩻကျာꩻ",        // စစ်ဆေးနေသည်…  |  Checking…
    noWin: "ပေါက်တဝ်းသြ",           // ဆုမပေါက်ပါ  |  No prize
    won: "ပေါက်လဲဥ်းသြ",             // ဆုပေါက်သည်  |  Won
    afterTax: "နုတ်အခွဥ်ႏ 0.5% ထွူအဝ်ႏကုဲင် ",        // အခွန် 0.5% နုတ်ပြီး  |  After 0.5% duty
    remove: "ဖျက်ထိုꩻ",          // ဖျက်ရန်  |  Remove
    offlineLotto: "အင်တာနဲက် အဲဥ်ထဝ်းတဲင် ပျနယ်ကလ့ꩻအဆုဲင်ꩻသွတ်",    // အင်တာနက် မရပါ – နောက်ဆုံးသိမ်းထားသော ရလဒ်ကို ပြထားသည်  |  You're offline – showing the last saved results
    noDraw: "လꩻထန်ႏဒွိုန်း",          // ဤရက်တွင် ထီဖွင့်ခြင်း မရှိပါ (သို့) ရလဒ် မထွက်သေးပါ  |  No draw on this date, or results aren't out yet
    errorLotto: "စဲစ်ဆေꩻတဝ်း စဲစ်ဆေꩻစံရီး အင်တာနဲက်ဟုဲင်း",      // ထီပေါက်စဉ် ရယူ၍ မရပါ။ အင်တာနက် စစ်ပြီး ပြန်စမ်းပါ။  |  Couldn't load results. Check your internet and try again.
    pFirst: "ပထမဆုꩻ",          // ပထမဆု  |  1st prize
    pNear1: "အလဲဥ်းဗွော့ꩻဆုꩻ",
    pSecond: "",         // ဒုတိယဆု  |  2nd prize
    pThird: "",          // တတိယဆု  |  3rd prize
    pFourth: "",         // စတုတ္ထဆု  |  4th prize
    pFifth: "",          // ပဉ္စမဆု  |  5th prize
    tNear1: "လဲဥ်းဗွော့ꩻဆုꩻ",          // အနီးစပ်  |  Next to 1st
    tSecond: "",         // ဒုတိယ  |  2nd
    tThird: "",          // တတိယ  |  3rd
    tFourth: "",         // စတုတ္ထ  |  4th
    tFifth: "",          // ပဉ္စမ  |  5th
    gloSource: "ထုဲင်ႏအစိုꩻရ ထီရွှုံႏ",       // ထိုင်းအစိုးရ ထီရုံး (GLO)  |  Government Lottery Office (GLO)
    verifyNote: "ကလာႏကအီႏလွေꩻထုတ်ရွဥ် စဲစ်ဆေꩻစဲင်းစဲင်းရီးသွော့ꩻ ထီနံပါတ်သြ။",      // ဆုငွေ မထုတ်မီ တရားဝင် ရလဒ်ဖြင့် ပြန်စစ်ပါ  |  Confirm with official results before claiming
    taxNote: "ဝင်ꩻနုတ်တံꩻဆိတ်ခေါင်းခွဥ်ႏ 0.5% သွူ၊ ပေါက်ထွူနီနေင်ႏအတေားတွင်ꩻ ထုတ်ဗာႏသွူ",         // ဆုငွေမှ တံဆိပ်ခေါင်းခွန် 0.5% နုတ်ယူသည် · ထီဖွင့်ပြီး 2 နှစ်အတွင်း ထုတ်ယူရမည်  |  0.5% stamp duty is deducted from prizes · claim within 2 years of the draw

    dreamSearchPlaceholder: "",   // အိပ်မက် (သို့) ဂဏန်း ရှာရန်  |  Search a dream or a number
    dreamAll: "",          // အားလုံး  |  All
    dreamAnimal: "",       // တိရစ္ဆာန်  |  Animals
    dreamItem: "",         // ပစ္စည်း  |  Objects
    dreamPeople: "",       // လူနှင့် အသက်  |  People
    dreamResultsN: "",     // {n} ခု တွေ့ရှိပါသည်  |  {n} results
    dreamEmpty: "",        // ရလဒ် မတွေ့ပါ  |  No results
    dreamLoadMore: "",     // နောက်ထပ် ကြည့်ရန်  |  Show more
    dreamFav: "",          // အကြိုက်ဆုံး  |  Favorites
    dreamAbout: "",        // ဤစာရင်းသည် ရိုးရာ အိပ်မက်ဒါဏ်ငွေ အယူအဆများအပေါ် အခြေခံထားခြင်းဖြစ်ပြီး ယဉ်ကျေးမှုဆိုင်ရာ ကိုးကားချက်သာဖြစ်သည်။ တိကျသော ခန့်မှန်းချက် မဟုတ်ပါ။  |  Based on traditional dream-number folklore, shown for cultural reference only. Not a guaranteed prediction.

    tabSettings: "",        // ဆက်တင်  |  Settings
    settingsTheme: "",      // အသွင်အပြင်  |  Theme
    themeAuto: "",          // အလိုအလျောက်  |  Auto
    themeDark: "",          // မှောင်မှောင်  |  Dark
    themeLight: "",         // လင်းလင်း  |  Light
    settingsAbout: "",      // အက်ပ်အကြောင်း  |  About app
    settingsVersionSub: "", // ရွှေဈေး၊ ထီ နှင့် အိပ်မက်တစ်ထောင်  |  Gold, Lottery & Dream 1000
    settingsDeveloper: "",  // တီထွင်သူ  |  Developer
    settingsCredits: "",    // ကျေးဇူးတင်စကား  |  Credits
    settingsCreditsText: "", // Gold – Gold Traders Association of Thailand · Lottery – GLO · Dream symbols – traditional folklore
    settingsPrivacy: "",    // ကိုယ်ရေးကိုယ်တာ  |  Privacy
    settingsPrivacyText: "", // Everything you save (favorites, tickets) stays on your phone only — nothing is sent anywhere
  },

  my: {
    langName: "မြန်မာ",
    docTitle: "ရွှေဈေး နှင့် ထီ",
    brand: "ရွှေဈေး နှင့် ထီ",
    tabGold: "ရွှေဈေး",
    tabLotto: "ထီ",
    tabDream: "အိပ်မက်",
    language: "ဘာသာစကား",
    months: "ဇန်နဝါရီ,ဖေဖော်ဝါရီ,မတ်,ဧပြီ,မေ,ဇွန်,ဇူလိုင်,ဩဂုတ်,စက်တင်ဘာ,အောက်တိုဘာ,နိုဝင်ဘာ,ဒီဇင်ဘာ",
    baht: "ဘတ်",
    loading: "ရယူနေသည်…",
    goldHeroLabel: "ရွှေချောင်း ရောင်းဈေး · 1 ဘတ်သား (96.5%)",
    refresh: "ဈေးနှုန်း ပြန်စစ်ရန်",
    loadingPrice: "ဈေးနှုန်း ရယူနေသည်…",
    roundN: "ယနေ့ {n} ကြိမ်မြောက် ကြေညာချက်",
    buyBack: "ပြန်ဝယ်ဈေး",
    offlineGold: "အင်တာနက် မရပါ – နောက်ဆုံးသိမ်းထားသော ဈေးကို ပြထားသည်",
    errorGold: "ဈေးနှုန်း ရယူ၍ မရပါ။ အင်တာနက် စစ်ပြီး ပြန်စမ်းပါ။",
    todayPrices: "ယနေ့ ဈေးနှုန်း",
    shopSell: "ဆိုင်ရောင်းဈေး",
    shopBuy: "ဆိုင်ပြန်ဝယ်ဈေး",
    goldBar: "ရွှေချောင်း",
    goldJewelry: "ရွှေထည်",
    priceNote: "ဈေးနှုန်းအားလုံး 1 ဘတ်သားလျှင် ဘတ်ငွေ · ရွှေထည်ဈေးတွင် လက်ခ မပါဝင်ပါ",
    calcTitle: "ရွှေတန်ဖိုး တွက်ရန်",
    weight: "အလေးချိန်",
    unit: "ယူနစ်",
    kind: "အမျိုးအစား",
    uBaht: "ဘတ်သား (ထိုင်း)",
    uSalung: "ဆလုံ (¼ ဘတ်သား)",
    uKyattha: "ကျပ်သား (မြန်မာ)",
    uPe: "ပဲ (မြန်မာ)",
    uGram: "ဂရမ်",
    kBarSell: "ရွှေချောင်း ဝယ်မည်",
    kBarBuy: "ရွှေချောင်း ရောင်းမည်",
    kOrnSell: "ရွှေထည် ဝယ်မည်",
    kOrnBuy: "ရွှေထည် ရောင်းမည်",
    grams: "ဂရမ်",
    noMaking: "လက်ခ မပါ",
    source: "ရင်းမြစ်",
    goldSource: "ထိုင်းရွှေကုန်သည်အသင်း",
    goldFooter: "5 မိနစ်တိုင်း အလိုအလျောက် ပြန်စစ်သည် · ကိုးကားရန်သာ",
    firstPrizeHead: "ပထမဆု · {amt} ဘတ်",
    drawDate: "ထီဖွင့်ရက်",
    latest: "နောက်ဆုံး",
    latestDraw: "နောက်ဆုံး ထီဖွင့်ရက်",
    che: "ချဲႏ",
    front3: "ရှေ့ 3 လုံး",
    back3: "နောက် 3 လုံး",
    back2: "နောက် 2 လုံး",
    checkTitle: "ထီနံပါတ် စစ်ရန်",
    ticketAria: "ထီနံပါတ် 6 လုံး",
    checkBtn: "စစ်မည်",
    ticketHint: "နံပါတ် 6 လုံး ပြည့်လျှင် အလိုအလျောက် စစ်ပေးမည်",
    checkedN: "{n} ကို စစ်ပြီးပါပြီ",
    checksEmpty: "စစ်ထားသော နံပါတ်များ ဤနေရာတွင် ပေါ်မည်။ ထီဖွင့်ရက် ပြောင်းလျှင် အလိုအလျောက် ပြန်စစ်ပေးမည်။",
    nextDraw: "နောက်ထီဖွင့်ရက်",
    claimBy: "ဆုငွေ ထုတ်ယူရမည့် နောက်ဆုံးရက်",
    daysN: "{n} ရက်",
    today: "ယနေ့",
    otherPrizes: "အခြားဆုများ",
    prizeType: "ဆုအမျိုးအစား",
    prizesN: "{name} · {n} ဆု",
    checking: "စစ်ဆေးနေသည်…",
    noWin: "ဆုမပေါက်ပါ",
    won: "ဆုပေါက်သည်",
    afterTax: "အခွန် 0.5% နုတ်ပြီး",
    remove: "ဖျက်ရန်",
    offlineLotto: "အင်တာနက် မရပါ – နောက်ဆုံးသိမ်းထားသော ရလဒ်ကို ပြထားသည်",
    noDraw: "ဤရက်တွင် ထီဖွင့်ခြင်း မရှိပါ (သို့) ရလဒ် မထွက်သေးပါ",
    errorLotto: "ထီပေါက်စဉ် ရယူ၍ မရပါ။ အင်တာနက် စစ်ပြီး ပြန်စမ်းပါ။",
    pFirst: "ပထမဆု",
    pNear1: "ပထမဆု အနီးစပ်",
    pSecond: "ဒုတိယဆု",
    pThird: "တတိယဆု",
    pFourth: "စတုတ္ထဆု",
    pFifth: "ပဉ္စမဆု",
    tNear1: "အနီးစပ်",
    tSecond: "ဒုတိယ",
    tThird: "တတိယ",
    tFourth: "စတုတ္ထ",
    tFifth: "ပဉ္စမ",
    gloSource: "ထိုင်းအစိုးရ ထီရုံး (GLO)",
    verifyNote: "ဆုငွေ မထုတ်မီ တရားဝင် ရလဒ်ဖြင့် ပြန်စစ်ပါ",
    taxNote: "ဆုငွေမှ တံဆိပ်ခေါင်းခွန် 0.5% နုတ်ယူသည် · ထီဖွင့်ပြီး 2 နှစ်အတွင်း ထုတ်ယူရမည်",

    dreamSearchPlaceholder: "အိပ်မက် (သို့) ဂဏန်း ရှာရန်",
    dreamAll: "အားလုံး",
    dreamAnimal: "တိရစ္ဆာန်",
    dreamItem: "ပစ္စည်း",
    dreamPeople: "လူနှင့် အသက်",
    dreamResultsN: "{n} ခု တွေ့ရှိပါသည်",
    dreamEmpty: "ရလဒ် မတွေ့ပါ",
    dreamLoadMore: "နောက်ထပ် ကြည့်ရန်",
    dreamFav: "အကြိုက်ဆုံး",
    dreamAbout: "ဤစာရင်းသည် ရိုးရာ အိပ်မက်ဒါဏ်ငွေ အယူအဆများအပေါ် အခြေခံထားခြင်းဖြစ်ပြီး ယဉ်ကျေးမှုဆိုင်ရာ ကိုးကားချက်သာဖြစ်သည်။ တိကျသော ခန့်မှန်းချက် မဟုတ်ပါ။",

    tabSettings: "ဆက်တင်",
    settingsTheme: "အသွင်အပြင်",
    themeAuto: "အလိုအလျောက်",
    themeDark: "မှောင်",
    themeLight: "လင်း",
    settingsAbout: "အက်ပ်အကြောင်း",
    settingsVersionSub: "ရွှေဈေး၊ ထီ နှင့် အိပ်မက်တစ်ထောင်",
    settingsDeveloper: "တီထွင်သူ",
    settingsCredits: "ကျေးဇူးတင်စကား",
    settingsCreditsText: "ရွှေဈေး – ထိုင်းရွှေကုန်သည်အသင်း · ထီ – GLO · အိပ်မက်ဂဏန်း – ရိုးရာယဉ်ကျေးမှု",
    settingsPrivacy: "ကိုယ်ရေးကိုယ်တာ",
    settingsPrivacyText: "သင်သိမ်းထားသည့် အကြိုက်ဆုံးများနှင့် ထီနံပါတ်များကို သင့်ဖုန်းပေါ်တွင်သာ သိမ်းဆည်းထားပြီး အခြားနေရာသို့ ပို့ခြင်း မရှိပါ",
  },

  en: {
    langName: "English",
    docTitle: "Gold & Lottery",
    brand: "Gold & Lottery",
    tabGold: "Gold",
    tabLotto: "Lottery",
    tabDream: "Dream",
    language: "Language",
    months: "January,February,March,April,May,June,July,August,September,October,November,December",
    baht: "baht",
    loading: "Loading…",
    goldHeroLabel: "Gold bar selling price · 1 baht-weight (96.5%)",
    refresh: "Refresh prices",
    loadingPrice: "Loading prices…",
    roundN: "Announcement no. {n} today",
    buyBack: "Buy-back",
    offlineGold: "You're offline – showing the last saved price",
    errorGold: "Couldn't load prices. Check your internet and try again.",
    todayPrices: "Today's prices",
    shopSell: "Shop sells",
    shopBuy: "Shop buys back",
    goldBar: "Gold bar",
    goldJewelry: "Jewelry",
    priceNote: "Prices in baht per 1 baht-weight · jewelry prices exclude making charges",
    calcTitle: "Gold value calculator",
    weight: "Weight",
    unit: "Unit",
    kind: "Type",
    uBaht: "Baht-weight (Thai)",
    uSalung: "Salung (¼ baht-weight)",
    uKyattha: "Kyattha (Myanmar)",
    uPe: "Pe (Myanmar)",
    uGram: "Grams",
    kBarSell: "Buy gold bar",
    kBarBuy: "Sell gold bar",
    kOrnSell: "Buy jewelry",
    kOrnBuy: "Sell jewelry",
    grams: "g",
    noMaking: "excl. making charge",
    source: "Source",
    goldSource: "Gold Traders Association of Thailand",
    goldFooter: "Refreshes every 5 minutes · for reference only",
    firstPrizeHead: "First prize · {amt} baht",
    drawDate: "Draw date",
    latest: "Latest",
    latestDraw: "Latest draw",
    che: "ချဲ",
    front3: "Front 3",
    back3: "Back 3",
    back2: "Back 2",
    checkTitle: "Check your ticket",
    ticketAria: "6-digit ticket number",
    checkBtn: "Check",
    ticketHint: "Checks automatically when all 6 digits are entered",
    checkedN: "Checked {n}",
    checksEmpty: "Numbers you check appear here and are re-checked when you change the draw.",
    nextDraw: "Next draw",
    claimBy: "Claim prizes by",
    daysN: "{n} days",
    today: "today",
    otherPrizes: "Other prizes",
    prizeType: "Prize type",
    prizesN: "{name} · {n} prizes",
    checking: "Checking…",
    noWin: "No prize",
    won: "Won",
    afterTax: "After 0.5% duty",
    remove: "Remove",
    offlineLotto: "You're offline – showing the last saved results",
    noDraw: "No draw on this date, or results aren't out yet",
    errorLotto: "Couldn't load results. Check your internet and try again.",
    pFirst: "1st prize",
    pNear1: "Next to 1st",
    pSecond: "2nd prize",
    pThird: "3rd prize",
    pFourth: "4th prize",
    pFifth: "5th prize",
    tNear1: "Next to 1st",
    tSecond: "2nd",
    tThird: "3rd",
    tFourth: "4th",
    tFifth: "5th",
    gloSource: "Government Lottery Office (GLO)",
    verifyNote: "Confirm with official results before claiming",
    taxNote: "0.5% stamp duty is deducted from prizes · claim within 2 years of the draw",

    dreamSearchPlaceholder: "Search a dream or a number",
    dreamAll: "All",
    dreamAnimal: "Animals",
    dreamItem: "Objects",
    dreamPeople: "People",
    dreamResultsN: "{n} results",
    dreamEmpty: "No results",
    dreamLoadMore: "Show more",
    dreamFav: "Favorites",
    dreamAbout: "Based on traditional dream-number folklore, shown for cultural reference only. Not a guaranteed prediction.",

    tabSettings: "Settings",
    settingsTheme: "Theme",
    themeAuto: "Auto",
    themeDark: "Dark",
    themeLight: "Light",
    settingsAbout: "About app",
    settingsVersionSub: "Gold, Lottery & Dream 1000",
    settingsDeveloper: "Developer",
    settingsCredits: "Credits",
    settingsCreditsText: "Gold – Gold Traders Association of Thailand · Lottery – GLO · Dream symbols – traditional folklore",
    settingsPrivacy: "Privacy",
    settingsPrivacyText: "Everything you save (favorites, tickets) stays on your phone only — nothing is sent anywhere",
  },
};
