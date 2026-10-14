// 권역별 대학 목록(이름, 위치, 좌표, 가까운 지하철역). 지도 위 대학 스팟으로 표시됩니다.
const universities = [
  { name: "가톨릭대학교(서울)", district: "서초구", lat: 37.5007, lon: 127.0045, line: "3호선", station: "고속터미널", extraLines: ["7호선", "9호선"] },
  { name: "감리교신학대학교", district: "서대문구", lat: 37.5670, lon: 126.9619, line: "5호선", station: "서대문", extraLines: ["3호선"], offsetX: -7, offsetY: -5 },
  { name: "강서대학교", district: "강서구", lat: 37.5487, lon: 126.8546, line: "5호선", station: "우장산" },
  { name: "건국대학교(서울)", district: "광진구", lat: 37.5408, lon: 127.0793, line: "2호선", station: "건대입구", extraLines: ["7호선"] },
  { name: "경기대학교(서울)", district: "서대문구", lat: 37.5637, lon: 126.9620, line: "5호선", station: "서대문", extraLines: ["2호선"] },
  { name: "경희대학교(서울)", district: "동대문구", lat: 37.5963, lon: 127.0525, line: "1호선", station: "회기" },
  { name: "고려대학교(서울)", district: "성북구", lat: 37.5896, lon: 127.0324, line: "6호선", station: "고려대" },
  { name: "광운대학교", district: "노원구", lat: 37.6195, lon: 127.0597, line: "1호선", station: "광운대" },
  { name: "국민대학교", district: "성북구", lat: 37.6109, lon: 126.9973, line: "4호선", station: "길음", extraLines: ["우이신설선"] },
  { name: "덕성여자대학교", district: "도봉구", lat: 37.6513, lon: 127.0167, line: "4호선", station: "수유", extraLines: ["우이신설선"] },
  { name: "동국대학교(서울)", district: "중구", lat: 37.5582, lon: 127.0002, line: "3호선", station: "동대입구" },
  { name: "동덕여자대학교", district: "성북구", lat: 37.6068, lon: 127.0414, line: "6호선", station: "월곡" },
  { name: "명지대학교(서울)", district: "서대문구", lat: 37.5801, lon: 126.9231, line: "6호선", station: "새절", extraLines: ["3호선"] },
  { name: "삼육대학교", district: "노원구", lat: 37.6426, lon: 127.1069, line: "6호선", station: "화랑대" },
  { name: "상명대학교(서울)", district: "종로구", lat: 37.6026, lon: 126.9554, line: "3호선", station: "경복궁" },
  { name: "서강대학교", district: "마포구", lat: 37.5509, lon: 126.9410, line: "경의중앙선", station: "서강대", extraLines: ["2호선", "6호선"] },
  { name: "서경대학교", district: "성북구", lat: 37.6150, lon: 127.0136, line: "4호선", station: "길음", extraLines: ["우이신설선"] },
  { name: "서울과학기술대학교", district: "노원구", lat: 37.6317, lon: 127.0775, line: "7호선", station: "공릉" },
  { name: "서울교육대학교", district: "서초구", lat: 37.4897, lon: 127.0164, line: "2호선", station: "교대", extraLines: ["3호선", "신분당선"] },
  { name: "서울기독대학교", district: "은평구", lat: 37.6000, lon: 126.9152, line: "6호선", station: "응암" },
  { name: "서울대학교", district: "관악구", lat: 37.4599, lon: 126.9519, line: "2호선", station: "서울대입구", extraLines: ["9호선", "신림선"] },
  { name: "서울시립대학교", district: "동대문구", lat: 37.5839, lon: 127.0586, line: "1호선", station: "청량리" },
  { name: "서울여자대학교", district: "노원구", lat: 37.6281, lon: 127.0905, line: "6호선", station: "화랑대" },
  { name: "서울한영대학교", district: "구로구", lat: 37.4966, lon: 126.8529, line: "1호선", station: "개봉" },
  { name: "성공회대학교", district: "구로구", lat: 37.4875, lon: 126.8258, line: "1호선", station: "온수", extraLines: ["7호선"] },
  { name: "성균관대학교(서울)", district: "종로구", lat: 37.5884, lon: 126.9936, line: "4호선", station: "혜화" },
  { name: "성신여자대학교", district: "성북구", lat: 37.5912, lon: 127.0222, line: "4호선", station: "성신여대입구", extraLines: ["6호선", "우이신설선"] },
  { name: "세종대학교", district: "광진구", lat: 37.5503, lon: 127.0730, line: "7호선", station: "어린이대공원", extraLines: ["5호선"] },
  { name: "숙명여자대학교", district: "용산구", lat: 37.5459, lon: 126.9647, line: "4호선", station: "숙대입구", extraLines: ["6호선"] },
  { name: "숭실대학교", district: "동작구", lat: 37.4963, lon: 126.9575, line: "7호선", station: "숭실대입구" },
  { name: "연세대학교(서울)", district: "서대문구", lat: 37.5658, lon: 126.9386, line: "2호선", station: "신촌" },
  { name: "육군사관학교", district: "노원구", lat: 37.6239, lon: 127.0983, line: "6호선", station: "화랑대" },
  { name: "이화여자대학교", district: "서대문구", lat: 37.5618, lon: 126.9468, line: "2호선", station: "이대" },
  { name: "장로회신학대학교", district: "광진구", lat: 37.5509, lon: 127.1030, line: "5호선", station: "광나루" },
  { name: "중앙대학교(서울)", district: "동작구", lat: 37.5047, lon: 126.9570, line: "9호선", station: "흑석", extraLines: ["7호선"] },
  { name: "총신대학교", district: "동작구", lat: 37.4889, lon: 126.9667, line: "4호선", station: "총신대입구", extraLines: ["7호선"] },
  { name: "추계예술대학교", district: "서대문구", lat: 37.5628, lon: 126.9530, line: "2호선", station: "아현" },
  { name: "태재대학교", district: "종로구", lat: 37.5827, lon: 126.9889, line: "3호선", station: "안국" },
  { name: "한국성서대학교", district: "노원구", lat: 37.6486, lon: 127.0647, line: "7호선", station: "중계" },
  { name: "한국예술종합학교", district: "성북구", lat: 37.6044, lon: 127.0568, line: "6호선", station: "돌곶이", extraLines: ["1호선"] },
  { name: "한국외국어대학교(서울)", district: "동대문구", lat: 37.5973, lon: 127.0598, line: "1호선", station: "외대앞" },
  { name: "한국체육대학교", district: "송파구", lat: 37.5197, lon: 127.1308, line: "5호선", station: "올림픽공원", extraLines: ["9호선"] },
  { name: "한성대학교", district: "성북구", lat: 37.5829, lon: 127.0106, line: "4호선", station: "한성대입구" },
  { name: "한양대학교(서울)", district: "성동구", lat: 37.5572, lon: 127.0454, line: "2호선", station: "한양대", extraLines: ["5호선"] },
  { name: "홍익대학교(서울)", district: "마포구", lat: 37.5514, lon: 126.9250, line: "2호선", station: "홍대입구", extraLines: ["6호선"] }
];

