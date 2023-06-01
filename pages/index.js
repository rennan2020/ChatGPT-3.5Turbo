import { useState } from "react"

export default function MyPage() {
  const [prompt, setPrompt] = useState("")
  const [answer, setAnswer] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setIsLoading(true)

    const response = await fetch("/api/get-answer", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ prompt: prompt })
    })
    const data = await response.json()
    setAnswer(data.text.trim())
    setIsLoading(false)
  }

  function handleChange(e) {
    setPrompt(e.target.value)
  }

  return (
    <><header className="header">
      <div calss="logo">
      </div>
    </header>
    <section className="home" id="home">

      <div class="content">
        <div className="conhecer">
          <h1>CONHEÇA A</h1>
        </div>
        <div className="dulia">
          <h1> MENTOR</h1>
        </div>
        <div className="ia">
          <h1>IA</h1>
        </div>
        <div className="nossa">
          <h1>NOSSA</h1>
        </div>
        <div className="inteligencia">
          <h2>INTELIGÊNCIA</h2>
        </div>
        <div className="artificial">
          <h2>ARTIFICIAL</h2>
        </div>
        <p>Com a nossa integração de inteligência artificial e banco de dados, 
          personalizamos sua experiência de aprendizado. Acompanhe seu progresso, 
          receba recomendações de cursos com base em seus interesses e perfil, e acesse materiais de apoio exclusivos para enriquecer ainda mais seu conhecimento.
        </p>
        <a className="buttonIA" href="#" class="btn">Inteligência artificial</a>
        <a className="buttonSobreNos" href="https://dulino.com.br/" class="btn">Sobre nós</a>
        <a href="https://api.whatsapp.com/send/?phone=558131151213&text&type=phone_number&app_absent=0" class="btn">Fale conosco</a>
      </div>

      <form className="our-form" onSubmit={handleSubmit}>
            <div className="prompt-pergunta">
              <input className="prompt-field" type="text" onChange={handleChange} />
            </div>  
            <div className="answer-area">{answer}

            </div>
            
      </form>

        {isLoading && <div className="loading-spinner"></div>}
        <button className="prompt-button">Diga</button>
       
      </section>
      </>
  )
}
