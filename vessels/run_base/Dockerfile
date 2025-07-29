FROM alpine:3.16
RUN apk update
RUN apk add zip unzip curl wget bash fish git nano util-linux
RUN apk add python3 py3-pip py3-virtualenv poetry
RUN ln -s /usr/bin/python3 /bin/py
RUN sed -i -e "s/bin\/ash/usr\/bin\/fish/" /etc/passwd
ENV SHELL /usr/bin/fish
CMD fish
