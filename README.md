# 사진 조회 앱

### 지원자: 오주영

## 🛠 기술 스택

- 프레임워크 : Next.js 15
- 언어 : TypeScript
- 클라이언트 상태 관리 : Zustand
- 서버 상태 관리 : TanStack Query (React Query)
- 스타일링 : CSS Modules
- 빌드 도구 : Turborepo
- 패키지 관리 : pnpm
- UI 문서화 : Storybook

## 🚀 구현 내용

### 1. 모노레포 구조 설계

### 2. 메인 페이지

### 3. 결과 페이지

### 4. 404 페이지

### 5. UI 컴포넌트 라이브러리

## 개발 과정에서의 어려움

### 1. Turborepo 구성의 복잡성

Turborepo를 처음 구성하는 과정에서 여러 어려움이 있었습니다. 특히 패키지 간 의존성 관리와 빌드 파이프라인 설정에 많은 시간이 소요되었습니다. 워크스페이스 설정, 공유 설정 파일 구성, 그리고 각 패키지의 빌드 스크립트를 올바르게 연결하는 과정이 복잡했습니다.

## 실행 방법

### 개발 환경 설정

## 각각 패키지 설치 및 실행

```bash
cd packages/ui

pnpm install

cd packages/eslint-config

pnpm install

cd apps/web

pnpm install

pnpm dev
```

```bash
git clone https://github.com/your-username/openplan-assignments-ohjooyeong.git
cd openplan-assignments-ohjooyeong

pnpm install

pnpm dev
```

Storybook 실행

```bash
cd apps/storybook

pnpm install

pnpm dev
```
