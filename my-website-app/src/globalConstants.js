export const THRESHOLD_MAX_APP_WIDTH = 800;     // Schwellenwert für die maximale Breite in Pixel für das responsive Design 
export const THRESHOLD_MIN_APP_WIDTH = 600;     // Schwellenwert für die minimale Breite in Pixel für das responsive Design
export const SCROLL_VIEW_OFFSET = 0;            // Offset in Pixel um die Navigation zu scrollen

// Dauer in Millisekunden für die Tipp-Animationen der Texte
export const NUMBER_LOOP_ANIMATION = 1;       
export const TYPE_ANIMATION_DURATION_1 = 80;       
export const TYPE_ANIMATION_DURATION_2 = 80;
export const HOLD_ANIMATION_DURATION_1 = 2000;  
export const HOLD_ANIMATION_DURATION_2 = 2000;

// Texte in der Info-Box auf der Startseite
export const INFO_TEXT_START_SECTION = `Nach dem Studienabschluss in Energietechnik war ich zunächst in der Vorausberechnung von elektrischen Antrieben tätig. 
Dabei habe ich schnell mein Interesse an der Softwareentwicklung und Programmierung entdeckt. 
Aus Interesse entwickelte sich ein Wunsch nach Veränderung. Daher bin ich seit knapp zwei Jahren als Softwareentwickler tätig. 
Aus Wunsch wurde Leidenschaft, der ich in meiner Freizeit nachgehe und mich mit eigenen Softwareprojekten kontinuierlich zum Webentwickler weiterbilde.`

// Path to the images/photos
const PATH_TO_IMAGES = 'src/assets/images/';
const IMAGE_NAMES = ['IMG_2113.png', 'IMG_4041.png', 'IMG_4461.png', 'IMG_2716.png'];
export const DURATION_IMAGE_ANIMATION = 3000;  // Dauer des Intervalls für einen Fotowechsel in Millisekunden 
export const PHOTO_BORDER_COLOR = 'black';
export const PHOTO_BORDER_WIDTH = '10px';

export const fullPhotoPath = IMAGE_NAMES.map((name) => `${PATH_TO_IMAGES}${name}`);