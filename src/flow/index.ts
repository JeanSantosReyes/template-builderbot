import { createFlow } from '@builderbot/bot';
import { discordFlow } from './discordFlow';
import { fullSamplesFlow } from './fullSamplesFlow';
import { registerFlow } from './registerFlow';
import { welcomeFlow } from './welcomeFlow';

export const adapterFlow = createFlow([
    discordFlow,
    fullSamplesFlow,
    registerFlow,
    welcomeFlow
]);