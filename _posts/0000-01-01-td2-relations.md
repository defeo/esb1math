---
layout: post
title: TD2 – Relations, ordres, treillis
---

## Propriétés des relations

1. Donner des exemples de relations qui sont

	* réflexives et symétriques mais pas transitives,
	* réflexives et transitives mais pas symétriques,
	* symétriques et transitives mais pas réflexives.

2. La relation sur les entiers suivante est-elle une relation d’équivalence ?

	$$\mathcal{T} = \{(a, b) \;\vert\; a + b \text{ est pair}\}.$$

	Donner la classe d’équivalence de 3, 4, 5, 6.

3. Les relations suivantes sont-elles des relations d’ordre sur les
   entiers? Et sur les rationnels?

	* $$x\mathcal{P}y$$ si et seulement si $$x \le y$$.
	* $$x\mathcal{Q}y$$ si et seulement si $$x < y$$.
	* $$x\mathcal{R}y$$ si et seulement si $$x$$ est multiple de $$y$$.
	* $$x\mathcal{S}y$$ si et seulement si l'écriture de $$x$$ en base dix est contenue dans l'écriture de $$y$$ en base dix (ex. : $$101\;\mathcal{S}\;31012$$).

## Équivalences

**Rappel:** On dit que $$a \equiv b \mod n$$, et on lit « $$a$$ équivaut à $$b$$ modulo $$n$$ », s’il existe une entier $$q$$
tel que $$a - b = qn$$. De façon équivalente, $$a\equiv b\mod n$$ si $$a$$ et $$b$$ donnent le même reste dans la division par $$n$$.

1. Montrer que pour tout entier $$n$$, la relation « équivalent modulo $$n$$ »
   est une relation d’équivalence sur les entiers. *Caractériser* les classes d'équivalence.


2. Soit $$E = \{1, 2, 3, 4, 5, 6, 7, 8\}$$. On définit sur l’ensemble $$E \times E$$ la relation $$\mathcal{R}$$:
   $$(p, q)\mathcal{R}(p', q')$$ si et seulement si $$p - p'$$ est pair et $$q - q'$$ est divisible par 3.

	* Donner le cardinal de $$E \times E$$.
	* Vérifier que $$\mathcal{R}$$ est une relation d’équivalence.

3. On désigne par $$\overline{(p, q)}$$ la classe d’équivalence de $$(p, q)$$.

	* Calculer le nombre d’éléments des classes $$\overline{(1, 1)}, \overline{(1, 2)}, \overline{(1, 3)}$$.
	* Soit $$q \in E$$. Montrer que si $$(x, y) \in \overline{(1, q)}$$, alors $$(x + 1, y) \in \overline{(2, q)}$$.
	* Combien y a-t-il de classes d’équivalence différentes ? Donner leur liste.
	* Déterminer le cardinal de chaque classe d’équivalence. Le résultat est-il compatible avec la cardinalité de $$E\times E$$?


## Graphes

Dessiner les graphes des fonctions suivantes et de leurs inverses.

1. La fonction $$f : \mathbb{N} \to \mathbb{N}$$ définie par $$f(x) = x$$.
1. La fonction $$f : \mathbb{N} \to \mathbb{N}$$ définie par $$f(n) = 2n$$ ;
1. La fonction $$f : \mathbb{R} \to \mathbb{R}$$ définie par $$f(x) = 1/x$$ ;

On rappelle qu'un graphe est une relation. Dans les cas ci-dessus, s'agit-il de relations réflexives, symétriques, transitives ?
{: .force-page-break}

## Diagrammes de Hasse

Considérons le graphe de compatibilité des groupes sanguins: $$x \to y$$ signifie que une personne
du groupe sanguin $$x$$ peut donner son sang à une personne du groupe sanguin $$y$$.

<svg width="150" height="150" viewBox="-75 -75 150 150" xmlns="http://www.w3.org/2000/svg">
 <marker id="triangle"
   viewBox="0 0 10 10" refX="0" refY="5" 
   markerUnits="strokeWidth"
   markerWidth="4" markerHeight="3"
   orient="auto">
   <path d="M 0 0 L 10 5 L 0 10 z" />
 </marker>
 <g fill="none" stroke="#000" transform="rotate(315)">
  <circle cx="-35" cy="-35" r="20" />
  <circle cx="-35" cy="35" r="20" />
  <circle cx="35" cy="-35" r="20" />
  <circle cx="35" cy="35" r="20" />
  <g stroke-width="2" marker-end="url(#triangle)">
   <line x1="-35" y1="15" x2="-35" y2="-10" />
   <line x1="35" y1="15" x2="35" y2="-10" />
   <line x1="-15" y1="-35" x2="10" y2="-35" />
   <line x1="-15" y1="35" x2="10" y2="35" />
  </g>
 </g>
 <g text-anchor="middle" font-size="18">
  <text x="-50" y="0">A</text>
  <text x="50" y="0">B</text>
  <text x="0" y="-50">AB</text>
  <text x="0" y="50">0</text>
 </g>
</svg>
{: .centered}

1. Définir la relation « compatibilité ». Est-elle réflexive, transitive, symétrique, antisymétrique?

2. On considère l'ensemble des parties de $$A=\{1,2,3\}$$ muni de la
   relation $$x \subset y$$ ($$x$$ est contenu dans $$y$$). La relation
   $$\subset$$ est-elle un ordre ? En dessiner le diagramme de Hasse.


## L'ensemble des parties et ses amis

**Rappels :** 

* On note $$\mathcal{P}(A)$$ l'ensemble des parties de $$A$$,
  c'est à dire l'ensemble de tous les sous-ensembles de $$A$$.
* Soient $$A$$ et $$B$$ deux ensembles, on note $$A^B$$
  l'ensemble des fonctions de $$B$$ vers $$A$$.
* On peut interpréter la cardinalité comme une *classe
  d'équivalence d'ensembles*. Ainsi on notera $$\mathbb{0}$$ la classe
  d'équivalence de l'ensemble vide, $$\mathbb{1}$$ la classe
  d'équivalence des ensembles contenant un seul élément, et ainsi de
  suite.
* On note $$ℵ_0$$ la cardinalité de $$ℕ$$ (la cardinalité
  du dénombrable).

Montrer que :

1. Si $$A$$ est un ensemble fini, la cardinalité de
   $$\mathcal{P}(A)$$ est $$2^{\#A}$$ ;
2. Si $$A$$ et $$B$$ sont des ensembles finis,
   $$\#(A^B) = \#A^{\#B}$$ ;
3. Pour tout ensemble $$A$$ (y compris les ensembles
   infinis), la cardinalité de $$\mathcal{P}(A)$$ est
   $$\mathbb{2}^{\#A}$$ ;
4. $$ℵ_0 ≠ 2^{ℵ_0}$$ (utilisez l'argument diagonal de Cantor) ;
4. $$\mathbb{2}^{ℵ_0} = ℵ_0^{ℵ_0}$$.


