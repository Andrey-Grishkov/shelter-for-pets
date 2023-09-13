interface IPet {
    name: string;
    img: string;
    type: string;
    breed: string;
    description: string;
    age: string;
    inoculations: string[];
    diseases: string[];
    parasites: string[];
}

type RendererFunction = (item: IPet) => void;
type handleCardClickFunction = () => void;
type petsRenderFunction = (petsPageMass: IPet[]) => void;

const pets: IPet[] = [
    {
        name: '1Jennifer',
        img: '../../images/card__image%20pets-jennifer.png',
        type: 'Dog',
        breed: 'Labrador',
        description:
            "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
        age: '2 months',
        inoculations: ['none'],
        diseases: ['none'],
        parasites: ['none'],
    },
    {
        name: '2Sophia',
        img: '../images/card__image%20sophia.png',
        type: 'Dog',
        breed: 'Shih tzu',
        description:
            "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
        age: '1 month',
        inoculations: ['parvovirus'],
        diseases: ['none'],
        parasites: ['none'],
    },
    {
        name: '3Woody',
        img: '../images/card__image%20pets-woody.png',
        type: 'Dog',
        breed: 'Golden Retriever',
        description:
            'Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.',
        age: '3 years 6 months',
        inoculations: ['adenovirus', ' distemper'],
        diseases: ['right back leg mobility reduced'],
        parasites: ['none'],
    },
    {
        name: '4Scarlett',
        img: '../../images/card__image%20pets-scarlet.png',
        type: 'Dog',
        breed: 'Jack Russell Terrier',
        description:
            'Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.',
        age: '3 months',
        inoculations: ['parainfluenza'],
        diseases: ['none'],
        parasites: ['none'],
    },
    {
        name: '5Katrine',
        img: '../../images/card__image%20pets-katrine.png',
        type: 'Cat',
        breed: 'British Shorthair',
        description:
            'Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.',
        age: '6 months',
        inoculations: ['panleukopenia'],
        diseases: ['none'],
        parasites: ['none'],
    },
    {
        name: '6Timmy',
        img: '../../images/card__image%20pets-timmy.png',
        type: 'Cat',
        breed: 'British Shorthair',
        description:
            'Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.',
        age: '2 years 3 months',
        inoculations: ['calicivirus', ' viral rhinotracheitis'],
        diseases: ['kidney stones'],
        parasites: ['none'],
    },
    {
        name: '7Freddie',
        img: '../../images/card__image%20freddie.png',
        type: 'Cat',
        breed: 'British Shorthair',
        description:
            'Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.',
        age: '2 months',
        inoculations: ['rabies'],
        diseases: ['none'],
        parasites: ['none'],
    },
    {
        name: '8Charly',
        img: '../../images/card__image%20pets-charly.png',
        type: 'Dog',
        breed: 'Jack Russell Terrier',
        description:
            'This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.',
        age: '8 years',
        inoculations: ['bordetella bronchiseptica', ' leptospirosis'],
        diseases: ['deafness', ' blindness'],
        parasites: ['lice', ' fleas'],
    },
    {
        name: '9Chubby',
        img: '../../images/card__image%20chubby.png',
        type: 'Cat',
        breed: 'breedless',
        description: 'Chubby is 1 years old black and white female cat with green eyes.',
        age: '1 years old',
        inoculations: ['rhinotracheitis'],
        diseases: ['obesity'],
        parasites: ['none'],
    },
    {
        name: '10Bobby',
        img: '../../images/card__image%20pets-bobby.png',
        type: 'Dog',
        breed: 'Shar Pei',
        description: 'Bobby is cute little puppy with grey color.',
        age: '13 weeks old',
        inoculations: ['none'],
        diseases: ['none'],
        parasites: ['none'],
    },
    {
        name: '11Luna',
        img: '../../images/card__image%20pets-luna.png',
        type: 'Dog',
        breed: 'Mini American Shepherd',
        description: 'Luna is female puppy with blue eyes',
        age: '15 weeks old',
        inoculations: ['none'],
        diseases: ['none'],
        parasites: ['none'],
    },
    {
        name: '12Cosmos',
        img: '../../images/card__image%20cosmos.png',
        type: 'Cat',
        breed: 'Silver tabby chinchilla Persian',
        description: 'Cosmos is big male cat with green eyes and have calm character.',
        age: '5 years old',
        inoculations: ['panleukopenia'],
        diseases: ['deafness'],
        parasites: ['worms'],
    },
    {
        name: '13Inca',
        img: '../../images/card__image%20inca.png',
        type: 'Dog',
        breed: 'Belgian Shepherd',
        description: 'Inca is big female black dog',
        age: '8 years old',
        inoculations: ['leptospirosis'],
        diseases: ['deafness', ' blindness'],
        parasites: ['fleas'],
    },
    {
        name: '14Holly',
        img: '../../images/card__image%20holly.png',
        type: 'Cat',
        breed: 'Egyptian Mau',
        description: 'Holly is female cat with green eyes and silver hair.',
        age: '4 months old',
        inoculations: ['panleukopenia'],
        diseases: ['none'],
        parasites: ['none'],
    },
    {
        name: '15Mary',
        img: '../../images/card__image%20mary.png',
        type: 'Dog',
        breed: 'Rough Collie',
        description: 'Mary is a old female dog with golden hair',
        age: '6 years old',
        inoculations: ['bordetella bronchiseptica'],
        diseases: ['arthritis'],
        parasites: ['worms'],
    },
    {
        name: '16Cookie',
        img: '../../images/card__image%20cookie.png',
        type: 'Cat',
        breed: 'breedless',
        description: 'Cookie is chocolate tortoiseshell and white female cat with green eyes.',
        age: '4 months old',
        inoculations: ['calcivirus'],
        diseases: ['none'],
        parasites: ['none'],
    },
    {
        name: '17Mysia',
        img: '../../images/card__image%20mysia.png',
        type: 'Cat',
        breed: 'Russian Blue',
        description: 'Mysia is cute female cat with green eyes.',
        age: '3 years old',
        inoculations: ['microsporia and trichophytosis'],
        diseases: ['leptospirosis'],
        parasites: ['none'],
    },
    {
        name: '18Marco',
        img: '../../images/card__image%20marco.png',
        type: 'Dog',
        breed: 'Blue Italian Greyhound',
        description: 'Marco is a young dog with brown hair',
        age: '11 months old',
        inoculations: ['parvovirus enteritis', ' rabies'],
        diseases: ['none'],
        parasites: ['none'],
    },
    {
        name: '19Marcel',
        img: '../../images/card__image%20marcel.png',
        type: 'Cat',
        breed: 'Blue British Shorthair',
        description:
            'Marcel is a large and playful man cat. Very affectionate, but afraid of strangers and hides from them behind a curtain. Crazy about shrimp.',
        age: '6 years old',
        inoculations: ['plague'],
        diseases: ['none'],
        parasites: ['none'],
    },
    {
        name: '20Paul',
        img: '../../images/card__image%20pets-paul.png',
        type: 'Dog',
        breed: 'German Shepherd',
        description: 'Paul is blue and tan cute puppy.',
        age: '10 weeks old',
        inoculations: ['none'],
        diseases: ['none'],
        parasites: ['none'],
    },
    {
        name: '21Eskey',
        img: '../../images/card__image%20pets-eskey.png',
        type: 'Dog',
        breed: 'Belgian Shepherd',
        description: 'Eskey is playful female dog.',
        age: '4 years old',
        inoculations: ['viral hepatitis', ' leptospirosis'],
        diseases: ['blindness'],
        parasites: ['fleas'],
    },
    {
        name: '22Chloe',
        img: '../../images/card__image%20chloe.png',
        type: 'Cat',
        breed: 'Persian',
        description: 'Chloe is female chocolate kitty with yellow eyes.',
        age: '4 months old',
        inoculations: ['plague', ' leptospirosis'],
        diseases: ['none'],
        parasites: ['none'],
    },

    {
        name: '23Warren',
        img: '../../images/card__image%20pets-warren.png',
        type: 'Dog',
        breed: 'Jack Russell Terrier',
        description: 'Warren is young dog with a cute bang.',
        age: '8 month',
        inoculations: ['bordetella bronchiseptica'],
        diseases: ['none'],
        parasites: ['none'],
    },

    {
        name: '24Tom',
        img: '../../images/card__image%20tom.png',
        type: 'Cat',
        breed: 'breedless',
        description: 'Tom is red cat with stripes.',
        age: '2 years old',
        inoculations: ['parvovirus enteritis', ' rabies'],
        diseases: ['none'],
        parasites: ['none'],
    },
];

