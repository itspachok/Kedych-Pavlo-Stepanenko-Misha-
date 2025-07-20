// Дані фільмів (10 для прикладу)
const movies = [
  {
    id: 1,
    title: 'Дюна: Частина друга',
    description: 'Епічне продовження фантастичної саги про боротьбу за пустельну планету Арракіс.',
    poster: 'https://image.tmdb.org/t/p/w500/8b8R8l88Qje9dn9OE8PY05Nxl1X.jpg',
    trailer: 'https://www.youtube.com/embed/Way9Dexny3w',
    genre: 'Фантастика, Пригоди',
    rating: 8.7,
    sessions: [
      { id: 101, time: '18:00', hall: 'Зал 1' },
      { id: 102, time: '20:30', hall: 'Зал 2' },
    ],
  },
  {
    id: 2,
    title: 'Барбі',
    description: 'Яскрава комедія про пригоди Барбі у реальному світі.',
    poster: 'https://image.tmdb.org/t/p/w500/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg',
    trailer: 'https://www.youtube.com/embed/pBk4NYhWNMM',
    genre: 'Комедія, Фентезі',
    rating: 7.2,
    sessions: [
      { id: 201, time: '17:00', hall: 'Зал 1' },
      { id: 202, time: '19:30', hall: 'Зал 2' },
    ],
  },
  {
    id: 3,
    title: 'Оппенгеймер',
    description: 'Біографічна драма про творця атомної бомби Дж. Роберта Оппенгеймера.',
    poster: 'https://image.tmdb.org/t/p/w500/ptpr0kGAckfQkJeJIt8st5dglvd.jpg',
    trailer: 'https://www.youtube.com/embed/uYPbbksJxIg',
    genre: 'Драма, Історія',
    rating: 8.5,
    sessions: [
      { id: 301, time: '16:00', hall: 'Зал 1' },
      { id: 302, time: '21:00', hall: 'Зал 2' },
    ],
  },
  {
    id: 4,
    title: 'Вартові Галактики 3',
    description: 'Космічна команда повертається для нових пригод і битв.',
    poster: 'https://image.tmdb.org/t/p/w500/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg',
    trailer: 'https://www.youtube.com/embed/u3V5KDHRQvk',
    genre: 'Фантастика, Бойовик',
    rating: 7.9,
    sessions: [
      { id: 401, time: '15:00', hall: 'Зал 1' },
      { id: 402, time: '19:00', hall: 'Зал 2' },
    ],
  },
  {
    id: 5,
    title: 'Мавка. Лісова пісня',
    description: 'Український анімаційний фільм за мотивами класичної драми Лесі Українки.',
    poster: 'https://image.tmdb.org/t/p/w500/8QVDXDiOGHRcAD4oM6MXjE0osSj.jpg',
    trailer: 'https://www.youtube.com/embed/0kQbR3n3joo',
    genre: 'Анімація, Фентезі',
    rating: 7.5,
    sessions: [
      { id: 501, time: '13:00', hall: 'Зал 1' },
      { id: 502, time: '17:30', hall: 'Зал 2' },
    ],
  },
  {
    id: 6,
    title: 'Джон Уік 4',
    description: 'Джон Уік повертається, щоб кинути виклик найнебезпечнішим ворогам у світі кілерів.',
    poster: 'https://image.tmdb.org/t/p/w500/gh2bmprLtUQ8oXCSluzfqaicyrm.jpg',
    trailer: 'https://www.youtube.com/embed/qEVUtrk8_B4',
    genre: 'Бойовик, Трилер',
    rating: 8.2,
    sessions: [
      { id: 601, time: '19:00', hall: 'Зал 1' },
      { id: 602, time: '21:30', hall: 'Зал 2' },
    ],
  },
  {
    id: 7,
    title: 'Аватар: Шлях води',
    description: 'Продовження епічної історії на Пандорі, де Джейк і Нейтірі борються за свою сім’ю.',
    poster: 'https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg',
    trailer: 'https://www.youtube.com/embed/d9MyW72ELq0',
    genre: 'Фантастика, Пригоди',
    rating: 7.7,
    sessions: [
      { id: 701, time: '18:30', hall: 'Зал 1' },
      { id: 702, time: '21:00', hall: 'Зал 2' },
    ],
  },
  {
    id: 8,
    title: 'Шазам! Лють богів',
    description: 'Підліток Біллі Бетсон знову перетворюється на супергероя Шазама, щоб врятувати світ.',
    poster: 'https://image.tmdb.org/t/p/w500/2VK4d3mqqTc7LVZLnLPeRiPaJ71.jpg',
    trailer: 'https://www.youtube.com/embed/AIc671o9yCI',
    genre: 'Фентезі, Бойовик',
    rating: 6.5,
    sessions: [
      { id: 801, time: '17:00', hall: 'Зал 1' },
      { id: 802, time: '20:00', hall: 'Зал 2' },
    ],
  },
  {
    id: 9,
    title: 'Кіт у чоботях 2: Останнє бажання',
    description: 'Кіт у чоботях вирушає у нову пригоду, щоб знайти легендарне Останнє бажання.',
    poster: 'https://image.tmdb.org/t/p/w500/kuf6dutpsT0vSVehic3EZIqkOBt.jpg',
    trailer: 'https://www.youtube.com/embed/RqrXhwS33yc',
    genre: 'Анімація, Пригоди',
    rating: 7.9,
    sessions: [
      { id: 901, time: '16:00', hall: 'Зал 1' },
      { id: 902, time: '19:00', hall: 'Зал 2' },
    ],
  },
  {
    id: 10,
    title: 'Чорна Пантера: Ваканда назавжди',
    description: 'Після смерті короля Т’Чалли Ваканда бореться за своє майбутнє.',
    poster: 'https://image.tmdb.org/t/p/w500/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
    trailer: 'https://www.youtube.com/embed/_Z3QKkl1WyM',
    genre: 'Бойовик, Фантастика',
    rating: 7.1,
    sessions: [
      { id: 1001, time: '15:00', hall: 'Зал 1' },
      { id: 1002, time: '18:00', hall: 'Зал 2' },
    ],
  },
  {
    id: 11,
    title: 'Форсаж 10',
    description: 'Домінік Торетто та його команда стикаються з новими ворогами у черговій шаленій гонці.',
    poster: 'https://image.tmdb.org/t/p/w500/fiVW06jE7z9YnO4trhaMEdclSiC.jpg',
    trailer: 'https://www.youtube.com/embed/32RAq6JzY-w',
    genre: 'Бойовик, Кримінал',
    rating: 6.3,
    sessions: [
      { id: 1101, time: '20:00', hall: 'Зал 1' },
      { id: 1102, time: '22:30', hall: 'Зал 2' },
    ],
  },
  {
    id: 12,
    title: 'Русалонька',
    description: 'Класична казка Disney оживає у новій пригоді під водою.',
    poster: 'https://image.tmdb.org/t/p/w500/ym1dxyOk4jFcSl4Q2zmRrA5BEEN.jpg',
    trailer: 'https://www.youtube.com/embed/kpGo2_d3oYE',
    genre: 'Фентезі, Мюзикл',
    rating: 7.0,
    sessions: [
      { id: 1201, time: '14:00', hall: 'Зал 1' },
      { id: 1202, time: '17:00', hall: 'Зал 2' },
    ],
  },
  {
    id: 13,
    title: 'Місія нездійсненна: Розплата. Частина перша',
    description: 'Ітан Гант повертається для найнебезпечнішої місії у своєму житті.',
    poster: 'https://image.tmdb.org/t/p/w500/NNxYkU70HPurnNCSiCjYAmacwm.jpg',
    trailer: 'https://www.youtube.com/embed/avz06PDqDbM',
    genre: 'Бойовик, Трилер',
    rating: 8.0,
    sessions: [
      { id: 1301, time: '18:00', hall: 'Зал 1' },
      { id: 1302, time: '21:00', hall: 'Зал 2' },
    ],
  },
  {
    id: 14,
    title: 'Людина-павук: Крізь всесвіт',
    description: 'Майлз Моралес вирушає у нову пригоду крізь мультивсесвіт.',
    poster: 'https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg',
    trailer: 'https://www.youtube.com/embed/cqGjhVJWtEg',
    genre: 'Анімація, Фантастика',
    rating: 8.6,
    sessions: [
      { id: 1401, time: '16:00', hall: 'Зал 1' },
      { id: 1402, time: '19:00', hall: 'Зал 2' },
    ],
  },
  {
    id: 15,
    title: 'Мег 2: Западина',
    description: 'Гігантська акула повертається, щоб навести жах на океан.',
    poster: 'https://image.tmdb.org/t/p/w500/4m1Au3YkjqsxF8iwQy0fPYSxE0h.jpg',
    trailer: 'https://www.youtube.com/embed/dG91B3hHyY4',
    genre: 'Бойовик, Трилер',
    rating: 6.1,
    sessions: [
      { id: 1501, time: '15:00', hall: 'Зал 1' },
      { id: 1502, time: '18:00', hall: 'Зал 2' },
    ],
  },
  {
    id: 16,
    title: 'Елементарно',
    description: 'У місті, де живуть стихії, вогонь і вода знаходять спільну мову.',
    poster: 'https://image.tmdb.org/t/p/w500/4Y1WNkd88JXmGfhtWR7dmDAo1T2.jpg',
    trailer: 'https://www.youtube.com/embed/hXzcyx9V0xw',
    genre: 'Анімація, Фентезі',
    rating: 7.8,
    sessions: [
      { id: 1601, time: '13:00', hall: 'Зал 1' },
      { id: 1602, time: '16:00', hall: 'Зал 2' },
    ],
  },
  {
    id: 17,
    title: 'Трансформери: Час звіроботів',
    description: 'Нові пригоди автоботів і десептиконів у битві за Землю.',
    poster: 'https://image.tmdb.org/t/p/w500/gPbM0MK8CP8A174rmUwGsADNYKD.jpg',
    trailer: 'https://www.youtube.com/embed/itnqEauWQZM',
    genre: 'Фантастика, Бойовик',
    rating: 6.7,
    sessions: [
      { id: 1701, time: '17:00', hall: 'Зал 1' },
      { id: 1702, time: '20:00', hall: 'Зал 2' },
    ],
  },
  {
    id: 18,
    title: 'Крід 3: Спадок Роккі Бальбоа',
    description: 'Адоніс Крід стикається з новим суперником у рингу.',
    poster: 'https://image.tmdb.org/t/p/w500/cvsXj3I9Q2iyyIo95AecSd1tad7.jpg',
    trailer: 'https://www.youtube.com/embed/AHmCH7iB_IM',
    genre: 'Драма, Спорт',
    rating: 7.3,
    sessions: [
      { id: 1801, time: '18:00', hall: 'Зал 1' },
      { id: 1802, time: '21:00', hall: 'Зал 2' },
    ],
  },
  {
    id: 19,
    title: 'Грані часу',
    description: 'Детектив розслідує загадкові події, що порушують хід часу.',
    poster: 'https://image.tmdb.org/t/p/w500/9n2tJBplPbgR2ca05hS5CKXwP2c.jpg',
    trailer: 'https://www.youtube.com/embed/3d7RC0bDwRQ',
    genre: 'Фантастика, Трилер',
    rating: 6.9,
    sessions: [
      { id: 1901, time: '15:00', hall: 'Зал 1' },
      { id: 1902, time: '18:00', hall: 'Зал 2' },
    ],
  },
  {
    id: 20,
    title: 'Опівнічне сонце',
    description: 'Історія кохання підлітків, які зустрічаються лише вночі.',
    poster: 'https://image.tmdb.org/t/p/w500/6b7swg6DLqXCO3XUsMnv6RwDMW2.jpg',
    trailer: 'https://www.youtube.com/embed/fEskVQgtwaI',
    genre: 'Драма, Мелодрама',
    rating: 7.0,
    sessions: [
      { id: 2001, time: '14:00', hall: 'Зал 1' },
      { id: 2002, time: '17:00', hall: 'Зал 2' },
    ],
  },
];

