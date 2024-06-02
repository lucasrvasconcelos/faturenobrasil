import { useState } from 'react'
import { Link } from 'react-router-dom'

export function Quiz() {
  const [questionIndex, setQuestionIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [showResult, setShowResult] = useState(false)

  const questions = [
    {
      question: 'Qual é a sua situação financeira atual?',
      options: [
        'a. Estou financeiramente estável.',
        'b. Tenho algumas economias, mas não muitas.',
        'c. Estou com dificuldades financeiras.',
      ],
      points: [3, 2, 1],
    },
    {
      question:
        'Quanto tempo você pode dedicar ao seu empreendimento por semana?',
      options: [
        'a. Mais de 40 horas por semana.',
        'b. Cerca de 20 a 40 horas por semana.',
        'c. Menos de 20 horas por semana.',
      ],
      points: [3, 2, 1],
    },
    {
      question: 'Qual é a sua principal motivação para empreender?',
      options: [
        'a. Liberdade financeira e independência.',
        'b. Realizar uma paixão ou uma ideia inovadora.',
        'c. Necessidade de encontrar uma fonte de renda.',
      ],
      points: [3, 2, 1],
    },
    {
      question: 'Como você se sente em relação ao risco financeiro?',
      options: [
        'a. Estou disposto a assumir grandes riscos financeiros.',
        'b. Prefiro assumir riscos calculados.',
        'c. Evito riscos financeiros sempre que possível.',
      ],
      points: [3, 2, 1],
    },
    {
      question: 'Você tem experiência prévia em empreendedorismo?',
      options: [
        'a. Sim, tenho experiência significativa',
        'b. Alguma experiência, mas ainda estou aprendendo.',
        'c. Não tenho experiência prévia.',
      ],
      points: [3, 2, 1],
    },
    {
      question:
        'Qual é o seu plano de contingência caso o empreendimento não tenha sucesso imediato?',
      options: [
        'a. Estou disposto a tentar novamente, aprender com meus erros e persistir.',
        'b. Tenho algumas alternativas em mente para continuar tentando.',
        'c. Não tenho um plano de contingência definido.',
      ],
      points: [3, 2, 1],
    },
    {
      question:
        'Como você se sente em relação ao aprendizado contínuo e à adaptação às mudanças?',
      options: [
        'a. Estou sempre buscando aprender e me adaptar.',
        'b. Estou disposto a aprender, mas nem sempre gosto de mudanças.',
        'c. Prefiro manter as coisas como estão.',
      ],
      points: [3, 2, 1],
    },
  ]

  const handleAnswer = (index: number) => {
    setScore(score + questions[index].points[index])

    const nextQuestionIndex = questionIndex + 1
    if (nextQuestionIndex < questions.length) {
      setQuestionIndex(nextQuestionIndex)
    } else {
      setShowResult(true)
    }
  }

  const restartQuiz = () => {
    setQuestionIndex(0)
    setScore(0)
    setShowResult(false)
  }

  const resultQuiz = () => {
    if (score >= 15 && score <= 21) {
      return 'Você está pronto para empreender com pouco dinheiro! Adquira nosso eBook e comece sua jornada empreendedora hoje mesmo.'
    }

    if (score >= 8 && score <= 14) {
      return 'Você tem potencial para empreender, mas pode precisar de mais orientação e planejamento. Nosso eBook pode fornecer as ferramentas necessárias para você começar.'
    }

    if (score <= 7) {
      return 'Talvez seja necessário refletir mais sobre suas habilidades e recursos antes de começar a empreender. Nosso eBook pode ajudá-lo a entender melhor suas opções e tomar decisões informadas.'
    }
  }

  return (
    <div className="flex flex-col flex-grow bg-slate-900 text-background px-8 py-4 pb-12 gap-2 rounded-lg justify-start max-w-[450px]">
      <span className="bg-primary text-background rounded-full px-4 w-fit font-bold mb-4 mt-4">
        Quiz
      </span>

      <div>
        {showResult ? (
          <div>
            <p>
              Sua pontuação:{' '}
              <span className="text-primary font-bold">{score} pontos.</span>
            </p>
            <p className="italic mt-4">{resultQuiz()}</p>
            <div className="flex gap-4">
              <button
                onClick={restartQuiz}
                className="mt-8 rounded-sm text-primary ring-1 ring-primary px-2 hover:bg-primary hover:text-background font-bold transition-colors"
              >
                Reiniciar Quiz
              </button>
              <Link
                to={'https://pay.kiwify.com.br/gP6UAEO'}
                className="mt-8 rounded-sm ring-1 ring-primary px-2 bg-primary text-background font-bold transition-colors hover:opacity-95 "
              >
                Baixar e-Book
              </Link>
            </div>
          </div>
        ) : (
          <div>
            <h2>{questionIndex + 1}° Pergunta</h2>
            <p className="mb-4 font-bold">
              {questions[questionIndex].question}
            </p>
            <div className="flex flex-col gap-2 justify-start">
              {questions[questionIndex].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  className="hover:underline text-left w-fit"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
