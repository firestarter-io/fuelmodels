/*
 * Firestarter.io
 *
 * Copyright (C) 2021 Blue Ohana, Inc.
 * All rights reserved.
 * The information in this software is subject to change without notice and
 * should not be construed as a commitment by Blue Ohana, Inc.
 *
 */

/**
 * Quick script to write JSON files based on fuel model constants
 */

import * as fs from 'fs';
import { exec } from 'child_process';
import { FBFM13 } from './src/fuelmodel13';
import { FBFM40 } from './src/fuelmodel40';

fs.writeFileSync(
	process.cwd() + '/src/FBFM13.json',
	JSON.stringify(FBFM13, null, '\t')
);

fs.writeFileSync(
	process.cwd() + '/src/FBFM40.json',
	JSON.stringify(FBFM40, null, '\t')
);

exec(`cp -R ${process.cwd()}/src/*.json ${process.cwd()}/dist`);
