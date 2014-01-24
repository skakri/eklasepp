all: gather zip crx clean rmpem

gather: src/eklasepp.js src/eklasepp.less
	lessc src/eklasepp.less -x build/eklasepp.css && cp src/eklasepp.js build/

zip:
	cp manifest.json build/manifest.json && zip dist/zip/eklasepp-$(VERSION).zip build/eklasepp.css build/eklasepp.js build/manifest.json

crx:
	cp manifest_local.json build/manifest.json && LC_ALL=C chromium --no-message-box --pack-extension=./build && mv build.crx dist/crx/eklasepp-$(VERSION).crx

clean:
	rm build/*.{css,js,json}

rmpem:
	rm ./build.pem
