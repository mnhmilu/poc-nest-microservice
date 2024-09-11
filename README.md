# How to dockerized nestjs microservice?

#nestjs microservice #dockerised nestjs microserivce

I have created mono repo for this project. The client communicates with 'deals' and 'news' nest microservice via TCP. There are 3 docker files in 

1) apps/bdcars-api-gateway 
2) apps/deals
3) apps/news


Go through the readme from main branch and must watch the video to grab the idea. 


### To run docker-compose 

```
sudo docker image prune -a

sudo docker compose -f docker-compose.yaml up --build


```

### To troubleshoot 

```
sudo docker ps
sudo docker exec -it <Container Id> sh


```

### Additional Notes

1) To copy file above the docker file current folder, I have used `aditional_context`, check the supported docker compose version, if any issue occurred.

2) To test , call api as described in the main branch. Follow the instruction

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

Use 0.0.0.0 for the host to avoid the 'Connection Refused' issue or failed to tcp communication. 

3) For best practice create a shared folder and generate a library module within it. 

4) Check for ufw port permission if there is any communication failure. 


if you think this post helps you then buy me a coffe by scanning this QR code as a matter of appreciation

<img src="https://github.com/user-attachments/assets/70a1c34b-9d32-4762-bd3d-247726b67c5f" alt="bmc_qr" width="100" height="100">

Enjoy Programming and keep creating awesome applications!
