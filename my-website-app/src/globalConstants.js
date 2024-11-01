// Globale Konstanten für die Webanwendung
// Update: 25.10.2024

// Schwellenwerte für das responsive Design
export const THRESHOLD_MAX_APP_WIDTH = 800;     
export const THRESHOLD_MIN_APP_WIDTH = 600;     
export const SCROLL_VIEW_OFFSET = 0;            // Offset in Pixel für den Scrolleffekt

// Dauer in Millisekunden für die Tipp-Animationen der Texte
export const NUMBER_LOOP_ANIMATION = 1;       
export const TYPE_ANIMATION_DURATION_1 = 80;       
export const TYPE_ANIMATION_DURATION_2 = 80;
export const HOLD_ANIMATION_DURATION_1 = 2000;  
export const HOLD_ANIMATION_DURATION_2 = 2000;

/* Relative Schwellenwerte (0-1) für die Anpassung des Offsets beim Scrollefffekt 
im benötigten Format von framer-motion: [start, end] */
export const SCROLL_OFFSET_DEFAULT    = ["0 1", "1 1"];
export const SCROLL_OFFSET_MIN        = ["0 1", "0.55 1"]; 
export const SCROLL_OFFSET_MEDIUM     = ["0 1", "0.8 1"];
export const SCROLL_OFFSET_MAX        = ["0 1", "1.33 1"];

// Relativer Skalierungsfaktor für den Start des Scrolleffekts
export const SCROLL_SCALING_FACTOR    = 0.6; 

// Absoluter Schwellenwert (in px) für die Breite des Browserfensters
export const SCROLL_THRESHOLD_LOW     = 1300;
export const SCROLL_THRESHOLD_HIGH    = 1700;

// Text in der Info-Box auf der Startseite
export const INFO_TEXT_START_SECTION = `Willkommen auf meiner Webseite!
Hier wirst du meinen bisherigen persönlichen und beruflichen Werdegang kennenlernen. 
Zudem stelle ich dir meine Softwareprojekte vor, die ich bisher in meiner Freizeit entwickelt habe.

Bei Fragen, Feedback oder Anfragen zum Lebenslauf freue ich mich über deine E-Mail.`;

// Text für die allgemeine Beschreibung der Projektseite
export const GENERAL_PROJECT_DESCRIPTION = `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.`;


// Spezifische Projektangaben
export const MAX_NUM_VISIBLE_CARDS = 3;

export const PROJECT_NAME_STRATEGO = 'Stratego-Web';
export const PROJECT_NAME_ECA = 'Enery Costs Analyzer'; 
export const PROJECT_NAME_WEBSITE = 'Portfolio Website';

// Texte für die spezifische Beschreibung der aufgelisteten Projekte
export const PROJECT_DESCRIPTION_STRATEGO = [`Beschreibung: Onlinespiel`, 
    `Aufwand: ca. 400 Stunden`, `Learnings: React-JS; NodeJS; Cypress`]; 

export const PROJECT_DESCRIPTION_ECA = [`Beschreibung: Tool zur Stromkostenanalyse`, 
    `Aufwand: ca. 55 Stunden`, `Learnings: Python; SQLite; CustomTkinter`];

export const PROJECT_DESCRIPTION_WEBSITE= [`Beschreibung: Webseite`, 
    `Aufwand: ca. XXX Stunden`, 
    `Learnings: React-JS; Vite;CSS; Responsive-Design`];

// URLs zu den Webseiten der Projekte
export const PROJECT_URLS = {
    stratego: 'https://stratego-web.netlify.app',
    eca: 'https://github.com/DenKim94/PRJ_ECA',
    website: 'https://github.com/DenKim94/PRJ_myPortfolioWebsite',
}

// Pfade zu den Bildern für die Projekte (ProjectCard)
const ICON_PATH = '/icons/';
export const ICON_SIZE_PX = 90;

export const PATH_TO_PROJECT_IMAGES = {
    stratego: `${ICON_PATH}strategoLogo.png`,
    eca: `${ICON_PATH}ecaLogo.png`,
    website: `${ICON_PATH}myWebLogo.ico`,
}

// Array zum Rendern der Card-Komponenten     
export const PROJECT_CARDS_DATA = [
    {
        projectName: PROJECT_NAME_STRATEGO,
        projectDescription: PROJECT_DESCRIPTION_STRATEGO,
        projectURL: PROJECT_URLS.stratego,
        projectImage: PATH_TO_PROJECT_IMAGES.stratego,
    },
    {
        projectName: PROJECT_NAME_ECA,
        projectDescription: PROJECT_DESCRIPTION_ECA,
        projectURL: PROJECT_URLS.eca,
        projectImage: PATH_TO_PROJECT_IMAGES.eca,
    },
    {
        projectName: PROJECT_NAME_WEBSITE,
        projectDescription: PROJECT_DESCRIPTION_WEBSITE,
        projectURL: PROJECT_URLS.website,
        projectImage: PATH_TO_PROJECT_IMAGES.website,
    },       
];    

// Beschreibungs-/Infotexte für die jeweiligen Abshcnitte 
export const INFO_TEXT_ABOUT_SECTION_1 = `Nach dem Studienabschluss in Energietechnik war ich zunächst in der Vorausberechnung von elektrischen Antrieben tätig. 
Dabei habe ich schnell mein Interesse an der Softwareentwicklung und Programmierung entdeckt. 
Aus Interesse entwickelte sich ein Wunsch nach Veränderung. Daher bin ich seit knapp zwei Jahren als Softwareentwickler tätig. 
Aus Wunsch wurde Leidenschaft, der ich auch in meiner Freizeit nachgehe und mich mit eigenen Softwareprojekten kontinuierlich zum Webentwickler weiterbilde.`;

// Pfade zu den Bildern für die Diashow (Photoslider)
const PATH_TO_IMAGES = 'src/assets/images/';
const IMAGE_NAMES = ['IMG_2710.png', 'IMG_4041.png', 
                    'IMG_2610.png', 'IMG_2716.png',
                    'IMG_4461.png', 'IMG_4481.png'];

export const DURATION_IMAGE_ANIMATION = 3200;  // Dauer des Intervalls für einen Fotowechsel in Millisekunden 
export const PHOTO_BORDER_COLOR = 'black';
export const PHOTO_BORDER_WIDTH = '10px';

export const fullPhotoPath = IMAGE_NAMES.map((name) => `${PATH_TO_IMAGES}${name}`);





