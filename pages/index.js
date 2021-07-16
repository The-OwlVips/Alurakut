import React from 'react';
import MainGrid from '../src/components/MainGrid';
import Box from '../src/components/Box';
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet } from '../src/lib/AluraKutCommuns';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';

 

function ProfileSidebar(propriedades) {
  return (
    <Box as="aside">
    <img src= {`https://github.com/${propriedades.githubUser}.png`} style={{ borderRadius: "8px" }} />

    <hr />

    <p>
      <a className="boxLink" href={'https://github/${propriedades.githubUser}'}>
        @{propriedades.githubUser}
      </a>
    </p>

    <hr />

    <AlurakutProfileSidebarMenuDefault />
    </Box>
  )
}

export default function Home() {
  const [comunidades, setComunidades] = React.useState([{
    id: '1652352890341321243',
    title: 'Eu odeio acordar cedo',
    image: 'https://media.discordapp.net/attachments/769749910354001941/865467435419435029/52cc4290facd7fa700b897d8a1dc80aa.png',
  }]);
  const usuarioAleatorio = 'THE-OwlVips';
  const pessoasFavoritas = [
    'juunegreiros',
    'omariosouto',
    'peas',
    'rafaballerini',
    'marcobrunodev',
    'felipefialho'
  ]

  return (
   <> 
      <AlurakutMenu />
      <MainGrid>

        <div className="profileArea" style={{ gridArea: 'profileArea' }}>
          <ProfileSidebar githubUser={usuarioAleatorio} />


        </div>

        <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
          <Box>  
            <h1>Bem-vindo(a)</h1>
            <OrkutNostalgicIconSet />
          </Box>

          <Box>
            <h2 className="subTitle">O que você deseja fazer?</h2>
            <form onSubmit={function handleCriaComunidade(e) {
              e.preventDefault();
              const dadosDoForm = new FormData(e.target);
              console.log('campo : ', dadosDoForm.get('title'))
              console.log('campo : ', dadosDoForm.get('image'))


              const comunidade = {
                id: new Date().toISOString,
                title: dadosDoForm.get('title'),
                image: dadosDoForm.get('image')

              }
              const comunidadesAtualizadas = [...comunidades, comunidade];
              setComunidades(comunidadesAtualizadas);
             }}>
              <div>
                <input 
                  placeholder="Qual vai ser o nome da sua comunidade?" 
                  name="title" 
                  aria-label="Qual vai ser o nome da sua comunidade?" 
                  type="text"
               />
              </div>

              <div>
                <input 
                  placeholder="coloque uma URL para usarmos de capa" 
                  name="image" 
                  aria-label="coloque uma URL para usarmos de capa?"
               />
              </div> 

              <button>
                Criar Comunidade
              </button>

            </form>
          </Box>
        </div>

        <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
          <ProfileRelationsBoxWrapper>
          <h2 className="smallTitle">
            Comunidades ({comunidades.length})
            </h2>
          <ul> 
              {comunidades.map((itemAtual) => {
                return (
                  <li key={itemAtual.id}>
                    <a href={`${itemAtual.title}`}>
                      <img src={itemAtual.image} width="300px" height="300px" />
                      <span>{itemAtual.title}</span>
                    </a>
                 </li>
                )
              })}
           </ul>
          </ProfileRelationsBoxWrapper>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
            Pessoas da comunidade ({pessoasFavoritas.length})
            </h2>
           <ul> 
              {pessoasFavoritas.map((itemAtual) => {
                return (
                  <li key={itemAtual}>
                    <a href={`/users/${itemAtual}`}>
                      <img src={`https://github.com/${itemAtual}.png`} />
                      <span>{itemAtual}</span>
                    </a>
                 </li>
                )
              })}
           </ul>


          </ProfileRelationsBoxWrapper>
          
        </div> 

      </MainGrid>
    </>  
  )
}
