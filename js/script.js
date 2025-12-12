// Apartments data with coordinates
const apartments = [
    {
        title: "Chalet Walt Apartment Wega",
        descriptionEn: "Welcome to your private Alpine retreat: This modern 2-bedroom penthouse (96 m²) in a brand-new building (2023) offers stunning south-facing mountain views, a spacious 21 m² balcony, and an unbeatable location in the heart of Grindelwald – peaceful, sunny, and just a short walk from the village center.",
        descriptionDe: "Willkommen in Ihrer exklusiven Ferienoase: Diese moderne 3½-Zimmer-Dachwohnung (96 m²) im Neubau von 2023 begeistert durch ihre sonnige Südlage, den grosszügigen Balkon (21 m²) und eine atemberaubende Aussicht auf die umliegende Bergwelt.Zentral im Herzen von Grindelwald gelegen, ruhig, charmant und nur wenige Schritte vom Dorfzentrum entfernt.",
        edomizil: "https://www.e-domizil.ch/rental/21a740265d7e1b7b04637fc8bcfb7b59?location=5460aeb2be103&id=21a740265d7e1b7b04637fc8bcfb7b59&pricetype=totalPrice&dp=0&clickId=RFSGHQ1TX624ZQWP&sT=dateless&prodName=JM&prodSource=Search&searchId=1369310444497488&screen=search&searchRequestId=63eb1515c7674e83&priceRate=nonRefund",
        airbnb: "",
        price: "380",
        images: [
            "images/wega/cwaw_wohnzimmer_768px.jpg", 
            "images/wega/cwaw_esstisch_768px.jpg",
            "images/wega/cwaw_kueche_1_768px.jpg",
            "images/wega/cwaw_kueche_2_768px.jpg",
            "images/wega/cwaw_schlafzimmer1_1_768px.jpg",
            "images/wega/cwaw_schlafzimmer1_2_768px.jpg",
            "images/wega/cwaw_schlafzimmer2_1_768px.jpg",
            "images/wega/cwaw_schlafzimmer2_2_768px.jpg",
            "images/wega/cwaw_badezimmer1_768px.jpg",
            "images/wega/cwaw_badezimmer2_768px.jpg",
            "images/wega/cwaw_balkon1_768px.jpg",
            "images/wega/cwaw_balkon2_768px.jpg",
            "images/wega/cwaw_eingang_768px.jpg",
            "images/wega/cwaw_aussen_768px.jpg",
        ],
        coords: [46.624113753495735, 8.032121787611096],
        ical: "https://inventory.atraveo.com/ical/export/3432395/ical.ics?securitytoken=8c88c7d4d9d1479699045ff359ad00b5",
        minstay: 4
    },
    {
        title: "Grossenhaus Apartment Valerian",
        descriptionEn: "This elegant 2-bedroom apartment (111 m²) on the 1st floor is your perfect alpine getaway. Enjoy two balconies – south-facing (9.15 m²) and east-facing (7.88 m²) – with plenty of sun and magnificent mountain views. The location is peaceful yet central, just a 3-minute walk from Grindelwald's village center.",
        descriptionDe: "Diese stilvolle 4½-Zimmerwohnung (111 m²) im 1. Obergeschoss bietet alles für entspannte Ferientage im Herzen von Grindelwald. Zwei Balkone – einer nach Süden (9.15 m²) und einer nach Osten (7.88 m²) – schenken den ganzen Tag Sonne und eine herrliche Sicht auf die Bergwelt. Die ruhige und dennoch zentrale Lage lässt Sie in nur 3 Gehminuten das Dorfzentrum erreichen.",
        edomizil: "https://www.e-domizil.ch/rental/081632dcc3499a06e5ea3c930293c618?location=5460aeb2be103&id=081632dcc3499a06e5ea3c930293c618&pricetype=totalPrice&dp=0&clickId=SDBHRJRDLTZH7YZ5&sT=dateless&prodName=JM&prodSource=Search&searchId=1369310444497488&screen=search&searchRequestId=63eb1515c7674e83&priceRate=nonRefund",
        airbnb: "",
        price: "360",
        images: [
            "images/valerian/gav_wohnzimmer_768px.jpg", 
            "images/valerian/gav_esstisch_768px.jpg", 
            "images/valerian/gav_kueche_1_768px.jpg", 
            "images/valerian/gav_kueche_2_768px.jpg", 
            "images/valerian/gav_schlafzimmer1_1_768px.jpg", 
            "images/valerian/gav_schlafzimmer1_2_768px.jpg", 
            "images/valerian/gav_schlafzimmer2_1_768px.jpg", 
            "images/valerian/gav_schlafzimmer2_2_768px.jpg", 
            "images/valerian/gav_badezimmer1_768px.jpg", 
            "images/valerian/gav_badezimmer2_768px.jpg", 
            "images/valerian/gav_leseraum_768px.jpg", 
            "images/valerian/gav_balkon_768px.jpg", 
            "images/valerian/gav_eingang_768px.jpg", 
            "images/valerian/gav_waschkueche_768px.jpg", 
        ],
        coords: [46.62450437348164, 8.03654315892381],
        ical: "https://inventory.atraveo.com/ical/export/1698310/ical.ics?securitytoken=f02e669e24f6412a8165dc95132d4298",
        minstay: 4
    },
    {
        title: "Chalet Alpenblume Apartment Celina",
        descriptionEn: "Welcome to Chalet Alpenblume! This inviting 2-bedroom apartment (85 m²) on the 1st floor features a spacious 26 m² south-east facing balcony with gorgeous mountain views – the perfect place to relax for up to 4 guests.",
        descriptionDe: "Herzlich willkommen im Chalet Alpenblume! Diese charmante 3½-Zimmerwohnung (85 m²) im 1. Obergeschoss begeistert mit einem grosszügigen 26 m² Südost-Balkon und herrlicher Bergsicht – perfekt für entspannte Ferientage zu viert.",
        edomizil: "https://www.e-domizil.ch/rental/30975be1327d577d24cf7670806ae75a?location=5460aeb2be103&id=30975be1327d577d24cf7670806ae75a&pricetype=totalPrice&dp=0&clickId=D00GKSD8CW5L62H7&sT=dateless&prodName=JM&prodSource=Search&searchId=1369310444497488&screen=search&searchRequestId=63eb1515c7674e83&priceRate=nonRefund",
        airbnb: "https://www.airbnb.ch/rooms/20345876?search_mode=regular_search&adults=1&check_in=2025-11-01&check_out=2025-11-06&children=0&infants=0&pets=0&source_impression_id=p3_1761405583_P3CMTVkq1WHCy76b&previous_page_section_name=1000&federated_search_id=376eb290-55a4-4616-a11c-731c3c810f89",
        price: "340",
        images: [
            "images/celina/caac_wohnzimmer_1_768px.jpg", 
            "images/celina/caac_wohnzimmer_2_768px.jpg", 
            "images/celina/caac_kueche_768px.jpg", 
            "images/celina/caac_schlafzimmer1_1_768px.jpg", 
            "images/celina/caac_schlafzimmer1_2_768px.jpg", 
            "images/celina/caac_schlafzimmer2_1_768px.jpg", 
            "images/celina/caac_schlafzimmer2_2_768px.jpg", 
            "images/celina/caac_badezimmer1_1_768px.jpg", 
            "images/celina/caac_badezimmer1_2_768px.jpg", 
            "images/celina/caac_badezimmer2_768px.jpg", 
            "images/celina/caac_balkon_768px.jpg", 
            "images/celina/caac_eingang_768px.jpg", 
        ],
        coords: [46.626921361521575, 8.02746425978436],
        ical: "https://inventory.atraveo.com/ical/export/1698298/ical.ics?securitytoken=46a7f7bcf6664193bb78ee92571d30dd",
        minstay: 4
    },
    {
        title: "Chalet Stieregg Apartment Ost",
        descriptionEn: "Welcome to Chalet Stieregg! This lovely 2-room apartment (44 m²) on the ground floor is the perfect alpine escape for two. Located in a sunny and peaceful area, just a 6-minute walk from Grindelwald train station and the village center.",
        descriptionDe: "Willkommen im Chalet Stieregg! Diese charmante 2-Zimmerwohnung (44 m²) im Erdgeschoss ist der ideale Rückzugsort für zwei Personen. An sonniger, ruhiger Lage gelegen und nur 6 Gehminuten vom Bahnhof Grindelwald und dem Dorfzentrum entfernt – perfekt für erholsame Tage in den Bergen.",
        edomizil: "https://www.e-domizil.ch/rental/349b4cc552a019d03c5e02d2a424a574?location=5460aeb2be103&id=349b4cc552a019d03c5e02d2a424a574&pricetype=totalPrice&dp=0&clickId=N6X7W9MR6F7GTSSN&sT=dateless&prodName=JM&prodSource=Search&searchId=1369310444497488&screen=search&searchRequestId=63eb1515c7674e83&priceRate=nonRefund",
        airbnb: "https://www.airbnb.ch/rooms/3460071?search_mode=regular_search&adults=1&check_in=2025-11-01&check_out=2025-11-06&children=0&infants=0&pets=0&source_impression_id=p3_1761405875_P3Yq7xw-pWR_7c0h&previous_page_section_name=1000&federated_search_id=035fb640-5b87-45ab-9cb1-91982050329c",
        price: "140",
        images: [
            "images/apartmentost/csao_wohnzimmer_1_768px.jpg",
            "images/apartmentost/csao_wohnzimmer_2_768px.jpg", 
            "images/apartmentost/csao_kueche_768px.jpg",  
            "images/apartmentost/csao_schlafzimmer_1_768px.jpg", 
            "images/apartmentost/csao_schlafzimmer_2_768px.jpg", 
            "images/apartmentost/csao_badezimmer_768px.jpg", 
            "images/apartmentost/csao_terrasse_768px.jpg", 
        ],
        coords: [46.62731155450113, 8.027293607253567],
        ical: "https://inventory.atraveo.com/ical/export/1698294/ical.ics?securitytoken=ed0bda36efb04fd7acbcc4925b90e757",
        minstay: 4
    },
    {
        title: "Chalet Stieregg Apartment West",
        descriptionEn: "Welcome to Chalet Stieregg! This lovely 2-room apartment (44 m²) on the ground floor is the perfect alpine escape for two. Located in a sunny and peaceful area, just a 6-minute walk from Grindelwald train station and the village center.",
        descriptionDe: "Willkommen im Chalet Stieregg! Diese charmante 2-Zimmerwohnung (44 m²) im Erdgeschoss ist der ideale Rückzugsort für zwei Personen. An sonniger, ruhiger Lage gelegen und nur 6 Gehminuten vom Bahnhof Grindelwald und dem Dorfzentrum entfernt – perfekt für erholsame Tage in den Bergen.",
        edomizil: "https://www.e-domizil.ch/rental/dd6f3056e061ea7b565811ec1c00ca63?location=5460aeb2be103&boostedId=dd6f3056e061ea7b565811ec1c00ca63%40u%40a&pricetype=totalPrice&dp=0&clickId=53YYZ4J6ZJ15V3JR&sT=dateless&prodName=JM&prodSource=Search&searchId=6fccc8689be57ef3&screen=search&searchRequestId=c7560621c2614f6f&priceRate=nonRefund",
        airbnb: "https://www.airbnb.ch/rooms/17104334?search_mode=regular_search&adults=1&check_in=2025-11-12&check_out=2025-11-17&children=0&infants=0&pets=0&source_impression_id=p3_1761405583_P3UbeL5B4VxZlbv8&previous_page_section_name=1000&federated_search_id=376eb290-55a4-4616-a11c-731c3c810f89",
        price: "140",
        images: [
            "images/apartmentwest/csaw_wohnzimmer_1_768px.jpg",
            "images/apartmentwest/csaw_wohnzimmer_2_768px.jpg",
            "images/apartmentwest/csaw_kueche_768px.jpg",
            "images/apartmentwest/csaw_schlafzimmer_1_768px.jpg",
            "images/apartmentwest/csaw_schlafzimmer_2_768px.jpg",
            "images/apartmentwest/csaw_kueche_768px.jpg",
            "images/apartmentwest/csaw_terrasse_1_768px.jpg",
            "images/apartmentwest/csaw_terrasse_2_768px.jpg",
        ],
        coords: [46.62731374410197, 8.027111794561225],
        ical: "https://inventory.atraveo.com/ical/export/1698287/ical.ics?securitytoken=50eb0f69cf0e49f1bd9295b5bdf6252d",
        minstay: 3
    },
    {
        title: "Chalet Stieregg Studio Ost",
        descriptionEn: "Small but cozy: This renovated 1-room studio (28 m²) is perfect for solo travelers looking to unwind in the mountains. Quietly located and thoughtfully equipped for a relaxing stay.",
        descriptionDe: "Klein, fein und perfekt für eine Auszeit in den Bergen: Dieses renovierte 1-Zimmer-Studio (28 m²) eignet sich ideal für Einzelreisende. Ruhig gelegen und mit allem ausgestattet, was man für einen angenehmen Aufenthalt braucht.",
        edomizil: "https://www.e-domizil.ch/rental/24d7ccdec05b8b3676d0e9011f9575ee?location=5460aeb2be103&boostedId=24d7ccdec05b8b3676d0e9011f9575ee%40u%40a&pricetype=totalPrice&dp=0&clickId=HP23NT783YGCKPXP&sT=dateless&prodName=JM&prodSource=Search&searchId=e805caf64bbd725c&screen=search&searchRequestId=df1c64ec716e4c6a&priceRate=nonRefund",
        airbnb: "https://www.airbnb.ch/rooms/42685109?search_mode=regular_search&adults=1&check_in=2025-11-01&check_out=2025-11-06&children=0&infants=0&pets=0&source_impression_id=p3_1761405583_P3vTQMuTT8_BXyXO&previous_page_section_name=1000&federated_search_id=376eb290-55a4-4616-a11c-731c3c810f89",
        price: "95",
        images: [
            "images/studioost/csso_wohnzimmer_1_768px.jpg",
            "images/studioost/csso_wohnzimmer_2_768px.jpg",
            "images/studioost/csso_kueche_768px.jpg",
            "images/studioost/csso_bett_768px.jpg",
            "images/studioost/csso_badezimmer_768px.jpg",
            "images/studioost/csso_balkon_768px.jpg",
        ],
        coords: [46.62741012681669, 8.027309554918785],
        ical: "https://inventory.atraveo.com/ical/export/3283084/ical.ics?securitytoken=7375a411421841288d1cb74187f444d2",
        minstay: 3
    },
    {
        title: "Chalet Stieregg Studio West",
        descriptionEn: "This freshly renovated 1-room studio (28 m²) on the top floor of Chalet Stieregg is perfect for two guests seeking peace and nature. The small terrace faces north, offering tranquil views of the forest and the iconic Wetterhorn.",
        descriptionDe: "Diese frisch renovierte 1-Zimmerwohnung (28 m²) im Dachgeschoss des Chalet Stieregg ist ideal für zwei Personen, die Ruhe und Natur suchen. Die kleine Terrasse mit Nordausrichtung bietet einen friedlichen Blick auf den Wald und das beeindruckende Wetterhorn.",
        edomizil: "https://www.e-domizil.ch/rental/16266dd76336147d95957ab4d4b11979?location=5460aeb2be103&boostedId=16266dd76336147d95957ab4d4b11979%40u%40a&pricetype=totalPrice&dp=0&clickId=RYFR4FWLTSFRGXP7&sT=dateless&prodName=JM&prodSource=Search&searchId=31de121849d4b5d9&screen=search&searchRequestId=58e6f79a4ae84dd8&priceRate=nonRefund",
        airbnb: "https://www.airbnb.ch/rooms/3483075?search_mode=regular_search&adults=1&check_in=2025-11-01&check_out=2025-11-06&children=0&infants=0&pets=0&source_impression_id=p3_1761405583_P3LoS6gxsGmjOD4C&previous_page_section_name=1000&federated_search_id=376eb290-55a4-4616-a11c-731c3c810f89",
        price: "95",
        images: [
            "images/studiowest/cssw_wohnzimmer_1_768px.jpg",
            "images/studiowest/cssw_wohnzimmer_2_768px.jpg",
            "images/studiowest/cssw_kochnische_768px.jpg",
            "images/studiowest/cssw_bett_768px.jpg",
            "images/studiowest/cssw_badezimmer_768px.jpg",
            "images/studiowest/cssw_balkon_768px.jpg",
        ],
        coords: [46.62741012585345, 8.02710860371621],
        ical: "https://inventory.atraveo.com/ical/export/1840472/ical.ics?securitytoken=bb82dda052c544d3a0cb9ca7d08a54e6",
        minstay: 4
    }
];

