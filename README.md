WoodWork - Deploy helper files
==================================

Arquivos gerados para facilitar o deploy do projeto React (Vite) no GitHub Pages.

Arquivos incluídos:
- package.json (com scripts 'predeploy' e 'deploy' usando gh-pages)
- vite.config.js (com base configurada para /Art-Moveis-WoodWork/)
- .github/workflows/deploy.yml (GitHub Actions para build + deploy automatizado ao dar push em main)
- README.md (este arquivo)

Como usar (opções):
1) Usando gh-pages (local):
   - npm install
   - npm run build
   - npm run deploy
   Observação: isso criará e enviará a branch gh-pages.
   Certifique-se de que 'homepage' no package.json esteja correto (https://{user}.github.io/{repo})

2) Usando GitHub Actions (recomendado):
   - Faça commit destes arquivos no repositório (branch main)
   - A Action rodará automaticamente quando você der push na branch main e publicará em GitHub Pages.
   - Em Settings → Pages, selecione Source = GitHub Actions (Pages) ou branch gh-pages se preferir gh-pages.

Ajustes possíveis:
- Se o nome do repositório não for Art-Moveis-WoodWork, atualize 'homepage' e 'base' no vite.config.js.
- Se a branch principal não for 'main', altere o gatilho do workflow para a branch correta.
