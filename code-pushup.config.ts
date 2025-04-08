import type {CoreConfig} from '@code-pushup/models';
import typescriptPlugin from '@code-pushup/typescript-plugin';
import 'dotenv/config';

const config: CoreConfig = {
    plugins: [
        await typescriptPlugin({tsconfig: 'tsconfig.strict.json'})
    ],
    categories: [
        {slug: 'type-safety', title: 'Type safety', refs: [{type: 'group', plugin: 'typescript', slug: 'problems', weight: 1}]}
    ],
    ...process.env.CP_API_KEY && {
        upload: {
            server: 'https://api.staging.code-pushup.dev/graphql',
            apiKey: process.env.CP_API_KEY,
            organization: 'demos',
            project: 'maplibre-gl',
        }
    }
};

export default config;