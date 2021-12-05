import pandas as pd
from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager
import time
from selenium.webdriver.common.keys import Keys
import urllib.request
import sys
from bs4 import BeautifulSoup

options = webdriver.ChromeOptions()
options.add_argument('window-size=1000,800')
# options.add_argument("headless")

driver = webdriver.Chrome(ChromeDriverManager().install(), options=options)

list1 = []
list2 = []
list3 = []
cnt = 1


# 사용자가 input 한 place 가져옴
keyword = sys.argv[1]

kakao_map_search_url = f"https://map.kakao.com/?q={keyword}"
driver.get(kakao_map_search_url)
time.sleep(0.2)

button = driver.find_element_by_xpath(
    "/html/body/div[5]/div[2]/div[1]/div[7]/div[5]/div[1]/ol/li[2]/a")
driver.execute_script("arguments[0].click();", button)
time.sleep(0.6)

while True:
    resName = driver.find_element_by_css_selector(
        f"#info\.search\.place\.list > li:nth-child({cnt}) > div.head_item.clickArea > strong > a.link_name").text
    if(resName.startswith('광고')):
        cnt += 1
    else:
        break

resName = driver.find_element_by_css_selector(
    f"#info\.search\.place\.list > li:nth-child({cnt}) > div.head_item.clickArea > strong > a.link_name").text
reviewNum = driver.find_element_by_css_selector(
    f"#info\.search\.place\.list > li:nth-child({cnt}) > div.rating.clickArea > a > em").text
rate = driver.find_element_by_css_selector(
    f"#info\.search\.place\.list > li:nth-child({cnt}) > div.rating.clickArea > span.score > em").text
address = driver.find_element_by_css_selector(
    f"#info\.search\.place\.list > li:nth-child({cnt}) > div.info_item > div.addr > p:nth-child(1)").text


list1.append(resName)
list1.append(reviewNum)
list1.append(rate)
list1.append(address)
cnt += 1


resName = driver.find_element_by_css_selector(
    f"#info\.search\.place\.list > li:nth-child({cnt}) > div.head_item.clickArea > strong > a.link_name").text
reviewNum = driver.find_element_by_css_selector(
    f"#info\.search\.place\.list > li:nth-child({cnt}) > div.rating.clickArea > a > em").text
rate = driver.find_element_by_css_selector(
    f"#info\.search\.place\.list > li:nth-child({cnt}) > div.rating.clickArea > span.score > em").text
address = driver.find_element_by_css_selector(
    f"#info\.search\.place\.list > li:nth-child({cnt}) > div.info_item > div.addr > p:nth-child(1)").text

list2.append(resName)
list2.append(reviewNum)
list2.append(rate)
list2.append(address)
cnt += 1

resName = driver.find_element_by_css_selector(
    f"#info\.search\.place\.list > li:nth-child({cnt}) > div.head_item.clickArea > strong > a.link_name").text
reviewNum = driver.find_element_by_css_selector(
    f"#info\.search\.place\.list > li:nth-child({cnt}) > div.rating.clickArea > a > em").text
rate = driver.find_element_by_css_selector(
    f"#info\.search\.place\.list > li:nth-child({cnt}) > div.rating.clickArea > span.score > em").text
address = driver.find_element_by_css_selector(
    f"#info\.search\.place\.list > li:nth-child({cnt}) > div.info_item > div.addr > p:nth-child(1)").text

list3.append(resName)
list3.append(reviewNum)
list3.append(rate)
list3.append(address)
cnt += 1

frame = pd.DataFrame([list1, list2, list3])
frame.columns = ['가게 이름', '리뷰수', '평점', '주소']


for i, shopName in enumerate(frame['가게 이름'].tolist()):
    driver.get("https://www.google.co.kr/imghp?hl=ko&tab=ri&ogbl")
    elem = driver.find_element_by_name("q")
    elem.send_keys(shopName)
    elem.send_keys(Keys.RETURN)
    driver.find_elements_by_css_selector(".rg_i.Q4LuWd")[1].click()
    time.sleep(0.2)
    imgUrl = driver.find_element_by_css_selector(
        ".n3VNCb").get_attribute("src")
    urllib.request.urlretrieve(
        imgUrl, "./app/public/images/food/"+str(shopName)+".jpg")


driver.quit()

# Encoding
sys.stdout.reconfigure(encoding='utf-8')
# Node로 정보 전달
print(frame)