// Constants
const SWIPER_CONFIG = {
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    slidesPerView: 1,
    spaceBetween: 10,
};

const MAP_CENTER = [46.6262, 8.0309];
const MAP_ZOOM = 14;

// DOM Elements
const langEnButton = document.getElementById('lang-en');
const langDeButton = document.getElementById('lang-de');
const langEnElements = document.querySelectorAll('.lang-en');
const langDeElements = document.querySelectorAll('.lang-de');
const apartmentsContainer = document.querySelector("#apartments .grid");
const viewGridIcon = document.getElementById('view-grid');
const viewMapIcon = document.getElementById('view-map');
const apartmentsGrid = document.getElementById('apartments-grid');
const mapContainer = document.getElementById('map-container');

// Language translations
const translations = {
    en: {
        pricePrefix: "from CHF",
        bookingButton: "Booking request at best price"
    },
    de: {
        pricePrefix: "ab CHF",
        bookingButton: "Buchungsanfrage zum besten Preis"
    }
};

// Initialize Swiper instance
function initializeSwiper(selector = '.swiper') {
    const swiperElements = document.querySelectorAll(selector);
    swiperElements.forEach(el => {
        if (!el.swiper) {
            new Swiper(el, SWIPER_CONFIG);
        }
    });
}

// Split title into two lines
function splitTitle(title) {
    // Split at " Apartment " or " Studio " (with spaces)
    const match = title.match(/^(.+?)\s+(Apartment|Studio)\s+(.+)$/);
    if (match) {
        return {
            line1: match[1],  // e.g., "Chalet Stieregg" or "Grossenhaus"
            line2: `${match[2]} ${match[3]}`  // e.g., "Studio Ost" or "Apartment Valerian"
        };
    }
    // Fallback: if no match, return original title on line 1
    return { line1: title, line2: '' };
}

