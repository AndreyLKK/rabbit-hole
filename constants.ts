
import { Prize, PrizeType } from './types';

export const WALLET_ADDRESS = "0xa570f8081c9801a4794b14368bddc15830ee2a84";

export const CUTE_ANIMALS: Prize[] = [
  // Kittens
  { type: PrizeType.CUTE_ANIMAL, content: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&q=80", label: "Пушистый котенок смотрит в душу" },
  { type: PrizeType.CUTE_ANIMAL, content: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=600&q=80", label: "Котенок, который тебя понимает" },
  { type: PrizeType.CUTE_ANIMAL, content: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=600&q=80", label: "Рыжий бандит" },
  { type: PrizeType.CUTE_ANIMAL, content: "https://images.unsplash.com/photo-1595433707802-6b2626ef1c91?w=600&q=80", label: "Маленький исследователь" },
  { type: PrizeType.CUTE_ANIMAL, content: "https://images.unsplash.com/photo-1519052537078-e6302a4968ef?w=600&q=80", label: "Король подушек" },
  { type: PrizeType.CUTE_ANIMAL, content: "https://images.unsplash.com/photo-1561948955-570b270e7c36?w=600&q=80", label: "Котик: 'Где моя еда?'" },
  { type: PrizeType.CUTE_ANIMAL, content: "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?w=600&q=80", label: "Котенок в корзинке" },
  { type: PrizeType.CUTE_ANIMAL, content: "https://images.unsplash.com/photo-1495360019602-e001922271fe?w=600&q=80", label: "Дзен-кот" },
  { type: PrizeType.CUTE_ANIMAL, content: "https://images.unsplash.com/photo-1501820488136-72669149e0d4?w=600&q=80", label: "Милота 80 уровня" },
  
  // Puppies
  { type: PrizeType.CUTE_ANIMAL, content: "https://images.unsplash.com/photo-1591160690555-5debfba289f0?w=600&q=80", label: "Золотистый ретривер (мини-версия)" },
  { type: PrizeType.CUTE_ANIMAL, content: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=600&q=80", label: "Самый хороший мальчик" },
  { type: PrizeType.CUTE_ANIMAL, content: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=600&q=80", label: "Спящий щенок" },
  { type: PrizeType.CUTE_ANIMAL, content: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&q=80", label: "Улыбающийся песель" },
  { type: PrizeType.CUTE_ANIMAL, content: "https://images.unsplash.com/photo-1601979031925-424e53b6caaa?w=600&q=80", label: "Щенок корги" },
  { type: PrizeType.CUTE_ANIMAL, content: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=600&q=80", label: "Лучший друг человека" },
  { type: PrizeType.CUTE_ANIMAL, content: "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?w=600&q=80", label: "Собака-улыбака" },
  { type: PrizeType.CUTE_ANIMAL, content: "https://images.unsplash.com/photo-1517849845537-4d257902454a?w=600&q=80", label: "Бульдожка" },
];

export const INTERESTING_WEBSITES: Prize[] = [
  // --- MASTERPIECES (Neal.fun & others) ---
  { type: PrizeType.WEBSITE_LINK, content: "https://neal.fun/deep-sea/", label: "Глубокое море (Скролл на дно Марианской впадины)" },
  { type: PrizeType.WEBSITE_LINK, content: "https://neal.fun/size-of-space/", label: "Масштабы космоса (Свайпай от астронавта до галактик)" },
  { type: PrizeType.WEBSITE_LINK, content: "https://neal.fun/spend/", label: "Потрать деньги Билла Гейтса (Симулятор богача)" },
  { type: PrizeType.WEBSITE_LINK, content: "https://neal.fun/asteroid-launcher/", label: "Asteroid Launcher (Запусти метеорит в свой город)" },
  { type: PrizeType.WEBSITE_LINK, content: "https://neal.fun/baby-map/", label: "Baby Map (Где прямо сейчас рождаются дети)" },
  { type: PrizeType.WEBSITE_LINK, content: "https://neal.fun/printing-money/", label: "Скорость печати денег (Смотри как богатеют корпорации)" },
  { type: PrizeType.WEBSITE_LINK, content: "https://neal.fun/life-stats/", label: "Статистика твоей жизни (Пугающе точно)" },
  { type: PrizeType.WEBSITE_LINK, content: "https://neal.fun/paper/", label: "Складываем бумагу до Луны" },
  { type: PrizeType.WEBSITE_LINK, content: "https://neal.fun/design-the-next-iphone/", label: "Создай дизайн следующего iPhone" },
  { type: PrizeType.WEBSITE_LINK, content: "https://neal.fun/absurd-trolley-problems/", label: "Абсурдная проблема вагонетки" },
  { type: PrizeType.WEBSITE_LINK, content: "https://neal.fun/auction-game/", label: "Угадай за сколько продали эту картину" },
  { type: PrizeType.WEBSITE_LINK, content: "https://neal.fun/rocks/", label: "Камни (Балансируй камни дзен)" },
  { type: PrizeType.WEBSITE_LINK, content: "https://neal.fun/logos-from-memory/", label: "Нарисуй логотипы по памяти" },

  // --- GLOBAL REAL-TIME DATA & MAPS ---
  { type: PrizeType.WEBSITE_LINK, content: "https://radio.garden/", label: "Radio Garden (Слушай любое радио на глобусе)" },
  { type: PrizeType.WEBSITE_LINK, content: "https://www.flightradar24.com/", label: "FlightRadar24 (Все самолеты в небе прямо сейчас)" },
  { type: PrizeType.WEBSITE_LINK, content: "https://www.marinetraffic.com/", label: "Marine Traffic (Все корабли в океане онлайн)" },
  { type: PrizeType.WEBSITE_LINK, content: "https://earth.nullschool.net/", label: "Earth Nullschool (Карта ветров и океанов)" },
  { type: PrizeType.WEBSITE_LINK, content: "https://www.submarinecablemap.com/", label: "Карта подводных интернет-кабелей" },
  { type: PrizeType.WEBSITE_LINK, content: "https://www.ocearch.org/tracker/", label: "OCEARCH (Трекер акул и китов в реальном времени)" },
  { type: PrizeType.WEBSITE_LINK, content: "https://www.lightningmaps.org/", label: "Карта ударов молний онлайн" },
  { type: PrizeType.WEBSITE_LINK, content: "https://cybermap.kaspersky.com/", label: "Карта кибератак в реальном времени" },
  { type: PrizeType.WEBSITE_LINK, content: "http://lroc.sese.asu.edu/posts/gigapan", label: "Гигапиксельные панорамы Луны" },
  { type: PrizeType.WEBSITE_LINK, content: "https://satellitemap.space/", label: "Карта спутников Starlink" },
  { type: PrizeType.WEBSITE_LINK, content: "https://globe.adsbexchange.com/", label: "ADSB Exchange (Нефильтрованный трекер самолетов)" },
  { type: PrizeType.WEBSITE_LINK, content: "https://www.windy.com/", label: "Windy (Самая красивая карта погоды)" },
  { type: PrizeType.WEBSITE_LINK, content: "https://zoom.earth/", label: "Zoom Earth (Спутниковые снимки в реальном времени)" },

  // --- SPACE & SCIENCE ---
  { type: PrizeType.WEBSITE_LINK, content: "https://eyes.nasa.gov/apps/solar-system/", label: "NASA Eyes (Летай по Солнечной системе в 3D)" },
  { type: PrizeType.WEBSITE_LINK, content: "https://iss-sim.spacex.com/", label: "SpaceX ISS Simulator (Попробуй пристыковать капсулу к МКС)" },
  { type: PrizeType.WEBSITE_LINK, content: "https://stars.chromeexperiments.com/", label: "100,000 Звезд (Интерактивная карта галактики)" },
  { type: PrizeType.WEBSITE_LINK, content: "https://dinosaurpictures.org/ancient-earth", label: "Ancient Earth (Как выглядел твой дом 600 млн лет назад)" },
  { type: PrizeType.WEBSITE_LINK, content: "https://3d.si.edu/", label: "Smithsonian 3D (Крути артефакты из музея)" },
  { type: PrizeType.WEBSITE_LINK, content: "https://scaleofuniverse.com/", label: "The Scale of the Universe 2" },
  { type: PrizeType.WEBSITE_LINK, content: "https://mars.nasa.gov/mars2020/", label: "NASA Mars 2020 (Панорамы с Марса)" },
  { type: PrizeType.WEBSITE_LINK, content: "https://exoplanets.nasa.gov/eyes-on-exoplanets/", label: "Eyes on Exoplanets (Путешествие к чужим мирам)" },
  { type: PrizeType.WEBSITE_LINK, content: "https://musiclab.chromeexperiments.com/Spectrogram/", label: "Визуализатор звука (Спектрограмма)" },
  { type: PrizeType.WEBSITE_LINK, content: "https://pudding.cool/2018/11/boy-bands/", label: "Эволюция музыки 90-х (Визуализация данных)" },
  { type: PrizeType.WEBSITE_LINK, content: "https://human.biodigital.com/", label: "BioDigital Human (3D атлас тела)" },

  // --- INTERACTIVE ART & VISUALS ---
  { type: PrizeType.WEBSITE_LINK, content: "http://weavesilk.com/", label: "Silk (Рисование симметричным светом)" },
  { type: PrizeType.WEBSITE_LINK, content: "https://paveldogreat.github.io/WebGL-Fluid-Simulation/", label: "Симулятор жидкости (Очень красиво)" },
  { type: PrizeType.WEBSITE_LINK, content: "https://oimo.io/works/blob/", label: "Желейный Блоб (Интерактивная физика)" },
  { type: PrizeType.WEBSITE_LINK, content: "https://jacksonpollock.org/", label: "Рисуй как Джексон Поллок" },
  { type: PrizeType.WEBSITE_LINK, content: "https://thisissand.com/", label: "This Is Sand (Сыпь песок, создавай горы)" },
  { type: PrizeType.WEBSITE_LINK, content: "https://2050.earth/", label: "Earth 2050 (Футуристические панорамы будущего)" },
  { type: PrizeType.WEBSITE_LINK, content: "http://www.staggeringbeauty.com/", label: "Staggering Beauty (Осторожно: Громко и ярко!)" },
  { type: PrizeType.WEBSITE_LINK, content: "https://zoomquilt.org/", label: "ZoomQuilt (Бесконечный зум в картину)" },
  { type: PrizeType.WEBSITE_LINK, content: "https://arkadia.xyz/", label: "Arkadia (Еще один бесконечный зум)" },
  { type: PrizeType.WEBSITE_LINK, content: "https://bouncyballs.org/", label: "Bouncy Balls (Прыгающие шары реагируют на микрофон)" },
  { type: PrizeType.WEBSITE_LINK, content: "https://sandspiel.club/", label: "Sandspiel (Пиксельный симулятор физики элементов)" },
  { type: PrizeType.WEBSITE_LINK, content: "https://alteredqualia.com/xg/examples/nebula_artefact.html", label: "Генератор туманностей" },
  { type: PrizeType.WEBSITE_LINK, content: "https://csh.bz/line/05xp.html", label: "Интерактивные линии (Психоделика)" },
  { type: PrizeType.WEBSITE_LINK, content: "http://madebyevan.com/webgl-water/", label: "WebGL Water (Очень реалистичная вода)" },
  { type: PrizeType.WEBSITE_LINK, content: "https://akirodic.com/p/jellyfish/", label: "Медузы (3D симуляция)" },

  // --- MUSIC & SOUND ---
  { type: PrizeType.WEBSITE_LINK, content: "https://musiclab.chromeexperiments.com/Song-Maker/", label: "Song Maker (Создай свой трек за минуту)" },
  { type: PrizeType.WEBSITE_LINK, content: "https://aidn.jp/mikutap/", label: "MikuTap (Кликай и создавай музыку)" },
  { type: PrizeType.WEBSITE_LINK, content: "https://patatap.com/", label: "Patatap (Клавиатура = музыка)" },
  { type: PrizeType.WEBSITE_LINK, content: "https://artsandculture.google.com/experiment/blob-opera/AAHWrq360NcGbw", label: "Blob Opera (Оперные желешки поют твои песни)" },
  { type: PrizeType.WEBSITE_LINK, content: "https://mynoise.net/", label: "myNoise (Генератор любых фоновых звуков)" },
  { type: PrizeType.WEBSITE_LINK, content: "http://conservethesound.de/", label: "Museum of Endangered Sounds (Звуки старой техники)" },
  { type: PrizeType.WEBSITE_LINK, content: "https://typatone.com/", label: "Typatone (Преврати текст в мелодию)" },
  { type: PrizeType.WEBSITE_LINK, content: "https://www.incredibox.com/demo/", label: "Incredibox (Битбокс группа)" },
  { type: PrizeType.WEBSITE_LINK, content: "https://asoftmurmur.com/", label: "A Soft Murmur (Создай свой фоновый шум)" },
  { type: PrizeType.WEBSITE_LINK, content: "http://touchpianist.com/", label: "Touch Pianist (Играй на пианино пробелом)" },
  { type: PrizeType.WEBSITE_LINK, content: "https://www.ambient-mixer.com/", label: "Ambient Mixer (Атмосфера Хогвартса и не только)" },

  // --- WEIRD, NOSTALGIC & RETRO ---
  { type: PrizeType.WEBSITE_LINK, content: "https://www.windows93.net/", label: "Windows 93 (Психоделическая ОС в браузере)" },
  { type: PrizeType.WEBSITE_LINK, content: "https://poolsuite.net/", label: "Poolsuite FM (Ретро-вайб и музыка 80-х)" },
  { type: PrizeType.WEBSITE_LINK, content: "https://archive.org/web/", label: "The Wayback Machine (Машина времени интернета)" },
  { type: PrizeType.WEBSITE_LINK, content: "https://noclip.website/", label: "Noclip (Гуляй по картам из видеоигр)" },
  { type: PrizeType.WEBSITE_LINK, content: "https://theuselessweb.com/", label: "The Useless Web (Классика рандома)" },
  { type: PrizeType.WEBSITE_LINK, content: "https://hackertyper.net/", label: "Hacker Typer (Почувствуй себя хакером)" },
  { type: PrizeType.WEBSITE_LINK, content: "http://corndog.io/", label: "Corndog.io (Просто много корн-догов)" },
  { type: PrizeType.WEBSITE_LINK, content: "http://endless.horse/", label: "Endless Horse (Лошадь с бесконечными ногами)" },
  { type: PrizeType.WEBSITE_LINK, content: "https://puginarug.com/", label: "Pug in a Rug (Мопс в пледе)" },
  { type: PrizeType.WEBSITE_LINK, content: "http://hasthelargehadroncolliderdestroyedtheworldyet.com/", label: "Уничтожил ли коллайдер мир?" },
  { type: PrizeType.WEBSITE_LINK, content: "https://isitchristmas.com/", label: "Сегодня Рождество?" },
  { type: PrizeType.WEBSITE_LINK, content: "http://www.koalastothemax.com/", label: "Koalas to the Max (Лопай кружочки)" },
  { type: PrizeType.WEBSITE_LINK, content: "https://cat-bounce.com/", label: "Cat Bounce (Прыгающие коты)" },
  { type: PrizeType.WEBSITE_LINK, content: "https://smashthewalls.com/", label: "Smash The Walls (Ломай стены)" },
  { type: PrizeType.WEBSITE_LINK, content: "http://burymewithmymoney.com/", label: "Bury Me With My Money" },
  { type: PrizeType.WEBSITE_LINK, content: "https://longdogechallenge.com/", label: "Long Doge Challenge" },
  { type: PrizeType.WEBSITE_LINK, content: "https://mondrianandme.com/", label: "Mondrian and Me (Генератор искусства)" },
  { type: PrizeType.WEBSITE_LINK, content: "https://winamp2-js.mp3.net.nz/", label: "Winamp2-js (Работающий плеер в браузере)" },
  
  // --- COOL TOOLS & EXPERIMENTS ---
  { type: PrizeType.WEBSITE_LINK, content: "https://pissang.github.io/little-big-city/", label: "Little Big City (Генератор процедурных городов)" },
  { type: PrizeType.WEBSITE_LINK, content: "https://paperplanes.world/", label: "Paper Planes (Поймай самолетик с другого конца света)" },
  { type: PrizeType.WEBSITE_LINK, content: "https://www.airpano.com/", label: "AirPano (Панорамы с воздуха)" },
  { type: PrizeType.WEBSITE_LINK, content: "https://pointerpointer.com/", label: "Pointer Pointer (Найди свой курсор)" },
  { type: PrizeType.WEBSITE_LINK, content: "https://quickdraw.withgoogle.com/", label: "Quick, Draw! (Нейросеть угадывает рисунки)" },
  { type: PrizeType.WEBSITE_LINK, content: "https://www.autodraw.com/", label: "AutoDraw (Превращает каракули в иконки)" },
  { type: PrizeType.WEBSITE_LINK, content: "https://window-swap.com/", label: "WindowSwap (Вид из чужого окна где-то в мире)" },
  { type: PrizeType.WEBSITE_LINK, content: "https://emojitracker.com/", label: "Emoji Tracker (Использование эмодзи в Twitter онлайн)" },
  { type: PrizeType.WEBSITE_LINK, content: "https://www.mapcrunch.com/", label: "MapCrunch (Телепорт в случайное место Google Street View)" },
  { type: PrizeType.WEBSITE_LINK, content: "https://10minutemail.com/", label: "10 Minute Mail (Почта на 10 минут)" },
  { type: PrizeType.WEBSITE_LINK, content: "https://generated.photos/faces", label: "Generated Photos (Лица, которых нет)" },
  { type: PrizeType.WEBSITE_LINK, content: "https://haveibeenpwned.com/", label: "Have I Been Pwned? (Слили ли твой пароль?)" },
  { type: PrizeType.WEBSITE_LINK, content: "https://whatthefuckshouldimakefordinner.com/", label: "WTFSIMFD (Что приготовить на ужин?)" },

  // --- MYSTERIOUS PLACES (Google Maps) ---
  { type: PrizeType.WEBSITE_LINK, content: "https://www.google.com/maps/@32.154316,-110.8279885,4564m/data=!3m1!1e3", label: "Кладбище самолетов (The Boneyard), Аризона" },
  { type: PrizeType.WEBSITE_LINK, content: "https://www.google.com/maps/@37.24804,-115.800155,5000m/data=!3m1!1e3", label: "Зона 51 (Groom Lake)" },
  { type: PrizeType.WEBSITE_LINK, content: "https://www.google.com/maps/@40.2638848,58.4395669,278m/data=!3m1!1e3", label: "Врата Ада (Кратер Дарваза), Туркменистан" },
  { type: PrizeType.WEBSITE_LINK, content: "https://www.google.com/maps/@-14.692348,-75.1228266,456m/data=!3m1!1e3", label: "Геоглифы Наски (Космонавт)" },
  { type: PrizeType.WEBSITE_LINK, content: "https://www.google.com/maps/@33.860135,135.378943,100m/data=!3m1!1e3", label: "Заброшенный парк аттракционов в Японии" },
  { type: PrizeType.WEBSITE_LINK, content: "https://www.google.com/maps/@38.483328,-109.682375,3500m/data=!3m1!1e3", label: "Пруды Potash (Ярко-синие озера в пустыне Юта)" },
  { type: PrizeType.WEBSITE_LINK, content: "https://www.google.com/maps/@25.223049,55.163351,5000m/data=!3m1!1e3", label: "The World Islands (Искусственные острова Дубая)" },
  { type: PrizeType.WEBSITE_LINK, content: "https://www.google.com/maps/@-33.836881,151.077258,200m/data=!3m1!1e3", label: "Плавающий лес (Корабль SS Ayrfield)" },
  { type: PrizeType.WEBSITE_LINK, content: "https://www.google.com/maps/@50.010083,-110.113006,500m/data=!3m1!1e3", label: "Страж Пустоши (Лицо в рельефе Канады)" },
  { type: PrizeType.WEBSITE_LINK, content: "https://www.google.com/maps/@44.525049,11.293144,300m/data=!3m1!1e3", label: "Гигантская коллекция Ferrari на крыше завода" },
  { type: PrizeType.WEBSITE_LINK, content: "https://www.google.com/maps/@-19.949176,-69.638927,500m/data=!3m1!1e3", label: "Гигант из Атакамы (Древний геоглиф)" },
  { type: PrizeType.WEBSITE_LINK, content: "https://www.google.com/maps/@34.931728,-117.873216,300m/data=!3m1!1e3", label: "Кладбище самолетов Edwards AFB" },
  { type: PrizeType.WEBSITE_LINK, content: "https://www.google.com/maps/@44.244273,7.769737,200m/data=!3m1!1e3", label: "Гигантский Розовый Кролик (Италия)" },
  { type: PrizeType.WEBSITE_LINK, content: "https://www.google.com/maps/@35.6245236,-105.150042,200m/data=!3m1!1e3", label: "Логотип Сциентологов (Трементнина)" },
  { type: PrizeType.WEBSITE_LINK, content: "https://www.google.com/maps/@37.646292,-115.750798,200m/data=!3m1!1e3", label: "Гигантский треугольник в Неваде" },
  { type: PrizeType.WEBSITE_LINK, content: "https://www.google.com/maps/@51.848637,-0.55462,200m/data=!3m1!1e3", label: "Гигантский Лев (Уипснейдский зоопарк)" },
  
  // --- LIVE CAMS ---
  { type: PrizeType.WEBSITE_LINK, content: "https://www.earthcam.com/usa/newyork/timessquare/?cam=tsrobo1", label: "Таймс-сквер, Нью-Йорк (Live 4K)" },
  { type: PrizeType.WEBSITE_LINK, content: "https://eol.jsc.nasa.gov/ESRS/HDEV/", label: "Прямой эфир с МКС (Вид на Землю)" },
  { type: PrizeType.WEBSITE_LINK, content: "https://explore.org/livecams/cats/kitten-rescue-cam", label: "Комната с котятами (Live 24/7)" },
  { type: PrizeType.WEBSITE_LINK, content: "https://www.skylinewebcams.com/en/webcam/italia/lazio/roma/fontana-di-trevi.html", label: "Фонтан Треви, Рим (Live)" },
  { type: PrizeType.WEBSITE_LINK, content: "https://www.webcamtaxi.com/en/japan/tokyo/shibuya-crossing.html", label: "Перекресток Сибуя, Токио (Самый людный в мире)" },
  { type: PrizeType.WEBSITE_LINK, content: "https://explore.org/livecams/african-wildlife/african-watering-hole-animal-camera", label: "Водопой в Африке (Слоны, жирафы онлайн)" },
  { type: PrizeType.WEBSITE_LINK, content: "https://www.abbeyroad.com/crossing", label: "Abbey Road Crossing (Знаменитый переход Beatles)" },
  { type: PrizeType.WEBSITE_LINK, content: "https://www.skylinewebcams.com/en/webcam/iceland/northeastern-region/akureyri/northern-lights.html", label: "Северное сияние (Исландия Live)" },
  { type: PrizeType.WEBSITE_LINK, content: "https://explore.org/livecams/panda-cam/china-panda-cam-1", label: "Панды в Китае (Live)" },
  
  // --- GAMES & INTERACTIVE FICTION ---
  { type: PrizeType.WEBSITE_LINK, content: "https://candybox2.github.io/", label: "Candy Box 2 (Конфетный кликер)" },
  { type: PrizeType.WEBSITE_LINK, content: "https://play2048.co/", label: "2048 (Оригинал)" },
  { type: PrizeType.WEBSITE_LINK, content: "https://skribbl.io/", label: "Skribbl.io (Рисуй и угадывай)" },
  { type: PrizeType.WEBSITE_LINK, content: "https://agar.io/", label: "Agar.io (Ешь других)" },
  { type: PrizeType.WEBSITE_LINK, content: "https://slither.io/", label: "Slither.io (Змейка онлайн)" },
  { type: PrizeType.WEBSITE_LINK, content: "https://geoguessr.com/", label: "GeoGuessr (Платный, но легендарный)" },
  { type: PrizeType.WEBSITE_LINK, content: "https://www.decisionproblem.com/paperclips/", label: "Universal Paperclips (ИИ захватывает мир скрепок)" },
  { type: PrizeType.WEBSITE_LINK, content: "https://existentialcrisis.com/", label: "Existential Crisis (Просто нажми)" },
  { type: PrizeType.WEBSITE_LINK, content: "http://orteil.dashnet.org/cookieclicker/", label: "Cookie Clicker (Бабушки и печеньки)" },
  { type: PrizeType.WEBSITE_LINK, content: "https://foddy.net/Athletics.html", label: "QWOP (Самая сложная пробежка)" },
  { type: PrizeType.WEBSITE_LINK, content: "https://www.geo-fs.com/", label: "GeoFS (Симулятор полетов в браузере)" },
  
  // --- ODDLY SATISFYING ---
  { type: PrizeType.WEBSITE_LINK, content: "https://29a.ch/sandbox/2011/neonflames/", label: "Neon Flames (Рисуй туманности)" },
  { type: PrizeType.WEBSITE_LINK, content: "http://bomomo.com/", label: "Bomomo (Абстрактное рисование)" },
  { type: PrizeType.WEBSITE_LINK, content: "https://lines.chromeexperiments.com/", label: "Lines (Рисуй линиями)" },
  { type: PrizeType.WEBSITE_LINK, content: "http://haxiomic.github.io/GPU-Fluid-Experiments/html5/", label: "GPU Fluid (Еще больше жидкости)" },
  
  // --- USEFUL UTILITIES ---
  { type: PrizeType.WEBSITE_LINK, content: "https://www.wolframalpha.com/", label: "Wolfram Alpha (Знает всё на свете)" },
  { type: PrizeType.WEBSITE_LINK, content: "https://temp-mail.org/", label: "Temp Mail (Временная почта)" },
  { type: PrizeType.WEBSITE_LINK, content: "https://www.photopea.com/", label: "Photopea (Photoshop в браузере бесплатно)" },
  { type: PrizeType.WEBSITE_LINK, content: "https://tinywow.com/", label: "TinyWow (Все инструменты для PDF и фото)" },
  
  // --- CULTURE & MUSEUMS ---
  { type: PrizeType.WEBSITE_LINK, content: "https://artsandculture.google.com/", label: "Google Arts & Culture" },
  { type: PrizeType.WEBSITE_LINK, content: "https://www.louvre.fr/en/online-tours", label: "Виртуальный тур по Лувру" },
  { type: PrizeType.WEBSITE_LINK, content: "https://www.britishmuseum.org/collection", label: "Коллекция Британского музея" },
  
  // --- TYPOGRAPHY & DESIGN ---
  { type: PrizeType.WEBSITE_LINK, content: "https://type.method.ac/", label: "Kern Type (Игра для дизайнеров)" },
  { type: PrizeType.WEBSITE_LINK, content: "https://bezier.method.ac/", label: "The Bezier Game (Учись работать пером)" },
  { type: PrizeType.WEBSITE_LINK, content: "https://coolors.co/", label: "Coolors (Генератор палитр)" },
  { type: PrizeType.WEBSITE_LINK, content: "https://fontjoy.com/", label: "Fontjoy (Подбор шрифтовых пар)" },
];
