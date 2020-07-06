FROM openjdk:8-alpine
LABEL maintainer="dounia.hm@hotmail.com" 
COPY target/apps-backend-0.0.1-SNAPSHOT.jar apps-backend-0.0.1.jar

EXPOSE 8080
CMD ["java","-Dspring.profiles.active=container", "-jar", "apps-backend-0.0.1.jar"]