// Generate apartment HTML (consolidated to avoid duplication)
function generateApartmentHTML(apartment, language, isPopup = false) {
    const shadowClass = isPopup ? '' : 'shadow-lg';
    const paddingClass = isPopup ? 'p-0' : 'p-4';
    const popupStyle = isPopup ? 'style="max-width: 250px; margin: auto;"' : '';
    const description = language === 'en' ? apartment.descriptionEn : apartment.descriptionDe;
    const priceText = `${translations[language].pricePrefix} ${apartment.price}`;
    const bookingButtonText = translations[language].bookingButton;
    
    const titleParts = splitTitle(apartment.title);
    const titleHTML = titleParts.line2 
        ? `<span class="block">${titleParts.line1}</span><span class="block">${titleParts.line2}</span>`
        : titleParts.line1;

    const sliderHeightClass = isPopup ? 'h-36 md:h-48' : 'h-48 md:h-64';
    const imageSlides = apartment.images.map(img => 
        `<div class="swiper-slide h-full">
            <img src="${img}" alt="Image" class="h-full w-full object-cover">
        </div>`
    ).join('');

    const calendarIconSVG = `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>`;
    
    const buttonsHTML = `
        <button type="button" class="w-full max-w-xs px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 easepick-trigger">
            ${bookingButtonText}
        </button>
        ${apartment.airbnb ? `
        <button onclick="window.open('${apartment.airbnb}', '_blank')" 
                class="w-full max-w-xs px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900">
            airbnb
        </button>
        ` : ''}
        ${apartment.edomizil ? `
        <button onclick="window.open('${apartment.edomizil}', '_blank')" 
                class="w-full max-w-xs px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900">
            e-domizil
        </button>
        ` : ''}
    `;

    const cardBaseClasses = `bg-white rounded-lg overflow-hidden ${shadowClass}`;
    const cardClasses = isPopup ? cardBaseClasses : `${cardBaseClasses} flex flex-col h-full`;
    const contentWrapperClass = `${paddingClass} flex flex-col gap-4 ${isPopup ? '' : 'flex-1'}`;
    const descriptionHTML = !isPopup ? `<p class="text-gray-700 ${isPopup ? '' : 'flex-1'}">${description}</p>` : '';
    const bottomSection = `
        <div class="flex flex-col items-end ${isPopup ? 'space-y-2' : 'space-y-4'} ${isPopup ? '' : 'mt-auto'}">
            <div class="flex items-center gap-2">
                <p class="font-bold text-gray-700 text-right">${priceText}</p>
                <button type="button" class="p-2 bg-gray-600 text-white rounded hover:bg-gray-700 easepick-trigger calendar-view-button">
                    ${calendarIconSVG}
                </button>
            </div>
            ${buttonsHTML}
        </div>
    `;

    return `
        <div class="${cardClasses}" ${popupStyle}>
            <h3 class="text-xl font-bold ${paddingClass}" data-full-title="${apartment.title}">${titleHTML}</h3>
            <div class="swiper flex-none w-full ${sliderHeightClass} overflow-hidden">
                <div class="swiper-wrapper h-full">
                    ${imageSlides}
                </div>
                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-pagination"></div>
            </div>
            <div class="${contentWrapperClass}">
                ${descriptionHTML}
                ${bottomSection}
            </div>
        </div>
    `;
}

