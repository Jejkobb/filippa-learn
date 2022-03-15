from time import sleep
from icrawler.builtin import GoogleImageCrawler
import codecs, json

class Specie:
    def __init__(self, latin, swe, fin, src):
        self.latin = latin
        self.swe = swe
        self.fin = fin
        self.src = src

google_crawler = GoogleImageCrawler(storage={'root_dir': './images'})

doc = codecs.open('daggdjur.txt', encoding='utf-8')

list_of_species = []

str_num = '000000'

for index, species in enumerate(doc, start=1):
    file_path = str_num[len(str(index)):]+str(index)+'.jpg'
    s = species.split(',')

    google_crawler.crawl(keyword=s[1], max_num=1, file_idx_offset='auto')

    sleep(10)

    list_of_species.append(Specie(s[0],s[1],s[2],file_path).__dict__)

for p in list_of_species:
    print(p)

json_string = json.dumps(list_of_species)

# Using a JSON string
with open('json_data.json', 'w') as outfile:
    outfile.write(json_string)