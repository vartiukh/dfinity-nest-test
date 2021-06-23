FROM ubuntu:focal

RUN apt-get update
RUN apt-get upgrade -y
RUN apt-get install -y libc6 libc6-dev curl

WORKDIR /app

COPY package*.json ./
COPY . ./

RUN ./bin/install.sh

RUN echo 'export PATH="$PATH:$HOME/bin"' >> "$HOME/.bashrc"
RUN . "$HOME/.bashrc"

EXPOSE 8000

CMD ["dfx","start", "--host", "0.0.0.0:8000", "--clean"]
