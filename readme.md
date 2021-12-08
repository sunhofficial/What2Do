## What 2 DO(W2D.)

> > ### **_"COVID-19가 유행한지 어느새 2년..."_**

## Description
----------

우리는 거리두기로 인해 밖에 나가는 것을 잃었고 방구석 인생을 살았을 것이다.

하지만 **_봄은_** 찾아온다. 리오프닝을 점차 시작하는 상황에서 새내기는 물론이고 우리는 매 순간 어디로 가서 뭐하고 놀지 고민한다.


_그래서 이를 해결하기 위해 테마, 장소 그리고 무려 그에 따른 리스트까지 추천해주는 기능을 만들었다._



### Built With

Frontend
- ejs
- BootStrap
- JQuery

Backend
- Node.js
- Express.js
- MongoDB
- Kakao API
- AWS(EC2 Linux)

## Getting Started(Installation)

---

### Prerequisites

- Get a KAKAO API KEY In kakao Developer ([kakao developer](https://developers.kakao.com/))\
-   You can get 'Client ID' and 'Client Secret' from kakao.
- Get your own Mongo_URI in Mongo Atlas.([Mongo Atlas] (https://www.mongodb.com/atlas/database))\
-   Else you can run in your local DB.
    


### Installation

    1. 설치하고자 하는 폴더에 들어가서 git bash 터미널 창에서 실행시켜준다.
 > git clone http://khuhub.khu.ac.kr/What2Do/What2Do.git
 
    2. 필요한 모듈들을 설치해준다.

>           $ npm install


    4. API KEY 적용

       kakaoapkey.js appkey="본인의 kakao developer javascript api key"
    5. 실행
        
>       $ npm run start
       
## Usage

1. 로그인 혹은 회원가입
![login](/uploads/6d6eea6f3c1d31cf869f18236d90a058/login.png)


2. 원하는 목적지가 있으면 map을 누르고 없으면 오늘 뭐하지 버튼 클릭 
![button__1_](/uploads/a6eb980030041709cca6b70140b0e422/button__1_.png)
3. 원하는 테마 선택
![theme](/uploads/7a1f6421e0f7d56fcae17f247b707f54/theme.png)
4. 원하는 목적지 입력
![dud](/uploads/56e6427d75b2a23a3fa4a21423db1f2f/dud.png)
5. 정하지 못하였을 경우 각 테마에 따른 항목 중 고르기 버튼
![food](/uploads/f6310ad339847b86cb58e5570e73ed81/food.png)


## RoadMap

---

- 로그인 및 회원가입 구현
- 카카오 소셜 로그인 연동
- 메인페이지 실행 버튼 및 테마 옵션들 구현
- 테마별 각 페이지 구현
- 카카오 맵 연동 구현
- 위치 검색 자동완성 구현
- 위치 검색과 카카오 맵 연동
- 테마별 키워드 추천 및 맵 연동

## Contributing

> What 2 DO 프로젝트는 기능적으로 무한한 가능성이 있습니다.
> 그래서 다양한 기능들의 추가는 모두에게 열려있습니다.
> Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

    If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
    Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch
3. Commit your Changes
4. Push to the Branch
5. Open a Pull Request

## License(API)

- Licensed under the [MIT LIcense](LICENSE).

## Contact

> - 김재웅 (kju2405@khu.ac.kr)
> - 이선호 (sunh803@khu.ac.kr)
> - 최은지 (ejalice123@khu.ac.kr)

