import { useMemo, useState } from 'react'


type Question = {
  prompt: string
  options: string[]
  answer: number
}

type Place = {
  id: string
  number: string
  city: string
  title: string
  eyebrow: string
  image: string
  fact: string
  description: string[]
  highlights: string[]
  quiz: Question[]
}

const places: Place[] = [
{
  id: 'Passarela-Do-Caranguejo',
  number: '01',
  city: 'Aracaju · SE',
  title: 'Passarela Do Caranguejo',
  eyebrow: 'A capital sergipana entre rios e mar',
  image: 'https://imgmd.net/images/c_limit%2Cw_1200/v1/guia/1702806/passarela-do-caranguejo.jpg',
  fact: 'Aracaju é a capital do estado de Sergipe',
  description: [
    'Aracaju é conhecida por suas praias, sua tranquilidade e pela hospitalidade de seu povo. Um dos lugares mais conhecidos da cidade é a Orla de Atalaia, que reúne áreas de lazer, restaurantes e espaços para visitantes.',
    'Na Passarela do Caranguejo, um dos destaques é a famosa escultura de um caranguejo gigante. O local é bastante conhecido pela culinária regional, principalmente pelos pratos feitos com frutos do mar.'
  ],
  highlights: [
    'Conheça a Passarela do Caranguejo',
    'Visite a Orla de Atalaia',
    'Experimente a culinária sergipana'
  ],
  quiz: [
    { prompt: 'Qual é o estado cuja capital é Aracaju?', options: ['Bahia', 'Sergipe', 'Alagoas', 'Pernambuco'], answer: 1 },
    { prompt: 'Qual é o nome da famosa orla de Aracaju?', options: ['Orla de Copacabana', 'Orla de Boa Viagem', 'Orla de Atalaia', 'Orla de Ipanema'], answer: 2 },
    { prompt: 'Qual escultura é um dos símbolos da Passarela do Caranguejo?', options: ['Um peixe gigante', 'Um caranguejo gigante', 'Uma tartaruga', 'Um golfinho'], answer: 1 },
    { prompt: 'Aracaju é conhecida por qual tipo de culinária?', options: ['Culinária regional e frutos do mar', 'Comida japonesa', 'Comida mexicana', 'Comida italiana'], answer: 0 }
  ]
},
  {
  id: 'museu-gente',
  number: '02',
  city: 'Aracaju · SE',
  title: 'Museu da Gente Sergipana',
  eyebrow: 'A história e a cultura de Sergipe',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVuUq7c072VDS3IrnvhCEL0f4LTuiqpX4HipvQf2DwMw&s=10',
  fact: 'Inaugurado em 26 de novembro de 2011',
  description: [
    'O Museu da Gente Sergipana é um espaço cultural localizado no centro de Aracaju. Ele apresenta a história, os costumes e as tradições do povo sergipano.',
    'O museu possui exposições interativas e recursos tecnológicos que permitem aos visitantes conhecer melhor a culinária, as festas, as paisagens e as manifestações culturais de Sergipe.'
  ],
  highlights: [
    'Conheça a cultura sergipana',
    'Explore as exposições interativas',
    'Aprenda sobre as tradições locais'
  ],
  quiz: [
    { prompt: 'Em qual cidade fica o Museu da Gente Sergipana?', options: ['Salvador', 'Aracaju', 'Maceió', 'Recife'], answer: 1 },
    { prompt: 'Em qual ano o museu foi inaugurado?', options: ['2001', '2005', '2011', '2018'], answer: 2 },
    { prompt: 'O que o museu apresenta aos visitantes?', options: ['A cultura e a história de Sergipe', 'A história do futebol', 'A cultura japonesa', 'A história da aviação'], answer: 0 },
    { prompt: 'Qual recurso é utilizado nas exposições?', options: ['Somente livros', 'Exposições interativas e tecnologia', 'Apenas fotografias antigas', 'Somente pinturas'], answer: 1 }
  ]
},
{
  id: 'parque-sementeira',
  number: '03',
  city: 'Aracaju · SE',
  title: 'Parque da Sementeira',
  eyebrow: 'Natureza e tranquilidade na cidade',
  image: 'https://www.aracaju.se.gov.br/storage/media/2010/03/especial_bairro_13_de_julho_foto_jorge__henrique_090709_62.jpg',
  fact: 'Também conhecido como Parque Augusto Franco',
  description: [
    'O Parque da Sementeira é uma das áreas verdes de Aracaju e um espaço bastante utilizado para lazer e contato com a natureza.',
    'O parque possui áreas para caminhadas, lagos, quadras esportivas, espaços para piqueniques e locais destinados às atividades físicas. É uma opção para quem deseja descansar e aproveitar um ambiente ao ar livre.'
  ],
  highlights: [
    'Aproveite as áreas verdes',
    'Faça uma caminhada pelo parque',
    'Conheça os lagos e espaços de lazer'
  ],
  quiz: [
    { prompt: 'Em qual cidade fica o Parque da Sementeira?', options: ['Tobias Barreto', 'Aracaju', 'Itabaiana', 'Estância'], answer: 1 },
    { prompt: 'Qual é outro nome do Parque da Sementeira?', options: ['Parque Augusto Franco', 'Parque da Orla', 'Parque dos Coqueiros', 'Parque Central'], answer: 0 },
    { prompt: 'Qual atividade pode ser realizada no parque?', options: ['Esquiar', 'Caminhar', 'Surfar', 'Patinar no gelo'], answer: 1 },
    { prompt: 'O parque possui quais espaços?', options: ['Lagos e quadras esportivas', 'Praias artificiais', 'Montanhas e cavernas', 'Pistas de avião'], answer: 0 }
  ]
},
  {
  id: 'mercado-antonio-franco',
  number: '04',
  city: 'Aracaju · SE',
  title: 'Mercado Antônio Franco',
  eyebrow: 'Sabores e tradições sergipanas',
  image: 'https://vault-us-east-1.pulsarimagens.com.br/file/preview/39RC303.jpg',
  fact: 'Inaugurado em 8 de fevereiro de 1926',
  description: [
    'O Mercado Municipal Antônio Franco é um dos espaços históricos mais conhecidos de Aracaju. Localizado na região central, ele reúne comerciantes, moradores e visitantes.',
    'No mercado é possível encontrar artesanato, produtos regionais, doces, temperos e comidas típicas. O local também representa uma parte importante da história comercial e cultural da capital sergipana.'
  ],
  highlights: [
    'Conheça o artesanato regional',
    'Experimente os doces típicos',
    'Explore os mercados do centro'
  ],
  quiz: [
    { prompt: 'Em qual cidade fica o Mercado Antônio Franco?', options: ['Aracaju', 'Estância', 'Lagarto', 'Itabaiana'], answer: 0 },
    { prompt: 'Em qual ano o mercado foi inaugurado?', options: ['1900', '1926', '1950', '1980'], answer: 1 },
    { prompt: 'O que pode ser encontrado no mercado?', options: ['Somente eletrônicos', 'Artesanato e produtos regionais', 'Apenas roupas importadas', 'Somente livros escolares'], answer: 1 },
    { prompt: 'O mercado representa principalmente qual aspecto da cidade?', options: ['A cultura e o comércio local', 'A indústria automobilística', 'O turismo de neve', 'A produção de petróleo'], answer: 0 }
  ]
},
]

