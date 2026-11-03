# Magic Quiz static site

This repository contains the static marketing and support site for Magic Quiz, an Atlassian Confluence quiz app.

## Preview locally

Run:

```sh
python3 -m http.server 8000
```

Then open <http://localhost:8000/>.

YouTube embeds require HTTP. When the site is opened directly with `file://`, the home page shows a fallback link instead of the inline player.

> Do not deploy the workspace root as-is: it contains `magic-quiz-backend/`, including `.env` and `.git`. Deploy only the root static files and `assets/`.
