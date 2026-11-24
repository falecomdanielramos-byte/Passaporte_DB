import { useEffect, useMemo, useState } from 'react'
import aracajuHero from './assets/aracaju-hero.png'
import mercadoImage from './assets/mercado-antonio-franco.jpg'
import museuImage from './assets/museu-gente.jpg'
import parqueImage from './assets/parque-sementeira.jpg'

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
  history: {
    label: string
    title: string
    text: string
  }[]
  highlights: string[]
  quiz: Question[]
}

const places: Place[] = [
  {
    id: 'passarela-do-caranguejo',
    number: '01',
    city: 'Orla de Atalaia · Aracaju',
    title: 'Passarela do Caranguejo',
    eyebrow: 'Sabores, mangue e identidade',
    image: aracajuHero,
    fact: 'Corredor gastronômico da Orla de Atalaia',
    description: [
      'A Passarela do Caranguejo é o trecho da Orla de Atalaia conhecido pela concentração de bares e restaurantes dedicados à cozinha sergipana. Não há uma data única de fundação oficialmente consolidada para a Passarela: ela se firmou como corredor turístico e gastronômico durante a urbanização e a expansão da Orla.',
      'O nome nasceu da forte presença do caranguejo nos cardápios e na cultura alimentar local. O crustáceo vem dos manguezais, ecossistemas que marcam a paisagem e sustentam práticas de pesca e trabalho de comunidades sergipanas.',
    ],
    history: [
      { label: 'Origem', title: 'Uma formação gradual', text: 'Diferentemente de um edifício inaugurado em uma data específica, a Passarela se consolidou com o desenvolvimento turístico da Atalaia. Por isso, o projeto não atribui ao local um ano de fundação sem comprovação documental.' },
      { label: 'Memória cultural', title: 'O mangue à mesa', text: 'A ligação entre restaurantes, catadores, manguezais e receitas tradicionais transformou o caranguejo em símbolo da experiência gastronômica de Aracaju.' },
      { label: 'Símbolo', title: 'O caranguejo gigante', text: 'A escultura monumental marca visualmente a Passarela. Ela representa o crustáceo que dá nome ao corredor e funciona como referência de chegada, encontro e fotografia na Orla.' },
      { label: 'Importância', title: 'Porta de entrada da cidade', text: 'O local articula turismo, lazer noturno, culinária e economia criativa, divulgando sabores sergipanos para moradores e visitantes.' },
    ],
    highlights: ['Observe o monumento do caranguejo', 'Valorize a culinária sergipana', 'Conheça a Orla de Atalaia'],
    quiz: [
      { prompt: 'Por que a Passarela recebeu o nome “do Caranguejo”?', options: ['Pela tradição gastronômica ligada ao crustáceo', 'Pelo formato de suas calçadas', 'Por uma antiga estação ferroviária', 'Por uma competição esportiva'], answer: 0 },
      { prompt: 'Onde fica a Passarela do Caranguejo?', options: ['No Parque da Sementeira', 'Na Orla de Atalaia', 'Nos Mercados Centrais', 'Na Praça Fausto Cardoso'], answer: 1 },
      { prompt: 'O que a escultura do caranguejo representa?', options: ['A navegação no rio Sergipe', 'A indústria da cidade', 'O crustáceo ligado à culinária e aos manguezais', 'A fundação administrativa de Aracaju'], answer: 2 },
      { prompt: 'Qual informação histórica é mais correta sobre sua criação?', options: ['Foi fundada em 1855', 'Foi inaugurada em 1926', 'Foi aberta em 2011', 'Não há uma data única de fundação oficialmente consolidada'], answer: 3 },
    ],
  },
  {
    id: 'museu-gente',
    number: '02',
    city: 'Centro · Aracaju',
    title: 'Museu da Gente Sergipana',
    eyebrow: 'Sergipe contado por sua gente',
    image: museuImage,
    fact: 'Inaugurado em 26 de novembro de 2011',
    description: [
      'O Museu da Gente Sergipana Governador Marcelo Déda foi inaugurado em 26 de novembro de 2011. Instalado no edifício histórico que abrigou o antigo Atheneuzinho, o espaço foi restaurado para receber um museu dedicado ao patrimônio cultural do estado.',
      'Suas instalações multimídia apresentam falares, festas, paisagens, ofícios, culinária e personagens de Sergipe. Em vez de observar apenas objetos em vitrines, o visitante participa das narrativas por meio de jogos, sons, projeções e experiências interativas.',
    ],
    history: [
      { label: 'Inauguração', title: '26 de novembro de 2011', text: 'A data marca a abertura do museu ao público e a transformação do antigo prédio escolar em um centro de memória e cultura sergipana.' },
      { label: 'Patrimônio', title: 'O antigo Atheneuzinho', text: 'A reutilização do edifício histórico preserva uma referência da paisagem urbana do Centro e dá ao patrimônio arquitetônico uma nova função pública.' },
      { label: 'Linguagem', title: 'Memória interativa', text: 'As instalações usam tecnologia para valorizar patrimônio material e imaterial: modos de falar, trabalhar, festejar, cozinhar e viver no território sergipano.' },
      { label: 'Importância', title: 'Um museu feito de pessoas', text: 'O museu fortalece a identidade estadual, aproxima novas gerações de sua história e se tornou uma das principais referências culturais de Aracaju.' },
    ],
    highlights: ['Explore as instalações interativas', 'Observe o antigo Atheneuzinho', 'Descubra os falares e saberes locais'],
    quiz: [
      { prompt: 'Em que data o Museu da Gente Sergipana foi inaugurado?', options: ['17 de março de 1855', '8 de fevereiro de 1926', '26 de novembro de 2011', '12 de agosto de 2020'], answer: 2 },
      { prompt: 'Qual edifício histórico passou a abrigar o museu?', options: ['O antigo Atheneuzinho', 'A antiga Alfândega', 'O Palácio Olímpio Campos', 'A estação ferroviária'], answer: 0 },
      { prompt: 'O que as exposições valorizam?', options: ['Somente documentos administrativos', 'Os saberes, costumes e identidades de Sergipe', 'Apenas a formação urbana da Atalaia', 'Exclusivamente o comércio municipal'], answer: 1 },
      { prompt: 'Como o visitante conhece essas histórias?', options: ['Apenas por livros', 'Somente por visitas externas', 'Por instalações multimídia e interativas', 'Apenas por fotografias impressas'], answer: 2 },
    ],
  },
  {
    id: 'parque-sementeira',
    number: '03',
    city: 'Jardins · Aracaju',
    title: 'Parque da Sementeira',
    eyebrow: 'Memória verde no coração urbano',
    image: parqueImage,
    fact: 'Nome oficial: Parque Governador Augusto Franco',
    description: [
      'O Parque Governador Augusto Franco é conhecido por todos como Parque da Sementeira. O apelido preserva a memória do uso da área como viveiro de mudas — uma “sementeira” voltada à arborização urbana — antes de sua consolidação como parque público.',
      'Não há, nas referências públicas consultadas, uma data única de fundação apresentada de modo consistente. Por isso, o Rota Viva não atribui ao parque um ano sem comprovação. Seu valor histórico está na transformação de uma área de produção de mudas em um dos principais espaços verdes de Aracaju.',
    ],
    history: [
      { label: 'Criação', title: 'Data não consolidada', text: 'As fontes públicas descrevem a função e o desenvolvimento do parque, mas não oferecem uma data única e segura de fundação. Essa ausência é indicada em vez de se adotar um ano sem base documental.' },
      { label: 'Origem do nome', title: 'Da produção de mudas ao parque', text: '“Sementeira” remete ao viveiro que fornecia mudas para a arborização da cidade. O nome popular mantém viva essa função anterior do terreno.' },
      { label: 'Nome oficial', title: 'Governador Augusto Franco', text: 'A denominação oficial homenageia Augusto Franco, que governou Sergipe. O nome popular, porém, permaneceu mais presente no cotidiano aracajuano.' },
      { label: 'Importância', title: 'Natureza dentro da cidade', text: 'Lagos, árvores, aves e áreas de convivência fazem do parque um espaço de educação ambiental, esporte, lazer e equilíbrio ecológico urbano.' },
    ],
    highlights: ['Caminhe sob as áreas arborizadas', 'Observe lagos e aves', 'Respeite a fauna e a vegetação'],
    quiz: [
      { prompt: 'Qual é o nome oficial do Parque da Sementeira?', options: ['Parque Governador Augusto Franco', 'Parque dos Cajueiros', 'Parque da Atalaia', 'Parque do Centro'], answer: 0 },
      { prompt: 'O que explica o nome popular “Sementeira”?', options: ['Uma feira de sementes', 'O antigo uso da área como viveiro de mudas', 'O formato de um dos lagos', 'Uma festa anual'], answer: 1 },
      { prompt: 'Qual cuidado histórico foi adotado sobre a data de criação?', options: ['Foi definida como 1855', 'Foi definida como 1926', 'Foi definida como 2011', 'A data não foi afirmada sem fonte pública consistente'], answer: 3 },
      { prompt: 'Por que o parque é importante para Aracaju?', options: ['Por concentrar o comércio atacadista', 'Por ser uma área verde de lazer e educação ambiental', 'Por abrigar o porto da cidade', 'Por ser um corredor gastronômico'], answer: 1 },
    ],
  },
  {
    id: 'mercado-antonio-franco',
    number: '04',
    city: 'Centro · Aracaju',
    title: 'Mercado Antônio Franco',
    eyebrow: 'Comércio, sabores e memória',
    image: mercadoImage,
    fact: 'Inaugurado em 8 de fevereiro de 1926',
    description: [
      'Inaugurado em 8 de fevereiro de 1926, o Mercado Municipal Antônio Franco nasceu em um período de modernização do Centro de Aracaju e de organização do comércio de gêneros alimentícios. Hoje integra o conjunto dos Mercados Centrais.',
      'O edifício preserva uma intensa vida comercial, com artesanato, bordados, literatura de cordel, temperos, doces e produtos regionais. É um ponto de encontro entre a economia cotidiana e a memória cultural sergipana.',
    ],
    history: [
      { label: 'Inauguração', title: '8 de fevereiro de 1926', text: 'A abertura do mercado estruturou parte do abastecimento e do comércio no Centro, acompanhando o crescimento urbano de Aracaju no início do século XX.' },
      { label: 'Vocação', title: 'Do abastecimento à cultura', text: 'Além da função comercial, o mercado passou a reunir práticas, sabores e trabalhos artesanais que expressam modos de vida de diferentes regiões de Sergipe.' },
      { label: 'Elemento marcante', title: 'A torre do relógio', text: 'A torre se tornou uma referência visual do conjunto. O relógio reforça a presença pública do edifício na paisagem e orienta a identificação do mercado no Centro histórico.' },
      { label: 'Importância', title: 'Memória viva do comércio', text: 'A circulação de feirantes, artesãos, moradores e visitantes mantém o patrimônio em uso e conecta a capital à produção cultural do estado.' },
    ],
    highlights: ['Observe a torre do relógio', 'Conheça o artesanato sergipano', 'Experimente sabores regionais'],
    quiz: [
      { prompt: 'Quando o Mercado Antônio Franco foi inaugurado?', options: ['17 de março de 1855', '8 de fevereiro de 1926', '26 de novembro de 2011', '12 de junho de 2015'], answer: 1 },
      { prompt: 'Qual elemento se destaca na arquitetura do mercado?', options: ['Um farol', 'Uma ponte suspensa', 'A torre do relógio', 'Um coreto circular'], answer: 2 },
      { prompt: 'Qual foi uma função histórica do mercado?', options: ['Organizar o abastecimento e o comércio no Centro', 'Abrigar o governo estadual', 'Produzir mudas para a cidade', 'Receber competições esportivas'], answer: 0 },
      { prompt: 'O que o mercado representa atualmente?', options: ['Apenas um edifício sem uso', 'Uma ligação viva entre comércio e cultura sergipana', 'Somente um terminal de transporte', 'Uma área exclusivamente residencial'], answer: 1 },
    ],
  },
]