universities.forEach(d => { d.lines = [d.line, ...(d.extraLines || [])]; });

const gyeonggiUniversities = [
  {
        "name": "가천대학교(성남)",
        "district": "성남시",
        "lat": 37.4513,
        "lon": 127.1293,
        "line": "",
        "station": "경기권"
  },
  {
        "name": "가톨릭대학교(부천)",
        "district": "부천시",
        "lat": 37.4876,
        "lon": 126.8017,
        "line": "",
        "station": "경기권",
        "offsetX": 9,
        "offsetY": -7
  },
  {
        "name": "강남대학교",
        "district": "용인시",
        "lat": 37.2759,
        "lon": 127.1329,
        "line": "",
        "station": "경기권"
  },
  {
        "name": "경기대학교(수원)",
        "district": "수원시",
        "lat": 37.3005,
        "lon": 127.0369,
        "line": "",
        "station": "경기권",
        "offsetX": -10,
        "offsetY": -8
  },
  {
        "name": "경동대학교(양주)",
        "district": "양주시",
        "lat": 37.8115,
        "lon": 127.0612,
        "line": "",
        "station": "경기권"
  },
  {
        "name": "경희대학교(용인)",
        "district": "용인시",
        "lat": 37.2429,
        "lon": 127.0802,
        "line": "",
        "station": "경기권"
  },
  {
        "name": "국립한국교통대학교(의왕)",
        "district": "의왕시",
        "lat": 37.3141,
        "lon": 126.9526,
        "line": "",
        "station": "경기권",
        "offsetX": -9,
        "offsetY": -8
  },
  {
        "name": "단국대학교(죽전)",
        "district": "용인시",
        "lat": 37.3219,
        "lon": 127.1261,
        "line": "",
        "station": "경기권",
        "offsetX": -7,
        "offsetY": -10
  },
  {
        "name": "대진대학교",
        "district": "포천시",
        "lat": 37.8739,
        "lon": 127.1569,
        "line": "",
        "station": "경기권",
        "offsetX": -9,
        "offsetY": -7
  },
  {
        "name": "동양대학교(동두천)",
        "district": "동두천시",
        "lat": 37.9006,
        "lon": 127.0608,
        "line": "",
        "station": "경기권"
  },
  {
        "name": "루터대학교",
        "district": "용인시",
        "lat": 37.274,
        "lon": 127.141,
        "line": "",
        "station": "경기권",
        "offsetX": 20,
        "offsetY": -2
  },
  {
        "name": "명지대학교(용인)",
        "district": "용인시",
        "lat": 37.2217,
        "lon": 127.1878,
        "line": "",
        "station": "경기권",
        "offsetX": -15,
        "offsetY": 5
  },
  {
        "name": "서울신학대학교",
        "district": "부천시",
        "lat": 37.4866,
        "lon": 126.7827,
        "line": "",
        "station": "경기권",
        "offsetX": -9,
        "offsetY": 8
  },
  {
        "name": "서울장신대학교",
        "district": "광주시",
        "lat": 37.4125,
        "lon": 127.2571,
        "line": "",
        "station": "경기권"
  },
  {
        "name": "성결대학교",
        "district": "안양시",
        "lat": 37.3918,
        "lon": 126.9271,
        "line": "",
        "station": "경기권",
        "offsetX": -10,
        "offsetY": -2
  },
  {
        "name": "성균관대학교(수원)",
        "district": "수원시",
        "lat": 37.2938,
        "lon": 126.975,
        "line": "",
        "station": "경기권",
        "offsetX": 10,
        "offsetY": 8
  },
  {
        "name": "수원가톨릭대학교",
        "district": "화성시",
        "lat": 37.2125,
        "lon": 126.9815,
        "line": "",
        "station": "경기권",
        "offsetX": -10,
        "offsetY": -9
  },
  {
        "name": "수원대학교",
        "district": "화성시",
        "lat": 37.2095,
        "lon": 126.9766,
        "line": "",
        "station": "경기권",
        "offsetX": 9,
        "offsetY": 8
  },
  {
        "name": "신한대학교(의정부/동두천)",
        "district": "의정부시",
        "lat": 37.7426,
        "lon": 127.0337,
        "line": "",
        "station": "경기권"
  },
  {
        "name": "아신대학교",
        "district": "양평군",
        "lat": 37.5126,
        "lon": 127.4435,
        "line": "",
        "station": "경기권"
  },
  {
        "name": "아주대학교",
        "district": "수원시",
        "lat": 37.282,
        "lon": 127.0435,
        "line": "",
        "station": "경기권",
        "offsetX": 16,
        "offsetY": -8
  },
  {
        "name": "안양대학교(안양)",
        "district": "안양시",
        "lat": 37.3925,
        "lon": 126.9198,
        "line": "",
        "station": "경기권",
        "offsetX": 10,
        "offsetY": 3
  },
  {
        "name": "예원예술대학교(양주)",
        "district": "양주시",
        "lat": 37.779,
        "lon": 127.045,
        "line": "",
        "station": "경기권"
  },
  {
        "name": "용인대학교",
        "district": "용인시",
        "lat": 37.2275,
        "lon": 127.1688,
        "line": "",
        "station": "경기권",
        "offsetX": 10,
        "offsetY": 9
  },
  {
        "name": "을지대학교(성남의정부)",
        "district": "성남시",
        "lat": 37.4612,
        "lon": 127.1651,
        "line": "",
        "station": "경기권",
        "offsetX": 8,
        "offsetY": -6
  },
  {
        "name": "중부대학교(고양)",
        "district": "고양시",
        "lat": 37.7105,
        "lon": 126.8898,
        "line": "",
        "station": "경기권"
  },
  {
        "name": "동국대학교(고양)",
        "district": "고양시",
        "lat": 37.6787,
        "lon": 126.8062,
        "line": "",
        "station": "경기권",
        "offsetX": -9,
        "offsetY": 8
  },
  {
        "name": "중앙대학교(안성)",
        "district": "안성시",
        "lat": 37.0037,
        "lon": 127.2264,
        "line": "",
        "station": "경기권",
        "offsetX": -8,
        "offsetY": 5
  },
  {
        "name": "중앙승가대학교",
        "district": "김포시",
        "lat": 37.6579,
        "lon": 126.6806,
        "line": "",
        "station": "경기권"
  },
  {
        "name": "차의과학대학교",
        "district": "포천시",
        "lat": 37.8565,
        "lon": 127.1612,
        "line": "",
        "station": "경기권",
        "offsetX": 9,
        "offsetY": 8
  },
  {
        "name": "칼빈대학교",
        "district": "용인시",
        "lat": 37.3052,
        "lon": 127.1282,
        "line": "",
        "station": "경기권",
        "offsetX": 14,
        "offsetY": -10
  },
  {
        "name": "평택대학교",
        "district": "평택시",
        "lat": 36.9946,
        "lon": 127.0895,
        "line": "",
        "station": "경기권"
  },
  {
        "name": "한경국립대학교",
        "district": "안성시",
        "lat": 37.0118,
        "lon": 127.264,
        "line": "",
        "station": "경기권",
        "offsetX": 8,
        "offsetY": -5
  },
  {
        "name": "한국공학대학교",
        "district": "시흥시",
        "lat": 37.3402,
        "lon": 126.7335,
        "line": "",
        "station": "경기권"
  },
  {
        "name": "한국외국어대학교(용인)",
        "district": "용인시",
        "lat": 37.3377,
        "lon": 127.2683,
        "line": "",
        "station": "경기권"
  },
  {
        "name": "한국항공대학교",
        "district": "고양시",
        "lat": 37.6006,
        "lon": 126.8644,
        "line": "",
        "station": "경기권"
  },
  {
        "name": "한세대학교",
        "district": "군포시",
        "lat": 37.3426,
        "lon": 126.9537,
        "line": "",
        "station": "경기권",
        "offsetX": 14,
        "offsetY": -8
  },
  {
        "name": "한신대학교",
        "district": "오산시",
        "lat": 37.1938,
        "lon": 127.0238,
        "line": "",
        "station": "경기권",
        "offsetX": 12,
        "offsetY": 11
  },
  {
        "name": "한양대학교(ERICA)",
        "district": "안산시",
        "lat": 37.2982,
        "lon": 126.8385,
        "line": "",
        "station": "경기권"
  },
  {
        "name": "협성대학교",
        "district": "화성시",
        "lat": 37.2135,
        "lon": 126.9516,
        "line": "",
        "station": "경기권",
        "offsetX": -14,
        "offsetY": 9
  },
  {
        "name": "화성의과학대학교",
        "district": "화성시",
        "lat": 37.203,
        "lon": 126.84,
        "line": "",
        "station": "경기권"
  }
];

