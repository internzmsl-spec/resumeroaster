# 🔥 Resume Roaster - AI-Powered Resume Analysis

An AI-powered resume analyzer that provides brutally honest feedback to help job seekers improve their resumes and land more interviews.

## ✨ Features

- **BYOK Model (Bring Your Own Key)**: Users provide their own Anthropic API key - maximum privacy and zero storage
- **Instant Analysis**: Get detailed resume feedback in 30 seconds
- **ATS Optimization**: Check your resume's compatibility with Applicant Tracking Systems
- **Actionable Feedback**: Specific suggestions with before/after examples
- **Lead Generation**: Built-in email capture and conversion CTAs for masterclass/consultation/course
- **Privacy-First**: Resume text is never stored on servers - processed client-side

## 🎯 What It Analyzes

1. **The Roast** - Brutal but constructive criticism of weak points
2. **Wins** - Recognition of what you're doing right
3. **ATS Score** - Compatibility score with keyword analysis
4. **Top 3 Rewrites** - Before/after examples of improved bullets
5. **Quick Wins** - Immediate improvements you can make
6. **Red Flags** - Career trajectory concerns

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Anthropic API key (get free at https://console.anthropic.com/settings/keys)


## 🔑 How Users Use It

1. **Get API Key**: Users get their free Anthropic API key from https://console.anthropic.com/settings/keys
2. **Enter Key**: Paste it into the app (stored in browser only)
3. **Upload Resume**: Drag-drop PDF or paste text
4. **Get Analysis**: Instant AI-powered feedback
5. **Capture Email**: Gate full report behind email capture
6. **Convert**: Show CTAs for masterclass/consultation/course

## 💰 Cost Economics

### User Cost (BYOK Model)
- Each analysis: ~$0.006 (2000 tokens)
- Users pay via their own Anthropic account
- You pay $0 for AI costs

### Your Costs
- Hosting: $0 (Vercel/Netlify free tier)
- Total: $0/month

## 🔒 Security & Privacy

- ✅ API keys stored in browser localStorage only
- ✅ Resume text never sent to your servers
- ✅ Direct API calls from browser to Anthropic
- ✅ No backend database required
- ✅ Users have full control over their data

## ⚙️ Configuration

### Environment Variables
No environment variables needed! Users bring their own API keys.

### Rate Limiting
Currently no rate limiting since users use their own API keys. Anthropic handles rate limits per user.

## 🐛 Troubleshooting

### PDF Upload Not Working
The current implementation requires pdf.js library for full PDF parsing. For MVP, users can paste resume text directly.

To add PDF support:
```bash
npm install pdfjs-dist
```

Then update the `extractTextFromPDF` function.

### API Key Invalid
Users should:
1. Check they copied the full key (starts with `sk-ant-`)
2. Verify key is active at https://console.anthropic.com
3. Ensure they have API credits

### Analysis Too Slow
- Each analysis takes 5-15 seconds (Claude API processing time)
- No optimization needed - this is normal for AI analysis

## 📝 Project Structure

```
resume-roaster/
├── app/
│   ├── resume-roaster.jsx    # Main component
│   ├── page.js                # Next.js page
│   ├── layout.js              # Layout with metadata
│   └── globals.css            # Global styles
├── package.json               # Dependencies
├── tailwind.config.js         # Tailwind configuration
├── next.config.js             # Next.js configuration
└── README.md                  # This file
```

## 🎨 Styling

Built with:
- **Tailwind CSS** - Utility-first styling
- **Lucide React** - Beautiful icons
- **Custom gradients** - Modern, engaging design

Modify colors in `tailwind.config.js` or directly in components.

## 🚢 Next Steps After Deployment

1. **SEO Optimization**:
   - Add meta tags for "resume analyzer", "ATS checker"
   - Create blog content around resume tips
   - Build backlinks

2. **Viral Growth**:
   - Add social share buttons
   - Create "Roast my resume" social media campaign
   - Encourage users to share results

3. **Conversion Optimization**:
   - A/B test email capture placement
   - Test different CTA copy
   - Add urgency elements (limited spots, etc.)

4. **Email Sequence**:
   - Day 0: Full report + quick tips
   - Day 3: Resume checklist + masterclass invite
   - Day 7: Success story case study
   - Day 14: Last call for masterclass

## 📈 Growth Tactics

### Content Marketing
- Write SEO blog posts on resume tips
- Share roast examples on social media
- Create YouTube videos using the tool

### Paid Ads
- Target: "resume help", "ATS optimization"
- Show before/after examples
- Free tool = high CTR

### Partnerships
- Career coaches
- Coding bootcamps
- Job boards

## 🤝 Support & Feedback

For questions or issues:
1. Check this README
2. Review the code comments
3. Test with sample resumes first