interface InstallPromptEvent extends Event {
  prompt: () => Promise<void>
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>
}

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
  const [installPrompt, setInstallPrompt] = useState<InstallPromptEvent | null>(null)

  useEffect(() => {
    const handleInstallPrompt = (event: Event) => {
      event.preventDefault()
      setInstallPrompt(event as InstallPromptEvent)
    }
    window.addEventListener('beforeinstallprompt', handleInstallPrompt)
    return () => window.removeEventListener('beforeinstallprompt', handleInstallPrompt)
  }, [])

  const installApp = async () => {
    if (!installPrompt) return
    await installPrompt.prompt()
    await installPrompt.userChoice
    setInstallPrompt(null)
  }

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
      <header className={`site-header ${quizPlace && questionIndex >= quizPlace.quiz.length ? 'dark-header' : ''}`}>
        <button className="brand" onClick={resetToHome} aria-label="Voltar ao início">
          <span className="brand-mark">AJU</span>
          <span><strong>Rota Viva</strong><small>descubra · aprenda · conquiste</small></span>
        </button>
        <nav className={menuOpen ? 'main-nav open' : 'main-nav'} aria-label="Navegação principal">
          <button onClick={resetToHome}>Explorar</button>
          <button onClick={() => document.getElementById('como-funciona')?.scrollIntoView({ behavior: 'smooth' })}>Como funciona</button>
          {installPrompt && <button className="install-button" onClick={installApp}>Instalar aplicativo</button>}
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
          <span className="brand-mark">AJU</span>
          <span><strong>Rota Viva</strong><small>viajar também é aprender</small></span>
        </button>
        <p>Feito para quem quer conhecer Aracaju com outros olhos.</p>
        <span>© 2025 Rota Viva</span>
      </footer>
    </div>
  )
}