const incheonUniversities = [
  {
        "name": "가천대학교(인천)",
        "district": "연수구",
        "lat": 37.4556,
        "lon": 126.657,
        "line": "",
        "station": "인천권",
        "offsetX": -8,
        "offsetY": -7
  },
  {
        "name": "경인교육대학교",
        "district": "계양구",
        "lat": 37.5388,
        "lon": 126.7226,
        "line": "",
        "station": "인천권"
  },
  {
        "name": "안양대학교(강화)",
        "district": "강화군",
        "lat": 37.7355,
        "lon": 126.4886,
        "line": "",
        "station": "인천권"
  },
  {
        "name": "연세대학교(인천)",
        "district": "연수구",
        "lat": 37.3827,
        "lon": 126.6708,
        "line": "",
        "station": "인천권",
        "offsetX": 9,
        "offsetY": 8
  },
  {
        "name": "인천가톨릭대학교(인천/강화)",
        "district": "연수구",
        "lat": 37.3862,
        "lon": 126.6572,
        "line": "",
        "station": "인천권",
        "offsetX": -9,
        "offsetY": -8
  },
  {
        "name": "인천대학교",
        "district": "연수구",
        "lat": 37.375,
        "lon": 126.6328,
        "line": "",
        "station": "인천권",
        "offsetX": 10,
        "offsetY": -8
  },
  {
        "name": "인하대학교",
        "district": "미추홀구",
        "lat": 37.45,
        "lon": 126.6535,
        "line": "",
        "station": "인천권",
        "offsetX": 9,
        "offsetY": 8
  },
  {
        "name": "청운대학교(인천)",
        "district": "미추홀구",
        "lat": 37.4577,
        "lon": 126.6507,
        "line": "",
        "station": "인천권",
        "offsetX": -9,
        "offsetY": 7
  }
];

