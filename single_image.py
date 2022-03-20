from icrawler.builtin import GoogleImageCrawler

google_crawler = GoogleImageCrawler(storage={'root_dir': './images'})

google_crawler.crawl('Vipera berus', max_num=3, file_idx_offset='auto')