import express from 'express';
import Goods from '../schemas/products.schema.js';

// Express.js의 라우터를 생성합니다.
const router = express.Router();

//1. mongoose
import mongoose from 'mongoose';

router.get('/goods', (req, res) => {
  return res.status(200).json({
    goods: goods,
  });
});

/**상품 상세조회 */
router.get('/goods/:goodsId', (req, res) => {
  const goodsId = req.params.goodsId;
  const goodsItem = goods.find((item) => item.goodsId === +goodsId);

  return res.json({ goods: goodsItem });
});

// 2. API 를 구현한다.
router.post('/goods', async (req, res) => {
  //3. 클라이언트로 부터 전달받은 데이터를 가져온다.
  const { goodsId, title, author, status, createdAt } = req.body;

  //4. goodsId 가 중복되지 않았는지 검사한다. -> 실제로 MongoDB에 데이터를 조회해서, 해당하는 데이터가 MongoDB에 존재하는지 확인한다.
  //exec() -> promise 형태로 조회, 데이터를 조회할 때 사용한다.
  const goods = await Goods.find({ goodsId }).exec();

  //4-1. 만약, goodsId 가 중복된다면, 에러메세지를 전달한다.
  if (goods.length) {
    return res
      .status(400)
      .json({ success: false, errorMessage: '이미 존재하는 데이터입니다.' });
  }

  //5. 상품(Goods)를 생성한다.
  const createdGoods = await Goods.create({
    goodsId,
    title,
    author,
    status,
    createdAt,
  });

  //6. 생성된 상품 정보를 클라이언트에게 응답반환한다.
  return res.status(201).json({ goods: createdGoods });
});

export default router;