const gangwonUniversities = [
  {
        "name": "가톨릭관동대학교",
        "district": "강릉시",
        "lat": 37.7377,
        "lon": 128.8737,
        "line": "",
        "station": "강원권"
  },
  {
        "name": "강원대학교(강릉원주)",
        "district": "강릉시",
        "lat": 37.7702,
        "lon": 128.8694,
        "offsetX": 10,
        "offsetY": 8,
        "line": "",
        "station": "강원권"
  },
  {
        "name": "강원대학교(춘천삼척)",
        "district": "춘천시",
        "lat": 37.8692,
        "lon": 127.7447,
        "line": "",
        "station": "강원권"
  },
  {
        "name": "경동대학교(고성문막)",
        "district": "원주시",
        "lat": 37.3137,
        "lon": 127.8197,
        "line": "",
        "station": "강원권"
  },
  {
        "name": "상지대학교",
        "district": "원주시",
        "lat": 37.3692,
        "lon": 127.9293,
        "offsetX": -9,
        "offsetY": -8,
        "line": "",
        "station": "강원권"
  },
  {
        "name": "연세대학교(미래)",
        "district": "원주시",
        "lat": 37.2797,
        "lon": 127.9006,
        "offsetX": 9,
        "offsetY": 8,
        "line": "",
        "station": "강원권"
  },
  {
        "name": "춘천교육대학교",
        "district": "춘천시",
        "lat": 37.8563,
        "lon": 127.7452,
        "offsetX": 9,
        "offsetY": 8,
        "line": "",
        "station": "강원권"
  },
  {
        "name": "한라대학교",
        "district": "원주시",
        "lat": 37.3032,
        "lon": 127.9087,
        "offsetX": -8,
        "offsetY": 8,
        "line": "",
        "station": "강원권"
  },
  {
        "name": "한림대학교",
        "district": "춘천시",
        "lat": 37.8856,
        "lon": 127.7377,
        "offsetX": -8,
        "offsetY": -8,
        "line": "",
        "station": "강원권"
  }
];

gyeonggiUniversities.forEach(d => { d.lines = [d.line, ...(d.extraLines || [])]; });
incheonUniversities.forEach(d => { d.lines = [d.line, ...(d.extraLines || [])]; });

