import { createProvider } from '@builderbot/bot';
import { BaileysProvider } from '@builderbot/provider-baileys';

export const adapterProvider = createProvider(BaileysProvider);