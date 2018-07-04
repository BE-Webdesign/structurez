#!/usr/bin/env bash

# Runs test for each package

exitcode=0

for PACKAGE in $(cat .scripts/RELEASABLE_PACKAGES) ; do
	cd $PACKAGE && npm run test || exitcode=$? && cd .. &&\
	echo "✓ Tested $PACKAGE" ;\
done

exit $exitcode
