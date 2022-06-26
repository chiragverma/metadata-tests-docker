# Install Ruby.
FROM ruby:2.7.1
# Install bundler gem
RUN gem install bundler

# Clone the repo files into the docker container and run the app
RUN git clone https://github.com/piotr-iohk/metadata-server-mock.git
WORKDIR /metadata-server-mock
RUN bundle install
EXPOSE 80
CMD ./start
RUN curl http://localhost:8080/metadata/919e8a1922aaa764b1d66407c6f62244e77081215f385b60a62091494861707079436f696e


