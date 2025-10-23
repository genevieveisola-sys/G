# G

## How to Embed Canva Designs into README.md

There are several methods to embed or display Canva designs in your README:

### Method 1: Image Embed (Recommended)
1. In Canva, click **Share** → **Download** → Save as PNG/JPG
2. Upload the image to your repository or use a hosting service
3. Use this markdown code:

```markdown
![Canva Design](path/to/your/image.png)
```

Or with an external link:
```markdown
![Canva Design](https://your-image-url.com/image.png)
```

### Method 2: Canva Share Link
1. In Canva, click **Share** → **Get Link**
2. Copy the shareable link
3. Use this markdown code:

```markdown
[View Canva Design](https://www.canva.com/design/your-design-id/view)
```

### Method 3: Clickable Image Link
Combine an image with a link to the Canva design:

```markdown
[![Canva Design](path/to/your/image.png)](https://www.canva.com/design/your-design-id/view)
```

### Example:
```markdown
![My Design](https://via.placeholder.com/800x400.png?text=Your+Canva+Design+Here)
```

**Note:** GitHub README doesn't support iframe embeds, so image or link methods work best.