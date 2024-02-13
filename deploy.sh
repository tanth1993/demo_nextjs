#!/bin/bash
npm run build && \
git add . && \
git commit -m "Build and Deploy" && \
git push && \
git fetch origin dev:main && \
git push origin main