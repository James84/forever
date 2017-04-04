from lxml import html # html parser module
import requests # html request library
import re # regex

class Site_Scraper(object):
    
    def __init__(self, url):
        self.root_url = url
        
    def scrape(self):
        page = requests.get(self.root_url)
        tree = html.fromstring(page.content)
        
        href = tree.xpath('//*[@id="content"]/table[1]/tr[2]/td[1]/table/tr[1]/td[2]/a/@href') 
        anchor_text = tree.xpath('//*[@id="content"]/table[1]/tr[2]/td[2]/table/tr[1]/td[2]/a/div/text()') 
        image_source = tree.xpath('//*[@id="product.image.small.524"]/@src')

        price = tree.xpath('//*[@id="content"]/table[1]/tr[2]/td[2]/table/tr[3]/td[3]/text()[3]')
        
        print (f"href: {href}")
        print (f"link: {anchor_text}")
        print (f"src: {image_source}")
        
        priceMatch = re.search(r"[0-9]+\.[0-9]+\sGBP", price[0])
    
        if priceMatch:
            print(priceMatch.group(0))
        else:
            print("No match")
        
        
site_scraper = Site_Scraper('https://shop.foreverliving.com/retail/entry/Shop.do?store=GBR&language=en&distribID=440500118040')

site_scraper.scrape()