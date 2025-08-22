/**
 * Format milliseconds to MM:SS format
 * @param {number} ms - Time in milliseconds
 * @returns {string} Formatted time string (e.g., "3:45")
 */
export function formatTime(ms) {
  if (!ms || ms < 0) return '0:00';

  const minutes = Math.floor(ms / 60000);
  const seconds = Math.floor((ms % 60000) / 1000);

  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

/**
 * Format milliseconds to HH:MM:SS format for longer durations
 * @param {number} ms - Time in milliseconds
 * @returns {string} Formatted time string (e.g., "1:03:45")
 */
export function formatLongTime(ms) {
  if (!ms || ms < 0) return '0:00:00';

  const hours = Math.floor(ms / 3600000);
  const minutes = Math.floor((ms % 3600000) / 60000);
  const seconds = Math.floor((ms % 60000) / 1000);

  if (hours > 0) {
    return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }

  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

/**
 * Convert seconds to milliseconds
 * @param {number} seconds - Time in seconds
 * @returns {number} Time in milliseconds
 */
export function secondsToMs(seconds) {
  return seconds * 1000;
}

/**
 * Convert milliseconds to seconds
 * @param {number} ms - Time in milliseconds
 * @returns {number} Time in seconds
 */
export function msToSeconds(ms) {
  return Math.floor(ms / 1000);
}

/**
 * Format track duration from Spotify API format
 * @param {number} duration_ms - Duration in milliseconds from Spotify API
 * @returns {string} Formatted duration string
 */
export function formatTrackDuration(duration_ms) {
  return formatTime(duration_ms);
}