// Render apartments to grid
function renderApartments() {
    apartments.forEach(apartment => {
        const htmlEn = generateApartmentHTML(apartment, 'en', false);
        const htmlDe = generateApartmentHTML(apartment, 'de', false);
        apartmentsContainer.innerHTML += `
            <div class="lang-en hidden h-full">${htmlEn}</div>
            <div class="lang-de h-full">${htmlDe}</div>
        `;
    });
    // Initialize Swiper for grid view after rendering
    setTimeout(() => initializeSwiper(), 0);
    // Ensure grid view is shown by default
    apartmentsGrid.classList.remove('hidden');
    mapContainer.classList.add('hidden');
}

// Language switching
function switchLanguage(language) {
    const showLang = language === 'en' ? langEnElements : langDeElements;
    const hideLang = language === 'en' ? langDeElements : langEnElements;
    
    showLang.forEach(el => el.classList.remove('hidden'));
    hideLang.forEach(el => el.classList.add('hidden'));
    localStorage.setItem('language', language);
    
    updatePopupLanguage(language);
    updateApartmentsLanguage(language);
}

function switchToEnglish() {
    switchLanguage('en');
}

function switchToGerman() {
    switchLanguage('de');
}

function updateApartmentsLanguage(language) {
    apartmentsContainer.querySelectorAll(".lang-en, .lang-de").forEach(el => {
        if (el.classList.contains(`lang-${language}`)) {
            el.classList.remove('hidden');
        } else {
            el.classList.add('hidden');
        }
    });
}

