---
layout: post
---

## Ensembles

### Opérateurs

On considère un univers $$U = \{1, 2, 3, 4, 5, 6, 7\}$$. Étant donnés les ensembles suivants

$$A = \{1, 2, 3, 4\},\; B = \{4, 5, 6, 7\},\; C = \{1, 3, 5, 7\},\; D = \{2, 3, 4, 5, 6\},$$

calculer

1. $$\overline{A}, A \cup C, \overline{A \cup C}, A \cap C, \overline{A \cap C}$$,
2. $$(A \cap B) \cup (C \cap D), (A \cup C) \cap (B \cup D)$$,
3. $$A \backslash D, D \backslash A$$.


## Fonctions

**Rappel:** Si $$f:A\to B$$ est une fonction, et si $$C\subset B$$ est un
sous-ensemble de $$B$$, on note $$f^{-1}(C)$$ l'**image inverse de $$C$$ par
$$f$$**, c'est à dire l'ensemble des $$x\in A$$ tels que $$f(x)\in C$$.


### Fonctions et ensembles

Soit $$f : E\to F$$ une fonction totale (une application). Soient $$A$$ et
$$B$$ des sous-ensembles de $$E$$ et soient $$C$$ et $$D$$ des sous-ensembles
de $$F$$. A-t-on nécessairement:

1. $$f(A \cap B) = f(A) \cap f(B)$$,
2. $$f(A \cup B) = f(A) \cup f(B)$$,
3. $$f^{-1}(C \cap D) = f^{-1}(C) \cap f^{-1}(D)$$,
4. $$f^{-1}(C \cup D) = f^{-1}(C) \cup f^{-1}(D)$$,
5. $$f^{-1}(f(A)) = A$$,
6. $$f(f^{-1}(C)) = C$$.

Justifier chaque cas par une preuve ou par un contre-exemple.

### Injectivité et surjectivité

**Rappel:** si $$n$$ est un nombre réel, la notation $$\lfloor n\rfloor$$
désigne la *partie entière inférieure* de $$n$$, c'est à dire le plus
grand entier plus petit ou égal à $$n$$. La notation $$\lceil n\rceil$$
désigne la *partie entière supérieure* de $$n$$, c'est à dire le plus
petit entier plus grand ou égal à $$n$$.

* Déterminer si les fonctions suivantes sont injectives, surjectives ou aucune des deux.

	1. $$f : \mathbb{N} \to \mathbb{N}$$ définie par $$f(n) = \lfloor\frac{n}{2}\rfloor$$.

	1. $$f : \mathbb{N} \to \mathbb{N}$$ définie par $$f(n) = 2n$$.

	1. $$f : \mathbb{N} \to \mathbb{Z}$$ définie par $$f(n) = (-1)^n\lceil\frac{n}{2}\rceil$$.

	1. $$f : \mathbb{N} \to \mathbb{N}$$ définie par $$f(x) = x + 1$$.

	1. $$f : \mathbb{Z} \to \mathbb{Z}$$ définie par $$f(x) = x + 1$$.


* Interpréter les phrases suivantes en terme d’injectivité et de surjectivité.

	1. Il existe des nombres entiers relatifs (i.e., dans $$\mathbb{Z}$$) différents qui ont le même carré.
	1. Tout nombre réel positif a une racine carrée.
	1. Le nombre 3 n’est le sinus d’aucun nombre.
	1. Un nombre complexe est caractérisé par ses parties réelle et imaginaire.


**Rappel:** Si $$f:A\to B$$ et $$g:B\to C$$ sont deux fonctions, on note
$$g\circ f$$ la **composée de $$g$$ et de $$f$$**, i.e. la fonction 
$$g\circ f:A\to C$$ définie par $$g\circ f(x) = g(f(x))$$.

* Soient $$f : A \to B$$ et $$g : B \to C$$ deux fonctions et $$h = g \circ f$$. Montrer les propositions suivantes.

	1. Si $$h$$ est surjective alors $$g$$ est surjective.
	2. Si $$h$$ est injective alors $$f$$ est injective.
	3. Si $$h$$ est injective et $$f$$ est surjective alors $$g$$ est injective.
	4. Si $$h$$ est surjective et $$g$$ est injective alors $$f$$ est surjective.

	Les implications réciproques sont-elles vraies ?

## Cardinalité

### Ensembles finis

* Soient $$A$$ et $$B$$ deux ensembles finis. Donner une formule
  mettant en relation $$\#A, \#B, \#(A∩B)$$ et $$\#(A∪B)$$.

**Rappel :** On note $$\mathcal{P}(A)$$ l'ensemble des parties de $$A$$,
  c'est à dire l'ensemble de tous les sous-ensembles de $$A$$.

* Démontrer que si $$A$$ est un ensemble fini, la cardinalité de
  $$\mathcal{P}(A)$$ est $$2^{\#A}$$.

### Esnembles infinis

1. Montrez que $$ℤ$$ est dénombrable.

2. Montrez que $$ℕ × ℕ$$ est dénombrable.

3. Montrez que $$ℚ$$ est dénombrable, en utilisant le fait que tout
rationnel est de la forme $$a/b$$, avec $$a ∈ ℤ$$ et $$b ∈ ℕ^*$$.

4. Montrez que pour tout entier naturel $$n ≥ 1$$, $$ℕ^n$$ est dénombrable.

4. Montrez que si $$\#A ≤ \#B$$ et $$\#B ≤ \#C$$, alors $$\# A ≤ \# C$$.

5. Montrez que $$\#[0, 1] = \#]0, 1[$$.

6. On note $$F$$ l’ensemble des parties finies de $$ℕ$$. Quel est le cardinal de $$F$$ ?

### Argument diagonal de Cantor

1. On note $$G$$ l’ensemble des parties infinies de $$ℕ$$. $$G$$ est-il dénombrable ?

2. En raisonnant par l’absurde, et en utilisant l’écriture décimale d’un
réel, montrer que $$]0, 1[$$ n’est pas dénombrable.

## Nombres algébriques

* On dit qu’un nombre complexe $$x$$ est « algébrique » s’il existe un
polynôme $$P$$ non nul à coefficients dans $$ℤ$$ tel que : $$P(x) = 0$$.

	1. Montrer que $$0, 1, 2/3, i$$, et $$\sqrt{2}$$ sont algébriques.
	2. Montrer que l’ensemble des nombres algébrique est dénombrable.
	3. En déduire à nouveau que $$ℚ$$ est dénombrable.
	4. En déduire aussi qu’il existe des réels et des nombres complexes non réels qui ne sont pas algébriques. 
	   (On dit qu’un nombre est transcendant s’il n’est pas algébrique).


* Quel est le cardinal de $$\{x + iy \;\vert\; x ∈ ℚ, y ∈ ℤ\}$$ ?
