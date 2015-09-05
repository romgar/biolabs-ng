GITHUB_PAGES_BRANCH=gh-pages
OUTPUTDIR=app

github:
	git stash
	ghp-import -m "Updating biolabs website" -b $(GITHUB_PAGES_BRANCH) $(OUTPUTDIR)
	git push origin $(GITHUB_PAGES_BRANCH)
	git stash pop

