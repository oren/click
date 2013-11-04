all:
	node_modules/.bin/browserify \
		phone.js \
		-o static/bundle.js \
		--debug

	node_modules/.bin/browserify \
		slides.js \
		-o static/bundle2.js \
		--debug
