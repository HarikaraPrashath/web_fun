# Valentine's Day Landing Page - Customization Guide

## 🎁 Making It Personal

This beautiful Valentine's Day surprise page is fully customizable! Here's where to add your personal touches:

---

## 📝 Text Replacements

### Hero Section (`components/Hero.tsx`)
- **Line 41**: Replace `[Her Name]` with your girlfriend's name
- **Line 42**: Update the greeting message if desired

### Letter Section (`components/Letter.tsx`)
- **Lines 8-13**: Replace or edit the heartfelt lines with your own love messages
- Make them as romantic and personal as you want!
- **Line 71**: Replace `[Your Name]` with your name

### Valentine Question Section (`components/Valentine.tsx`)
- **Line 88**: Replace `[special place]` with the venue (e.g., "The Italian Restaurant Downtown")
- **Line 90**: Replace `[time]` with the time (e.g., "7:00 PM")
- **Line 91**: Customize the celebration message if desired

### Countdown Section (`components/Countdown.tsx`)
- **Line 26**: Update the target date/time. Currently set to Feb 14, 2026 at 6 PM
  - Format: `'2026-02-14T18:00:00'` (YYYY-MM-DDTHH:MM:SS)
- **Line 52**: Replace `[special time]` with your planned time

### Footer (`components/Footer.tsx`)
- **Line 15**: Customize the final message
- **Line 18**: Replace `[Your Name]` with your name

### Memory Captions (`components/Memories.tsx`)
- **Lines 7-25**: Update the 6 memory captions with real moments from your relationship
- These appear under each photo and make it extra personal

---

## 🖼️ Photos

Replace the placeholder photos with real memories:

1. `/public/photos/1.jpg` - Your first special moment together
2. `/public/photos/2.jpg` - Her beautiful smile
3. `/public/photos/3.jpg` - A cozy intimate moment
4. `/public/photos/4.jpg` - A joyful memory
5. `/public/photos/5.jpg` - Fun playful moment
6. `/public/photos/6.jpg` - Her at her best

**To add your photos:**
1. Prepare your images (JPG format works best)
2. Replace the files in `/public/photos/` with your own
3. Keep the same filenames (1.jpg, 2.jpg, etc.)

---

## 🎨 Customizing Colors

The romantic color palette uses these CSS variables in `app/globals.css`:

```css
--rose-50: #fdf2f8;    /* Light background */
--rose-100: #fce7f3;
--rose-200: #fbcfe8;
--rose-300: #f8b4d8;
--rose-400: #f472b6;
--rose-500: #ec4899;
--rose-600: #db2777;   /* Main text */
--rose-700: #be185d;   /* Darker text */
--rose-800: #9d174d;
```

Want different colors? You can:
- Change these hex values to your preferred colors
- Or modify the Tailwind classes (e.g., `text-rose-600` → `text-pink-600`)

---

## 🎭 Fonts

The site uses two beautiful Google Fonts:
- **Great Vibes**: Elegant cursive font for headings (very romantic!)
- **Poppins**: Clean, modern font for body text

To change fonts, edit `app/layout.tsx` and import different fonts from Google Fonts.

---

## ✨ Animation Tweaks

All animations use Framer Motion. Adjust timings:

- **Fade-in effects**: Change `duration` in transition objects
- **Scale effects**: Modify `scale` values in `initial` and `animate` props
- **Stagger effects**: Adjust `delay` values for sequential animations

Example in any component:
```tsx
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6 }}  // ← Change this number
```

---

## 🚀 Deployment

Once you've personalized everything:

### Using Vercel (Recommended - Free & Instant)
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Click "Deploy" - it's automatic!
5. Share the live URL with your girlfriend

### Alternative: Manual Deployment
```bash
npm run build
npm start
```

---

## 📱 Responsive Design

The page is fully responsive and looks beautiful on:
- ✅ Mobile phones (tested on all sizes)
- ✅ Tablets
- ✅ Desktops
- ✅ Large screens

The breakpoints use Tailwind's responsive prefixes (md:, lg:, etc.)

---

## 🎯 Pro Tips

1. **Test on Mobile**: Open your site on a phone before showing her
2. **Use Real Photos**: Personal photos > generic ones. Choose meaningful moments
3. **Heartfelt Messages**: The more personal the letter lines, the more impact
4. **Perfect Timing**: Plan to show her at a romantic moment
5. **Surprise Element**: Don't let her find out beforehand!

---

## 🐛 Troubleshooting

**Images not showing?**
- Make sure image files are in `/public/photos/`
- Check that filenames match exactly

**Animations not smooth?**
- Clear browser cache (Ctrl+Shift+Delete or Cmd+Shift+Delete)
- Try in a different browser

**Colors look different?**
- Some monitors display colors differently
- Test on different devices to see how she'll see it

---

## 💡 Want to Add More?

You can easily add:
- More memory photos (add 7.jpg, 8.jpg, etc. and update Memories.tsx)
- Additional letter lines (add more to the letterLines array)
- Music (add an audio element in Hero or Footer)
- Custom elements between sections

Feel free to mix and match and make it uniquely yours! ❤️

---

## 📞 Need Help?

The code is well-commented and uses Next.js 16 best practices. If you get stuck:
1. Check the component files - they have clear structure
2. Look for `[...]` placeholders - those are where you customize
3. The color scheme is consistent across the app for easy updates

---

Made with ❤️ for the love of your life. Good luck! 💕
