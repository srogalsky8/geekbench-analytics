import urllib.request
from bs4 import BeautifulSoup
from bs4 import NavigableString
from bs4 import Tag

page = urllib.request.urlopen('https://browser.geekbench.com/v4/cpu/search?utf8=%E2%9C%93&q=surface')

soup = BeautifulSoup(page)

table = soup.find("table", class_="table geekbench3-index")
rows = table.find_all("tr")

for row in rows:
    if isinstance(row, NavigableString):
        continue
    if isinstance(row, Tag):
        col = row.select("td.model")
        if len(col) > 0:
            print(col[0].select("a"))

