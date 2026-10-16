---
name: Rota da Acessibilidade
description: Caderno de deliberação para leitura de propostas de cursos.
colors:
  navy: "#172f45"
  navy-light: "#25465f"
  paper: "#f7f5f0"
  surface: "#fffefa"
  ink: "#233746"
  muted: "#5c666b"
  rust: "#935339"
  rule: "#d9d9d1"
  blue-wash: "#e8eef0"
  focus: "#a45126"
typography:
  display:
    fontFamily: "Newsreader, Georgia, serif"
    fontSize: "clamp(48px, 5.1vw, 72px)"
    fontWeight: 450
    lineHeight: 1.04
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Newsreader, Georgia, serif"
    fontSize: "35px"
    fontWeight: 450
    lineHeight: 1.2
    letterSpacing: "-0.015em"
  title:
    fontFamily: "Source Sans, sans-serif"
    fontSize: "21px"
    fontWeight: 600
    lineHeight: 1.4
  body:
    fontFamily: "Source Sans, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Source Sans, sans-serif"
    fontSize: "12px"
rounded:
  control: "4px"
  status: "3px"
spacing:
  compact: "12px"
  section-inset: "24px"
  desktop-content: "64px"
components:
  primary-action:
    backgroundColor: "{colors.navy}"
    textColor: "white"
    rounded: "{rounded.control}"
    padding: "11px 17px"
  primary-action-hover:
    backgroundColor: "{colors.navy-light}"
    textColor: "white"
  print-button:
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "7px 13px"
  table:
    backgroundColor: "{colors.surface}"
  table-header:
    backgroundColor: "{colors.blue-wash}"
    textColor: "{colors.navy}"
    padding: "15px 17px"
  flow:
    backgroundColor: "{colors.blue-wash}"
    rounded: "{rounded.control}"
    padding: "24px"
---

# Design System: Rota da Acessibilidade

## Overview

**Creative North Star: "Caderno de deliberação"**

O caderno de deliberação combina navegação azul-marinho, papel claro e títulos editoriais para uma leitura cuidadosa. A densidade é documental: hierarquia, linhas finas e tabelas organizam o conteúdo sem competir com ele.

A tipografia distingue orientação e leitura contínua. As superfícies são planas; a cor ferrugem marca subtítulos e respostas de interação com discrição.

**Key Characteristics:**

- Papel claro e navegação azul-marinho.
- Títulos serifados e texto sem serifa.
- Tabelas legíveis, foco visível e impressão limpa.

## Colors

### Primary

O azul-marinho ancora navegação, ação principal e cabeçalhos de tabela. Sua variação mais clara indica hover no trilho e na ação principal.

### Secondary

Ferrugem identifica o subtítulo editorial e links em hover. O foco usa seu próprio tom mais vivo, registrado em `focus`.

### Neutral

Papel é o fundo geral; superfície é o fundo das tabelas. Tinta sustenta a leitura, texto secundário recebe o tom atenuado e linhas usam a regra neutra. A lavagem azul distingue cabeçalhos e o fluxo pedagógico.

## Typography

Os parágrafos e textos das células da proposta usam alinhamento justificado, com hifenização automática. Títulos, navegação e controles mantêm seu alinhamento próprio.

Newsreader com fallback Georgia compõe título, subtítulo e títulos de seção. Source Sans 3, registrada no CSS como `Source Sans`, compõe corpo, navegação, tabelas e controles. Ambas são fontes variáveis locais, distribuídas com suas licenças OFL.

O título usa o papel `display`; seções usam `headline`; subtítulos internos usam `title`. O corpo base tem entrelinha 1.65; os parágrafos do documento ampliam para 1.8 e limitam a medida a 73ch. O subtítulo serifado tem 28px e entrelinha 1.25. Metadados usam 12px; navegação e controles de desktop usam 13px; tabelas usam 14px e números tabulares.

## Layout

No desktop, um trilho fixo de 280px acompanha uma área de leitura com largura máxima de 1120px e recuo lateral de 64px. A barra de ferramentas de 76px permanece no topo. Seções têm separador superior, recuo de 36px e intervalo final de 60px.

Até 1100px, o trilho passa a 245px e o conteúdo recebe 34px de recuo. Até 800px, a navegação entra no fluxo como sumário expansível, a barra perde fixação e o conteúdo recebe 26px de recuo. Até 480px, o recuo passa a 22px, metadados e resumo empilham e as tabelas mantêm rolagem horizontal. Em telas a partir de 1600px, o topo do conteúdo aumenta para 60px. O título assume 56px até 800px e 49px até 480px.

A impressão usa A4, remove controles e navegação, repete cabeçalhos de tabela e evita quebrar linhas de tabela. Movimento reduzido desativa transições e rolagem suave.

## Elevation & Depth

Não há sombras. Fundo, lavagem azul, bordas finas e contraste do trilho estabelecem os planos. Elementos fixos usam níveis de empilhamento funcionais, sem aparência flutuante.

## Shapes

Controles, tabelas e fluxo usam cantos discretos de `control`; o selo de estado usa `status`. Linhas de um pixel dividem seções e células. O documento mantém geometria retangular e superfícies abertas.

## Components

### Ações

A ação principal é um link azul-marinho com texto branco, peso 600 e espaçamento entre texto e seta. Hover clareia o fundo. O botão de impressão tem fundo transparente, borda fina e lavagem azul no hover. Foco usa contorno de 3px com afastamento de 4px; no trilho, o contorno é claro.

### Navegação

Links numerados têm duas colunas, cantos discretos e transição de fundo e cor de 0.18s ease-out. Hover clareia o trilho; a seção atual recebe fundo claro e texto azul-marinho. No mobile, o sumário é expansível e os links têm altura mínima de 44px.

### Selo de estado

Pequeno rótulo com lavagem azul acinzentada, borda fina e recuo de 4px por 9px. Comunica estado documental sem parecer um controle.

### Tabelas

Superfície clara, cabeçalho com lavagem azul, alinhamento superior à esquerda e divisórias horizontais. A primeira célula tem peso 550; cabeçalhos têm peso 600. O contêiner delimita a tabela e permite rolagem sem cortar colunas.

### Resumo e fluxo

O resumo apresenta duas colunas separadas por uma linha; no celular, elas se empilham. O fluxo pedagógico usa lavagem azul, recuo de 24px e sequência vertical com intervalo de 17px. São estruturas de leitura, sem elevação ou hover de cartão.

## Do's and Don'ts

### Do:

- Do manter Newsreader nos títulos principais e Source Sans 3 na leitura e nos controles.
- Do preservar linhas de separação, cabeçalhos de tabela e foco visível.
- Do permitir rolagem horizontal das tabelas em telas estreitas.

### Don't:

- Don't usar sombras para separar as superfícies documentais.
- Don't substituir o texto integral por cartões promocionais.
- Don't depender de fontes remotas para abrir o documento.