// --- Пошук, фільтр, сортування ---
let search = '';
let genre = 'Усі';
let sort = 'title';

const genres = [
  'Усі',
  ...Array.from(new Set(movies.flatMap(m => m.genre.split(',').map(g => g.trim())))),
];
const sortOptions = [
  { value: 'title', label: 'За назвою (А-Я)' },
  { value: 'rating', label: 'За рейтингом (спочатку кращі)' },
];

function renderControls() {
  const controls = document.getElementById('controls');
  controls.innerHTML = `
    <input type="text" placeholder="Пошук фільму..." value="${search}" id="searchInput">
    <select id="genreSelect">${genres.map(g => `<option value="${g}"${g===genre?' selected':''}>${g}</option>`).join('')}</select>
    <select id="sortSelect">${sortOptions.map(opt => `<option value="${opt.value}"${opt.value===sort?' selected':''}>${opt.label}</option>`).join('')}</select>
  `;
  document.getElementById('searchInput').oninput = e => { search = e.target.value; renderMovieList(); };
  document.getElementById('genreSelect').onchange = e => { genre = e.target.value; renderMovieList(); };
  document.getElementById('sortSelect').onchange = e => { sort = e.target.value; renderMovieList(); };
}

// --- Рендер головної сторінки ---
function renderMovieList() {
  renderControls();
  let filtered = movies.filter(m => m.title.toLowerCase().includes(search.toLowerCase()));
  if (genre !== 'Усі') filtered = filtered.filter(m => m.genre.includes(genre));
  if (sort === 'title') filtered = filtered.slice().sort((a, b) => a.title.localeCompare(b.title));
  else if (sort === 'rating') filtered = filtered.slice().sort((a, b) => b.rating - a.rating);
  const app = document.getElementById('app');
  app.innerHTML = `<h1>Список фільмів</h1>
    <div class="movie-list">
      ${filtered.length === 0 ? `<div style='color:#ffb300;font-size:22px;margin-top:40px'>Фільмів не знайдено</div>` :
        filtered.map(movie => `
        <div class="movie-card">
          <img src="${movie.poster}" alt="${movie.title}">
          <h2>${movie.title}</h2>
          <div class="genre">${movie.genre}</div>
          <div class="rating">★ ${movie.rating}</div>
          <p>${movie.description}</p>
          <div style="margin-bottom:8px">
            <iframe width="220" height="124" src="${movie.trailer}" title="${movie.title} трейлер" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <button class="btn" onclick="showMovieDetails(${movie.id})">Детальніше</button>
        </div>
      `).join('')}
    </div>`;
}

