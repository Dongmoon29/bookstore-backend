## 프로젝트 실행 설명

## 프로젝트 세팅

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

## 프로젝트 개발 상세
