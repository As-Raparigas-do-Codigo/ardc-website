# Como atualizar o conteúdo do Website

Aprende aqui como atualizar os dados dinâmicos do website.

## Atualizar Equipa

Para atualizar os dados da equipa, seja para remover ou adicionar membros à equipa, precisarás de fazer alterações em dois sitios:

1. [`src/assets/team`](/src/assets/team/) pasta com fotos dos membros da equipa
2. [`src/data/team.js`](/src/data/team.js) ficheiro JSON com a informação sobre os membros (nome, ocupação, etc...)

Formato da informação do membro:

```JSON
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

Notas:
- Nos links sociais tens as seguintes opções: `linkedin`, `github`, `outsystems`, `medium` e `other`;
- Nos roles podes ter `founder`, `admin` ou `mentor`. O mais provável é usar a opção `mentor`;
- Alguns campos são opcionais, por exemplo `company`. Convém ter pelo menos o nome e a foto do membro da equipa.

## Atualizar Atividades


