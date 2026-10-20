/**
 * Remote demo video URLs (e.g. Supabase storage).
 * Leave empty until hosted URLs are available; the UI falls back to poster images.
 */
export const DEDUCTO_DEMO_VIDEO_URL =
  "https://www.youtube.com/watch?v=vJEunl6gTyU";
export const DRAWLY_DEMO_VIDEO_URL =
  "https://hawpoletxxttinbynktb.supabase.co/storage/v1/object/sign/files/wdemo.mp4?token=eyJraWQiOiIyYTI1MmZjOC1kMWQ1LTQ4NWQtYjk2YS04MDk4ZGVkNDkwMzAiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJmaWxlcy93ZGVtby5tcDQiLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzkyMDYyNTI2LCJleHAiOjE4MjM1OTg1MjZ9.8X4S3mcIPCj-Q75p4swffnpvMrFVabanPOEtE5rCAoO7brxWP3av-gGQbF4437uKisj3X_w9bujJPCdn-U5u-Q";
export const MINI_WALLET_DEMO_VIDEO_URL =
  "https://hawpoletxxttinbynktb.supabase.co/storage/v1/object/sign/files/miniwalletDemo.mp4?token=eyJraWQiOiIyYTI1MmZjOC1kMWQ1LTQ4NWQtYjk2YS04MDk4ZGVkNDkwMzAiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJmaWxlcy9taW5pd2FsbGV0RGVtby5tcDQiLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzkyMDYyNDYwLCJleHAiOjE4NTUxMzQ0NjB9.RQAb9XVOtyyxRhoVrbMhLX85S8ngYo3Dm_h9keIZOR6IeIQsVSYAJGzYiDV4yRyak8mEbfYsoPAUeE4KsgHvWg";

export const demoVideoUrlByProjectId: Record<string, string> = {
  deducto: DEDUCTO_DEMO_VIDEO_URL,
  drawly: DRAWLY_DEMO_VIDEO_URL,
  wallet: MINI_WALLET_DEMO_VIDEO_URL,
};

export const introUrlByProjectId: Record<string, string> = {
  deducto: "https://www.youtube.com/watch?v=KjcJTcAT34A",
};
