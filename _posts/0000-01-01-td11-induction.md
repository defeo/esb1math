---
layout: post
title: TD11 – Arithmétique de Peano et induction
---


## Arithmétique de Peano

**Rappel :** L'arithmétique de Peano est une théorie des nombres
écrite avec le langage $$0,S,+,×$$ ($$S$$ est un opérateur unaire,
interprété comme « *successeur* »), et définie par les axiomes

| Fondation | $$∀x.Sx≠0$$ | Injectivité | $$∀x,y.(Sx=Sy)→(x=y)$$ | Neutre | $$∀x.x+0=x$$ |
| Addition  | $$∀x,y.x+Sy=S(x+y)$$ | Nilpotence | $$∀x.x×0=0$$ |

| Distributivité | $$∀x,y.x×Sy=x×y+x$$ | Induction | $$\bigl(p[0/x] ∧ ∀y.p[y/x] → p[Sy/x]\bigr) → ∀x.p$$ |

où $$p$$ est un prédicat quelconque


1. Démontrer la formule $$∀x.(x=0)∨(∃y.x=Sy)$$.
2. Démontrer que l'addition est commutative.
3. Démontrer la formule $$∀x.Sx≠x$$.
3. Donner une définition pour « $$x$$ est inférieur ou égal à $$y$$ »
   basée sur l'arithmétique de Péano.
4. Prouver que la relation ainsi définie est un ordre.
5. Prouver que $$0$$ est le plus petit élément et que $$Sx$$ est le
   plus petit élément plus grand que $$x$$.
6. Prouver que cet ordre est total (i.e. que $$x≤y$$ ou $$y≤x$$ pour
   tout $$x,y$$).
7. Prouver le *schéma de induction forte*:
   $$\bigl(p[0/x] ∧ ∀z.(∀y.y<z→p[y/x])→p[Sz/x]\bigr)→∀x.p$$



## Preuves par induction

Démontrer (par induction) les propriétés suivantes.

1. Pour tout entier $$n$$, $$7^n - 1$$ est divisible par 6 ;
1. Pour tout entier $$n$$, $$(n^3 - n)$$ est divisible par 3 ;
1. $$2^n < n!$$ pour tout $$n\ge 4$$ ;
1. $$n! < n^n$$ pour tout $$n > 1$$.

Quels axiomes de Peano avez-vous utilisé pour la preuve ?

## Induction forte

**Rappel :** On dit qu'une preuve utilise l'**induction forte** lorsque le pas inductif a la forme $$(\forall i < n. P(i))\Rightarrow P(n)$$, plutôt que $$P(n-1)\Rightarrow P(n)$$. Autrement dit, on utilise comme hypothèse de récurrence le fait que la propriété est vraie pour tous les entiers plus petits que $$n$$, plutôt que seulement pour $$n-1$$. 

1. Prouver par induction forte que tout entier $$n \ge 12$$ peut être
   exprimé sous la forme $$4a+5b$$ avec $$a$$ et $$b$$ des entiers
   positifs.


## Bons ordres

**Rappel :** un ordre sur un ensemble $$A$$ est *bien fondé* si tout
sous-ensemble de $$A$$ contient (au moins) un élément minimal (i.e.,
un élément n'ayant pas d'élément plus petit que lui dans le
sous-ensemble). De façon équivalente, un ordre est bien fondé s'il
n'existe pas de chaîne strictement décroissante infinie. On ordre
total et bien fondé est dit un *bon ordre*.

Dire si les ordres suivants sont bien fondés et/ou des bons ordres :

1. L'ordre usuel sur les nombres naturels ;
1. L'ordre usuel sur les nombres rationnels ;
1. L'ordre sur $$\mathbb{N}\times\mathbb{N}$$ (les paires de naturels)
   défini par $$(a,b)<(c,d)$$ si et seulement si $$a<c$$ et $$b<d$$ ;
1. L'ordre alphabétique sur les mots ;
1. Un ordre quelconque sur un ensemble fini.

