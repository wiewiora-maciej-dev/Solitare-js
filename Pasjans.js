window.onload = function() {
	rysujKarty();
	utworzPustePola();
	utworzPlaceholderStosu();
};

let ciemny = false;

function trybCiemny() {
	if (!ciemny) {
		let kolumny = document.getElementById("kolumny");
		let sekcje = kolumny.querySelectorAll("section");

		sekcje.forEach(section => {
			section.style.backgroundColor = "dimgrey";
		});

		let header = document.getElementById("header");
		header.style.backgroundColor = "dimgrey";
		document.body.style.backgroundColor = "darkgrey";
		ciemny = true;
	} else {
		let kolumny = document.getElementById("kolumny");
		let sekcje = kolumny.querySelectorAll("section");

		sekcje.forEach(section => {
			section.style.backgroundColor = "darkgrey";
		});

		let header = document.getElementById("header");
		header.style.backgroundColor = "darkgrey";
		document.body.style.backgroundColor = "white";
		ciemny = false;
	}
}

function utworzPustePola() {
	const plansza = document.body;

	for (let i = 1; i <= 7; i++) {
		let placeholder = document.createElement("div");

		placeholder.id = "pusta-kolumna-" + i;
		placeholder.className = "placeholder-kolumny";

		let procentLewo = (i - 1) * (100 / 7);

		placeholder.style.position = "absolute";
		placeholder.style.left = `calc(${procentLewo}% + 80px)`;
		placeholder.style.top = "320px";
		placeholder.style.width = "100px";
		placeholder.style.height = "150px";
		placeholder.style.zIndex = "0";
		placeholder.style.border = "2px dashed rgba(255,255,255,0.2)";
		placeholder.style.borderRadius = "5px";

		plansza.appendChild(placeholder);
	}
}

function utworzPlaceholderStosu() {
	let placeholder = document.createElement("div");

	placeholder.id = "pusta-stos-8";
	placeholder.className = "placeholder-kolumny";
	placeholder.style.position = "absolute";
	placeholder.style.left = "120px";
	placeholder.style.top = "80px";
	placeholder.style.width = "100px";
	placeholder.style.height = "150px";
	placeholder.style.zIndex = "0";
	placeholder.style.border = "2px dashed rgba(255,255,255,0.2)";
	placeholder.style.borderRadius = "5px";

	document.body.appendChild(placeholder);
}

let karty = {};

let kolorKarty = {
	1: 1,
	2: 1,
	3: 1,
	4: 1,
	5: 1,
	6: 1,
	7: 1,
	8: 1,
	9: 1,
	10: 1,
	11: 1,
	12: 1,
	13: 1,
	14: 2,
	15: 2,
	16: 2,
	17: 2,
	18: 2,
	19: 2,
	20: 2,
	21: 2,
	22: 2,
	23: 2,
	24: 2,
	25: 2,
	26: 2,
	27: 3,
	28: 3,
	29: 3,
	30: 3,
	31: 3,
	32: 3,
	33: 3,
	34: 3,
	35: 3,
	36: 3,
	37: 3,
	38: 3,
	39: 3,
	40: 4,
	41: 4,
	42: 4,
	43: 4,
	44: 4,
	45: 4,
	46: 4,
	47: 4,
	48: 4,
	49: 4,
	50: 4,
	51: 4,
	52: 4
};

let pngKarty = {
	1: "APik",
	2: "2Pik",
	3: "3Pik",
	4: "4Pik",
	5: "5Pik",
	6: "6Pik",
	7: "7Pik",
	8: "8Pik",
	9: "9Pik",
	10: "10Pik",
	11: "JPik",
	12: "QPik",
	13: "KPik",
	14: "ATrefl",
	15: "2Trefl",
	16: "3Trefl",
	17: "4Trefl",
	18: "5Trefl",
	19: "6Trefl",
	20: "7Trefl",
	21: "8Trefl",
	22: "9Trefl",
	23: "10Trefl",
	24: "JTrefl",
	25: "QTrefl",
	26: "KTrefl",
	27: "AKaro",
	28: "2Karo",
	29: "3Karo",
	30: "4Karo",
	31: "5Karo",
	32: "6Karo",
	33: "7Karo",
	34: "8Karo",
	35: "9Karo",
	36: "10Karo",
	37: "JKaro",
	38: "QKaro",
	39: "KKaro",
	40: "AKier",
	41: "2Kier",
	42: "3Kier",
	43: "4Kier",
	44: "5Kier",
	45: "6Kier",
	46: "7Kier",
	47: "8Kier",
	48: "9Kier",
	49: "10Kier",
	50: "JKier",
	51: "QKier",
	52: "KKier"
};