const popupBurgerElement: HTMLElement | null = document.querySelector('.burger-popup');
const burgerMenuElement: HTMLElement | null = document.querySelector('.header__burger-menu');
const burgerMenuNavElement: HTMLElement | null = document.querySelector('.burger-popup__burger-menu');
const popupBurgerOpenedSelector = 'burger-popup_opened';
const popupBurgerClosedSelector = 'burger-popup__burger-menu';
const pageElement: HTMLElement | null = document.querySelector('.page');
const petsPopupElement: HTMLElement | null = document.querySelector('.pets-popup');
const popupPetsOpenedSelector = 'pets-popup_opened';
const popupPetsClosedSelector = 'pets-popup__close';
const cardTitle: HTMLElement | null = document.querySelector('.pets-popup__title');
const cardSubTitle: HTMLElement | null = document.querySelector('.pets-popup__subtitle');
const cardDescription: HTMLElement | null = document.querySelector('.pets-popup__description');
const ageText: HTMLElement | null = document.querySelector('.pets-popup__list-text_type_age');
const inoculationsText: HTMLElement | null = document.querySelector('.pets-popup__list-text_type_inoculations');
const diseasesText: HTMLElement | null = document.querySelector('.pets-popup__list-text_type_diseases');
const parasitesText: HTMLElement | null = document.querySelector('.pets-popup__list-text_type_parasites');
const petsPopupImage: HTMLImageElement | null = document.querySelector('.pets-popup__image');
const sliderList: HTMLElement | null = document.querySelector('.slider__cards-list');
const sliderLeftButton: HTMLButtonElement | null = document.querySelector('.slider__button_left');
const sliderRightButton: HTMLButtonElement | null = document.querySelector('.slider__button_right');
const allPetsButtonTotalLeft: HTMLButtonElement | null = document.querySelector('.all-pets__button_total-left');
const allPetsButtonLeft: HTMLButtonElement | null = document.querySelector('.all-pets__button_left');
const allPetsCount: HTMLElement | null = document.querySelector('.all-pets__button_count');
const allPetsButtonTotalRight: HTMLButtonElement | null = document.querySelector('.all-pets__button_total-right');
const allPetsButtonRight: HTMLButtonElement | null = document.querySelector('.all-pets__button_right');
const sliderListSelector = '.slider__cards-list';
const allPetsListSelector = '.all-pets__list';
const templateCardsSelector = '.template-cards';
const petsList: HTMLElement | null = document.querySelector('.all-pets__list');

