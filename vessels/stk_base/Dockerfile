FROM alpine:3.16
RUN apk update
RUN apk add zip unzip curl wget bash fish
RUN apk add util-linux git nano vim alpine-sdk
RUN apk add clang clang-extra-tools cmake
RUN apk add python3 python3-doc python3-dev
RUN apk add py3-pip py3-autopep8 py3-virtualenv poetry
RUN ln -s /usr/bin/python3 /bin/py
RUN sed -i -e "s/bin\/ash/usr\/bin\/fish/" /etc/passwd
ENV SHELL /usr/bin/fish
CMD fish
