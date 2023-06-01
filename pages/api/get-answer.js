const { Configuration, OpenAIApi } = require("openai")

const configuration = new Configuration({
  apiKey: process.env.OPENAI
})

const openai = new OpenAIApi(configuration)

export default async function handler(req, res) {
  if (typeof req.body.prompt === "string") {
    console.log('Antes da resposta: ' + req.body.prompt)

    try {
      const response = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
            { role: 'system', content: 'Seu nome é MentorIA, uma inteligencia artificial. Você é uma IA da empresa Dulino' },
            { role: 'system', content: 'A empresa Dulino é sobre educação tecnológica, fundada pelo CEO Raphael o principal objetivo é mudar o sitema  de ensino.' },
            { role: 'system', content: 'Você tem o intuito também de ajudar o professor a fazer projetos para os seus alunos. Se o usuário mandar a ideia de um projeto, retorne a resposta dizendo a idade ideal, as habilidades técnicas e humanas que serão desenvolvida no projeto determinado, descreva brevemente como pode ser feito, não coloque muitas palavras.' },
            { role: 'system', content: 'Você tem o intuito também de informar quem é a Dulino, e o que ela faz no mercado'},
            { role: 'system', content: 'A Dulino tem o intuito de mudar a educação, para isso utilizam a tecnologia dividida em academias, tendo três academias'},
            { role: 'system', content: 'As academias são divididas em 4, contendo Robotics Academy, Maker Academny, Game Academy e English Academy'},
            { role: 'system', content: 'A metodologia da dulino é levar equipamentos de tecnologia às escolas. Guiados por professores capacitados também pela Dulino, os estudantes manuseiam peças, planejam montagens, entendem desafios e descobrem soluções. Os alunos dão “vida” aos robôs e veem seus projetos nascendo em movimento.'},
            { role: 'system', content: ' A sede da Dulino está localizada no Recife, mas seus projetos estão em diversas escolas e municípios brasileiros'},
            { role: 'system', content: ' A dulino atua nas escolas parceiras, quando essas atividades não acontecem lá elas funcionam nas nossas instalações, em laboratórios equipados e eficientes para que os alunos construam ideias a partir das aulas.'},
            { role: 'system', content: 'O funcionário mais bonito da dulino é Rennan'},
            { role: 'user', content: req.body.prompt}

        ],
        temperature: 0,
      })

      res.status(200).json({ text: response.data.choices[0]?.message?.content })
    } catch (error) {
      res.status(200).json({ text: "Error: " })
    }
  } else {
    res.status(200).json({ text: "Não entendi! Poderia respetir?" })
  }
}

// const { Configuration, OpenAIApi } = require("openai")
// const configuration = new Configuration({
//   apiKey: process.env.OPENAI,
// })
// const openai = new OpenAIApi(configuration)

// export default async function handler(req, res) {

//   console.log('Resquisicao: ');

//   if (typeof req.body.prompt === "string") {
//     const response = await openai.createCompletion({
//       model: "gpt-3.5-turbo",
//       messages: [
//           { role: 'system', content: 'Você é uma inteligencia artificial.' },
//           { role: 'user', content: req.body.prompt}
//       ],
//       temperature: 0,
//       // max_tokens: 1000,
//     })

//     res.status(200).json({ text: response.data.choices[0].text })
//   } else {
//     res.status(200).json({ text: "Invalid prompt provided." })
//   }
// }