function Home({ completed, totalPoints, onOpen, onStart }: { completed: Place[]; totalPoints: number; onOpen: (place: Place) => void; onStart: () => void }) {
  return (
    <main>
      <section className="hero">
        <img src={aracajuHero} alt="Passarela do Caranguejo na Orla de Atalaia, em Aracaju" />
        <div className="hero-shade"></div>
        <div className="hero-content">
          <p className="kicker">Uma jornada por Aracaju</p>
          <h1>Explore.<br /><em>Descubra.</em> Conquiste.</h1>
          <p className="hero-copy">Conheça a história da capital sergipana, teste o que aprendeu e colecione memórias — e selos — pelo caminho.</p>
          <button className="primary light" onClick={onStart}>Começar a explorar <ArrowIcon /></button>
        </div>
        <div className="hero-note"><span>Em destaque</span><strong>Passarela do Caranguejo</strong><small>Orla de Atalaia · Aracaju</small></div>
        <div className="scroll-cue">Role para descobrir <span>↓</span></div>
      </section>

      <section className="intro" id="como-funciona">
        <div><p className="section-label">Seu passaporte cultural</p><h2>Viaje com<br /><em>curiosidade</em></h2></div>
        <div className="intro-copy">
          <p>Selecionamos quatro destinos que revelam histórias únicas de Aracaju e de Sergipe. Leia, observe e coloque seu conhecimento à prova.</p>
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
          <div className="passport-top"><span>PASSAPORTE</span><small>ARACAJU · SERGIPE</small></div>
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
      <section className="history-section">
        <div className="history-heading">
          <p className="section-label">Memória do lugar</p>
          <h2>História que<br /><em>permanece viva</em></h2>
        </div>
        <div className="history-grid">
          {place.history.map((item, index) => (
            <article key={item.title}>
              <span>{String(index + 1).padStart(2, '0')} · {item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
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
        <div className="result-stamp"><span>SELO CONQUISTADO</span><strong>{place.number}</strong><em>{place.title}</em><small>ARACAJU · SERGIPE</small></div>
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
