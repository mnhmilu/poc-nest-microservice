nest generate app bdcars-api-gateway
nest generate app deals
nest generate app news
npm install @nestjs/microservices
npm install class-transformer
npm install class-validator
nest generate module deals --project bdcars-api-gateway
nest generate service deals --project bdcars-api-gateway
nest generate controller deals --project bdcars-api-gateway
nest start bdcars-api-gateway --watch
nest generate resource news --project news // choose microservice
nest generate resource news --project bdcars-api-gateway // choose restapi


nest start bookstre-api-gateway --watch
nest start news --watch
nest start deals --watch


nest generate library contracts
rm -rf libs/contracts/src/*
mkdir libs/contracts/src/news
cp apps/news/src/news/dto/* libs/contracts/src/news
