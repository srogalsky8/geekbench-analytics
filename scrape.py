import urllib.request
from bs4 import BeautifulSoup
from bs4 import NavigableString
from bs4 import Tag
import csv

# csv file to write to
with open('dist/surface-latest-50.csv', mode='w') as test_write:
    test_writer = csv.writer(test_write, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL)

    test_writer.writerow(['id', 'href', 'device', 'cpu', 'clockSpeed', 'numCores', 'platform', 'username', 'singleCoreScore', 'multiCoreScore'])

    # f = open("test.html", "r")
    # testFile = f.read()
    # soup = BeautifulSoup(testFile)

    # page to read from
    for i in range(1, 50):
        page = urllib.request.urlopen('https://browser.geekbench.com/v4/cpu/search?page='+str(i)+'&q=surface&utf8=%E2%9C%93')
        soup = BeautifulSoup(page)


        # get this page's table
        table = soup.find("table", class_="table geekbench3-index")
        rows = table.find_all("tr")

        for row in rows:
            if isinstance(row, NavigableString):
                continue
            if isinstance(row, Tag):
                bench = {}
                cols = row.find_all("td")
                if len(cols) > 0:
                    for col in cols:
                        colName = col['class'][0]
                        if colName == 'added':
                            bench['date'] = col.contents[0].replace('\n', '')
                        elif colName == 'model':
                            titleTag = col.select("a")[0]
                            cpuTag = col.select("span")[0]
                            bench['href'] = titleTag['href']
                            bench['id'] = int(bench['href'].split('/')[3])
                            bench['device'] = titleTag.contents[0]
                            bench['cpu'] = {}
                            cpuArr = cpuTag.contents[0].split('\n')
                            bench['cpu']['name'] = cpuArr[1]
                            bench['cpu']['clockSpeed'] = cpuArr[2]
                            bench['cpu']['numCores'] = int(cpuArr[3].strip('()').split(' ')[0])
                        elif colName == 'platform':
                            bench['platform'] = col.contents[0].replace('\n', '')
                        elif colName == 'user':
                            bench['user'] = col.contents[0].replace('\n', '')
                        elif colName == 'score':
                            if not bench.get('singleCoreScore'):
                                bench['singleCoreScore'] = int(col.contents[0].replace('\n', ''))
                            else:
                                bench['multiCoreScore'] = int(col.contents[0].replace('\n', ''))
                if bench.get('id'):
                    test_writer.writerow([bench['id'], bench['href'], bench['device'], bench['cpu']['name'], bench['cpu']['clockSpeed'], bench['cpu']['numCores'], bench['platform'], bench['user'], bench['singleCoreScore'], bench['multiCoreScore']])