let czyrozdane = false;
let kolumna = 1;
let rzad = 1;

let czyOdkryte = Object.fromEntries(
	Array.from({ length: 52 }, (_, i) => [i + 1, false])
);

let opisKolumn = {
	1: [],
	2: [],
	3: [],
	4: [],
	5: [],
	6: [],
	7: [],
	8: [],
	9: []
};

let opisPolKoncowych = {
	1: [],
	2: [],
	3: [],
	4: []
};

function rozdaj() {
	let juzWybrane = {};

	if (!czyrozdane) {
		for (let i = 0; i < 52; i++) {
			let los = Math.floor(Math.random() * 52) + 1;

			while (juzWybrane[los]) {
				los = Math.floor(Math.random() * 52) + 1;
			}

			juzWybrane[los] = true;
			umiesc(los);
			czyrozdane = true;
		}
	} else {
		reset();
	}
}

function umiesc(los) {
	let wybrana = document.getElementById(los);
	let kolor = kolorKarty[los];

	if (kolor === 1) {
		kolor = "Pik";
	} else if (kolor === 2) {
		kolor = "Trefl";
	} else if (kolor === 3) {
		kolor = "Karo";
	} else {
		kolor = "Kier";
	}

	opisanieKolumn(kolumna, rzad, los);

	let procentLewo = (kolumna - 1) * (100 / 7);

	if (kolumna < 8) {
		wybrana.style.left = `calc(${procentLewo}% + 50px)`;
		wybrana.style.top = 290 + 30 * rzad + "px";
		wybrana.style.zIndex = rzad;

		if (rzad === kolumna) {
			wybrana.style.backgroundImage =
				"url(Karty/" + kolor + "/" + pngKarty[los] + ".png)";

			czyOdkryte[los] = true;
			kolumna++;
			rzad = 1;
		} else {
			rzad++;
		}
	} else {
		wybrana.style.zIndex = rzad;
		rzad++;
	}
}

function opisanieKolumn(kolumna, rzad, los) {
	opisKolumn[kolumna][rzad - 1] = los;
}

function rysujKarty() {
	for (let ilosc = 1; ilosc < 53; ilosc++) {
		let karta = document.createElement("div");

		karta.id = ilosc;
		karta.className = "karta";
		karta.style.backgroundImage = 'url("Karty/Tyl.png")';
		karta.style.top = "40px";
		karta.style.left = "80px";

		document.body.appendChild(karta);
	}
}

function reset() {
	for (let ilosc = 1; ilosc < 53; ilosc++) {
		let karta = document.getElementById(ilosc);

		karta.style.backgroundImage = 'url("Karty/Tyl.png")';
		karta.style.top = "40px";
		karta.style.left = "80px";
		karta.style.zIndex = "1";
		karta.style.position = "absolute";
	}

	opisKolumn = {
		1: [],
		2: [],
		3: [],
		4: [],
		5: [],
		6: [],
		7: [],
		8: [],
		9: []
	};

	opisPolKoncowych = {
		1: [],
		2: [],
		3: [],
		4: []
	};

	czyOdkryte = Object.fromEntries(
		Array.from({ length: 52 }, (_, i) => [i + 1, false])
	);

	kolumna = 1;
	rzad = 1;
	czyrozdane = false;
	kliknięty = null;
	czyklikniety = false;
	wybraneKarty = [];
	pierwszaKolumna = null;
	kartyPodskoczone = [];
}

function znajdzPozycje(idKarty) {
	if (
		typeof idKarty === "string" &&
		idKarty.startsWith("pusta-kolumna-")
	) {
		let numerKolumny = idKarty.replace("pusta-kolumna-", "");

		return {
			kolumna: Number(numerKolumny),
			rzad: 0
		};
	}

	idKarty = Number(idKarty);

	for (let numerKolumny in opisKolumn) {
		let indeks = opisKolumn[numerKolumny].indexOf(idKarty);

		if (indeks !== -1) {
			return {
				kolumna: Number(numerKolumny),
				rzad: indeks
			};
		}
	}

	return null;
}

let kliknięty = null;
let czyklikniety = false;
let wybraneKarty = [];
let pierwszaKolumna = null;
let kartyPodskoczone = [];

