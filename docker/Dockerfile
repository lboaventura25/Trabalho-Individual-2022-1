FROM python:3.10-buster

ENV PYTHONUNBUFFERED 1

EXPOSE 80

RUN mkdir /code
WORKDIR /code
COPY ./library_back .

RUN ["chmod", "+x", "./start_library_back.sh"]

RUN pip3 install --upgrade pip==21.* && \
    pip3 install -r requirements.txt

CMD [ "python3", "manage.py", "runserver" ]
