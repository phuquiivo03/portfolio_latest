/**
 * Remote demo video URLs (e.g. Supabase storage).
 * Leave empty until hosted URLs are available; the UI falls back to poster images.
 */
export const DEDUCTO_DEMO_VIDEO_URL = "";
export const DRAWLY_DEMO_VIDEO_URL = "";
export const MINI_WALLET_DEMO_VIDEO_URL = "";

export const demoVideoUrlByProjectId: Record<string, string> = {
  deducto: DEDUCTO_DEMO_VIDEO_URL,
  drawly: DRAWLY_DEMO_VIDEO_URL,
  wallet: MINI_WALLET_DEMO_VIDEO_URL,
};
