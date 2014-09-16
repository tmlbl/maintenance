FROM tmlbl/node

RUN mkdir /app
ADD . /app

ENTRYPOINT node /app/app.js
