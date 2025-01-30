import './Historico.css';
import { FileArrowDown } from 'phosphor-react'



export function Historico() {
  const handleDownload = (url: string) => {
    const password = prompt('Digite a senha para acessar o documento:');
    
    if (password === 'thay') {
      window.open(url, '_blank');
    } else {
      alert('Senha incorreta!');
    }
  };
  
  return (
    <div className='container'>
      <header>
        <h1>Histórico Hapvida</h1>
        <h2>THAYANNE CRISTINE DA SILVA CARRILHO</h2>
        
      </header>

      <table className="historico-table">
        <thead>
          <tr>
            <th>Data</th>
            <th>Descrição</th>
            <th>Doc</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>09/10/21</td>
            <td>No dia 09 de outubro de 2021 procurei atendimento no PS Rio Negro com queixas de dormência nas pernas, sendo encaminhada ao ortopedista.</td>
            <td><button onClick={() => handleDownload('./DOCS/01.pdf')}><FileArrowDown size={20} /></button>
            </td>
          </tr>
          <tr>
            <td>11/10/21</td>
            <td>Enquanto o dia da consulta não chegava, fui avaliada novamente no PS dia 11/10/2021, fui medicada e realizaram exames de sangue (dentro das normalidades)</td>
            <td><button onClick={() => handleDownload('./DOCS/02.pdf')}><FileArrowDown size={20} /></button></td>
          </tr>
          <tr>
            <td>13/10/21</td>
            <td>Com o passar dos dias tive sintomas de forte dor de cabeça com escotomas na visão, dormência progressiva que acometia os membros inferiores e parte dos superiores como região da barriga e costas. O ortopedista solicitou uma eletroneuromiografia (sem alterações) e encaminhou para o neurologista.</td>
            <td><button onClick={() => handleDownload('./DOCS/03.pdf')}><FileArrowDown size={20} /></button></td>
          </tr>
          <tr>
            <td>29/10/21</td>
            <td>Dia 29 de outubro de 2021 compareci ao hospital Rio Negro com queixas de cefaleia intensa e escotomas na visão, recebendo medicamentos apenas para dor e me encaminharam para consulta ambulatorial com o oftalmologista.</td>
            <td><button onClick={() => handleDownload('./DOCS/04.pdf')}><FileArrowDown size={20} /></button></td>
          </tr>
          <tr>
            <td colSpan={3}>Em consulta ambulatorial com o Neurologista, foram solicitados exames de Ressonância Magnética (18/11/21) e Líquor (08/02/22), Médico receitou prednisona 60mg por dia para tratar a inflamação enquanto investigava a real causa do problema, o que controlou em partes alguns sintomas, porém os escotomas da visão ainda persistiam.</td>
          </tr>
          <tr>
            <td>18/11/21</td>
            <td>Neurologista solicitou Ressonâncias Magnéticas (Crânio, órbitas e coluna), no resultado da RM Órbitas foi detectada inflamação do nervo óptico (Neurite).</td>
            <td><button onClick={() => handleDownload('./DOCS/05.pdf')}><FileArrowDown size={20} /></button></td>
          </tr>
          <tr>
            <td>08/02/22</td>
            <td>Solicitou o exame de punção lombar (Líquor) que demorou meses para ser realizado, fechando o diagnóstico de Neuromielite Óptica em fevereiro de 2022.</td>
            <td><button onClick={() => handleDownload('./DOCS/06.pdf')}><FileArrowDown size={20} /></button></td>
          </tr>
          <tr>
            <td>12/11/21</td>
            <td>Realizei exames de fundo de olho e segundo o oftalmologista, afirmou que o problema era neurológico e que poderia se tratar de uma Neurite Retrobulbar, me encaminhando novamente para o neurologista.</td>
            <td><button onClick={() => handleDownload('./DOCS/07.pdf')}><FileArrowDown size={20} /></button></td>
          </tr>
          <tr>
            <td>25/12/21</td>
            <td>Estive em Fortaleza a trabalho durante o mês de dezembro, onde tive uma forte crise, fui atendida no Hospital PS Antônio Prudente, realizaram pulsoterapia com altas doses de corticoide, visto que o diagnóstico de Neurite já estava fechado. Obtive melhoras significativas, mas ainda fiquei com alguns escotomas no olho esquerdo. Porém não fui internada para tal procedimento, trabalhava pela parte da manhã e pela parte da tarde sempre comparecia ao PS para realizar o procedimento.</td>
            <td><button onClick={() => handleDownload('./DOCS/08.pdf')}><FileArrowDown size={20} /></button></td>
          </tr>
          <tr>
            <td>29/01/22</td>
            <td>Em Janeiro de 2022 tive outra crise e obtive atendimento novamente em Fortaleza, com melhoras em alguns sintomas, mas sentia que já havia sequelas da primeira crise que ocorreu em Manaus em outubro de 2021.</td>
            <td><button onClick={() => handleDownload('./DOCS/09.pdf')}><FileArrowDown size={20} /></button></td>
          </tr>
          <tr>
            <td>14/02/22</td>
            <td>Dia 14 de fevereiro de 2022 estive no hospital Rio Negro em Manaus, com fortes dores de cabeça, dor ao movimentar os olhos e piora da visão (sintomas da crise de neurite), porém não obtive pulsoterapia para cessar a inflamação de imediato, os médicos se negaram a atender alegando que não havia neurologista de plantão para liberar o procedimento, me encaminharam apenas para um oftalmologista e neurologista.</td>
            <td><button onClick={() => handleDownload('./DOCS/10.pdf')}><FileArrowDown size={20} /></button></td>
          </tr>
          <tr>
            <td>14/02/22</td>
            <td>Guias de encaminhamento para oftalmologista e neurologista</td>
            <td><button onClick={() => handleDownload('./DOCS/11.pdf')}><FileArrowDown size={20} /></button></td>
          </tr>
          <tr>
          <td colSpan={3}>Para continuar trabalhando e a fim de diminuir alguns sintomas permaneci em Manaus e tomando 60mg de corticoide/dia (Como receitado pelo primeiro neuro), até obter uma saída. Contudo, no dia 30 de março tive que ir a Fortaleza especificamente para obter o tratamento adequado (pulsoterapia), visto que havia tentado por outros meios e não obtive sucesso em realizar o procedimento em Manaus.</td>
            <td></td>
          </tr>
          <tr>
            <td>31/03/22</td>
            <td>Em Fortaleza realizei uma sessão de pulsoterapia e a médica me passou o
              encaminhamento para continuar o procedimento em Manaus, inclusive seu contato pessoal caso eu tivesse alguma intercorrência em Manaus. Chegando em Manaus, no dia 31 de março, consegui dar andamento na pulsoterapia com o encaminhamento. Fiz cinco sessões consecutivas, porém sem melhora alguma, presumindo que estivesse com sequelas por conta da demora do acesso ao tratamento. (Ainda assim não fui internada, fazia o procedimento e ia para casa e no outro dia retornava)</td>
            <td><button onClick={() => handleDownload('./DOCS/12.pdf')}><FileArrowDown size={20} /></button></td>
          </tr>
          <tr>
            <td>03/04/22</td>
            <td>No último dia da pulsoterapia, me queixei ao médico plantonista que não havia melhora com o tratamento e perguntei se havia possibilidade de realizar uma plasmaférese. O médico me encaminhou para um oftalmologista e neurologista (consulta ambulatorial) para solicitar a plasmaférese, alegando ainda que não havia médico neurologista de plantão no hospital Rio Negro.</td>
            <td><button onClick={() => handleDownload('./DOCS/13.pdf')}><FileArrowDown size={20} /></button></td>
          </tr>
          <tr>
            <td>04/04/22</td>
            <td>Com a ajuda do Serviço Social do Hospital consegui uma consulta com o oftalmologista e peguei um laudo (Encaminhando ao Neurologista, novamente), logo após fui ao neurologista (consulta ambulatorial) que fez um relatório médico informando que o caso se trata de condução hospitalar de alto risco de sequelas neurológicas definitivas com indicação imediata de internação, me orientou a procurar a ouvidoria do Hapvida para realizar a reclamação de má conduta médica. </td>
            <td><button onClick={() => handleDownload('./DOCS/14.pdf')}><FileArrowDown size={20} /></button></td>
          </tr>
          <tr>
            <td>04 a 16/04/22</td>
            <td>Após apresentar laudo no Hospital Rio Negro, no mesmo dia fui internada e entraram em contato com o teleneuro (neurologista de plantão online do hapvida) e foi liberada a plasmaférese.
              Fiquei internada do dia 4 a 16 de abril de 2022, realizei a plasmaférese (cinco
              sessões) porém sem melhoria do campo visual.</td>
            <td><button onClick={() => handleDownload('./DOCS/15.pdf')}><FileArrowDown size={20} /></button></td>
          </tr>
          <tr>
          <td colSpan={3}>
            Após a alta, realizei exame de Campimetria e foi observado que houve piora do olho esquerdo e direito também.
            </td>
          </tr>
          <tr>
            <td>17/02/22</td>
            <td>Exame de Campimetria antes da Internação</td>
            <td><button onClick={() => handleDownload('./DOCS/16.pdf')}><FileArrowDown size={20} /></button></td>
          </tr>
          <tr>
            <td>18/04/23</td>
            <td>Exame de Campimetria após a internação</td>
            <td><button onClick={() => handleDownload('./DOCS/17.pdf')}><FileArrowDown size={20} /></button></td>
          </tr>
          <tr>
            <td>06/04/22 22/08/22 25/01/23</td>
            <td>Com toda essa negligência por parte dos médicos do Hospital Rio Negro, resolvi fazer meu tratamento por meios particulares, ainda estou com sequelas (escotomas nos dois olhos), estou impossibilitada de ler com o lado esquerdo e parte do campo periférico do direito está afetado.</td>
            <td><button onClick={() => handleDownload('./DOCS/18.pdf')}><FileArrowDown size={20} /></button></td>
          </tr>
          <tr>
            <td>16/02/23</td>
            <td>Posteriormente tive outra crise, mas já estava em outro plano de saúde (Amil Saúde), me internei no Hospital Adventista, visto que tive muitos transtornos com o Hapvida. </td>
            <td><button onClick={() => handleDownload('./DOCS/19.pdf')}><FileArrowDown size={20} /></button></td>
          </tr>
          <tr>
            <td>01/08/24</td>
            <td>Laudo da Neuro-Oftalmologista - PCD e exames</td>
            <td><button onClick={() => handleDownload('./DOCS/20.pdf')}><FileArrowDown size={20} /></button></td>
          </tr>
          <tr>
            <td>31/01/2025</td>
            <td>Hoje me encontro afastada pelo INSS - Auxilio Doença por conta das crises persistentes, fiquei com sequelas na visão e na última crise escapei de ficar com sequelas motoras, mas obtive o tratamento adequado, no tempo certo.</td>
            <td><button onClick={() => handleDownload('./DOCS/21.pdf')}><FileArrowDown size={20} /></button></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
