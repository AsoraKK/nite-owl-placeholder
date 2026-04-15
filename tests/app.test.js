import { describe, expect, it } from 'vitest';
import {
  buildCanonicalUrl,
  canAccessRoute,
  getRobotsDirective,
  isTestRoute,
  isVisibleRoute,
  normalizePath,
} from '../src/data.js';

describe('route scaffolding rules', () => {
  it('normalizes trailing slashes and query strings', () => {
    expect(normalizePath('/rods/?view=grid')).toBe('/rods');
  });

  it('keeps visible routes separate from hidden routes', () => {
    expect(isVisibleRoute('/checkout')).toBe(true);
    expect(isVisibleRoute('/checkout-test')).toBe(false);
  });

  it('flags hidden test routes', () => {
    expect(isTestRoute('/checkout-test')).toBe(true);
    expect(isTestRoute('/cart-test')).toBe(true);
  });

  it('blocks hidden test routes unless explicitly enabled', () => {
    expect(canAccessRoute('/checkout-test', { enableAdminTestRoutes: false })).toBe(false);
    expect(canAccessRoute('/checkout-test', { enableAdminTestRoutes: true })).toBe(true);
  });

  it('marks hidden test routes as noindex by default', () => {
    expect(getRobotsDirective('/checkout-test', { noindexTestRoutes: true })).toBe('noindex, nofollow, noarchive');
    expect(getRobotsDirective('/checkout', { noindexTestRoutes: true })).toBe('index, follow');
  });

  it('builds canonical urls from the configured base url', () => {
    expect(buildCanonicalUrl('/reels', { appBaseUrl: 'https://example.com/' })).toBe('https://example.com/reels');
  });
});
