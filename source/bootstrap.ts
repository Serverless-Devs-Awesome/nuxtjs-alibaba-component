export const DEFAULTBOOTSTRAP = `#!/usr/bin/env bash

export PORT={port}
{start}`;

export const DEFAULTPORT = 9000;

export const DEFAULTSTART = 'npx nuxt start --hostname 0.0.0.0 --port $PORT';