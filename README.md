# Rayhan Gulati - Engineering Portfolio

A self-contained static site: plain HTML, CSS and JavaScript. No build step, no
dependencies, no backend. Everything runs from these files.

## Files
- `index.html` - the whole page
- `styles.css` - styling
- `script.js` - the photo carousels
- `photos/` - all images

## Deploy on Render (free static site)
1. Create a new GitHub repository (any name, e.g. `portfolio`) and upload all of
   these files to it - you can drag and drop the folder onto the repo page on
   github.com, no git needed.
2. In your Render dashboard: **New +** -> **Static Site**.
3. Connect the GitHub repo you just made.
4. Settings when asked:
   - **Build Command:** leave empty
   - **Publish Directory:** `.` (just a dot, meaning the repo root)
5. Click **Deploy**. Render gives you a public URL like
   `https://<name>.onrender.com` in about a minute.

Any edit later: replace files in the GitHub repo; Render redeploys automatically.

## Alternatives
Any static host works the same way - GitHub Pages, Netlify (drag the folder onto
app.netlify.com/drop), or Cloudflare Pages. There is nothing to compile.
