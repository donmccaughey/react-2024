.SECONDEXPANSION :


.PHONY : all
all : tmp/index.html tmp/news.js


.PHONY : serve
serve : tools/server.py tmp/index.html tmp/news.js
	$<


tmp/index.html : src/index.html $$(dir $$@)
	cp $< $@


sources := \
	src/api.js \
	src/App.jsx \
	src/Footer.jsx \
	src/Header.jsx \
	src/index.js \
	src/Item.js \
	src/Main.jsx


tmp/news.js : $(sources) $$(dir $$@) package-lock.json
	npx esbuild --bundle --sourcemap --outfile=$@ src/index.js


package-lock.json : package.json
	npm install
	touch package-lock.json


./tmp :
	mkdir -p $@