function ArrowIcon() {
  return <span aria-hidden="true" className="arrow">→</span>
}

export default function App() {
  const [activePlace, setActivePlace] = useState<Place | null>(null)
  const [quizPlace, setQuizPlace] = useState<Place | null>(null)
  const [questionIndex, setQuestionIndex] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [answers, setAnswers] = useState<Record<string, number[]>>({})
  const [menuOpen, setMenuOpen] = useState(false)

  const completed = useMemo(
    () => places.filter((place) => answers[place.id]?.length === place.quiz.length),
    [answers],
  )
  const totalPoints = Object.entries(answers).reduce((total, [id, picked]) => {
    const place = places.find((item) => item.id === id)
    return total + picked.filter((answer, index) => answer === place?.quiz[index].answer).length * 100
  }, 0)

  const openPlace = (place: Place) => {
    setActivePlace(place)
    setQuizPlace(null)
    setMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const startQuiz = (place: Place) => {
    setQuizPlace(place)
    setQuestionIndex(0)
    setSelected(null)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const submitAnswer = () => {
    if (selected === null || !quizPlace) return
    const previous = answers[quizPlace.id] ?? []
    const nextAnswers = [...previous.slice(0, questionIndex), selected]
    setAnswers({ ...answers, [quizPlace.id]: nextAnswers })
    if (questionIndex < quizPlace.quiz.length - 1) {
      setQuestionIndex(questionIndex + 1)
      setSelected(null)
    } else {
      setQuestionIndex(questionIndex + 1)
    }
  }

  const resetToHome = () => {
    setActivePlace(null)
    setQuizPlace(null)
    setMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="app-shell">
      <header className="site-header">
        <button className="brand" onClick={resetToHome} aria-label="Voltar ao início">
          <span className="brand-mark">BR</span>
          <span><strong>Rota Viva</strong><small>descubra · aprenda · conquiste</small></span>
        </button>
        <nav className={menuOpen ? 'main-nav open' : 'main-nav'} aria-label="Navegação principal">
          <button onClick={resetToHome}>Explorar</button>
          <button onClick={() => document.getElementById('como-funciona')?.scrollIntoView({ behavior: 'smooth' })}>Como funciona</button>
          <div className="score-pill"><span>{completed.length}/4 selos</span><strong>{totalPoints} pts</strong></div>
        </nav>
        <button className="menu-button" aria-label="Abrir menu" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span><span></span>
        </button>
      </header>

      {quizPlace ? (
        <Quiz
          place={quizPlace}
          index={questionIndex}
          selected={selected}
          setSelected={setSelected}
          onSubmit={submitAnswer}
          answers={answers[quizPlace.id] ?? []}
          onBack={() => setQuizPlace(null)}
          onHome={resetToHome}
        />
      ) : activePlace ? (
        <PlaceDetail
          place={activePlace}
          completed={completed.some((item) => item.id === activePlace.id)}
          onBack={resetToHome}
          onQuiz={() => startQuiz(activePlace)}
        />
      ) : (
        <Home
          completed={completed}
          totalPoints={totalPoints}
          onOpen={openPlace}
          onStart={() => openPlace(places[0])}
        />
      )}

      <footer>
        <button className="brand footer-brand" onClick={resetToHome}>
          <span className="brand-mark">BR</span>
          <span><strong>Rota Viva</strong><small>viajar também é aprender</small></span>
        </button>
        <p>Feito para quem quer conhecer o Brasil com outros olhos.</p>
        <span>© 2025 Rota Viva</span>
      </footer>
    </div>
  )
}

function Home({ completed, totalPoints, onOpen, onStart }: { completed: Place[]; totalPoints: number; onOpen: (place: Place) => void; onStart: () => void }) {
  return (
    <main>
      <section className="hero">
        <img src="https://www.segueviagem.com.br/wp-content/uploads/2020/10/shutterstock_458684110-1024x683.jpg" alt="Orla de Atalaia em Aracaju" />
        
        <div className="hero-content">
          <p className="kicker">Uma jornada pelo Brasil</p>
          <h1>Explore.<br /><em>Descubra.</em> Conquiste.</h1>
          <p className="hero-copy">Conheça lugares extraordinários, teste o que aprendeu e colecione memórias — e selos — pelo caminho.</p>
          <button className="primary light" onClick={onStart}>Começar a explorar <ArrowIcon /></button>
        </div>
        <div className="hero-note"><span>Em destaque</span><strong>Orla de Atalaia</strong><small>Aracaju · SE</small></div>
        <div className="scroll-cue">Role para descobrir <span>↓</span></div>
      </section>

      <section className="intro" id="como-funciona">
        <div><p className="section-label">Seu passaporte cultural</p><h2>Viaje com<br /><em>curiosidade</em></h2></div>
        <div className="intro-copy">
          <p>Selecionamos quatro destinos que contam histórias únicas sobre o Brasil. Leia, observe e coloque seu conhecimento à prova.</p>
          <div className="steps">
            <span><b>1</b> Explore o lugar</span><span><b>2</b> Faça o quiz</span><span><b>3</b> Ganhe seu selo</span>
          </div>
        </div>
      </section>

      <section className="places-section">
        <div className="section-heading"><div><p className="section-label">Destinos selecionados</p><h2>Quatro paradas.<br />Muitas descobertas.</h2></div><p>Complete as 4 perguntas de cada destino para conquistar um selo exclusivo.</p></div>
        <div className="place-grid">
          {places.map((place) => {
            const isComplete = completed.some((item) => item.id === place.id)
            return (
              <article className="place-card" key={place.id}>
                <button onClick={() => onOpen(place)} className="card-image">
                  <img src={place.image} alt={place.title} />
                  <span className="card-number">{place.number}</span>
                  {isComplete && <span className="complete-tag">Selo conquistado</span>}
                </button>
                <div className="card-meta"><span>{place.city}</span><span>4 perguntas</span></div>
                <h3>{place.title}</h3>
                <p>{place.eyebrow}</p>
                <button className="text-link" onClick={() => onOpen(place)}>Conhecer o destino <ArrowIcon /></button>
              </article>
            )
          })}
        </div>
      </section>

      <section className="progress-section">
        <div className="progress-copy"><p className="section-label">Seu progresso</p><h2>Cada resposta<br />é um novo caminho.</h2><p>Você já conquistou <strong>{totalPoints} pontos</strong>. Continue explorando para completar sua coleção.</p></div>
        <div className="passport">
          <div className="passport-top"><span>PASSAPORTE</span><small>ROTA VIVA · BRASIL</small></div>
          <div className="stamp-grid">
            {places.map((place) => {
              const done = completed.some((item) => item.id === place.id)
              return <div key={place.id} className={done ? 'stamp earned' : 'stamp'}><strong>{done ? '✓' : place.number}</strong><span>{place.title}</span><small>{done ? 'CONQUISTADO' : 'A EXPLORAR'}</small></div>
            })}
          </div>
        </div>
      </section>
    </main>
  )
}

function PlaceDetail({ place, completed, onBack, onQuiz }: { place: Place; completed: boolean; onBack: () => void; onQuiz: () => void }) {
  return (
    <main className="detail-page">
      <section className="detail-hero">
        <img src={place.image} alt={place.title} />
        <div className="hero-shade"></div>
        <button className="back-button" onClick={onBack}>← Todos os destinos</button>
        <div className="detail-title"><p>{place.city}</p><span>{place.number}</span><h1>{place.title}</h1><em>{place.eyebrow}</em></div>
      </section>
      <section className="story">
        <aside><span>Fato marcante</span><strong>{place.fact}</strong></aside>
        <div className="story-copy">
          <p className="section-label">Conheça a história</p>
          {place.description.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          <div className="tips">{place.highlights.map((item, i) => <span key={item}><b>0{i + 1}</b>{item}</span>)}</div>
        </div>
      </section>
      <section className="quiz-callout">
        <div><p className="section-label">Hora do desafio</p><h2>Você prestou<br /><em>atenção?</em></h2></div>
        <div><p>Responda 4 perguntas sobre este destino. Cada acerto vale 100 pontos e, ao terminar, você ganha um selo.</p><button className="primary" onClick={onQuiz}>{completed ? 'Refazer o quiz' : 'Começar o quiz'} <ArrowIcon /></button></div>
      </section>
    </main>
  )
}

function Quiz({ place, index, selected, setSelected, onSubmit, answers, onBack, onHome }: { place: Place; index: number; selected: number | null; setSelected: (value: number) => void; onSubmit: () => void; answers: number[]; onBack: () => void; onHome: () => void }) {
  if (index >= place.quiz.length) {
    const points = answers.filter((answer, i) => answer === place.quiz[i].answer).length * 100
    return (
      <main className="result-page">
        <div className="result-stamp"><span>SELO CONQUISTADO</span><strong>{place.number}</strong><em>{place.title}</em><small>ROTA VIVA · BRASIL</small></div>
        <p className="section-label">Destino concluído</p>
        <h1>Boa viagem,<br /><em>explorador!</em></h1>
        <p>Você acertou <strong>{points / 100} de 4 perguntas</strong> e somou <strong>{points} pontos</strong>.</p>
        <div className="result-actions"><button className="primary" onClick={onHome}>Ver outros destinos <ArrowIcon /></button><button className="text-link" onClick={onBack}>Revisar este lugar</button></div>
      </main>
    )
  }

  const question = place.quiz[index]
  return (
    <main className="quiz-page">
      <div className="quiz-visual"><img src={place.image} alt="" /><div className="hero-shade"></div><button className="back-button" onClick={onBack}>← Voltar ao conteúdo</button><div><span>{place.number}</span><p>{place.city}</p><h2>{place.title}</h2></div></div>
      <div className="quiz-panel">
        <div className="quiz-progress"><span>Pergunta {index + 1} de 4</span><div><i style={{ width: `${((index + 1) / 4) * 100}%` }} /></div><strong>{Math.round(((index + 1) / 4) * 100)}%</strong></div>
        <p className="section-label">Teste seus conhecimentos</p>
        <h1>{question.prompt}</h1>
        <div className="options">
          {question.options.map((option, optionIndex) => <button key={option} className={selected === optionIndex ? 'selected' : ''} onClick={() => setSelected(optionIndex)}><span>{String.fromCharCode(65 + optionIndex)}</span>{option}</button>)}
        </div>
        <button className="primary quiz-submit" disabled={selected === null} onClick={onSubmit}>{index === 3 ? 'Concluir desafio' : 'Próxima pergunta'} <ArrowIcon /></button>
        <small>Escolha uma alternativa para continuar</small>
      </div>
    </main>
  )
}
