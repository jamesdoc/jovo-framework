# Microsoft Azure TTS

Learn how to use the Microsoft Azure TTS (Text to Speech) service with the Jovo Framework.

## Installation

```sh
npm install jovo-tts-azure --save
```

```javascript
// @language=javascript

// src/app.js

const { AzureTts } = require('jovo-tts-azure');

platform.use(
	new AzureTts({
		endpointKey: 'yourEndpointKey',
		endpointRegion: 'yourEndpointRegion',
		locale: 'en-US'
	})
);

// @language=typescript

// src/app.ts

import { AzureTts } from 'jovo-tts-azure';

platform.use(
	new AzureTts({
		endpointKey: 'yourEndpointKey',
		endpointRegion: 'yourEndpointRegion',
		locale: 'en-US'
	})
);
```

<!--[metadata]: {"description": "Learn how to use the Microsoft Azure TTS (Text to Speech) service with the Jovo Framework.",
"route": "tts/microsoft-azure" }-->