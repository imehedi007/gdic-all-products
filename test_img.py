import urllib.request
import re

url = "http://localhost:3000/portfolio-by-market-segment"
req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
with urllib.request.urlopen(req) as res:
    html = res.read().decode("utf-8")
    img_tags = re.findall(r'<img[^>]+>', html)
    print(f"Total img tags on market segment page: {len(img_tags)}")
    for i, tag in enumerate(img_tags[:5]):
        print(f"Img {i}: {tag}")

