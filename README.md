# CI-T

## Setup: 
** npm install **

## Iniciar servidor: 
** "npm run dev" ou "yarn dev" **

## Teste: 
** Na pasta teste possui um arquivo .json do teste. Uma collection para o Postman, a collection possui teste para as 2 rotas, na rota poste ele gera uma data aleatoria para dataMaxima e um valor aleatorio entre 1 e 8 para o tempoEstimado. **

## API:
** get "/jobs": faz a organização dos jobs que estão na base de dados ./src/database/data.ts e retorna o esultado **

** post "/jobs": envia uma requisição com um body, faz a organização dos jobs e retorna o resultado. **


## strutura do Body para a requisição
### .json
** [
   {
    id: number;
    descricao: string;
    dataMaxima:"(YYYY-MM-DD HH:MM:SS)";
    tempoEstimado: number;
   }
 ]**