document.addEventListener("click", function(event) {
	if (!czyrozdane) {
		return;
	}

	if (event.target.tagName !== "DIV") {
		return;
	}

	kliknięty = event.target.id;

	if (kliknięty === "pusta-stos-8") {
		zwrocStosDo8();
		return;
	}

	if (czyklikniety) {
		for (let i = 0; i < kartyPodskoczone.length; i++) {
			let el = kartyPodskoczone[i];

			if (el) {
				let obecnyTop = parseInt(el.style.top) || 0;
				el.style.top = (obecnyTop + 15) + "px";
			}
		}

		kartyPodskoczone = [];
	}

	if (
		kliknięty === "poleP1" ||
		kliknięty === "poleP2" ||
		kliknięty === "poleP3" ||
		kliknięty === "poleP4"
	) {
		if (!czyklikniety) {
			return;
		}

		let numerPola = Number(
			kliknięty.replace("poleP", "")
		);

		let przeniesiono = odlozNaPoleKoncowe(numerPola);

		if (przeniesiono) {
			czyklikniety = false;
			pierwszaKolumna = null;
			wybraneKarty = [];
			kartyPodskoczone = [];
		} else {
			czyklikniety = false;
			pierwszaKolumna = null;
			wybraneKarty = [];
			kartyPodskoczone = [];
		}

		return;
	}

	let pozycja = znajdzPozycje(kliknięty);

	if (!pozycja) {
		return;
	}

	let jestKolumna8 = pozycja.kolumna === 8;
	let jestKolumna9 = pozycja.kolumna === 9;

	if (!czyklikniety) {
		if (!czyOdkryte[kliknięty] && !jestKolumna8) {
			return;
		}

		if (jestKolumna8) {
			if (opisKolumn[8].length === 0) {
				return;
			}

			let los = opisKolumn[8][opisKolumn[8].length - 1];
			let kartaElement = document.getElementById(String(los));
			let kolor = kolorKarty[los];

			if (kolor === 1) {
				kolor = "Pik";
			} else if (kolor === 2) {
				kolor = "Trefl";
			} else if (kolor === 3) {
				kolor = "Karo";
			} else {
				kolor = "Kier";
			}

			kartaElement.style.backgroundImage =
				"url(Karty/" + kolor + "/" + pngKarty[los] + ".png)";

			czyOdkryte[los] = true;
			opisKolumn[8].pop();

			let startowyRzadW9 = opisKolumn[9].length;

			kartaElement.style.position = "absolute";
			kartaElement.style.left = "250px";
			kartaElement.style.top = "40px";
			kartaElement.style.zIndex = 10 + startowyRzadW9;

			opisKolumn[9].push(los);
			return;
		}

		let kolumnaWyboru = opisKolumn[pozycja.kolumna];
		let indeksStart = pozycja.rzad;

		pierwszaKolumna = pozycja.kolumna;

		wybraneKarty = kolumnaWyboru.slice(indeksStart);

		console.log("Wybrane karty:", wybraneKarty);

		czyklikniety = true;

		for (let i = 0; i < wybraneKarty.length; i++) {
			let idKarty = wybraneKarty[i];
			let el = document.getElementById(String(idKarty));

			if (el) {
				let obecnyTop = parseInt(el.style.top) || 0;
				el.style.top = (obecnyTop - 15) + "px";
				kartyPodskoczone.push(el);
			}
		}

		return;
	}

	let przeniesiono = przenies(pozycja);

	if (przeniesiono) {
		czyklikniety = false;
		pierwszaKolumna = null;
		wybraneKarty = [];
		kartyPodskoczone = [];
	} else {
		for (let i = 0; i < kartyPodskoczone.length; i++) {
			let el = kartyPodskoczone[i];

			if (el) {
				let obecnyTop = parseInt(el.style.top) || 0;
				el.style.top = (obecnyTop + 15) + "px";
			}
		}

		kartyPodskoczone = [];
		czyklikniety = false;
		pierwszaKolumna = null;
		wybraneKarty = [];

		console.log("Ruch anulowany - można wybrać nową kartę");
	}
});

