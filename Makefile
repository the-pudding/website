PHONY: github pudding pudding-lite aws-sync aws-sync-lite aws-cp aws-cache

github:
	rm -rf docs
	cp -r build docs
	touch docs/.nojekyll
	git add -A
	git commit -m "update github pages"
	git push

aws-sync:
	aws s3 sync build/_app s3://pudding.cool/_app --quiet
	aws s3 sync build/about s3://pudding.cool/about --quiet
	aws s3 sync build/assets s3://pudding.cool/assets --quiet
	aws s3 sync build/author s3://pudding.cool/author --quiet
	aws s3 sync build/common s3://pudding.cool/common --quiet
	aws s3 sync build/pitch s3://pudding.cool/pitch --quiet
	aws s3 sync build/privacy s3://pudding.cool/privacy --quiet
	aws s3 sync build/resources s3://pudding.cool/resources --quiet

aws-sync-lite:
	aws s3 sync build/_app s3://pudding.cool/_app --quiet
	aws s3 sync build/about s3://pudding.cool/about --quiet
	aws s3 sync build/author s3://pudding.cool/author --quiet
	aws s3 sync build/pitch s3://pudding.cool/pitch --quiet
	aws s3 sync build/privacy s3://pudding.cool/privacy --quiet
	aws s3 sync build/resources s3://pudding.cool/resources --quiet

aws-cp:
	aws s3 cp build/. s3://pudding.cool --recursive --exclude "*" --include "*" --exclude "*/*" --exclude ".DS_Store" --quiet

aws-cache:
	aws cloudfront create-invalidation --distribution-id E13X38CRR4E04D --paths "/index.html" "/_app*" "/about*" "/assets*" "/author*" "/common*" "/pitch*" "/privacy*" "/resources*" "/feed*" "/rss.xml"

pudding: aws-sync aws-cp aws-cache

pudding-lite: aws-sync-lite aws-cp aws-cache