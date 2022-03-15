from icrawler.builtin import GoogleImageCrawler

google_crawler = GoogleImageCrawler(storage={'root_dir': './images'})

google_crawler.crawl('Rangifer tarandus tarandus', max_num=5, file_idx_offset='auto')