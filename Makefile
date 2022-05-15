#!make
prepare_dist_directory:
	mkdir dist 
	cp -r ./component/. ./dist
	cp README.md ./dist

remove_dist_directory:
	rm -r dist

npm_publish:
	npx changeset publish

publish: prepare_dist_directory npm_publish remove_dist_directory

.PHONY: prepare_dist_directory
.PHONY: remove_dist_directory
.PHONY: npm_publish
.PHONY: publish