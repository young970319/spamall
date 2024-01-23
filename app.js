import express from 'express';
import goodsRouter from './routes/products.router.js';
import connect from './schemas/index.js';

const app = express();
const PORT = 3000; // 서버를 열 때 사용할 포트 번호

connect(); //Mongodb를 연결하기 위한 커넥트 함수를 실행한다.

// Express에서 req.body에 접근하여, body 데이터를 사용할 수 있도록 설정하는 미들웨어 등록
app.use(express.json()); //json형태로 서버에 body 데이터를 전달하면, req.body에 데이터를 변환하여 넣어준다.
app.use(express.urlencoded({ extended: true })); //form content type 에서 body 데이터를 전달하면, req.body에 데이터를 변환하여 넣어준다.

app.get('/', (req, res) => {
  const reqQuery = req.query; //sort=desc
  res.send('Hello World!');
});

// localhost:3000/api -> goodsRouter
// 2. 라우터를 등록 합니다.
app.use('/api', goodsRouter);
// 1. Express.js의 서버를 엽니다.
app.listen(PORT, () => {
  console.log(PORT, '포트로 서버가 열렸어요!');
});
