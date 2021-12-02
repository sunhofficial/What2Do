import pandas as pd
from selenium import webdriver
import time
import googlemaps

options = webdriver.ChromeOptions()
options.add_argument('window-size=1000,800')

driver = webdriver.Chrome('chromedriver.exe', options=options)

list1 = []
list2 = []
list3 = []

keyword = input()
kakao_map_search_url = f"https://map.kakao.com/?q={keyword}"
driver.get(kakao_map_search_url)
time.sleep(1)

button = driver.find_element_by_xpath(
    "/html/body/div[5]/div[2]/div[1]/div[7]/div[5]/div[1]/ol/li[2]/a")
driver.execute_script("arguments[0].click();", button)
time.sleep(1)

resName = driver.find_element_by_css_selector(
    "#info\.search\.place\.list > li:nth-child(1) > div.head_item.clickArea > strong > a.link_name").text
reviewNum = driver.find_element_by_css_selector(
    "#info\.search\.place\.list > li:nth-child(1) > div.rating.clickArea > a > em").text
rate = driver.find_element_by_css_selector(
    "#info\.search\.place\.list > li:nth-child(1) > div.rating.clickArea > span.score > em").text
address = driver.find_element_by_css_selector(
    "#info\.search\.place\.list > li:nth-child(1) > div.info_item > div.addr > p:nth-child(1)").text


list1.append(resName)
list1.append(reviewNum)
list1.append(rate)
list1.append(address)


resName = driver.find_element_by_css_selector(
    "#info\.search\.place\.list > li:nth-child(2) > div.head_item.clickArea > strong > a.link_name").text
reviewNum = driver.find_element_by_css_selector(
    "#info\.search\.place\.list > li:nth-child(2) > div.rating.clickArea > a > em").text
rate = driver.find_element_by_css_selector(
    "#info\.search\.place\.list > li:nth-child(2) > div.rating.clickArea > span.score > em").text
address = driver.find_element_by_css_selector(
    "#info\.search\.place\.list > li:nth-child(2) > div.info_item > div.addr > p:nth-child(1)").text

list2.append(resName)
list2.append(reviewNum)
list2.append(rate)
list2.append(address)

resName = driver.find_element_by_css_selector(
    "#info\.search\.place\.list > li:nth-child(3) > div.head_item.clickArea > strong > a.link_name").text
reviewNum = driver.find_element_by_css_selector(
    "#info\.search\.place\.list > li:nth-child(3) > div.rating.clickArea > a > em").text
rate = driver.find_element_by_css_selector(
    "#info\.search\.place\.list > li:nth-child(3) > div.rating.clickArea > span.score > em").text
address = driver.find_element_by_css_selector(
    "#info\.search\.place\.list > li:nth-child(3) > div.info_item > div.addr > p:nth-child(1)").text

list3.append(resName)
list3.append(reviewNum)
list3.append(rate)
list3.append(address)

frame = pd.DataFrame([list1, list2, list3])
frame.columns = ['가게 이름', '리뷰수', '평점', '주소']

gmaps_key = 'AIzaSyCI4ACwvGOoCKWbTtAz8wU17fDF5KCCWTA'
gmaps = googlemaps.Client(key=gmaps_key)

lat = []
lng = []
for name in frame['주소']:
    try:
        tmpMap = gmaps.geocode(name, language='ko')
        tmpLoc = tmpMap[0].get('geometry')
        lat.append(tmpLoc['location']['lat'])
        lng.append(tmpLoc['location']['lng'])
    except:
        print("{} Address Error".format(name))
        lat.append(None)
        lng.append(None)
frame['위도'] = lat
frame['경도'] = lng


# driver.quit()
