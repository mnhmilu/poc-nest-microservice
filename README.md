# How to dockerized nestjs microservice?

#nestjs microservice #dockerised nestjs microserivce

I have created monorepo careted for this project. Client communicate with 'deals' and 'news' nest microservice via TCP. There are 3 docker files in 

1) apps/bdcars-api-gateway 
2) apps/deals
3) apps/news


Go through the readme from main branch and must watch the video to grab the idea. 


### To run docker compose 

```
sudo docker image prune -a

sudo docker compose -f docker-compose.yaml up --build


```

### To trouble shoot 

```
sudo docker ps
sudo docker exec -it <Container Id> sh


```

### Additional Notes

1) To copy file above docker file current folder, I have used `aditional_context`, check supported docker comopose version if any issue occured.

2) To test , call api as described in main branch. Follow the instruction

Critical error prone area is 

host configaration in Client and Microservice

For Client check config folder file `client-config.service.ts`

```
get dealsClientOptions(): ClientOptions {
    return {
      transport: Transport.TCP,
      options: {
        host:'deals',
        port: this.getDealsClientPort() },
    };
  }

```

Here host:'deals' is a service name defined in docker compose file


For Microservice, see example main.ts file within deals microservice

```
const app = await NestFactory.createMicroservice<MicroserviceOptions>(DealsModule, {
    transport: Transport.TCP,
    options: { 
      host: '0.0.0.0',
      port: 3001,
    },
  });


```

use 0.0.0.0 for host to avoid 'Connenction Refused' issue or failed to tcp communication. 

3) For best practice create a shared folder and generate library module within it. 

4) Check for ufw port permission if any commnunication failure. 


if you think this post help you then 
![bmc_qr](https://github.com/user-attachments/assets/70a1c34b-9d32-4762-bd3d-247726b67c5f)



buymeacoffee.com/mnhmilu
