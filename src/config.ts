/**
 * Configuration constants for Moltbot Sandbox
 */

/** Port that the Moltbot gateway listens on inside the container */
export const MOLTBOT_PORT = 18789;

/** Maximum time to wait for Moltbot to start (3 minutes) */
export const STARTUP_TIMEOUT_MS = 180_000;

/** Maximum time for the proxy handler to wait for the gateway before returning 503 */
export const GATEWAY_REQUEST_TIMEOUT_MS = 30_000;

/** Maximum time for containerFetch before aborting */
export const CONTAINER_FETCH_TIMEOUT_MS = 60_000;

/** Maximum time for the cron handler to wait for listProcesses */
export const CRON_TIMEOUT_MS = 15_000;

/** Mount path for R2 persistent storage inside the container */
export const R2_MOUNT_PATH = '/data/moltbot';

/**
 * R2 bucket name for persistent storage.
 * Can be overridden via R2_BUCKET_NAME env var for test isolation.
 */
export function getR2BucketName(env?: { R2_BUCKET_NAME?: string }): string {
  return env?.R2_BUCKET_NAME || 'moltbot-data';
}
