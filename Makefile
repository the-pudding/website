PHONY: pudding aws-sync aws-cp aws-cache

aws-sync:
	aws s3 sync build/_app s3://pudding.cool/_app
	aws s3 sync build/about s3://pudding.cool/about
	aws s3 sync build/api s3://pudding.cool/api
	aws s3 sync build/assets s3://pudding.cool/assets
	aws s3 sync build/author s3://pudding.cool/author
	aws s3 sync build/common s3://pudding.cool/common
	aws s3 sync build/pitch s3://pudding.cool/pitch
	aws s3 sync build/privacy s3://pudding.cool/privacy
	aws s3 sync build/resources s3://pudding.cool/resources

aws-cp:
	aws s3 cp build/. s3://pudding.cool --recursive --exclude "*" --include "*" --exclude "*/*" --exclude ".DS_Store"

aws-cache:
	aws cloudfront create-invalidation --distribution-id E13X38CRR4E04D --paths "/index.html" "/_app*" "/about*" "/api*" "/assets*" "/author*" "/common*" "/pitch*" "/privacy*" "/resources*"

pudding: aws-sync aws-cp aws-cache