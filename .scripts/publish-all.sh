#!/usr/bin/env bash

# Runs npm install for all packages.

exitcode=0

for PACKAGE in $(cat .scripts/RELEASABLE_PACKAGES) ; do
	cd $PACKAGE && rm -rf coverage && npm publish --access public || exitcode=$? && cd .. &&\
	echo "✓ Published Node Modules for $PACKAGE to npm" ;\
done

exit $exitcode
