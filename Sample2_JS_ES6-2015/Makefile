JS_ENGINE	= node
TARGET_SCRIPT	= ./Sample2.js
INSTDIR	= ./Program.app/Contents/Resources/JavaScript/
ARCHIVE	= $(shell basename `pwd`)
LINTER	= ./node_modules/.bin/eslint
SCRIPTS	= $(shell ls ./src/*.js)

all: $(TARGET_SCRIPT)
	@:

$(TARGET_SCRIPT): $(SCRIPTS)
	npx webpack --progress --display-modules #--verbose

clean:
	rm -f ./Example.js
	@if [ -e $(INSTDIR) ] ; then echo "rm -f -r $(INSTDIR)" ; rm -f -r $(INSTDIR) ; fi
	@find . -name ".DS_Store" -exec rm {} ";" -exec echo rm -f {} ";"

wipe: clean
	rm -rf ./node_modules/ ./package*.json
	@xattr -cr ./
	@(cd ../ ; if [ -e $(ARCHIVE).zip ] ; then echo "rm -f ../$(ARCHIVE).zip" ; rm -f $(ARCHIVE).zip ; fi)
	@(cd ../ ; if [ -e $(ARCHIVE).tar.gz ] ; then echo "rm -f ../$(ARCHIVE).tar.gz" ; rm -f $(ARCHIVE).tar.gz ; fi)

test: all
	$(JS_ENGINE) $(TARGET_SCRIPT)

install: all
	@if [ ! -e $(INSTDIR) ] ; then echo "mkdir $(INSTDIR)" ; mkdir $(INSTDIR) ; fi
	cp -p -r $(TARGET_SCRIPT) $(INSTDIR)

zip: wipe
	(cd ../ ; zip -r ./$(ARCHIVE).zip ./$(ARCHIVE)/ --exclude='*/.svn/*')

tgz: wipe
	(cd ../ ; tar --exclude='*/.svn/*' -czvf ./$(ARCHIVE).tar.gz ./$(ARCHIVE)/)

lint:
	$(LINTER) $(SCRIPTS)
