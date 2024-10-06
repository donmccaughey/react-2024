.SECONDEXPANSION :


.PHONY : all
all : tmp/index.html tmp/news.js


.PHONY : serve-app
serve-app : all
	npx esbuild \
		--bundle --sourcemap --outfile=tmp/news.js \
		--serve=8001 --servedir=tmp \
		--watch \
		src/index.js


tmp/index.html : src/index.html $$(dir $$@)
	cp $< $@


sources := \
	src/App.js \
	src/BottomNav.js \
	src/Footer.js \
	src/Header.js \
	src/index.js \
	src/Item.js \
	src/Items.js \
	src/Main.js \
	src/TopNav.js


tmp/news.js : $(sources) $$(dir $$@) package-lock.json
	npx esbuild --bundle --sourcemap --outfile=$@ src/index.js


package-lock.json : package.json
	npm install
	touch package-lock.json


./tmp :
	mkdir -p $@