// Map initialization
let mapInitialized = false;
const map = L.map('map-container', { zoomControl: false });

// Create markers immediately (needed for language switching before map init)
const mapMarkers = apartments.map(apartment => {
    const htmlDe = generateApartmentHTML(apartment, 'de', true);
    const htmlEn = generateApartmentHTML(apartment, 'en', true);
    const marker = L.marker(apartment.coords).addTo(map).bindPopup(htmlDe);
    return { marker, content: { en: htmlEn, de: htmlDe } };
});
window.markers = mapMarkers;

function initializeMap() {
    if (mapInitialized) return;
    
    map.setView(MAP_CENTER, MAP_ZOOM);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    mapInitialized = true;
}

function updatePopupLanguage(language) {
    if (window.markers) {
        window.markers.forEach(({ marker, content }) => {
            marker.getPopup().setContent(content[language]);
        });
    }
}

// View switcher
viewGridIcon.addEventListener('click', () => {
    apartmentsGrid.classList.remove('hidden');
    mapContainer.classList.add('hidden');
});

viewMapIcon.addEventListener('click', () => {
    apartmentsGrid.classList.add('hidden');
    mapContainer.classList.remove('hidden');
    initializeMap();
    setTimeout(() => initializeSwiper(), 0);
});

// iCal helpers
function matchIcsDate(m) {
    if (!m) return null;
    const raw = m[1].trim();
    if (/^\d{8}$/.test(raw)) {
        return `${raw.slice(0,4)}-${raw.slice(4,6)}-${raw.slice(6,8)}`;
    }
    if (/^\d{8}T\d{6}Z?$/.test(raw)) {
        const y = raw.slice(0,4), mo = raw.slice(4,6), d = raw.slice(6,8);
        return `${y}-${mo}-${d}`;
    }
    return null;
}

