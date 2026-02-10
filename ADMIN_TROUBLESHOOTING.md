# Admin Panel Not Rendering - Troubleshooting Guide

## Issue

The admin panel HTML loads but the page appears blank or shows raw HTML without React components rendering.

## Quick Fixes to Try

### 1. Check Browser Console

Open your browser's Developer Tools (F12) and check the Console tab for errors:

- Look for JavaScript errors
- Look for failed network requests (especially for `.js` files)
- Look for CORS errors

### 2. Clear Browser Cache

- Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
- Or clear browser cache completely

### 3. Check Vercel Deployment Logs

1. Go to Vercel Dashboard → Your Project → Deployments
2. Click on the latest deployment
3. Check the **Build Logs** for errors
4. Check the **Function Logs** for runtime errors

### 4. Verify Environment Variables on Vercel

1. Go to Vercel Dashboard → Settings → Environment Variables
2. Make sure these are set:
   - `BLOB_READ_WRITE_TOKEN` (no quotes)
   - `DATABASE_URI`
   - `PAYLOAD_SECRET`
   - `NEXT_PUBLIC_SERVER_URL` (should be your Vercel URL)
   - `PAYLOAD_PUBLIC_SERVER_URL` (should be your Vercel URL)

### 5. Check if JavaScript Files Are Loading

In the browser Network tab:

- Look for `*.js` files
- Check if they're returning 200 status
- Check if they're being blocked

### 6. Redeploy on Vercel

Sometimes a fresh deployment fixes issues:

```bash
git add .
git commit -m "Fix admin panel rendering"
git push
```

### 7. Check for Build Errors

Look in Vercel build logs for:

- TypeScript errors
- Module not found errors
- Memory issues
- Timeout errors

## Common Causes

### A. Vercel Blob Storage Issue

If the Vercel Blob token is invalid, it might cause the build to partially fail.

**Fix:**

1. Verify token format: `vercel_blob_rw_<store_id>_<random_string>`
2. Make sure token has no quotes in Vercel environment variables
3. Redeploy after fixing

### B. Missing Environment Variables

**Fix:**
Add these to Vercel:

```
NEXT_PUBLIC_SERVER_URL=https://yarnie-crochet-web.vercel.app
PAYLOAD_PUBLIC_SERVER_URL=https://yarnie-crochet-web.vercel.app
```

### C. JavaScript Bundle Too Large

**Fix:**
Check build output for bundle size warnings

### D. CSP (Content Security Policy) Issues

**Fix:**
Check browser console for CSP errors

## Testing Locally

Test if admin works locally:

```bash
npm run build
npm run start
```

Then visit: `http://localhost:3000/admin`

If it works locally but not on Vercel, it's a deployment/environment issue.

## Still Not Working?

### Check These Files:

1. `src/app/(payload)/admin/[[...segments]]/page.tsx` - Should exist
2. `src/app/(payload)/layout.tsx` - Should exist
3. `src/payload.config.ts` - Check for errors

### Try Disabling Vercel Blob Temporarily

In `src/payload.config.ts`, the storage adapter is already conditional.
Make sure `BLOB_READ_WRITE_TOKEN` is set on Vercel.

### Check Payload Version Compatibility

All Payload packages should be version `3.59.1`:

```bash
npm list | grep @payloadcms
```

## Emergency Fix: Rollback

If nothing works, rollback to a previous working deployment in Vercel Dashboard.

## Get Help

If still stuck, check:

- Browser console errors (screenshot them)
- Vercel build logs (copy the errors)
- Vercel function logs (check for runtime errors)
