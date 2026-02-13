# 🎁 Valentine's Day Page - Setup Checklist

Follow these steps to make the page truly personal and ready to share!

---

## ✅ Step 1: Customize Text (5-10 minutes)

### Hero Section
- [ ] Update her name in `components/Hero.tsx` line 41
- [ ] Update your name in `components/Hero.tsx` (if customizing)

### Love Letter
- [ ] Edit 6 heartfelt lines in `components/Letter.tsx` lines 8-13
- [ ] Add your name in `components/Letter.tsx` line 71

### Valentine Question
- [ ] Set your date location in `components/Valentine.tsx` line 88
- [ ] Set your date time in `components/Valentine.tsx` line 90
- [ ] Customize celebration message in `components/Valentine.tsx` line 91

### Memories Section
- [ ] Write 6 personal memory captions in `components/Memories.tsx` lines 7-25
- [ ] Update countdown date in `components/Countdown.tsx` line 26 (if not Feb 14, 2026)

### Footer
- [ ] Add your name in `components/Footer.tsx` line 18

---

## ✅ Step 2: Add Your Photos (5-10 minutes)

Replace these placeholder images with real memories:

- [ ] `/public/photos/1.jpg` - First held hands moment or similar
- [ ] `/public/photos/2.jpg` - Her beautiful smile
- [ ] `/public/photos/3.jpg` - Intimate/cozy moment
- [ ] `/public/photos/4.jpg` - Happy/laughing together
- [ ] `/public/photos/5.jpg` - Fun playful moment
- [ ] `/public/photos/6.jpg` - Her at her absolute best

**Tips for best results:**
- Use clear, well-lit photos
- Square or near-square aspect ratio works best
- High resolution (1000x1000px+)
- Save as JPG format

---

## ✅ Step 3: Test Locally (5 minutes)

```bash
# Install dependencies (if not already done)
npm install

# Start development server
npm run dev

# Open in browser
# Visit http://localhost:3000
```

- [ ] Hero section looks good
- [ ] All 6 photos load correctly
- [ ] Animations are smooth
- [ ] Valentine "No" button moves away on hover
- [ ] Countdown timer works and shows correct date
- [ ] Everything looks great on mobile (resize browser to test)
- [ ] All text shows your personalized content
- [ ] Click "Yes" to see the surprise message and confetti

---

## ✅ Step 4: Review & Polish (3-5 minutes)

- [ ] All placeholder names replaced with real ones
- [ ] All memory captions are heartfelt and personal
- [ ] Photos are your favorite memories together
- [ ] Date and time for Valentine's celebration are correct
- [ ] No typos or grammar errors
- [ ] Color scheme feels romantic to you
- [ ] Animations aren't too fast or slow

---

## ✅ Step 5: Deploy to Live Web (2-5 minutes)

### Option A: Deploy with Vercel (Recommended - Free & Automatic)

1. [ ] Push your code to GitHub
   ```bash
   git add .
   git commit -m "Personal Valentine's page"
   git push origin main
   ```

2. [ ] Go to [vercel.com](https://vercel.com)
3. [ ] Click "New Project"
4. [ ] Select your GitHub repository
5. [ ] Click "Deploy"
6. [ ] Copy the live URL (e.g., `https://your-name-valentine.vercel.app`)
7. [ ] Test the live version on your phone
8. [ ] Share the URL with her! 💕

### Option B: Manual Build & Run

```bash
npm run build
npm start
```

---

## ✅ Step 6: The Big Moment! 💕

- [ ] Everything is tested and perfect
- [ ] You've created a beautiful memory
- [ ] Time to show her!

**Ideas for the big reveal:**
- Show her on a romantic dinner date
- Send her the link with a love note
- Have her open it on your phone at sunset
- Share it together and relive your memories
- Let her explore at her own pace

---

## 🚨 Common Issues & Fixes

**Photos not showing?**
- Make sure images are in `/public/photos/`
- Use exact filenames: `1.jpg`, `2.jpg`, etc.
- Check file size isn't too large (compress if needed)

**Animations look janky?**
- Clear browser cache
- Try a different browser
- Make sure device has decent specs

**Text still has placeholders?**
- Search for `[` in files to find all placeholders
- Ctrl+F to search and replace

**Countdown showing wrong date?**
- Edit line 26 in `components/Countdown.tsx`
- Format: `'YYYY-MM-DDTHH:MM:SS'`

---

## 📋 Optional Enhancements

Want to go even further? Here are some ideas:

- [ ] Add a favorite song (embed Spotify or add audio)
- [ ] Include a video message
- [ ] Add more memory photos (7th, 8th, etc.)
- [ ] Write longer, more detailed letters
- [ ] Add inside jokes as captions
- [ ] Create a custom color scheme
- [ ] Add her favorite flowers as background elements

---

## ✨ Final Checklist

Before you hit send/deploy:

- [ ] All text is personalized
- [ ] All photos are loaded
- [ ] Page loads instantly
- [ ] Mobile view looks beautiful
- [ ] Desktop view looks beautiful
- [ ] Animations are smooth
- [ ] No console errors (F12 to check)
- [ ] Live URL is shareable
- [ ] You're happy with it!

---

**Estimated Total Time: 20-30 minutes**

You've got this! This page will absolutely blow her away. Make sure you're there to see her reaction! 💕

---

Made with ❤️ for the most important person in your life
