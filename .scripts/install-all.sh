#!/usr/bin/env bash

# Runs npm install for all packages.

exitcode=0

for PACKAGE in $(cat .scripts/RELEASABLE_PACKAGES) ; do
	cd $PACKAGE && npm i || exitcode=$? && cd .. &&\
	echo "✓ Installed Node Modules for $PACKAGE" ;\
done

exit $exitcode
