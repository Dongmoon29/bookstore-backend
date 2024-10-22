## RGT 기술 과제

RGT 기술과제 백엔드 프로젝트입니다.

## 구현 설명

https://brainy-begonia-0e6.notion.site/RGT-127bad44aef480ecbba3f74e327704c4

## 프로젝트 실행 설명

```bash
$ npm install
```

## 로컬 테스팅을 위한 DB 세팅

```bash
# postgres 컨테이너 구동
$ docker-compose up -d
```

```bash
# db 마이그레이션
$ npm run migration:run
```

## 프로젝트 실행

```bash
$ npm run start
```

## 테스트

```bash
$ npm run test
```
