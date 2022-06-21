import {
  AiOutlinePlusCircle,
  AiOutlineMinusCircle,
  AiOutlineUndo,
} from 'react-icons/ai';
function ExhibitionOrder() {
  return (
    <>
      <div className="exhibition-order mx-2">
        <div className="row my-4">
          <div className="col ex-title">
            <h1>挑戰—安藤忠雄展 TADAO ANDO：ENDEAVORS</h1>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h2>展覽時間 2022/6/3 - 2022/9/13 (10：00 - 18：00)</h2>
          </div>
        </div>
        <div className="row">
          <div className="col">NT200</div>
        </div>
        <div className="row">
          <div className="col">選擇張數</div>
          <div className="col text-end">
            <a
              href="#/"
              className="text-decoration-none icon"
              style={{ color: '#903f23' }}
              onClick={() => {}}
            >
              <AiOutlineUndo />
            </a>
            <a
              href="#/"
              className="text-decoration-none "
              style={{ color: '#903f23' }}
              onClick={() => {}}
            >
              重選
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-4">張數</div>
          <div className="col-4 per">NT200/每張</div>
          <div className="col-4 text-end">
            <a href="#/" className="icon" onClick={() => {}}>
              <AiOutlineMinusCircle />
            </a>
            <a
              href="#/"
              className="text-decoration-none mx-4 tatol"
              style={{ color: 'black' }}
            >
              0
            </a>
            <a href="#/" className="icon" onClick={() => {}}>
              <AiOutlinePlusCircle />
            </a>
          </div>
        </div>

        <hr></hr>
        <div className="text-end">
          <div className="total-price my-2">
            總金額 <span>NT600</span>
          </div>
          <button className="my-4">立即購買</button>
        </div>
      </div>
    </>
  );
}

export default ExhibitionOrder;
