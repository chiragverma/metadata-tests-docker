# Boiler plate for testing API for the app - https://metadata-server-mock.herokuapp.com/



Tests runs automatically at 12:00 AM daily and also on new commits:
There is a manual workflow in the Actions as well where the tests can be triggered manually

# To run tests locally:

```
git clone https://github.com/chiragverma/metadata-tests-docker.git
```

```
cd metadata-tests-docker
```

```
npx cypress run
```

# To run tests locally on docker:

```
docker-compose up
```