window.showMovieDetails = function(id) {
  const movie = movies.find(m => m.id === id);
  if (!movie) return;
  const app = document.getElementById('app');
  app.innerHTML = `
    <button class="btn" onclick="renderMovieList()">← Назад</button>
    <div style="display:flex;flex-wrap:wrap;gap:32px;align-items:flex-start;margin-top:24px;">
      <img src="${movie.poster}" alt="${movie.title}" style="width:260px;border-radius:12px;box-shadow:0 2px 12px #0008;">
      <div style="flex:1;min-width:260px;">
        <h1>${movie.title}</h1>
        <div class="genre">${movie.genre}</div>
        <div class="rating">★ ${movie.rating}</div>
        <p style="font-size:1.05rem;color:#e0e0e0;">${movie.description}</p>
        <div style="margin:16px 0">
          <iframe width="360" height="202" src="${movie.trailer}" title="${movie.title} трейлер" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <h3>Сеанси:</h3>
        <ul style="padding-left:0;list-style:none;">
          ${movie.sessions.map(s => `<li style="margin-bottom:8px;"><span style="font-weight:500">${s.time}</span> (${s.hall}) — <button class="btn" onclick="showSeatSelection(${s.id}, ${movie.id})">Купити квиток</button></li>`).join('')}
        </ul>
      </div>
    </div>
  `;
}

