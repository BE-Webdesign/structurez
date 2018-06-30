#!/usr/bin/env bash

# Runs test for each package

exitcode=0

for PACKAGE in $(cat .scripts/RELEASABLE_PACKAGES) ; do
	cd $(ARG) && npm run test && cd .. &&\
	echo "✓ Tested $(ARG)" ;\ || exitcode=$?
done

exit $exitcode
