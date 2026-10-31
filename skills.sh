#!/usr/bin/env bash
# The Cozy Skillet - Agent Skills Installation Script (https://skills.sh)
set -e

echo "🍳 Installing agent skills for The Cozy Skillet via skills.sh..."

npx skills add astrolicious/agent-skills@astro -y
npx skills add coreyhaines31/marketingskills@seo-audit -y
npx skills add addyosmani/web-quality-skills@web-quality-audit -y

echo "✅ All agent skills synchronized successfully."