window.showSeatSelection = function(sessionId, movieId) {
  const movie = movies.find(m => m.id === movieId);
  const session = movie.sessions.find(s => s.id === sessionId);
  const ROWS = 5, COLS = 8;
  let date = getToday();
  let reserved = getReservedSeats(sessionId, date);
  let selected = [];
  const app = document.getElementById('app');
  function renderSeats() {
    reserved = getReservedSeats(sessionId, date);
    app.innerHTML = `
      <button class="btn" onclick="showMovieDetails(${movieId})">← Назад</button>
      <h2>${movie.title}</h2>
      <p>${session.time} (${session.hall})</p>
      <div style="margin:16px 0;">
        <label style="font-weight:500;margin-right:8px;">Дата показу:</label>
        <input type="date" id="dateInput" value="${date}" min="${getToday()}" style="padding:6px;border-radius:6px;font-size:16px;">
      </div>
      <h3>Виберіть місця:</h3>
      <div class="seat-grid">
        ${Array.from({length: ROWS}).map((_, row) =>
          Array.from({length: COLS}).map((_, col) => {
            const seat = `${row+1}-${col+1}`;
            const isReserved = reserved.includes(seat);
            const isSelected = selected.includes(seat);
            return `<button class="seat-btn${isSelected ? ' selected' : ''}${isReserved ? ' reserved' : ''}" onclick="selectSeat('${seat}')" ${isReserved ? 'disabled' : ''}>${seat}</button>`;
          }).join('')
        ).join('')}
      </div>
      <div style="margin-top:16px;">
        <button class="btn" id="buyBtn" ${selected.length === 0 ? 'disabled' : ''}>Купити (${selected.length})</button>
      </div>
    `;
    document.getElementById('buyBtn').onclick = () => {
      reserveSeats(sessionId, date, selected);
      showConfirmation(movie, session, selected, date);
    };
    document.getElementById('dateInput').onchange = e => {
      date = e.target.value;
      selected = [];
      renderSeats();
    };
  }
  window.selectSeat = function(seat) {
    if (reserved.includes(seat)) return;
    if (selected.includes(seat)) {
      selected = selected.filter(s => s !== seat);
    } else {
      selected.push(seat);
    }
    renderSeats();
  }
  renderSeats();
}