function addDaysISO(isoYmd, n) {
    const [y, m, d] = isoYmd.split('-').map(Number);
    const dt = new Date(Date.UTC(y, m-1, d));
    dt.setUTCDate(dt.getUTCDate() + n);
    const y2 = dt.getUTCFullYear();
    const m2 = String(dt.getUTCMonth()+1).padStart(2,'0');
    const d2 = String(dt.getUTCDate()).padStart(2,'0');
    return `${y2}-${m2}-${d2}`;
}

async function loadIcalRanges(icalUrl) {
    if (!icalUrl) return [];

    try {
        const res = await fetch(icalUrl, { cache: 'no-store' });
        if (!res.ok) throw new Error('HTTP ' + res.status);
        const text = await res.text();

        const events = text.match(/BEGIN:VEVENT[\s\S]*?END:VEVENT/g) || [];
        const ranges = [];
        
        for (const ev of events) {
            const ds = matchIcsDate(ev.match(/DTSTART[^\n\r:]*:([0-9TZ]+)/));
            const de = matchIcsDate(ev.match(/DTEND[^\n\r:]*:([0-9TZ]+)/));
            if (!ds && !de) continue;

            const start = ds || de;
            const end = de || addDaysISO(start, 1);
            ranges.push([start, end]);
        }

        // Merge overlapping/contiguous ranges
        ranges.sort((a,b) => a[0].localeCompare(b[0]));
        const merged = [];
        for (const r of ranges) {
            if (!merged.length) { 
                merged.push(r); 
                continue; 
            }
            const last = merged[merged.length - 1];
            if (r[0] <= last[1]) {
                last[1] = r[1] > last[1] ? r[1] : last[1];
            } else {
                merged.push(r);
            }
        }
        return merged;
    } catch (e) {
        console.warn('iCal load failed:', e);
        return [];
    }
}

