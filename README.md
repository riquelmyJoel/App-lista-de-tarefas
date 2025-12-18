## Executando offline

Para rodar a versão de produção localmente e permitir o uso offline via service worker:

1. Gere o build:

```bash
npm run build
```

2. Sirva a pasta `build/` com um servidor estático (ex.: `npx serve -s build` ou `npx http-server build -p 3000`).

3. Abra o site no navegador (`http://localhost:5000` ou a porta do servidor). O service worker (adicionado em `public/service-worker.js`) fará cache dos assets locais. Depois de carregado pelo menos uma vez, você poderá desconectar da internet e o app continuará funcionando.

Observação: o projeto foi ajustado para não depender de fontes externas (removido Google Fonts) e utiliza a pilha de fontes do sistema.

