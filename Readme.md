## 📖 About
Project developed during Rocketseat's Ignite Lab event.

</br>

## ⚙ Technologies
This project was developed with the following technologies:

- [Nest](https://nestjs.com/)
- [TypeScript](https://www.typescriptlang.org)
- [Jest](https://jestjs.io/)
- [Kafka](https://kafka.js.org/)

</br>

## 💻 Project

Notification-service is a microservice for creating notifications, which currently has the functionality to create, cancel, mark as read, mark as unread, count the total number of notifications per recipient and list all notifications from a recipient.

</br>

## 👷 How to run 🚀

- install the dependencies
```
npm i
```
-configure the .env
```
-configure the broakers in:
```
src/infra/messaging/kafka/kafka-consumer.service.ts
```
- start the server
``` 
npm run start:dev
```
- Now all messages will be received from kafka in the topic:
```
notifications.send-notification
```