// Date picker
function openDatePicker(apartmentTitle) {
    const existingModal = document.getElementById('hotelcalendar-modal');
    if (existingModal) existingModal.remove();

    const apartment = apartments.find(a => a.title === apartmentTitle);
    if (!apartment) return;

    // Split title for modal display
    const titleParts = splitTitle(apartmentTitle);
    const modalTitleHTML = titleParts.line2 
        ? `<span class="block">${titleParts.line1}</span><span class="block">${titleParts.line2}</span>`
        : titleParts.line1;

    const modal = document.createElement('div');
    modal.id = 'hotelcalendar-modal';
    modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';

    modal.innerHTML = `
        <div class="bg-white rounded-lg shadow-lg p-8 max-w-md w-full relative">
            <button onclick="document.getElementById('hotelcalendar-modal').remove()" class="absolute top-2 right-2 text-gray-500 hover:text-gray-900 text-xl">&times;</button>
            <h2 class="text-xl font-bold mb-4">${modalTitleHTML}</h2>
            <input id="hotelcalendar-name" class="w-full border px-4 py-2 rounded mb-4" placeholder="Name" />
            <input id="hotelcalendar-input" class="w-full border px-4 py-2 rounded mb-4" placeholder="Select dates" readonly />
            <button id="hotelcalendar-submit" class="w-full px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 mb-4">Submit via EMail</button>
            <div id="hotelcalendar-picker"></div>
        </div>
    `;
    document.body.appendChild(modal);

    function loadEasepickScript() {
        if (!window.easepick) {
            const script = document.createElement('script');
            script.src = "https://cdn.jsdelivr.net/npm/@easepick/bundle@1.2.1/dist/index.umd.js";
            script.onload = initializeHotelCalendar;
            document.body.appendChild(script);
        } else {
            initializeHotelCalendar();
        }
    }

    async function initializeHotelCalendar() {
        const availableRanges = await loadIcalRanges(apartment.ical || "");

        const picker = new easepick.create({
            element: document.getElementById('hotelcalendar-input'),
            css: ["https://cdn.jsdelivr.net/npm/@easepick/bundle@1.2.1/dist/index.css"],
            plugins: ['RangePlugin', 'LockPlugin', 'HotelPlugin'],
            format: 'DD/MM/YYYY',
            zIndex: 9999,
            HotelPlugin: {
                minNights: apartment.minstay || 1,
                maxNights: 60,
            },
            LockPlugin: {
                minDays: apartment.minstay || 1,
                inseparable: true,
                filter(date) {
                    if (!availableRanges.length) return true;
                    const d = date.format('YYYY-MM-DD');
                    for (const [start, end] of availableRanges) {
                        if (d >= start && d < end) return true;
                    }
                    return false;
                }
            },
            parent: document.getElementById('hotelcalendar-picker'),
            setup(picker) {
                const input = document.getElementById('hotelcalendar-input');
                input.addEventListener('click', () => picker.show());
                input.addEventListener('focus', () => picker.show());
            },
        });

        window.hotelcalendarPickerInstance = picker;

        document.getElementById('hotelcalendar-submit').onclick = function () {
            const name = document.getElementById('hotelcalendar-name').value;
            const picker = window.hotelcalendarPickerInstance;
            const start = picker?.getStartDate()?.format('DD/MM/YYYY') || '';
            const end = picker?.getEndDate()?.format('DD/MM/YYYY') || '';
            const subject = encodeURIComponent(`Booking request: ${apartmentTitle}`);
            const body = encodeURIComponent(`Apartment: ${apartmentTitle}\nName: ${name}\nCheck-in: ${start}\nCheck-out: ${end}`);
            window.location.href = `mailto:info@stieregg.ch?subject=${subject}&body=${body}`;
        };
    }

    loadEasepickScript();
}

