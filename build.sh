#!/bin/bash

ng build --base-href="/~gchua03/"
sed -i 's+ type="text/css"++g' dist/inls161site/index.html
