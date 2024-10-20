// Globale Konstanten für die Webanwendung
// Update: 20.10.2024

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

// Text in der Info-Box auf der Startseite
export const INFO_TEXT_START_SECTION = `Nach dem Studienabschluss in Energietechnik war ich zunächst in der Vorausberechnung von elektrischen Antrieben tätig. 
Dabei habe ich schnell mein Interesse an der Softwareentwicklung und Programmierung entdeckt. 
Aus Interesse entwickelte sich ein Wunsch nach Veränderung. Daher bin ich seit knapp zwei Jahren als Softwareentwickler tätig. 
Aus Wunsch wurde Leidenschaft, der ich auch in meiner Freizeit nachgehe und mich mit eigenen Softwareprojekten kontinuierlich zum Webentwickler weiterbilde.`

// Text für die allgemeine Beschreibung der Projektseite
export const GENERAL_PROJECT_DESCRIPTION = `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. 
Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.`;


// Spezifische Projektangaben
export const PROJECT_NAME_STRATEGO = 'Stratego-Web';
export const PROJECT_NAME_ECA = 'Enery Costs Analyzer'; 
export const PROJECT_NAME_WEBSITE = 'Portfolio Website';

// Texte für die spezifische Beschreibung der aufgelisteten Projekte
export const PROJECT_DESCRIPTION_STRATEGO = `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.`; 

export const PROJECT_DESCRIPTION_ECA = `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.`; 

export const PROJECT_DESCRIPTION_WEBSITE= `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.`; 


// Pfade zu den Bildern für die Diashow (Photoslider)
const PATH_TO_IMAGES = 'src/assets/images/';
const IMAGE_NAMES = ['IMG_2113.png', 'IMG_4041.png', 'IMG_4461.png', 'IMG_2716.png'];
export const DURATION_IMAGE_ANIMATION = 3200;  // Dauer des Intervalls für einen Fotowechsel in Millisekunden 
export const PHOTO_BORDER_COLOR = 'black';
export const PHOTO_BORDER_WIDTH = '10px';

export const fullPhotoPath = IMAGE_NAMES.map((name) => `${PATH_TO_IMAGES}${name}`);

// Pfade zu den Bildern für die Projekte (ProjectCard)
const ICON_PATH = '/icons/';

export const PATH_TO_PROJECT_IMAGES = {
    stratego: `${ICON_PATH}strategoLogo.png`,
    eca: `${ICON_PATH}ecaLogo.png`,
    website: `${ICON_PATH}myWebLogo.ico`,
}

// URLs zu den Webseiten der Projekte
export const PROJECT_URLS = {
    stratego: 'https://stratego-web.netlify.app',
    eca: 'https://github.com/DenKim94/PRJ_ECA',
    website: 'https://github.com/DenKim94/PRJ_myPortfolioWebsite',
}
 