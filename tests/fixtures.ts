// @ts-ignore
import { test as base } from '@playwright/test';
// @ts-ignore
import { runCLI } from '@wp-playground/cli';
// @ts-ignore
import { execSync } from 'node:child_process';
// @ts-ignore
import { existsSync, statSync } from 'node:fs';
// @ts-ignore
import path from 'node:path';

// @ts-ignore
const pluginRoot = path.resolve(__dirname, '../..');
const autoloadPath = path.join(pluginRoot, 'vendor', 'autoload.php');
const lockPath = path.join(pluginRoot, 'composer.lock');

function needsComposerInstall(): boolean {
    if (!existsSync(autoloadPath)) return true;
    if (!existsSync(lockPath)) return false;
    return statSync(lockPath).mtimeMs > statSync(autoloadPath).mtimeMs;
}
type CliServer = Awaited<ReturnType<typeof runCLI>>;

export const test = base.extend<{}, { cli: CliServer }>({
    // worker-scoped: läuft einmal pro Test-Worker, nicht pro Test
    cli: [
        // @ts-ignore
        async ({}, use) => {
            const cli = await runCLI({
                command: 'server',
                mount: [
                    {
                        hostPath: './',
                        vfsPath: '/wordpress/wp-content/plugins/audio-on-every-block',
                    },
                ],
                blueprint: {
                    preferredVersions: { php: '8.4', wp: 'latest' },
                    login: true,
                    steps: [
                        {
                            step: 'activatePlugin',
                            pluginPath: 'audio-on-every-block/audio-on-every-block.php',
                        },
                    ],
                },
            });

            await use(cli);

            await cli?.server?.close();
        },
        { scope: 'worker' },
    ],
});

// @ts-ignore
export { expect } from '@playwright/test';
