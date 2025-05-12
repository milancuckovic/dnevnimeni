const defaultMeals = {
  breakfast: [
    {
      name: "Omlet sa povrćem",
      ingredients: "Jaja, paprika, luk, šampinjoni, sir",
    },
    {
      name: "Grčki jogurt sa voćem",
      ingredients: "Grčki jogurt, med, banana, jagode, orasi",
    },
    {
      name: "Palačinke sa džemom",
      ingredients: "Brašno, jaja, mleko, džem od šljiva",
    },
    {
      name: "Ovsena kaša sa cimetom",
      ingredients: "Ovsene pahuljice, mleko, med, cimet, jabuka",
    },
    {
      name: "Sendvič sa humusom",
      ingredients: "Integralni hleb, humus, krastavac, paprika",
    },
    {
      name: "Jaja na oko sa integralnim tostom",
      ingredients: "Jaja, integralni hleb, avokado, ceri paradajz",
    },
    {
      name: "Smuti sa bananom i jagodama",
      ingredients: "Banana, jagode, jogurt, med, lan seme",
    },
    {
      name: "Proja sa sirom",
      ingredients: "Kukuruzno brašno, sir, jogurt, ulje",
    },
    {
      name: "Popara sa sirom",
      ingredients: "Stari hleb, mleko, sir, mast ili puter",
    },
    {
      name: "Kajgana sa slaninom",
      ingredients: "Jaja, slanina, crni luk, začini",
    },
    {
      name: "Uštipci",
      ingredients: "Brašno, jaja, jogurt, prašak za pecivo, ulje",
    },
    {
      name: "Heljdine palačinke",
      ingredients: "Heljdino brašno, jaja, mleko, jogurt",
    },
    {
      name: "Integralne kifle sa sirom",
      ingredients: "Integralno brašno, kvasac, sir, jaja, ulje",
    },
    {
      name: "Kukuruzna kaša sa sirom",
      ingredients: "Kukuruzno brašno, mleko, sir",
    },
    {
      name: "Sendvič sa jajima",
      ingredients: "Tost, kuvana jaja, majonez, rukola",
    },
    {
      name: "Tost sa avokadom",
      ingredients: "Integralni tost, avokado, limun, jaje",
    },
    {
      name: "Jogurt i žitarice",
      ingredients: "Jogurt, ovsene pahuljice, suvo grožđe, bademi",
    },
    { name: "Voćna salata", ingredients: "Banana, jabuka, kivi, med, limun" },
    {
      name: "Mafin sa sirom",
      ingredients: "Brašno, sir, jaja, jogurt, prašak za pecivo",
    },
    { name: "Tost sa puterom i medom", ingredients: "Tost, puter, med" },
    {
      name: "Pita sa jabukama",
      ingredients: "Kore za pitu, jabuke, cimet, šećer",
    },
    { name: "Domaći keks", ingredients: "Brašno, puter, šećer, jaja, vanila" },
    {
      name: "Pohovane tikvice",
      ingredients: "Tikvice, brašno, jaja, prezle, ulje",
    },
    {
      name: "Sir i paradajz",
      ingredients: "Mladi sir, paradajz, maslinovo ulje, origano",
    },
    { name: "Pohovani sir", ingredients: "Sir, brašno, jaja, prezle" },
    {
      name: "Kuvana jaja sa povrćem",
      ingredients: "Jaja, paprika, krastavac, paradajz",
    },
    { name: "Zemičke sa sirom", ingredients: "Zemičke, sir, jogurt" },
    { name: "Mleko i cornflakes", ingredients: "Mleko, cornflakes" },
    {
      name: "Kiflice sa džemom",
      ingredients: "Brašno, kvasac, džem, šećer u prahu",
    },
    { name: "Pita sa sirom", ingredients: "Kore za pitu, sir, jaja, pavlaka" },
    { name: "Kajgana sa sirom", ingredients: "Jaja, sir, ulje, so" },
    { name: "Pohovani hleb", ingredients: "Jaja, mleko, hleb, ulje" },
    { name: "Kukuruzna kaša", ingredients: "Palenta, voda, so, sir" },
    {
      name: "Sir i paradajz",
      ingredients: "Beli sir, paradajz, maslinovo ulje",
    },
    {
      name: "Jogurt sa ovsenim pahuljicama",
      ingredients: "Jogurt, ovsene pahuljice, med",
    },
    { name: "Kifla sa pavlakom", ingredients: "Kifla, pavlaka" },
    { name: "Prepečen hleb sa sirom", ingredients: "Tost hleb, sir, puter" },
    { name: "Hleb sa kajmakom", ingredients: "Domaći hleb, kajmak" },
    { name: "Voćna salata", ingredients: "Banana, jabuka, kivi, limunov sok" },
    { name: "Sendvič sa paštetom", ingredients: "Hleb, pašteta, krastavčići" },
    { name: "Pohovana jaja", ingredients: "Jaja, prezle, ulje" },
    { name: "Tost sa džemom", ingredients: "Tost hleb, džem, puter" },
    {
      name: "Sirova granola",
      ingredients: "Ovsene pahuljice, orašasti plodovi, med",
    },
    { name: "Uštipci", ingredients: "Brašno, jaja, jogurt, prašak za pecivo" },
    { name: "Pohovani sir", ingredients: "Sir, jaja, prezle, ulje" },
    { name: "Domaći jogurt sa orasima", ingredients: "Jogurt, orasi, med" },
    {
      name: "Proja sa spanaćem",
      ingredients: "Kukuruzno brašno, spanać, sir, jogurt",
    },
    { name: "Hleb sa maslacem i medom", ingredients: "Hleb, maslac, med" },
    {
      name: "Pita od jabuka",
      ingredients: "Kore za pitu, jabuke, šećer, cimet",
    },
    { name: "Pečena jaja u rerni", ingredients: "Jaja, pavlaka, sir" },
    { name: "Zemička sa šunkom i sirom", ingredients: "Zemička, šunka, sir" },
    { name: "Salata od jaja", ingredients: "Kuvana jaja, majonez, senf" },
    { name: "Tortilja sa jajima", ingredients: "Tortilja, jaja, povrće" },
    {
      name: "Sendvič sa tunjevinom",
      ingredients: "Tunjevina, hleb, majonez, zelena salata",
    },
    { name: "Banana palačinke", ingredients: "Banana, jaja, ovseno brašno" },
    {
      name: "Mafini sa sirom",
      ingredients: "Brašno, jaja, sir, prašak za pecivo",
    },
    { name: "Slani rolat sa sirom", ingredients: "Jaja, sir, pavlaka, šunka" },
    { name: "Sutlijaš", ingredients: "Pirinač, mleko, šećer, vanila" },
    { name: "Puding sa keksom", ingredients: "Puding, keks, mleko" },
    { name: "Hleb sa jajetom u sredini", ingredients: "Hleb, jaje, maslac" },
    { name: "Kačamak sa sirom", ingredients: "Palenta, sir, kajmak" },
    { name: "Ovseni keksi", ingredients: "Ovsene pahuljice, banana, med" },
    { name: "Tost sa pečenicom", ingredients: "Tost, pečenica, sir" },
    { name: "Musli sa mlekom", ingredients: "Musli, mleko" },
    { name: "Burek sa sirom", ingredients: "Kore, sir, ulje" },
    { name: "Kiflice sa džemom", ingredients: "Brašno, kvasac, džem" },
    { name: "Krofne bez prženja", ingredients: "Brašno, kvasac, mleko, šećer" },
    { name: "Sendvič sa ajvarom", ingredients: "Ajvar, sir, hleb" },
    { name: "Voćni jogurt", ingredients: "Jogurt, voće, med" },
    { name: "Domaći keks", ingredients: "Brašno, jaja, šećer, puter" },
    { name: "Pohovani kačkavalj", ingredients: "Kačkavalj, jaja, prezle" },
    { name: "Omlet sa ajvarom", ingredients: "Jaja, ajvar, sir" },
    { name: "Pita sa bundevom", ingredients: "Bundeva, kore, šećer, cimet" },
    { name: "Štrudla sa makom", ingredients: "Testo, mak, mleko, šećer" },
    { name: "Čia puding", ingredients: "Čia semenke, mleko, med" },
    {
      name: "Integralni tost sa avokadom",
      ingredients: "Tost, avokado, limun",
    },
    { name: "Grilovani sendvič", ingredients: "Hleb, sir, šunka" },
    { name: "Pita sa prazilukom", ingredients: "Kore, praziluk, jaja, sir" },
    {
      name: "Dinstani spanać sa jajima",
      ingredients: "Spanać, jaja, beli luk",
    },
  ],
  lunch: [
    {
      name: "Pileća supa sa rezancima",
      ingredients: "Pileće meso, šargarepa, peršun, rezanci, celer",
    },
    {
      name: "Pasulj sa kobasicom",
      ingredients: "Pasulj, crni luk, šargarepa, kobasica, začini",
    },
    {
      name: "Punjena paprika",
      ingredients: "Paprike, mleveno meso, pirinač, paradajz sos",
    },
    {
      name: "Sarma",
      ingredients: "Kiseli kupus, mleveno meso, pirinač, začini",
    },
    {
      name: "Bolonjeze špageti",
      ingredients: "Špageti, mleveno meso, paradajz sos, parmezan",
    },
    {
      name: "Ćufte u paradajz sosu",
      ingredients: "Mleveno meso, crni luk, beli luk, paradajz, začini",
    },
    {
      name: "Rižoto sa povrćem i piletinom",
      ingredients: "Pirinač, pileći file, grašak, šargarepa, paprika",
    },
    {
      name: "Gulaš sa knedlama",
      ingredients: "Juneće meso, crni luk, paprika, knedle",
    },
    { name: "Musaka", ingredients: "Krompir, mleveno meso, jaja, mleko, luk" },
    {
      name: "Grašak sa piletinom",
      ingredients: "Grašak, šargarepa, piletina, crni luk, začini",
    },
    {
      name: "Podvarak",
      ingredients: "Kiseli kupus, svinjsko meso, crni luk, začini",
    },
    {
      name: "Pohovana piletina sa pireom",
      ingredients: "Piletina, jaja, brašno, krompir, mleko",
    },
    {
      name: "Pečeni bataci sa krompirom",
      ingredients: "Pileći bataci, krompir, začini",
    },
    {
      name: "Riblji paprikaš",
      ingredients: "Riba, luk, paprika, paradajz, začini",
    },
    { name: "Sataraš", ingredients: "Paradajz, paprika, crni luk, jaja" },
    { name: "Čorba od pečuraka", ingredients: "Pečurke, luk, pavlaka, začini" },
    {
      name: "Paprikaš od piletine",
      ingredients: "Piletina, paprika, pavlaka, luk, začini",
    },
    {
      name: "Kuvani kupus sa mesom",
      ingredients: "Kupus, svinjsko meso, crni luk, začini",
    },
    {
      name: "Pita sa mesom",
      ingredients: "Kore za pitu, mleveno meso, luk, začini",
    },
    {
      name: "Riblji file sa povrćem",
      ingredients: "Riblji file, tikvice, šargarepa, limun, začini",
    },
    {
      name: "Pohovane tikvice",
      ingredients: "Tikvice, jaja, brašno, prezle, ulje",
    },
    {
      name: "Lazanja",
      ingredients: "Testenina, mleveno meso, bešamel, paradajz sos, sir",
    },
    {
      name: "Pilav sa piletinom",
      ingredients: "Pirinač, piletina, šargarepa, začini",
    },
    {
      name: "Zapečeni pasulj",
      ingredients: "Pasulj, crni luk, paprika, suvo meso",
    },
    {
      name: "Djuveč",
      ingredients: "Piletina, pirinač, paprika, paradajz, tikvice",
    },
    { name: "Krompir paprikaš", ingredients: "Krompir, paprika, luk, začini" },
    {
      name: "Karfiol u rerni",
      ingredients: "Karfiol, sir, jaja, pavlaka, začini",
    },
    {
      name: "Pohovane pečurke",
      ingredients: "Pečurke, brašno, jaja, prezle, ulje",
    },
    {
      name: "Kuvana govedina sa sosom",
      ingredients: "Govedina, šargarepa, peršun, sos",
    },
    {
      name: "Bečka šnicla",
      ingredients: "Teleće meso, jaja, brašno, prezle, ulje",
    },
    { name: "Đuveč", ingredients: "Povrće, pirinač, paradajz" },
    {
      name: "Musaka od krompira",
      ingredients: "Krompir, mleveno meso, jaja, pavlaka",
    },
    { name: "Testenina sa sirom", ingredients: "Testenina, sir, pavlaka" },
    { name: "Pečena piletina", ingredients: "Pileći bataci, začini, krompir" },
    { name: "Tikvice punjene sirom", ingredients: "Tikvice, sir, jaja" },
    { name: "Pasulj prebranac", ingredients: "Pasulj, luk, začini" },
    { name: "Pohovana piletina", ingredients: "Piletina, jaja, prezle" },
    { name: "Grašak sa šargarepom", ingredients: "Grašak, šargarepa, luk" },
    { name: "Rižoto sa tikvicama", ingredients: "Pirinač, tikvice, pavlaka" },
    { name: "Ćufte u sosu", ingredients: "Mleveno meso, jaja, luk, sos" },
    { name: "Krompir paprikaš", ingredients: "Krompir, paprika, luk" },
    {
      name: "Testenina sa tunjevinom",
      ingredients: "Testenina, tunjevina, pavlaka",
    },
    { name: "Zapečeni makaroni", ingredients: "Testenina, sir, pavlaka, jaja" },
    {
      name: "Grilovana piletina sa povrćem",
      ingredients: "Pileći file, paprika, tikvica, začini",
    },
    { name: "Pohovane tikvice", ingredients: "Tikvice, jaja, prezle" },
    { name: "Bataci iz rerne", ingredients: "Pileći bataci, krompir, začini" },
    { name: "Paprikaš sa mesom", ingredients: "Meso, paprika, crni luk" },
    { name: "Kupus sa mesom", ingredients: "Svež kupus, svinjetina, začini" },
    {
      name: "Pirinač sa povrćem",
      ingredients: "Pirinač, grašak, šargarepa, kukuruz",
    },
    { name: "Gibanica", ingredients: "Kore, jaja, sir, pavlaka" },
    {
      name: "Lazanja",
      ingredients: "Testo za lazanju, mleveno meso, paradajz, bešamel",
    },
    { name: "Pita sa krompirom", ingredients: "Kore, krompir, luk, so" },
    {
      name: "Salata sa piletinom",
      ingredients: "Zelena salata, piletina, paradajz, sir",
    },
    { name: "Zapečeni karfiol", ingredients: "Karfiol, jaja, sir" },
    {
      name: "Svinjski kotleti",
      ingredients: "Svinjski kotleti, beli luk, začini",
    },
    { name: "Bataci sa senfom", ingredients: "Bataci, senf, pavlaka" },
    { name: "Pljeskavice", ingredients: "Mleveno meso, začini, crni luk" },
    { name: "Hrono paprikaš", ingredients: "Meso, paprika, luk, začini" },
    {
      name: "Pileća salata sa majonezom",
      ingredients: "Piletina, majonez, kukuruz",
    },
    { name: "Zapečeni pasulj", ingredients: "Pasulj, kobasica, luk" },
    {
      name: "Ćuretina sa povrćem",
      ingredients: "Ćuretina, tikvica, šargarepa, začini",
    },
    { name: "Rolnice od tikvica", ingredients: "Tikvice, sir, šunka" },
    { name: "Kuvana boranija", ingredients: "Boranija, luk, šargarepa, ulje" },
    {
      name: "Kuvana piletina sa krompirom",
      ingredients: "Piletina, krompir, šargarepa",
    },
    { name: "Riblji štapići", ingredients: "Riblji štapići, krompir pire" },
    { name: "Pita sa zeljem", ingredients: "Kore, zelje, sir" },
    { name: "Jagnjeća čorba", ingredients: "Jagnjeće meso, povrće, začini" },
    { name: "Pileći paprikaš", ingredients: "Piletina, paprika, pavlaka" },
    { name: "Bečka šnicla", ingredients: "Teleće meso, jaja, prezle" },
    { name: "Punjeni krompir", ingredients: "Krompir, sir, šunka" },
    { name: "Sendvič sa pečenim mesom", ingredients: "Hleb, pečenje, senf" },
    { name: "Zapečeni pirinač", ingredients: "Pirinač, sir, jaja" },
    { name: "Rolat sa mesom", ingredients: "Mleveno meso, jaja, sir" },
    { name: "Svinjski gulaš", ingredients: "Svinjetina, luk, paprika" },
    { name: "Bataci u pivu", ingredients: "Bataci, pivo, začini" },
    { name: "Pohovani karfiol", ingredients: "Karfiol, jaja, prezle" },
    {
      name: "Gurmanski tanjir",
      ingredients: "Kobasica, slanina, luk, paprika",
    },
    {
      name: "Tjestenina sa pečurkama",
      ingredients: "Testenina, pečurke, pavlaka",
    },
    { name: "Pečeni luk i krompir", ingredients: "Luk, krompir, ulje" },
  ],
  dinner: [
    {
      name: "Grčka salata",
      ingredients: "Paradajz, krastavac, feta sir, masline, maslinovo ulje",
    },
    {
      name: "Cezar salata",
      ingredients: "Zelena salata, pileći file, parmezan, dresing, krutoni",
    },
    {
      name: "Zapečene tikvice sa sirom",
      ingredients: "Tikvice, pavlaka, jaja, sir, začini",
    },
    {
      name: "Riblja čorba",
      ingredients: "Rečna riba, luk, paradajz, paprika, začini",
    },
    { name: "Pita sa sirom", ingredients: "Kore za pitu, sir, jaja, jogurt" },
    {
      name: "Omlet sa pečurkama",
      ingredients: "Jaja, pečurke, luk, sir, začini",
    },
    {
      name: "Salata sa tunjevinom",
      ingredients: "Tunjevina, zelena salata, kukuruz, maslinovo ulje",
    },
    {
      name: "Pečeni krompir sa pavlakom",
      ingredients: "Krompir, pavlaka, beli luk, začinsko bilje",
    },
    { name: "Palenta sa sirom", ingredients: "Palenta, sir, pavlaka, mleko" },
    {
      name: "Prebranac",
      ingredients: "Pasulj, crni luk, paprika, ulje, začini",
    },
    {
      name: "Jaja na oko i salata",
      ingredients: "Jaja, zelena salata, paradajz, sir",
    },
    {
      name: "Tuna tost",
      ingredients: "Tost hleb, tunjevina, majonez, zelena salata",
    },
    { name: "Krem čorba od tikvica", ingredients: "Tikvice, pavlaka, začini" },
    {
      name: "Domaća pita sa krompirom",
      ingredients: "Kore za pitu, krompir, crni luk, ulje",
    },
    {
      name: "Jaja na oko sa kobasicom",
      ingredients: "Jaja, kobasica, paprika, začini",
    },
    {
      name: "Sir i paradajz",
      ingredients: "Mladi sir, paradajz, maslinovo ulje, origano",
    },
    {
      name: "Voćni smuti",
      ingredients: "Banana, borovnice, jogurt, med, laneno seme",
    },
    {
      name: "Hladna testenina sa povrćem",
      ingredients: "Testenina, paprika, kukuruz, maslinovo ulje",
    },
    { name: "Pohovani sir", ingredients: "Sir, jaja, brašno, prezle, ulje" },
    {
      name: "Sendvič sa jajetom",
      ingredients: "Tost hleb, kuvano jaje, sir, paradajz",
    },
    {
      name: "Hladna supa od paradajza",
      ingredients: "Paradajz, krastavac, crveni luk, bosiljak",
    },
    {
      name: "Ćufte od tikvica",
      ingredients: "Tikvice, jaja, brašno, beli luk, začini",
    },
    {
      name: "Zapečeni karfiol",
      ingredients: "Karfiol, pavlaka, sir, jaja, začini",
    },
    {
      name: "Integralni sendvič sa sirom",
      ingredients: "Integralni hleb, sir, salata, paradajz",
    },
    {
      name: "Paprika punjena sirom",
      ingredients: "Pečena paprika, sir, pavlaka, beli luk",
    },
    {
      name: "Pečurke na žaru",
      ingredients: "Pečurke, maslinovo ulje, beli luk, začini",
    },
    {
      name: "Hladna piletina sa salatom",
      ingredients: "Piletina, zelena salata, paradajz, maslinovo ulje",
    },
    {
      name: "Domaća proja",
      ingredients: "Kukuruzno brašno, sir, jaja, jogurt, ulje",
    },
    {
      name: "Pečena paprika sa belim lukom",
      ingredients: "Paprika, beli luk, sirće, ulje",
    },
    {
      name: "Salata sa pasuljem",
      ingredients: "Pasulj, crveni luk, sirće, ulje",
    },
    {
      name: "Pečena paprika sa sirom",
      ingredients: "Pečena paprika, sir, pavlaka, beli luk",
    },
    {
      name: "Salata od pečenih tikvica",
      ingredients: "Tikvice, maslinovo ulje, beli luk, peršun",
    },
    {
      name: "Jaja sa sirom iz rerne",
      ingredients: "Jaja, sir, pavlaka, začini",
    },
    {
      name: "Tost sendvič sa šunkom i sirom",
      ingredients: "Tost hleb, šunka, sir, kečap",
    },
    {
      name: "Kuvana jaja sa salatom",
      ingredients: "Jaja, zelena salata, paradajz, ulje, sirće",
    },
    {
      name: "Hleb sa jajima i sirom iz tiganja",
      ingredients: "Jaja, stari hleb, sir, mleko",
    },
    {
      name: "Paprikaš od tikvica",
      ingredients: "Tikvice, crni luk, beli luk, paradajz, začini",
    },
    {
      name: "Grilovani patlidžan sa belim lukom",
      ingredients: "Patlidžan, beli luk, maslinovo ulje, peršun",
    },
    {
      name: "Dinstani praziluk sa jajima",
      ingredients: "Praziluk, jaja, ulje, začini",
    },
    {
      name: "Riblji štapići sa tartar sosom",
      ingredients: "Riblji štapići, majonez, krastavčići, limun",
    },
    {
      name: "Kiflice sa sirom",
      ingredients: "Brašno, kvasac, sir, jaje, mleko",
    },
    {
      name: "Brza pica sa tortiljama",
      ingredients: "Tortilje, sir, kečap, šunka, origano",
    },
    {
      name: "Salata od tunjevine",
      ingredients: "Tunjevina, kukuruz, majonez, zelena salata",
    },
    {
      name: "Pohovani kačkavalj",
      ingredients: "Kačkavalj, brašno, jaja, prezle",
    },
    {
      name: "Pohovani karfiol",
      ingredients: "Karfiol, jaja, prezle, brašno, ulje",
    },
    {
      name: "Grilovani sir sa povrćem",
      ingredients: "Sir, tikvice, paprika, maslinovo ulje",
    },
    {
      name: "Sendvič sa jajima",
      ingredients: "Jaja, majonez, senf, tost hleb",
    },
    {
      name: "Zapečeni krompir sa sirom",
      ingredients: "Krompir, pavlaka, sir, začini",
    },
    { name: "Pohovane tikvice", ingredients: "Tikvice, jaja, prezle, ulje" },
    {
      name: "Krompir salata sa lukom",
      ingredients: "Krompir, crni luk, sirće, ulje",
    },
    { name: "Kajgana sa sirom", ingredients: "Jaja, sir, ulje, začini" },
    {
      name: "Proja sa jogurtom",
      ingredients: "Kukuruzno brašno, sir, jogurt, jaja",
    },
    {
      name: "Grčka salata",
      ingredients: "Paradajz, krastavac, feta sir, masline, maslinovo ulje",
    },
    { name: "Pečena jaja u paprici", ingredients: "Jaja, paprika, sir, ulje" },
    {
      name: "Pečeni bataci u rerni",
      ingredients: "Pileći bataci, krompir, začini",
    },
    {
      name: "Zapečeni pasulj",
      ingredients: "Pasulj, luk, crvena paprika, ulje",
    },
    {
      name: "Musaka od tikvica",
      ingredients: "Tikvice, mleveno meso, jaja, pavlaka",
    },
    {
      name: "Kuvani grašak sa šargarepom",
      ingredients: "Grašak, šargarepa, začini, ulje",
    },
    { name: "Kuvana boranija", ingredients: "Boranija, luk, začini, ulje" },
    {
      name: "Jaja na oko sa avokadom",
      ingredients: "Jaja, avokado, tost hleb, so",
    },
    {
      name: "Salata sa dimljenim lososom",
      ingredients: "Losos, zelena salata, limun, maslinovo ulje",
    },
    {
      name: "Brza pita sa sirom",
      ingredients: "Kore za pitu, sir, jaja, jogurt",
    },
    {
      name: "Palenta sa sirom i pavlakom",
      ingredients: "Palenta, sir, pavlaka, so",
    },
    {
      name: "Kuvana jaja sa majonezom",
      ingredients: "Jaja, majonez, senf, začini",
    },
    { name: "Prebranac", ingredients: "Pasulj, luk, ulje, začini" },
    {
      name: "Tortilje sa piletinom",
      ingredients: "Tortilje, pileći file, paprika, pavlaka",
    },
    {
      name: "Zapečene makarone sa sirom",
      ingredients: "Makarone, sir, jaja, pavlaka",
    },
    {
      name: "Salata sa jajima i pavlakom",
      ingredients: "Kuvana jaja, pavlaka, senf, začini",
    },
    {
      name: "Salata od pečenog krompira",
      ingredients: "Krompir, luk, ulje, sirće",
    },
    {
      name: "Pečena jaja sa paradajzom",
      ingredients: "Jaja, paradajz, maslinovo ulje",
    },
    { name: "Omlet sa sirom", ingredients: "Jaja, sir, ulje, začini" },
    {
      name: "Topli sendvič sa povrćem",
      ingredients: "Hleb, paprika, paradajz, sir",
    },
    {
      name: "Pečene kobasice sa lukom",
      ingredients: "Kobasice, crni luk, ulje, senf",
    },
    {
      name: "Brza čorba od povrća",
      ingredients: "Šargarepa, krompir, grašak, začini",
    },
    {
      name: "Brzi gulaš od tunjevine",
      ingredients: "Tunjevina, paradajz sos, luk, začini",
    },
    {
      name: "Tost sa paradajzom i sirom",
      ingredients: "Tost, paradajz, sir, origano",
    },
    { name: "Mekike sa sirom", ingredients: "Brašno, kvasac, sir, ulje" },
    { name: "Pita sa spanaćem", ingredients: "Kore, spanać, sir, jaja" },
    {
      name: "Riblja salata",
      ingredients: "Riba iz konzerve, pavlaka, luk, začini",
    },
    {
      name: "Pohovani beli sir",
      ingredients: "Beli sir, brašno, jaja, prezle",
    },
    { name: "Kroketi od krompira", ingredients: "Krompir, jaja, brašno, sir" },
    {
      name: "Dinstana šargarepa sa lukom",
      ingredients: "Šargarepa, crni luk, ulje, začini",
    },
    {
      name: "Supica sa griz knedlama",
      ingredients: "Griz, jaje, supa, začini",
    },
    {
      name: "Paprika punjena sirom",
      ingredients: "Paprika, sir, pavlaka, beli luk",
    },
    {
      name: "Sosevi sa testeninom",
      ingredients: "Testenina, pavlaka, sir, začini",
    },
    { name: "Kuvani kupus", ingredients: "Kupus, crni luk, začini, ulje" },
    {
      name: "Pita sa krompirom",
      ingredients: "Kore za pitu, krompir, crni luk, ulje",
    },
    { name: "Mlečni rezanci", ingredients: "Rezanci, mleko, šećer, vanila" },
    {
      name: "Salata sa jajima i sirom",
      ingredients: "Kuvana jaja, sir, pavlaka, začini",
    },
    {
      name: "Čorba od bundeve",
      ingredients: "Bundeva, crni luk, pavlaka, začini",
    },
    {
      name: "Tortilja rolnice sa sirom",
      ingredients: "Tortilje, sir, pavlaka, začini",
    },
    {
      name: "Paprika u pavlaci",
      ingredients: "Pečena paprika, pavlaka, beli luk, so",
    },
    {
      name: "Kuvana boranija sa jajima",
      ingredients: "Boranija, jaja, ulje, začini",
    },
    {
      name: "Zapečeni grašak sa jajima",
      ingredients: "Grašak, jaja, pavlaka, sir",
    },
    {
      name: "Tiganj hleb sa kajmakom",
      ingredients: "Brašno, voda, kajmak, so",
    },
    {
      name: "Pita sa jabukama (slatka večera)",
      ingredients: "Kore, jabuke, šećer, cimet",
    },
    {
      name: "Zapečene palačinke sa sirom",
      ingredients: "Palačinke, sir, pavlaka, jaja",
    },
    {
      name: "Krompir iz rerne sa začinima",
      ingredients: "Krompir, ulje, ruzmarin, beli luk",
    },
    {
      name: "Supa od paradajza",
      ingredients: "Paradajz, crni luk, pirinač, začini",
    },
    {
      name: "Supa sa rezancima",
      ingredients: "Rezanci, supa iz kesice, začini",
    },
    {
      name: "Čorba od karfiola",
      ingredients: "Karfiol, mleko, brašno, začini",
    },
    {
      name: "Zapečene palačinke sa šunkom",
      ingredients: "Palačinke, šunka, sir, pavlaka",
    },
    {
      name: "Kuvana pšenica sa mlekom",
      ingredients: "Pšenica, mleko, šećer, vanila",
    },
    {
      name: "Dinstani patlidžan sa lukom",
      ingredients: "Patlidžan, crni luk, ulje, začini",
    },
    { name: "Pohovani brokoli", ingredients: "Brokoli, jaja, brašno, prezle" },
    {
      name: "Zapečeni pirinač sa sirom",
      ingredients: "Pirinač, sir, jaja, pavlaka",
    },
    { name: "Riblja čorba", ingredients: "Rečna riba, luk, paprika, paradajz" },
    { name: "Punjene pečurke", ingredients: "Pečurke, sir, jaja, peršun" },
    {
      name: "Fokača sa belim lukom",
      ingredients: "Brašno, kvasac, beli luk, ulje",
    },
    {
      name: "Hladna salata sa testeninom",
      ingredients: "Testenina, majonez, povrće, sir",
    },
    { name: "Zeljanica", ingredients: "Kore, spanać, jaja, sir" },
    { name: "Kačamak sa sirom", ingredients: "Palenta, sir, pavlaka, so" },
    {
      name: "Makarone sa kečapom i sirom",
      ingredients: "Makarone, kečap, sir",
    },
    { name: "Pohovane pečurke", ingredients: "Pečurke, jaja, brašno, prezle" },
    { name: "Lepinja sa kajmakom", ingredients: "Lepinja, kajmak, so" },
    {
      name: "Tortilja sa ajvarom i sirom",
      ingredients: "Tortilja, ajvar, sir",
    },
    { name: "Kroasan sa sirom", ingredients: "Lisnato testo, sir" },
    { name: "Brzi burek sa sirom", ingredients: "Kore, sir, jaja, ulje" },
    { name: "Jaja sa pršutom", ingredients: "Jaja, pršuta, ulje" },
    {
      name: "Zapečene tikvice sa pavlakom",
      ingredients: "Tikvice, pavlaka, jaja, sir",
    },
    { name: "Gibanica", ingredients: "Kore, sir, jaja, ulje" },
    { name: "Tost sa jajima i šunkom", ingredients: "Tost, jaja, šunka, sir" },
  ],
};