function przenies(pozycjaTarget) {
	if (pozycjaTarget.kolumna === 8) {
		console.log("Nie można przenieść kart na stos 8");
		return false;
	}

	if (pozycjaTarget.kolumna === 9) {
		console.log("Nie można przenieść kart na stos 9");
		return false;
	}

	if (pozycjaTarget.kolumna === pierwszaKolumna) {
		console.log("To jest ta sama kolumna");
		return false;
	}

	let nowaKolumnaNum = pozycjaTarget.kolumna;

	let startowyRzad = opisKolumn[nowaKolumnaNum].length;

	let ostatniaKarta = opisKolumn[nowaKolumnaNum].at(-1);

	if (ostatniaKarta === undefined) {
		function pobierzRange(id) {
			return ((id - 1) % 13) + 1;
		}

		let pierwszaKarta = wybraneKarty[0];

		if (pobierzRange(pierwszaKarta) !== 13) {
			console.log("Na pustą kolumnę można położyć tylko Króla");
			return false;
		}

		let indeksWStarej =
			opisKolumn[pierwszaKolumna].indexOf(wybraneKarty[0]);

		if (indeksWStarej === -1) {
			return false;
		}

		opisKolumn[pierwszaKolumna].splice(
			indeksWStarej,
			wybraneKarty.length
		);

		for (let i = 0; i < wybraneKarty.length; i++) {
			let idKarty = wybraneKarty[i];
			let karta = document.getElementById(String(idKarty));

			if (karta) {
				let aktualnyRzad = startowyRzad + i;
				let procentLewo =
					(nowaKolumnaNum - 1) * (100 / 7);

				karta.style.left =
					`calc(${procentLewo}% + 50px)`;

				karta.style.top =
					320 + (30 * aktualnyRzad) + "px";

				karta.style.position = "absolute";
				karta.style.zIndex = 10 + aktualnyRzad;

				opisKolumn[nowaKolumnaNum].push(idKarty);
			}
		}

		let staraKolumna = opisKolumn[pierwszaKolumna];

		if (staraKolumna.length > 0) {
			let idNastepnejKarty =
				staraKolumna[staraKolumna.length - 1];

			czyOdkryte[idNastepnejKarty] = true;

			let karta =
				document.getElementById(String(idNastepnejKarty));

			if (karta) {
				let kolor = kolorKarty[idNastepnejKarty];

				if (kolor === 1) {
					kolor = "Pik";
				} else if (kolor === 2) {
					kolor = "Trefl";
				} else if (kolor === 3) {
					kolor = "Karo";
				} else {
					kolor = "Kier";
				}

				karta.style.backgroundImage =
					"url(Karty/" +
					kolor +
					"/" +
					pngKarty[idNastepnejKarty] +
					".png)";
			}
		}

		return true;
	}

	function pobierzRange(id) {
		return ((id - 1) % 13) + 1;
	}

	function pobierzKolor(id) {
		if (kolorKarty[id] <= 2) {
			return "czarny";
		} else {
			return "czerwony";
		}
	}

	for (let i = 0; i < wybraneKarty.length; i++) {
		let idKarty = wybraneKarty[i];

		let rangaKarty = pobierzRange(idKarty);
		let rangaOstatniej = pobierzRange(ostatniaKarta);

		let kolorKartyW = pobierzKolor(idKarty);
		let kolorOstatniej = pobierzKolor(ostatniaKarta);

		if (
			rangaOstatniej !== rangaKarty + 1 ||
			kolorOstatniej === kolorKartyW
		) {
			console.log("Nie można położyć tutaj karty");
			return false;
		}

		ostatniaKarta = idKarty;
	}

	let indeksWStarej =
		opisKolumn[pierwszaKolumna].indexOf(wybraneKarty[0]);

	if (indeksWStarej === -1) {
		console.log("Nie znaleziono karty w starej kolumnie");
		return false;
	}

	opisKolumn[pierwszaKolumna].splice(
		indeksWStarej,
		wybraneKarty.length
	);

	for (let i = 0; i < wybraneKarty.length; i++) {
		let idKarty = wybraneKarty[i];
		let karta = document.getElementById(String(idKarty));

		if (karta) {
			let aktualnyRzad = startowyRzad + i;
			let procentLewo =
				(nowaKolumnaNum - 1) * (100 / 7);

			karta.style.left =
				`calc(${procentLewo}% + 50px)`;

			karta.style.top =
				320 + (30 * aktualnyRzad) + "px";

			karta.style.position = "absolute";
			karta.style.zIndex = 10 + aktualnyRzad;

			opisKolumn[nowaKolumnaNum].push(idKarty);
		}
	}

	let staraKolumna = opisKolumn[pierwszaKolumna];

	if (staraKolumna.length > 0) {
		let idNastepnejKarty =
			staraKolumna[staraKolumna.length - 1];

		czyOdkryte[idNastepnejKarty] = true;

		let karta =
			document.getElementById(String(idNastepnejKarty));

		if (karta) {
			let kolor = kolorKarty[idNastepnejKarty];

			if (kolor === 1) {
				kolor = "Pik";
			} else if (kolor === 2) {
				kolor = "Trefl";
			} else if (kolor === 3) {
				kolor = "Karo";
			} else {
				kolor = "Kier";
			}

			karta.style.backgroundImage =
				"url(Karty/" +
				kolor +
				"/" +
				pngKarty[idNastepnejKarty] +
				".png)";
		}
	}

	console.log("Przeniesiono pomyślnie:", opisKolumn);

	return true;
}

