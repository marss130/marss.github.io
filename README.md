# Portfolio — Marwan Bingert

Portfolio personnel orienté **cybersécurité offensive & DevSecOps**, taillé pour candidater à une
alternance en cybersécurité (évaluation de vulnérabilités & tests d'intrusion).

Site **statique**, sans étape de build : `HTML` + `CSS` + `JavaScript` pur, directement déployable sur
**GitHub Pages**.

```
.
├── index.html      # structure et contenu
├── style.css       # thème sombre "ambre", responsive, accessibilité
├── script.js       # menu mobile, scrollspy, animations au scroll
├── cv.pdf          # (à ajouter) ton CV — voir plus bas
└── README.md
```

---

## ✅ À remplir avant publication

Tous les éléments à personnaliser sont marqués **`[À REMPLIR]`** dans `index.html`
(cherche cette chaîne dans le fichier). À compléter :

- [ ] **Email** — section Contact : remplace `#` par `mailto:ton.email@exemple.com` et le texte affiché.
- [ ] **GitHub** — hero + Contact : remplace les `href="#"` par l'URL de ton profil.
- [ ] **LinkedIn** — hero + Contact : remplace les `href="#"` par l'URL de ton profil.
- [ ] **CV** — ajoute un fichier `cv.pdf` à la racine du dépôt (les boutons « CV » pointent déjà dessus).
- [ ] **Localisation** — carte profil du hero : remplace `[À REMPLIR — ex. Grenoble]`.
- [ ] **Période CORYS** — section Expérience : remplace `[À REMPLIR — période]`.
- [ ] **Liens des dépôts** — chaque projet : remplace `href="#"` (lien « repo ▸ ») par l'URL du dépôt,
      ou supprime la ligne si le projet n'a pas de dépôt public.

> ℹ️ Aucune donnée sensible (IP, hostname, port, DN LDAP, clé, secret) n'est présente dans le code.
> Garde ce principe si tu enrichis le contenu, notamment pour la partie CORYS.

---

## 🚀 Déploiement sur GitHub Pages

### Option A — via l'interface GitHub (le plus simple)

1. Crée un dépôt public, par exemple **`portfolio`** (ou `marss.github.io` pour l'avoir à la racine
   de ton domaine GitHub).
2. Envoie les fichiers (`index.html`, `style.css`, `script.js`, `cv.pdf`, `README.md`) à la racine du dépôt.
3. Dans le dépôt : **Settings → Pages**.
4. Sous **Build and deployment → Source**, choisis **Deploy from a branch**.
5. Branche : **`main`**, dossier : **`/ (root)`**, puis **Save**.
6. Patiente ~1 minute. Ton site sera en ligne à :
   - `https://<ton-pseudo>.github.io/portfolio/`
   - ou `https://<ton-pseudo>.github.io/` si le dépôt s'appelle `<ton-pseudo>.github.io`.

### Option B — en ligne de commande

```bash
# à la racine du dossier contenant index.html
git init
git add .
git commit -m "Portfolio initial"
git branch -M main
git remote add origin https://github.com/<ton-pseudo>/portfolio.git
git push -u origin main
```

Active ensuite Pages via **Settings → Pages** (étapes 3 à 6 ci-dessus).

---

## 🔍 Prévisualisation en local

Ouvrir `index.html` directement dans le navigateur suffit. Pour un rendu fidèle (chemins relatifs) :

```bash
# Python
python3 -m http.server 8000
# puis http://localhost:8000
```

---

## 🎨 Personnaliser le style

Les couleurs et le rythme sont centralisés dans les **variables CSS** en haut de `style.css`
(bloc `:root`). Exemple — changer l'accent ambre :

```css
:root {
  --accent: #f2a94b;   /* couleur d'accent principale */
  --accent-hi: #ffc172; /* variante survol */
}
```

Les polices (IBM Plex Sans / IBM Plex Mono) sont chargées depuis Google Fonts dans `index.html`.

---

## ♿ Accessibilité & performance

- HTML sémantique (`header`, `nav`, `main`, `section`, `article`, `footer`), lien d'évitement.
- Contrastes conformes, focus clavier visibles, `aria-*` sur les éléments interactifs.
- Animations désactivées si `prefers-reduced-motion` est actif.
- Aucune dépendance JS externe (icônes SVG en ligne).