const chungcheongUniversities = [
  {
        "name": "건양대학교(대전)",
        "district": "서구",
        "lat": 36.3062,
        "lon": 127.3423,
        "line": "",
        "station": "충청권"
  },
  {
        "name": "국군간호사관학교",
        "district": "유성구",
        "lat": 36.3912,
        "lon": 127.3517,
        "line": "",
        "station": "충청권"
  },
  {
        "name": "국립한밭대학교",
        "district": "유성구",
        "lat": 36.3508,
        "lon": 127.3007,
        "offsetX": -8,
        "offsetY": -7,
        "line": "",
        "station": "충청권"
  },
  {
        "name": "대전대학교",
        "district": "동구",
        "lat": 36.3365,
        "lon": 127.4596,
        "line": "",
        "station": "충청권"
  },
  {
        "name": "대전신학대학교",
        "district": "대덕구",
        "lat": 36.3586,
        "lon": 127.4204,
        "line": "",
        "station": "충청권"
  },
  {
        "name": "목원대학교",
        "district": "서구",
        "lat": 36.3247,
        "lon": 127.3387,
        "offsetX": 9,
        "offsetY": 8,
        "line": "",
        "station": "충청권"
  },
  {
        "name": "배재대학교",
        "district": "서구",
        "lat": 36.3208,
        "lon": 127.3673,
        "line": "",
        "station": "충청권"
  },
  {
        "name": "우송대학교",
        "district": "동구",
        "lat": 36.3371,
        "lon": 127.4456,
        "offsetX": -9,
        "offsetY": -7,
        "line": "",
        "station": "충청권"
  },
  {
        "name": "을지대학교(대전)",
        "district": "중구",
        "lat": 36.3332,
        "lon": 127.4104,
        "line": "",
        "station": "충청권"
  },
  {
        "name": "충남대학교",
        "district": "유성구",
        "lat": 36.3663,
        "lon": 127.3447,
        "offsetX": 9,
        "offsetY": 8,
        "line": "",
        "station": "충청권"
  },
  {
        "name": "한국과학기술원",
        "district": "유성구",
        "lat": 36.3721,
        "lon": 127.3605,
        "line": "",
        "station": "충청권"
  },
  {
        "name": "한국침례신학대학교",
        "district": "유성구",
        "lat": 36.3883,
        "lon": 127.3026,
        "line": "",
        "station": "충청권"
  },
  {
        "name": "한남대학교",
        "district": "대덕구",
        "lat": 36.3546,
        "lon": 127.4236,
        "offsetX": 9,
        "offsetY": 8,
        "line": "",
        "station": "충청권"
  },
  {
        "name": "고려대학교(세종)",
        "district": "세종시",
        "lat": 36.6097,
        "lon": 127.2868,
        "offsetX": -5,
        "offsetY": -5,
        "line": "",
        "station": "충청권"
  },
  {
        "name": "대전가톨릭대학교",
        "district": "세종시",
        "lat": 36.6581,
        "lon": 127.2844,
        "line": "",
        "station": "충청권"
  },
  {
        "name": "홍익대학교(세종)",
        "district": "세종시",
        "lat": 36.6207,
        "lon": 127.2882,
        "offsetX": 5,
        "offsetY": 5,
        "line": "",
        "station": "충청권"
  },
  {
        "name": "건양대학교(논산)",
        "district": "논산시",
        "lat": 36.1877,
        "lon": 127.0982,
        "line": "",
        "station": "충청권"
  },
  {
        "name": "경찰대학",
        "district": "아산시",
        "lat": 36.7905,
        "lon": 127.0685,
        "line": "",
        "station": "충청권"
  },
  {
        "name": "공주교육대학교",
        "district": "공주시",
        "lat": 36.4693,
        "lon": 127.1221,
        "offsetX": -8,
        "offsetY": -7,
        "line": "",
        "station": "충청권"
  },
  {
        "name": "국립공주대학교",
        "district": "공주시",
        "lat": 36.4699,
        "lon": 127.1401,
        "offsetX": 9,
        "offsetY": 8,
        "line": "",
        "station": "충청권"
  },
  {
        "name": "금강대학교",
        "district": "논산시",
        "lat": 36.3028,
        "lon": 127.1979,
        "line": "",
        "station": "충청권"
  },
  {
        "name": "나사렛대학교",
        "district": "천안시서북구",
        "lat": 36.7852,
        "lon": 127.1484,
        "line": "",
        "station": "충청권"
  },
  {
        "name": "남서울대학교",
        "district": "천안시서북구",
        "lat": 36.9105,
        "lon": 127.1458,
        "line": "",
        "station": "충청권"
  },
  {
        "name": "단국대학교(천안)",
        "district": "천안시동남구",
        "lat": 36.8345,
        "lon": 127.1686,
        "line": "",
        "station": "충청권"
  },
  {
        "name": "백석대학교",
        "district": "천안시동남구",
        "lat": 36.8397,
        "lon": 127.1839,
        "offsetX": 9,
        "offsetY": 8,
        "line": "",
        "station": "충청권"
  },
  {
        "name": "상명대학교(천안)",
        "district": "천안시동남구",
        "lat": 36.8329,
        "lon": 127.1771,
        "offsetX": -9,
        "offsetY": -8,
        "line": "",
        "station": "충청권"
  },
  {
        "name": "선문대학교",
        "district": "아산시",
        "lat": 36.7987,
        "lon": 127.0758,
        "offsetX": 9,
        "offsetY": 8,
        "line": "",
        "station": "충청권"
  },
  {
        "name": "세한대학교(당진)",
        "district": "당진시",
        "lat": 36.9028,
        "lon": 126.6508,
        "line": "",
        "station": "충청권"
  },
  {
        "name": "순천향대학교",
        "district": "아산시",
        "lat": 36.7698,
        "lon": 126.9302,
        "line": "",
        "station": "충청권"
  },
  {
        "name": "유원대학교(아산)",
        "district": "아산시",
        "lat": 36.7772,
        "lon": 127.0224,
        "line": "",
        "station": "충청권"
  },
  {
        "name": "중부대학교(금산)",
        "district": "금산군",
        "lat": 36.1854,
        "lon": 127.4671,
        "line": "",
        "station": "충청권"
  },
  {
        "name": "청운대학교(홍성)",
        "district": "홍성군",
        "lat": 36.5802,
        "lon": 126.6602,
        "line": "",
        "station": "충청권"
  },
  {
        "name": "한국기술교육대학교",
        "district": "천안시동남구",
        "lat": 36.7645,
        "lon": 127.2829,
        "line": "",
        "station": "충청권"
  },
  {
        "name": "한국전통문화대학교",
        "district": "부여군",
        "lat": 36.3097,
        "lon": 126.9192,
        "line": "",
        "station": "충청권"
  },
  {
        "name": "한서대학교",
        "district": "서산시",
        "lat": 36.6898,
        "lon": 126.5862,
        "line": "",
        "station": "충청권"
  },
  {
        "name": "호서대학교",
        "district": "아산시",
        "lat": 36.7369,
        "lon": 127.0746,
        "line": "",
        "station": "충청권"
  },
  {
        "name": "가톨릭꽃동네대학교",
        "district": "청주시상당구",
        "lat": 36.6137,
        "lon": 127.5937,
        "line": "",
        "station": "충청권"
  },
  {
        "name": "건국대학교(글로컬)",
        "district": "충주시",
        "lat": 36.9496,
        "lon": 127.9098,
        "line": "",
        "station": "충청권"
  },
  {
        "name": "공군사관학교",
        "district": "청주시상당구",
        "lat": 36.6254,
        "lon": 127.5051,
        "line": "",
        "station": "충청권"
  },
  {
        "name": "국립한국교통대학교(충주증평)",
        "district": "충주시",
        "lat": 36.9684,
        "lon": 127.8713,
        "offsetX": 9,
        "offsetY": 8,
        "line": "",
        "station": "충청권"
  },
  {
        "name": "극동대학교",
        "district": "음성군",
        "lat": 36.8851,
        "lon": 127.5962,
        "line": "",
        "station": "충청권"
  },
  {
        "name": "서원대학교",
        "district": "청주시서원구",
        "lat": 36.6253,
        "lon": 127.4829,
        "line": "",
        "station": "충청권"
  },
  {
        "name": "세명대학교",
        "district": "제천시",
        "lat": 37.1793,
        "lon": 128.1945,
        "line": "",
        "station": "충청권"
  },
  {
        "name": "우석대학교(진천)",
        "district": "진천군",
        "lat": 36.9024,
        "lon": 127.4437,
        "line": "",
        "station": "충청권"
  },
  {
        "name": "유원대학교(영동)",
        "district": "영동군",
        "lat": 36.1754,
        "lon": 127.7767,
        "line": "",
        "station": "충청권"
  },
  {
        "name": "중원대학교",
        "district": "괴산군",
        "lat": 36.8159,
        "lon": 127.7866,
        "line": "",
        "station": "충청권"
  },
  {
        "name": "청주교육대학교",
        "district": "청주시서원구",
        "lat": 36.6161,
        "lon": 127.4859,
        "offsetX": -9,
        "offsetY": -7,
        "line": "",
        "station": "충청권"
  },
  {
        "name": "청주대학교",
        "district": "청주시청원구",
        "lat": 36.6516,
        "lon": 127.4959,
        "line": "",
        "station": "충청권"
  },
  {
        "name": "충북대학교",
        "district": "청주시서원구",
        "lat": 36.6286,
        "lon": 127.4563,
        "line": "",
        "station": "충청권"
  },
  {
        "name": "한국교원대학교",
        "district": "청주시흥덕구",
        "lat": 36.6094,
        "lon": 127.3613,
        "line": "",
        "station": "충청권"
  }
];