function zwrocStosDo8() {
	if (opisKolumn[9].length === 0) {
		return;
	}

	let kartyZeStosu = [...opisKolumn[9]];

	for (let i = kartyZeStosu.length - 1; i >= 0; i--) {
		let idKarty = kartyZeStosu[i];
		let karta = document.getElementById(String(idKarty));

		if (karta) {
			karta.style.backgroundImage = 'url("Karty/Tyl.png")';
			karta.style.top = "40px";
			karta.style.left = "80px";
			karta.style.zIndex = kartyZeStosu.length - i;
			karta.style.position = "absolute";
		}

		opisKolumn[8].push(idKarty);
		czyOdkryte[idKarty] = false;
	}

	opisKolumn[9] = [];

	console.log("Stos 9 zwrócony do stosu 8:", opisKolumn[8]);
}

function odlozNaPoleKoncowe(pole) {
	if (wybraneKarty.length !== 1) {
		console.log("Na pole końcowe można przenieść tylko jedną kartę");
		return false;
	}

	let karta = wybraneKarty[0];
	let kolor = kolorKarty[karta];

	if (kolor !== pole) {
		console.log("Karta nie pasuje do tego pola");
		return false;
	}

	let stos = opisPolKoncowych[pole];
	let ranga = ((karta - 1) % 13) + 1;

	if (stos.length === 0) {
		if (ranga !== 1) {
			console.log("Na pustym polu może być tylko As");
			return false;
		}
	} else {
		let ostatniaKarta = stos[stos.length - 1];

		let ostatniaRanga =
			((ostatniaKarta - 1) % 13) + 1;

		if (ranga !== ostatniaRanga + 1) {
			console.log("Karta nie jest następną kartą");
			return false;
		}
	}

	let element = document.getElementById(String(karta));

	if (!element) {
		return false;
	}

	let pozycja = znajdzPozycje(karta);

	if (!pozycja) {
		console.log("Nie znaleziono pozycji karty");
		return false;
	}

	let staraKolumna = opisKolumn[pozycja.kolumna];
	let indeks = staraKolumna.indexOf(karta);

	if (indeks === -1) {
		console.log("Nie znaleziono karty w starej kolumnie");
		return false;
	}

	staraKolumna.splice(indeks, 1);

	if (staraKolumna.length > 0) {
		let idNastepnejKarty =
			staraKolumna[staraKolumna.length - 1];

		czyOdkryte[idNastepnejKarty] = true;

		let nastepnaKarta =
			document.getElementById(String(idNastepnejKarty));

		if (nastepnaKarta) {
			let kolorNastepnej = kolorKarty[idNastepnejKarty];

			if (kolorNastepnej === 1) {
				kolorNastepnej = "Pik";
			} else if (kolorNastepnej === 2) {
				kolorNastepnej = "Trefl";
			} else if (kolorNastepnej === 3) {
				kolorNastepnej = "Karo";
			} else {
				kolorNastepnej = "Kier";
			}

			nastepnaKarta.style.backgroundImage =
				"url(Karty/" +
				kolorNastepnej +
				"/" +
				pngKarty[idNastepnejKarty] +
				".png)";
		}
	}

	stos.push(karta);

	let poleElement = document.getElementById("poleP" + pole);

	if (!poleElement) {
		console.log("Nie znaleziono pola końcowego");
		return false;
	}

	let rect = poleElement.getBoundingClientRect();
	let bodyRect = document.body.getBoundingClientRect();

	element.style.left =
		(rect.left - bodyRect.left) + "px";

	element.style.top =
		(rect.top - bodyRect.top) + "px";

	element.style.position = "absolute";
	element.style.zIndex = "14";

	czyOdkryte[karta] = true;

	console.log(
		"Odłożono kartę:",
		karta,
		"na pole:",
		pole,
		"Stos:",
		stos
	);

	sprawdzWygrana();

	return true;
}

function sprawdzWygrana() {
	if (
		opisPolKoncowych[1].length === 13 &&
		opisPolKoncowych[2].length === 13 &&
		opisPolKoncowych[3].length === 13 &&
		opisPolKoncowych[4].length === 13
	) {
		let wygrana = confirm(
			"WYGRAŁEŚ!\n\nCzy chcesz rozpocząć nową grę?"
		);

		if (wygrana) {
			reset();
		}
	} else {
		for (let i = 0; i < 52; i++){
			if (czyOdkryte[i] !== true) {
				return;
			}
		}
		let wygrana = confirm(
			"WYGRAŁEŚ!\n\nCzy chcesz rozpocząć nową grę?"
		);

		if (wygrana) {
			reset();
		}
	}
}