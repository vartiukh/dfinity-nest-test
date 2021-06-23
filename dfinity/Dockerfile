FROM dfinity/dfx:0.5.7

WORKDIR /app

COPY package*.json ./
COPY . ./
RUN npm install
RUN echo 'export PATH="$PATH:$HOME/bin"' >> "$HOME/.bashrc"
RUN . "$HOME/.bashrc"

EXPOSE 8000

CMD ["dfx","start", "--host", "0.0.0.0:8000", "--clean"]