const root: HTMLElement | null = document.querySelector(':root');
if (!root) throw new Error('root is null');
const rootStyles = getComputedStyle(root);
let quantityCardsOnPage = Number(rootStyles.getPropertyValue('--quantityCardsOnPage'));
window.addEventListener('resize', quantityCardsFunction);

function quantityCardsFunction() {
    quantityCardsOnPage = Number(rootStyles.getPropertyValue('--quantityCardsOnPage'));
    return quantityCardsOnPage;
}

export {
    pets,
    popupBurgerElement,
    burgerMenuElement,
    burgerMenuNavElement,
    petsPopupElement,
    pageElement,
    popupBurgerOpenedSelector,
    popupBurgerClosedSelector,
    popupPetsOpenedSelector,
    popupPetsClosedSelector,
    cardTitle,
    cardSubTitle,
    cardDescription,
    ageText,
    inoculationsText,
    diseasesText,
    parasitesText,
    petsPopupImage,
    IPet,
    RendererFunction,
    handleCardClickFunction,
    sliderList,
    sliderLeftButton,
    sliderRightButton,
    allPetsButtonTotalLeft,
    allPetsButtonLeft,
    allPetsCount,
    allPetsButtonTotalRight,
    allPetsButtonRight,
    sliderListSelector,
    allPetsListSelector,
    templateCardsSelector,
    petsList,
    quantityCardsOnPage,
    petsRenderFunction,
};