const gyeongsangUniversities = [
  {
        "name": "경북대학교(대구)",
        "district": "대구시",
        "lat": 35.8890975,
        "lon": 128.6143223,
        "line": "",
        "station": "???"
  },
  {
        "name": "계명대학교",
        "district": "대구시",
        "lat": 35.8535543,
        "lon": 128.4814938,
        "line": "",
        "station": "???"
  },
  {
        "name": "대구경북과학기술원",
        "district": "대구시",
        "lat": 35.7056387,
        "lon": 128.455011,
        "line": "",
        "station": "???"
  },
  {
        "name": "대구교육대학교",
        "district": "대구시",
        "lat": 35.8514316,
        "lon": 128.5877392,
        "line": "",
        "station": "???"
  },
  {
        "name": "경북대학교(상주)",
        "district": "상주시",
        "lat": 36.3791,
        "lon": 128.1452,
        "line": "",
        "station": "???"
  },
  {
        "name": "경운대학교",
        "district": "구미시",
        "lat": 36.1672258,
        "lon": 128.4678766,
        "line": "",
        "station": "???"
  },
  {
        "name": "경일대학교",
        "district": "경산시",
        "lat": 35.911069,
        "lon": 128.8020451,
        "line": "",
        "station": "???"
  },
  {
        "name": "국립경국대학교",
        "district": "안동시",
        "lat": 36.5414385,
        "lon": 128.797564,
        "line": "",
        "station": "???"
  },
  {
        "name": "국립금오공과대학교",
        "district": "구미시",
        "lat": 36.1456315,
        "lon": 128.3878819,
        "line": "",
        "station": "???"
  },
  {
        "name": "김천대학교",
        "district": "김천시",
        "lat": 36.1394043,
        "lon": 128.0818389,
        "line": "",
        "station": "???"
  },
  {
        "name": "대구가톨릭대학교",
        "district": "경산시",
        "lat": 35.9089671,
        "lon": 128.807422,
        "line": "",
        "station": "???"
  },
  {
        "name": "대구대학교",
        "district": "경산시",
        "lat": 35.904539,
        "lon": 128.8428133,
        "line": "",
        "station": "???"
  },
  {
        "name": "대구예술대학교",
        "district": "칠곡군",
        "lat": 36.0314201,
        "lon": 128.5080915,
        "line": "",
        "station": "???"
  },
  {
        "name": "대구한의대학교",
        "district": "경산시",
        "lat": 35.7939881,
        "lon": 128.7773243,
        "line": "",
        "station": "???"
  },
  {
        "name": "대신대학교",
        "district": "경산시",
        "lat": 35.8039448,
        "lon": 128.7451373,
        "line": "",
        "station": "???"
  },
  {
        "name": "동국대학교(WISE)",
        "district": "경주시",
        "lat": 35.8647938,
        "lon": 129.1910309,
        "line": "",
        "station": "???"
  },
  {
        "name": "동양대학교(영주)",
        "district": "영주시",
        "lat": 36.885803,
        "lon": 128.5297793,
        "line": "",
        "station": "???"
  },
  {
        "name": "신경주대학교",
        "district": "경주시",
        "lat": 35.8292658,
        "lon": 129.1632394,
        "line": "",
        "station": "???"
  },
  {
        "name": "영남대학교",
        "district": "경산시",
        "lat": 35.8304916,
        "lon": 128.7521801,
        "line": "",
        "station": "???"
  },
  {
        "name": "영남신학대학교",
        "district": "경산시",
        "lat": 35.8806359,
        "lon": 128.8164972,
        "line": "",
        "station": "???"
  },
  {
        "name": "위덕대학교",
        "district": "경주시",
        "lat": 36.0161111,
        "lon": 129.2825906,
        "line": "",
        "station": "???"
  },
  {
        "name": "포항공과대학교",
        "district": "포항시",
        "lat": 36.0128106,
        "lon": 129.3267049,
        "line": "",
        "station": "???"
  },
  {
        "name": "한동대학교",
        "district": "포항시",
        "lat": 36.1023014,
        "lon": 129.3892661,
        "line": "",
        "station": "???"
  },
  {
        "name": "경성대학교",
        "district": "부산시",
        "lat": 35.1384384,
        "lon": 129.100099,
        "line": "",
        "station": "???"
  },
  {
        "name": "고신대학교",
        "district": "부산시",
        "lat": 35.0794694,
        "lon": 129.0621819,
        "line": "",
        "station": "???"
  },
  {
        "name": "국립부경대학교",
        "district": "부산시",
        "lat": 35.1311678,
        "lon": 129.1048238,
        "line": "",
        "station": "???"
  },
  {
        "name": "국립한국해양대학교",
        "district": "부산시",
        "lat": 35.074408,
        "lon": 129.0873481,
        "line": "",
        "station": "???"
  },
  {
        "name": "동명대학교",
        "district": "부산시",
        "lat": 35.1246838,
        "lon": 129.1013782,
        "line": "",
        "station": "???"
  },
  {
        "name": "동서대학교",
        "district": "부산시",
        "lat": 35.1461199,
        "lon": 129.0070172,
        "line": "",
        "station": "???"
  },
  {
        "name": "동아대학교",
        "district": "부산시",
        "lat": 35.1188094,
        "lon": 128.968085,
        "line": "",
        "station": "???"
  },
  {
        "name": "동의대학교",
        "district": "부산시",
        "lat": 35.1443208,
        "lon": 129.0363092,
        "line": "",
        "station": "???"
  },
  {
        "name": "부산가톨릭대학교",
        "district": "부산시",
        "lat": 35.2446753,
        "lon": 129.096872,
        "line": "",
        "station": "???"
  },
  {
        "name": "부산교육대학교",
        "district": "부산시",
        "lat": 35.1956932,
        "lon": 129.0770825,
        "line": "",
        "station": "???"
  },
  {
        "name": "부산대학교(부산)",
        "district": "부산시",
        "lat": 35.2322428,
        "lon": 129.0838245,
        "line": "",
        "station": "???"
  },
  {
        "name": "부산외국어대학교",
        "district": "부산시",
        "lat": 35.2661895,
        "lon": 129.0805533,
        "line": "",
        "station": "???"
  },
  {
        "name": "신라대학교",
        "district": "부산시",
        "lat": 35.1720404,
        "lon": 128.997735,
        "line": "",
        "station": "???"
  },
  {
        "name": "영산대학교",
        "district": "양산시",
        "lat": 35.4283525,
        "lon": 129.1446374,
        "line": "",
        "station": "???"
  },
  {
        "name": "울산과학기술원",
        "district": "울산시",
        "lat": 35.5773071,
        "lon": 129.1876189,
        "line": "",
        "station": "???"
  },
  {
        "name": "울산대학교",
        "district": "울산시",
        "lat": 35.541876,
        "lon": 129.2575838,
        "line": "",
        "station": "???"
  },
  {
        "name": "가야대학교",
        "district": "김해시",
        "lat": 35.2698163,
        "lon": 128.872321,
        "line": "",
        "station": "???"
  },
  {
        "name": "경남대학교",
        "district": "창원시",
        "lat": 35.1843209,
        "lon": 128.5550964,
        "line": "",
        "station": "???"
  },
  {
        "name": "경상국립대학교(진주)",
        "district": "진주시",
        "lat": 35.1543,
        "lon": 128.0981,
        "line": "",
        "station": "???"
  },
  {
        "name": "경상국립대학교(통영)",
        "district": "통영시",
        "lat": 34.8399,
        "lon": 128.4179,
        "line": "",
        "station": "???"
  },
  {
        "name": "국립창원대학교",
        "district": "창원시",
        "lat": 35.2470031,
        "lon": 128.6919277,
        "line": "",
        "station": "???"
  },
  {
        "name": "부산대학교(양산밀양)",
        "district": "양산시",
        "lat": 35.3169,
        "lon": 129.0116,
        "line": "",
        "station": "???"
  },
  {
        "name": "부산장신대학교",
        "district": "김해시",
        "lat": 35.2563662,
        "lon": 128.8616244,
        "line": "",
        "station": "???"
  },
  {
        "name": "인제대학교",
        "district": "김해시",
        "lat": 35.2528101,
        "lon": 128.9005153,
        "line": "",
        "station": "???"
  },
  {
        "name": "진주교육대학교",
        "district": "진주시",
        "lat": 35.1858251,
        "lon": 128.0679685,
        "line": "",
        "station": "???"
  },
  {
        "name": "창신대학교",
        "district": "창원시",
        "lat": 35.2446929,
        "lon": 128.5995961,
        "line": "",
        "station": "???"
  },
  {
        "name": "해군사관학교",
        "district": "창원시",
        "lat": 35.2383,
        "lon": 128.62203,
        "line": "",
        "station": "???"
  }
];