// Open calendar view (readonly dropdown)
function openCalendarView(apartmentTitle, buttonElement) {
    // Close any existing calendar dropdown
    const existingInput = document.getElementById('calendar-view-input');
    if (existingInput) {
        const existingPicker = existingInput.easepick;
        if (existingPicker) {
            existingPicker.hide();
        }
        existingInput.remove();
    }

    const apartment = apartments.find(a => a.title === apartmentTitle);
    if (!apartment) return;

    // Create a hidden input element positioned near the button
    const input = document.createElement('input');
    input.id = 'calendar-view-input';
    input.type = 'text';
    input.readOnly = true;
    input.style.position = 'absolute';
    input.style.opacity = '0';
    input.style.pointerEvents = 'none';
    
    // Position the input relative to the button
    const buttonRect = buttonElement.getBoundingClientRect();
    input.style.top = `${buttonRect.bottom + window.scrollY}px`;
    input.style.left = `${buttonRect.left + window.scrollX}px`;
    input.style.width = '1px';
    input.style.height = '1px';
    
    document.body.appendChild(input);

    function loadEasepickScript() {
        if (!window.easepick) {
            const script = document.createElement('script');
            script.src = "https://cdn.jsdelivr.net/npm/@easepick/bundle@1.2.1/dist/index.umd.js";
            script.onload = initializeCalendarView;
            document.body.appendChild(script);
        } else {
            initializeCalendarView();
        }
    }

    async function initializeCalendarView() {
        const availableRanges = await loadIcalRanges(apartment.ical || "");

        const picker = new easepick.create({
            element: document.getElementById('calendar-view-input'),
            css: ["https://cdn.jsdelivr.net/npm/@easepick/bundle@1.2.1/dist/index.css"],
            plugins: ['LockPlugin'],
            format: 'DD/MM/YYYY',
            zIndex: 9999,
            readonly: true,
            autoApply: true,
            LockPlugin: {
                minDays: 1,
                inseparable: false,
                filter(date) {
                    if (!availableRanges.length) return true;
                    const d = date.format('YYYY-MM-DD');
                    for (const [start, end] of availableRanges) {
                        if (d >= start && d < end) return true;
                    }
                    return false;
                }
            },
        });

        // Make calendar completely readonly - prevent all date selection
        picker.onClickCalendarDay = function() {
            // Do nothing - prevent date selection
            return false;
        };

        // Hide Cancel/Apply buttons and disable date selection via CSS
        setTimeout(() => {
            const style = document.createElement('style');
            style.textContent = `
                .easepick-wrapper footer {
                    display: none !important;
                }
                .easepick-wrapper .day {
                    pointer-events: none !important;
                    cursor: default !important;
                }
                .easepick-wrapper .previous-button,
                .easepick-wrapper .next-button {
                    pointer-events: auto !important;
                    cursor: pointer !important;
                }
            `;
            picker.ui.shadowRoot.appendChild(style);
        }, 100);

        // Show the calendar immediately as a dropdown
        setTimeout(() => {
            picker.show();
            
            // Close dropdown when clicking outside (wait for calendar to render)
            setTimeout(() => {
                const closeOnOutsideClick = (e) => {
                    // Find the easepick calendar container - try multiple selectors
                    let easepickContainer = document.querySelector('.easepick-wrapper') || 
                                          document.querySelector('.easepick-calendar');
                    
                    // If not found, try to find any element with easepick in class name
                    if (!easepickContainer) {
                        const allElements = document.querySelectorAll('[class*="easepick"]');
                        easepickContainer = Array.from(allElements).find(el => 
                            el.classList.toString().includes('easepick') && 
                            el.offsetParent !== null // visible element
                        );
                    }
                    
                    // Check if click is inside the calendar container
                    const isInsideEasepick = easepickContainer && (
                        easepickContainer.contains(e.target) || 
                        easepickContainer === e.target ||
                        e.target.closest('.easepick-wrapper') ||
                        e.target.closest('[class*="easepick"]')
                    );
                    
                    // Check if click is on the button or inside the button
                    const isButton = e.target === buttonElement || 
                                   buttonElement.contains(e.target) ||
                                   e.target.closest('button') === buttonElement ||
                                   (e.target.closest('svg') && e.target.closest('svg').closest('button') === buttonElement);
                    
                    // Only close if click is outside both calendar and button
                    if (!isInsideEasepick && !isButton) {
                        picker.hide();
                        document.removeEventListener('click', closeOnOutsideClick);
                        setTimeout(() => {
                            if (input.parentNode) input.remove();
                        }, 300);
                    }
                };
                
                // Use normal bubbling (not capture) so calendar can handle its own clicks first
                document.addEventListener('click', closeOnOutsideClick);
            }, 200);
        }, 100);
    }

    loadEasepickScript();
}

// Event listeners
langEnButton.addEventListener('click', switchToEnglish);
langDeButton.addEventListener('click', switchToGerman);

// Map popup event - initialize Swiper when popup opens
map.on('popupopen', () => {
    setTimeout(() => initializeSwiper(), 0);
});

// Render apartments immediately (needed before language switching)
renderApartments();

// Set initial language
const savedLanguage = localStorage.getItem('language') || 'de';
switchLanguage(savedLanguage);

// Attach click event for booking buttons (delegated, works on dynamically added elements)
document.body.addEventListener('click', function (e) {
    const triggerButton = e.target.closest('.easepick-trigger');
    if (triggerButton) {
        const card = triggerButton.closest('.bg-white');
        const h3 = card?.querySelector('h3');
        const title = h3?.getAttribute('data-full-title') || h3?.textContent || '';
        if (title) {
            // Check if it's the calendar icon button (has calendar-view-button class)
            const isCalendarButton = triggerButton.classList.contains('calendar-view-button');
            if (isCalendarButton) {
                e.stopPropagation(); // Prevent immediate close
                
                // Check if calendar is already open for this apartment
                const existingInput = document.getElementById('calendar-view-input');
                if (existingInput && existingInput.easepick) {
                    // Toggle: if open, close it
                    existingInput.easepick.hide();
                    setTimeout(() => {
                        if (existingInput.parentNode) existingInput.remove();
                    }, 300);
                } else {
                    // Open calendar
                    openCalendarView(title, triggerButton);
                }
            } else {
                openDatePicker(title);
            }
        }
    }
});
