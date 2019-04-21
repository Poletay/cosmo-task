#Makefile
start:
	npm run start
lint:
	npm run eslint -- --ext js --ext jsx ./src
build:
	npm run build
test:
	npm run test
