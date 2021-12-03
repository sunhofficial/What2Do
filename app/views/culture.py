import pandas as pd
from selenium import webdriver
import time
import googlemaps
from selenium.webdriver.common.keys import Keys
import urllib.request
import sys

options = webdriver.ChromeOptions()
options.add_argument('window-size=1000,800')

driver = webdriver.Chrome('chromedriver.exe', options=options)

list1 = []
list2 = []
list3 = []
list4 = []
list5 = []
list6 = []

keyword = "창경궁"
#keyword = sys.argv[1]
kakao_map_search_url = f"https://map.kakao.com/?q={keyword}"
driver.get(kakao_map_search_url)
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
list1.append("압도적인 궁궐의 위상으로 눈 호강도 하고! 해시계, 풍기대 등 옛 선조들의 지혜도 엿볼 수 있는 창경궁!")

keyword = "창경궁150"
kakao_map_search_url = f"https://map.kakao.com/?q={keyword}"
driver.get(kakao_map_search_url)
time.sleep(1)


resName = driver.find_element_by_css_selector(
    "#info\.search\.place\.list > li:nth-child(1) > div.head_item.clickArea > strong > a.link_name").text
reviewNum = driver.find_element_by_css_selector(
    "#info\.search\.place\.list > li:nth-child(1) > div.rating.clickArea > a > em").text
rate = driver.find_element_by_css_selector(
    "#info\.search\.place\.list > li:nth-child(1) > div.rating.clickArea > span.score > em").text
address = driver.find_element_by_css_selector(
    "#info\.search\.place\.list > li:nth-child(1) > div.info_item > div.addr > p:nth-child(1)").text

list2.append(resName)
list2.append(reviewNum)
list2.append(rate)
list2.append(address)
list2.append(
    "돈가스 찐 맛집 창경궁 150! 돈가스 위에 펼쳐져있는 카레가 우리의 입맛을 한층 더 돋워준다고! 돈가스뿐만이 아니라 닭튀김도 맛나다!")

keyword = "창덕궁"
kakao_map_search_url = f"https://map.kakao.com/?q={keyword}"
driver.get(kakao_map_search_url)
time.sleep(1)

resName = driver.find_element_by_css_selector(
    "#info\.search\.place\.list > li:nth-child(1) > div.head_item.clickArea > strong > a.link_name").text
reviewNum = driver.find_element_by_css_selector(
    "#info\.search\.place\.list > li:nth-child(1) > div.rating.clickArea > a > em").text
rate = driver.find_element_by_css_selector(
    "#info\.search\.place\.list > li:nth-child(1) > div.rating.clickArea > span.score > em").text
address = driver.find_element_by_css_selector(
    "#info\.search\.place\.list > li:nth-child(1) > div.info_item > div.addr > p:nth-child(1)").text

list3.append(resName)
list3.append(reviewNum)
list3.append(rate)
list3.append(address)
list3.append(
    "유네스코 세계유산에도 등록되어있는 창덕궁! 조선왕조 3대 태종 때 지어진 곳으로 건축과 조경이 매우 화려하고 이쁜곳으로 유명해!")

keyword = "미쉬매쉬"
kakao_map_search_url = f"https://map.kakao.com/?q={keyword}"
driver.get(kakao_map_search_url)
time.sleep(1)

resName = driver.find_element_by_css_selector(
    "#info\.search\.place\.list > li:nth-child(1) > div.head_item.clickArea > strong > a.link_name > strong").text
reviewNum = driver.find_element_by_css_selector(
    "#info\.search\.place\.list > li:nth-child(1) > div.rating.clickArea > a > em").text
rate = driver.find_element_by_css_selector(
    "#info\.search\.place\.list > li:nth-child(1) > div.rating.clickArea > span.score > em").text
address = driver.find_element_by_css_selector(
    "#info\.search\.place\.list > li:nth-child(1) > div.info_item > div.addr > p:nth-child(1)").text

list4.append(resName)
list4.append(reviewNum)
list4.append(rate)
list4.append(address)
list4.append(
    "궁궐 맛집 안에선 꼭 언급이 되는 미쉬매쉬! 여기는 단순히 맛집이란 단어 하나만으론 형용이 안되고 꼭 '뷰 맛집'이라는 타이틀이 걸린다!")

keyword = "경복궁"
kakao_map_search_url = f"https://map.kakao.com/?q={keyword}"
driver.get(kakao_map_search_url)
time.sleep(1)

resName = driver.find_element_by_css_selector(
    "#info\.search\.place\.list > li:nth-child(1) > div.head_item.clickArea > strong > a.link_name").text
reviewNum = driver.find_element_by_css_selector(
    "#info\.search\.place\.list > li:nth-child(1) > div.rating.clickArea > a > em").text
rate = driver.find_element_by_css_selector(
    "#info\.search\.place\.list > li:nth-child(1) > div.rating.clickArea > span.score > em").text
address = driver.find_element_by_css_selector(
    "#info\.search\.place\.list > li:nth-child(1) > div.info_item > div.addr > p:nth-child(1)").text

list5.append(resName)
list5.append(reviewNum)
list5.append(rate)
list5.append(address)
list5.append(
    "모든 궁궐들이 단풍 명소로 꼽히지만 이곳 경복궁이 요즘 단풍 명소로 급부상하는 이유는 4년 만에 향원정이 부활했기 때문!")


keyword = "숭례도담"
kakao_map_search_url = f"https://map.kakao.com/?q={keyword}"
driver.get(kakao_map_search_url)
time.sleep(1)

resName = driver.find_element_by_css_selector(
    "#info\.search\.place\.list > li:nth-child(1) > div.head_item.clickArea > strong > a.link_name").text
reviewNum = driver.find_element_by_css_selector(
    "#info\.search\.place\.list > li:nth-child(1) > div.rating.clickArea > a > em").text
rate = driver.find_element_by_css_selector(
    "#info\.search\.place\.list > li:nth-child(1) > div.rating.clickArea > span.score > em").text
address = driver.find_element_by_css_selector(
    "#info\.search\.place\.list > li:nth-child(1) > div.info_item > div.addr > p:nth-child(1)").text

list6.append(resName)
list6.append(reviewNum)
list6.append(rate)
list6.append(address)
list6.append(
    "김치찜 보쌈 낚지볶음 대파전 등등의 여러 한식들이 즐비한 이곳 숭례도담! 덕수궁에서 우리나라의 정취를 즐겼다면 한식도 먹어줘야지~")

frame = pd.DataFrame([list1, list2, list3, list4, list5, list6])
frame.columns = ['가게 이름', '리뷰수', '평점', '주소', '소개']

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

#driver = webdriver.Chrome()
for i, shopName in enumerate(frame['가게 이름'].tolist()):
    driver.get("https://www.google.co.kr/imghp?hl=ko&tab=ri&ogbl")
    elem = driver.find_element_by_name("q")
    elem.send_keys(shopName)
    elem.send_keys(Keys.RETURN)
    driver.find_elements_by_css_selector(".rg_i.Q4LuWd")[1].click()
    time.sleep(3)
    imgUrl = driver.find_element_by_css_selector(
        ".n3VNCb").get_attribute("src")
    urllib.request.urlretrieve(imgUrl, str(i)+".jpg")


driver.quit()

# Encoding
sys.stdout.reconfigure(encoding = 'utf-8')
# Node로 정보 전달
print(frame)