function getToday() {
  const d = new Date();
  return d.toISOString().slice(0, 10);
}
function getReservedSeats(sessionId, date) {
  const data = localStorage.getItem('reservedSeatsVanilla');
  if (!data) return [];
  const parsed = JSON.parse(data);
  if (!parsed[sessionId]) return [];
  if (!date) return parsed[sessionId]["default"] || [];
  return parsed[sessionId][date] || [];
}
function reserveSeats(sessionId, date, seats) {
  const data = localStorage.getItem('reservedSeatsVanilla');
  const parsed = data ? JSON.parse(data) : {};
  if (!parsed[sessionId]) parsed[sessionId] = {};
  if (!date) date = "default";
  parsed[sessionId][date] = [...(parsed[sessionId][date] || []), ...seats];
  localStorage.setItem('reservedSeatsVanilla', JSON.stringify(parsed));
}

function showConfirmation(movie, session, seats, date) {
  const app = document.getElementById('app');
  app.innerHTML = `
    <h2>Дякуємо за покупку!</h2>
    <p>Фільм: ${movie.title}</p>
    <p>Сеанс: ${session.time} (${session.hall})</p>
    <p>Дата: ${date}</p>
    <p>Ваші місця: ${seats.join(', ')}</p>
    <button class="btn" onclick="renderMovieList()">На головну</button>
  `;
}

// Мої квитки з скасуванням
function renderMyTickets() {
  const data = localStorage.getItem('reservedSeatsVanilla');
  let tickets = [];
  if (data) {
    const parsed = JSON.parse(data);
    Object.entries(parsed).forEach(([sessionId, datesObj]) => {
      if (typeof datesObj === 'object' && datesObj !== null) {
        Object.entries(datesObj).forEach(([date, seats]) => {
          if (Array.isArray(seats) && seats.length > 0) {
            const movie = movies.find(m => m.sessions.some(s => s.id == sessionId));
            const session = movie ? movie.sessions.find(s => s.id == sessionId) : null;
            if (movie && session) {
              tickets.push({ movie, session, seats, date: date === 'default' ? null : date });
            }
          }
        });
      }
    });
  }
  const app = document.getElementById('app');
  app.innerHTML = `
    <button class="btn" onclick="renderMovieList()">← На головну</button>
    <h1>Мої квитки</h1>
    ${tickets.length === 0 ? '<p>У вас ще немає заброньованих квитків.</p>' :
      `<ul style="padding-left:0;list-style:none;">
        ${tickets.map((t, i) => `
          <li style="margin-bottom:18px;background:#181c24;border-radius:10px;padding:16px;box-shadow:0 2px 8px #0004;position:relative;">
            <div style="font-weight:600;font-size:1.1rem;color:#ffb300;">${t.movie.title}</div>
            <div>Сеанс: <b>${t.session.time}</b> (${t.session.hall})</div>
            ${t.date ? `<div>Дата: <b>${t.date}</b></div>` : ''}
            <div>Місця: <b>${t.seats.join(', ')}</b></div>
            <button class="btn" style="position:absolute;top:16px;right:16px;background:#ff5252;color:#fff;" onclick="removeTicket('${t.session.id}','${t.date || ''}')">Скасувати</button>
          </li>
        `).join('')}
      </ul>`}
  `;
}
window.removeTicket = function(sessionId, date) {
  const data = localStorage.getItem('reservedSeatsVanilla');
  if (!data) return;
  const parsed = JSON.parse(data);
  if (parsed[sessionId] && parsed[sessionId][date || 'default']) {
    delete parsed[sessionId][date || 'default'];
    if (Object.keys(parsed[sessionId]).length === 0) {
      delete parsed[sessionId];
    }
    localStorage.setItem('reservedSeatsVanilla', JSON.stringify(parsed));
  }
  renderMyTickets();
}

document.getElementById('myTicketsBtn').onclick = renderMyTickets;

// Запуск
renderMovieList(); 