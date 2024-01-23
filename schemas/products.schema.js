//1. mongoose 가져오기
import mongoose from 'mongoose';

//2. 스키마 작성하기

// 상품(goods)에 대한 정보를 나타내는 스키마를 정의합니다.
const goodsSchema = new mongoose.Schema({
  goodsId: {
    type: Number,
    required: true, // 필수 항목입니다.
    unique: true, // 중복된 값을 허용하지 않습니다.
  },
  title: {
    type: String,
    required: true,
    unique: true,
  },
  author: {
    type: String,
    required: true,
    unique: true,
  },
  status: {
    type: String,
    required: true,
    default: 'FOR_SALE',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

//3. 스키마를 통해 모델 구현하기
//4. 모델 외부로 보내기
// 위에서 정의한 스키마를 이용하여 'Goods'라는 이름의 모델을 생성합니다.
export default mongoose.model('Goods', goodsSchema);
