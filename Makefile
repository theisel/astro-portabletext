prepare_dist_directory:
	mkdir dist 
	cp -r ./component/. ./dist
	cp README.md ./dist

remove_dist_directory:
	rm -r dist

npm_publish:
	npm publish ./dist --dry-run

publish: prepare_dist_directory npm_publish remove_dist_directory
