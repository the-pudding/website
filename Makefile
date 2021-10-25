PHONY: github pudding aws-sync aws-cp aws-cache

github:
	rm -rf docs
	cp -r build docs
	touch docs/.nojekyll
	git add -A
	git commit -m "update github pages"
	git push

aws-sync:
	aws s3 sync --dryrun build/_app s3://pudding.cool/_app
	aws s3 sync --dryrun build/about s3://pudding.cool/about
	aws s3 sync --dryrun build/api s3://pudding.cool/api
	aws s3 sync --dryrun build/assets s3://pudding.cool/assets
	aws s3 sync --dryrun build/author s3://pudding.cool/author
	aws s3 sync --dryrun build/common s3://pudding.cool/common
	aws s3 sync --dryrun build/internal s3://pudding.cool/internal
	aws s3 sync --dryrun build/pitch s3://pudding.cool/pitch
	aws s3 sync --dryrun build/privacy s3://pudding.cool/privacy
	aws s3 sync --dryrun build/resources s3://pudding.cool/resources

aws-cp:
	aws s3 cp --dryrun build/. s3://pudding.cool --recursive --exclude "*" --include "*" --exclude "*/*"

aws-cache:
	aws cloudfront create-invalidation --distribution-id E13X38CRR4E04D --paths  '/' '/index.html' '/_app*' '/about*' '/api*' '/assets*' '/author*' '/common*' '/internal*' '/pitch*' '/privacy*' '/resources*'

pudding: aws-sync aws-cp aws-cache