const jeollaUniversities = [
  {
        "name": "광신대학교",
        "district": "광주시",
        "lat": 35.2160343,
        "lon": 126.8848545,
        "line": "",
        "station": "??????"
  },
  {
        "name": "광주과학기술원",
        "district": "광주시",
        "lat": 35.2281557,
        "lon": 126.8421662,
        "line": "",
        "station": "??????"
  },
  {
        "name": "광주교육대학교",
        "district": "광주시",
        "lat": 35.1647147,
        "lon": 126.9256972,
        "line": "",
        "station": "??????"
  },
  {
        "name": "광주대학교",
        "district": "광주시",
        "lat": 35.1059037,
        "lon": 126.8961699,
        "line": "",
        "station": "??????"
  },
  {
        "name": "광주여자대학교",
        "district": "광주시",
        "lat": 35.1631229,
        "lon": 126.7963249,
        "line": "",
        "station": "??????"
  },
  {
        "name": "남부대학교",
        "district": "광주시",
        "lat": 35.2064503,
        "lon": 126.8402985,
        "line": "",
        "station": "??????"
  },
  {
        "name": "송원대학교",
        "district": "광주시",
        "lat": 35.1081845,
        "lon": 126.8732664,
        "line": "",
        "station": "??????"
  },
  {
        "name": "전남대학교(광주)",
        "district": "광주시",
        "lat": 35.1729465,
        "lon": 126.9011018,
        "line": "",
        "station": "??????"
  },
  {
        "name": "조선대학교",
        "district": "광주시",
        "lat": 35.1460056,
        "lon": 126.9343635,
        "line": "",
        "station": "??????"
  },
  {
        "name": "호남대학교",
        "district": "광주시",
        "lat": 35.1499677,
        "lon": 126.7650403,
        "line": "",
        "station": "??????"
  },
  {
        "name": "호남신학대학교",
        "district": "광주시",
        "lat": 35.1401103,
        "lon": 126.9105687,
        "line": "",
        "station": "??????"
  },
  {
        "name": "광주가톨릭대학교",
        "district": "나주시",
        "lat": 35.0154352,
        "lon": 126.8638867,
        "line": "",
        "station": "??????"
  },
  {
        "name": "국립목포대학교",
        "district": "무안군",
        "lat": 34.9103066,
        "lon": 126.4402102,
        "line": "",
        "station": "??????"
  },
  {
        "name": "국립목포해양대학교",
        "district": "목포시",
        "lat": 34.7927293,
        "lon": 126.3662687,
        "line": "",
        "station": "??????"
  },
  {
        "name": "국립순천대학교",
        "district": "순천시",
        "lat": 34.9667613,
        "lon": 127.4809231,
        "line": "",
        "station": "??????"
  },
  {
        "name": "동신대학교",
        "district": "나주시",
        "lat": 35.0496249,
        "lon": 126.7179925,
        "line": "",
        "station": "??????"
  },
  {
        "name": "목포가톨릭대학교",
        "district": "목포시",
        "lat": 34.8266828,
        "lon": 126.4196979,
        "line": "",
        "station": "??????"
  },
  {
        "name": "세한대학교(영암)",
        "district": "영암군",
        "lat": 34.7487845,
        "lon": 126.4847063,
        "line": "",
        "station": "??????"
  },
  {
        "name": "영산선학대학교",
        "district": "영광군",
        "lat": 35.3273523,
        "lon": 126.44134,
        "line": "",
        "station": "??????"
  },
  {
        "name": "전남대학교(여수)",
        "district": "여수시",
        "lat": 34.7728,
        "lon": 127.6987,
        "line": "",
        "station": "??????"
  },
  {
        "name": "초당대학교",
        "district": "무안군",
        "lat": 34.9800473,
        "lon": 126.4702665,
        "line": "",
        "station": "??????"
  },
  {
        "name": "한국에너지공과대학교",
        "district": "나주시",
        "lat": 35.0105339,
        "lon": 126.803887,
        "line": "",
        "station": "??????"
  },
  {
        "name": "국립군산대학교",
        "district": "군산시",
        "lat": 35.9503457,
        "lon": 126.6803568,
        "line": "",
        "station": "??????"
  },
  {
        "name": "예수대학교",
        "district": "전주시",
        "lat": 35.8160936,
        "lon": 127.1347885,
        "line": "",
        "station": "??????"
  },
  {
        "name": "예원예술대학교(임실)",
        "district": "임실군",
        "lat": 35.6139,
        "lon": 127.2845,
        "line": "",
        "station": "??????"
  },
  {
        "name": "우석대학교(삼례)",
        "district": "완주군",
        "lat": 35.9121128,
        "lon": 127.0659136,
        "line": "",
        "station": "??????"
  },
  {
        "name": "원광대학교",
        "district": "익산시",
        "lat": 35.971714,
        "lon": 126.9602237,
        "line": "",
        "station": "??????"
  },
  {
        "name": "전북대학교",
        "district": "전주시",
        "lat": 35.8411407,
        "lon": 127.13159,
        "line": "",
        "station": "??????"
  },
  {
        "name": "전주교육대학교",
        "district": "전주시",
        "lat": 35.8091641,
        "lon": 127.1538039,
        "line": "",
        "station": "??????"
  },
  {
        "name": "전주대학교",
        "district": "전주시",
        "lat": 35.8161642,
        "lon": 127.0888841,
        "line": "",
        "station": "??????"
  },
  {
        "name": "한일장신대학교",
        "district": "완주군",
        "lat": 35.764283,
        "lon": 127.2058605,
        "line": "",
        "station": "??????"
  },
  {
        "name": "호원대학교",
        "district": "군산시",
        "lat": 35.9679262,
        "lon": 126.8637877,
        "line": "",
        "station": "??????"
  },
  {
        "name": "제주국제대학교",
        "district": "제주시",
        "lat": 33.4427733,
        "lon": 126.5698311,
        "line": "",
        "station": "??????"
  },
  {
        "name": "제주대학교",
        "district": "제주시",
        "lat": 33.457237,
        "lon": 126.5642939,
        "line": "",
        "station": "??????"
  }
];


gangwonUniversities.forEach(d => { d.lines = [d.line, ...(d.extraLines || [])]; });
gyeongsangUniversities.forEach(d => { d.lines = [d.line, ...(d.extraLines || [])]; });
jeollaUniversities.forEach(d => { d.lines = [d.line, ...(d.extraLines || [])]; });
chungcheongUniversities.forEach(d => {
  if (["동구", "중구", "서구", "유성구", "대덕구"].includes(d.district)) d.district = "대전시";
  if (String(d.district || "").startsWith("천안시")) d.district = "천안시";
  if (String(d.district || "").startsWith("청주시")) d.district = "청주시";
});
chungcheongUniversities.forEach(d => { d.lines = [d.line, ...(d.extraLines || [])]; });
