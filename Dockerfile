# Node.js 14 버전과 Ubuntu 18.04 기반 이미지 사용
FROM node:14-bionic

# 1. 작업 디렉토리 설정
WORKDIR /usr/src/app

# 2. package.json 파일을 복사하고 의존성 설치
COPY package*.json ./
RUN npm install

# 3. 애플리케이션 소스 복사
COPY . .

# 4. 포트 오픈
EXPOSE 3000

# 5. 애플리케이션 실행
CMD ["npm", "run", "start:prod"]