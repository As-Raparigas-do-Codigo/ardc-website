# Como atualizar o conteúdo do Website

Aprende aqui como atualizar os dados dinâmicos do website.

## Atualizar Equipa

Para atualizar os [dados da equipa](https://raparigasdocodigo.pt/team) em `Home > Sobre Nós > A nossa equipa`, seja para remover ou adicionar membros da equipa, precisarás de fazer alterações em dois sitios:

1. [`src/assets/team`](/src/assets/team/) pasta com fotos dos membros da equipa
2. [`src/data/team.js`](/src/data/team.js) ficheiro com a informação sobre os membros (nome, ocupação, etc...)

Formato da informação do membro:

```javascript
{
    id: <id_unico_no_ficheiro>,
    roles: ['<responsabilidade_do_membro>'],
    name: '<nome_do_membro>',
    company: '<empresa_escola_universidade_etc>',
    job: '<ocupação_do_membro>',
    social: [
        { linkedin: '<linkedin_link>' },
        { other: '<other_link>' }
    ],
    avatar: '<nome_da_foto_do_membro>'
},
```

**Notas:**

- Nos links sociais tens as seguintes opções: `linkedin`, `github`, `outsystems`, `medium` e `other`;
- Nos roles podes ter `founder`, `admin` ou `mentor`. O mais provável é usar a opção `mentor`;
- Alguns campos são opcionais, por exemplo `company`. Convém ter pelo menos o nome e a foto do membro da equipa.

💡 Também podes [criar uma issue no nosso repositório](https://github.com/As-Raparigas-do-Codigo/ardc-website/issues/new?assignees=&labels=team+update&projects=&template=add_new_member.yaml&title=Adicionar+%3Co_teu_nome%3E+%C3%A0+equipa+%2F+Atualizar+informa%C3%A7%C3%A3o+sobre+%3Co_teu_nome%3E), se quiseres reportar uma atualização na equipa. E os _maintainers_ ou contribuidores podem ajudar a atualizar o conteúdo.

## Atualizar Atividades

Neste momento temos 3 tipos de atividades:

- **Media** - destaque nos media (exemplo: destaque num artigo de noticias, etc);
- **Workshop** - um workshops de longa ou curta duração que tenhamos organizado para a nossa comunidade de alunas;
- **Evento** - um evento onde participamos ou organizamos como comunidade, seja em pessoa ou virtualmente (exemplo: podcast, painel em que os nossos membros participaram a representar a comunidade, etc...)

Estas atividades aparecem em duas páginas do website: [Atividades](https://raparigasdocodigo.pt/activities) e [Parceiros](https://raparigasdocodigo.pt/partners).

Para atualizar as atividades:

1. [`src/assets/`](/src/assets/) - pasta com imagens a usar nas atividades
2. [`src/data/activities/`](/src/data/activities/) - pasta com a informação das atividades

Ao adicionar ou remover uma atividade terás de atualizar o ficheiro respectivo:

- [src/data/activities/events.js](/src/data/activities/events.js) para eventos
- [src/data/activities/workshops.js](/src/data/activities/workshops.js) para workshops
- [src/data/activities/media.js](/src/data/activities/media.js) para destaques nos _media_

O formato da informação da atividade é o seguinte:

```javascript
{
    id: <id_unico_da_atividade>,
    date: '<AAAA-MM-DD>',
    title: '<titulo_da_atividade>',
    subtitle: '<subtitulo_da_atividade>',
    image: `<imagem_que_representa_a_atividade>`,
    alt: '<descrição_alternativa_da_imagem_para_efeitos_de_a11y>',
    description: '<descrição_da_atividade>',
    category: <categoria_da_atividade>,
    link: {
        url: '<link_url>',
        type: <tipo_de_link_externo>
    }
}
```

**Notas:**

- O campo `id` deverá ser auto-gerado usando `self.crypto.randomUUID()`. Isto facilita a nossa manutenção de conteúdo e segue as boas práticas de _web development._
- Os campos `category` e `link`, geralmente não são necessários para atividades do tipo Workshop
- Podes verificar os tipos de categoria e links aqui [src/constants/index.js](/src/constants/index.js).
