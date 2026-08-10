<div align="center">

# 박재영

### 사용자 경험을 안정적인 데이터 흐름으로 완성하는 Java/Spring 백엔드 개발자

Spring Boot 기반 서비스에서 API, 데이터 모델, 배치 처리와 배포 환경을 직접 설계하고 구현합니다.  
기능이 동작하는 데서 멈추지 않고, **중복 처리, 실패 상황, 변경 이력, 재현 가능한 환경**까지 함께 고민합니다.

</div>

---

## About Me

- Java와 Spring Boot를 중심으로 백엔드 개발 역량을 쌓고 있습니다.
- 사용자에게 정해진 시점에 콘텐츠를 정확히 전달하는 **스케줄링, 상태 관리, 실패 처리**에 관심이 있습니다.
- 프론트엔드와 Android 개발 경험을 바탕으로, API를 설계할 때 데이터를 사용하는 쪽의 흐름도 함께 고려합니다.
- 음악, 콘텐츠, 팬덤 서비스처럼 사용자와 콘텐츠를 연결하는 플랫폼의 백엔드 개발에 관심이 있습니다.

---

## Core Strengths

### 안정적인 서비스 흐름 설계
타임캡슐 서비스에서 발송 완료 여부와 처리 여부를 분리해 중복 이메일 발송을 방지했습니다. 발송 실패는 별도 상태와 로그로 남겨 재처리할 수 있도록 설계했습니다.

### 변경과 재현을 고려한 개발
Flyway로 데이터베이스 스키마 변경 이력을 관리하고, Docker Compose로 개발 환경을 구성했습니다. 환경마다 다른 상태에서 발생하는 문제를 줄이고 변경 과정을 추적 가능하게 만들었습니다.

### 사용자 맥락에서 시작하는 문제 해결
시각장애인용 실내 내비게이션 프로젝트에서 음성 인터페이스와 LLM 기반 목적지 추출 흐름을 구현했습니다. 기술 자체보다 사용자가 실제로 겪는 제약과 대기 경험을 먼저 고려했습니다.

---

## Projects

### 다짐캡슐 | 온라인 타임캡슐 편지 서비스
> 미래의 나 또는 함께한 사람에게 남긴 메시지를 지정한 개봉일에 이메일로 전달하는 서비스

**Role**  
기획부터 백엔드와 프론트엔드 구현까지 전 과정을 담당했습니다. Spring Boot API, JPA 연관관계, 데이터베이스 스키마, 스케줄러 기반 배치 발송, HTML 이메일, 배포 환경을 직접 구성했습니다.

**Key Contributions**
- `@Scheduled` 기반 배치로 개봉일 도래 캡슐을 조회하고 이메일을 자동 발송
- `is_done`과 `is_processed` 상태를 분리해 중복 발송 방지
- 발송 실패 시 실패 상태와 캡슐 ID를 남겨 재처리 가능한 흐름 구성
- Flyway V1~V5로 스키마 변경 이력을 코드로 관리
- `@MockBean` 기반 단위 테스트로 실제 이메일 발송 없이 기능 검증
- 서버 시간대 차이로 인한 배치 실행 오류를 타임존 명시와 Docker 환경 설정으로 해결

**Tech**  
`Java` `Spring Boot` `JPA/Hibernate` `Flyway` `JUnit` `Swagger` `Docker Compose`

---

### WIGo | Visual-Inertial SLAM 기반 실내 내비게이션
> 시각장애인과 초행길 이용자를 위한 음성 기반 실내 AR 내비게이션 앱

**Role**  
5인 팀 프로젝트에서 Android 앱의 사용자 접점, STT/TTS 흐름, LLM 서버 연동을 담당했습니다.

**Key Contributions**
- 자연어 음성 발화에서 목적지를 추출하도록 FastAPI와 LLM API 연동
- TTS 큐 방식으로 안내 음성이 끊기는 문제 해결
- LLM 응답을 기다리는 동안 즉시 음성 피드백을 제공해 체감 대기 시간 개선
- 캡스톤디자인 동상 및 한국통신학회 우수논문상 수상

**Tech**  
`Kotlin` `Android` `ARCore` `FastAPI` `OpenAI API`

---

### StockPDA | 바코드 기반 입출고·재고 관리 앱
> PDA 환경에서 바코드 스캔으로 창고 입고, 출고, 재고를 관리하는 Android 애플리케이션

**Role**  
객체지향 설계 산출물 작성과 핵심 기능 개발을 주도했습니다. 비전공 팀원과 함께 개발 환경과 코드 구조를 맞추며 프로젝트를 완성했습니다.

**Key Contributions**
- Use Case, Domain Model, Design Model 기반으로 기능과 책임을 설계
- 바코드 연속 인식으로 동일 요청이 중복 실행되는 문제를 방지해 중복 처리 0건 달성
- Firebase 비동기 데이터 수신 뒤 화면을 갱신하도록 흐름을 재설계

**Tech**  
`Java` `Android` `CameraX` `ML Kit` `Firebase`

---

## Tech Stack

### Backend
![Java](https://img.shields.io/badge/Java-007396?style=flat-square&logo=openjdk&logoColor=white)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-6DB33F?style=flat-square&logo=springboot&logoColor=white)
![JPA](https://img.shields.io/badge/JPA-59666C?style=flat-square)
![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=flat-square&logo=fastapi&logoColor=white)

### Data & Infra
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=mysql&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=flat-square&logo=firebase&logoColor=black)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white)
![Flyway](https://img.shields.io/badge/Flyway-CC0200?style=flat-square&logo=flyway&logoColor=white)

### Client
![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white)
![Android](https://img.shields.io/badge/Android-3DDC84?style=flat-square&logo=android&logoColor=white)

---

## Education & Activities

- **SSAFY 15기** | 2026.01 ~ 2026.12
- **국민대학교** | 2020.03 ~ 2026.02
- **네이버 부스트캠프 챌린지** | 2025.07 ~ 2025.08

## Awards

- 한국통신학회 학술대회 우수논문상 | 2025.11
- 국민대학교 다학제간 캡스톤디자인 졸업작품전시회 동상 | 2025.05

---

> 코드의 동작을 이해하고, 사용자가 신뢰할 수 있는 흐름을 설계합니다.
