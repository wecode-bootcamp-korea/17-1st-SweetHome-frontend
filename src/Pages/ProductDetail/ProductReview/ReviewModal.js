import React, { Component } from "react";
import "./ReviewModal.scss";

class ReviewModal extends Component {
  render() {
    return (
      <div className="ReviewModal">
        <h1 className="ReviewModalTitle">리뷰쓰기</h1>
        <div className="ReviewModalPoint">
          포토리뷰<span className="blue">250p</span>, 일반리뷰
          <span className="gray">0P</span>
        </div>
        <div className="ReviewModalForm">
          <div className="imageSection">
            <div className="imgBox">
              <img
                src="https://t2.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/2D9/image/MN3lKYkIUKB-Frgm-mv7aOSOuN4"
                alt="user_p
            rofile"
              />
            </div>
            <p>GAKYU</p>
            <span>모던 라운드 리빙박스 시리즈</span>
          </div>
          <div className="starScoreSection">
            <p>별점 평가</p>
            <div className="starScoreSectionSatisFaction">
              <span>만족도</span>
              <span>별 별 별 별 별</span>
            </div>
            <p>사진 첨부 (선택)</p>
            <span>
              포토리뷰 <span>250p</span>
            </span>
            <div className="photoSectionExplain">
              사진을 첨부해주세요.(최대 1장)
            </div>
            <button className="postPhoto">사진 첨부하기</button>
            <p>리뷰 작성</p>
            <textarea
              className="reviewInput"
              placeholder="자세하고 솔직한 리뷰는 다른 고객에게 큰 도움이 됩니다. (최소 20자 이상)"
            />
            <p>상품을 직접 사용하고 작성한 리뷰인가요?</p>
            <div className="reviewCheck">
              <input type="checkbox"></input>
              <span>
                네. 상품을 직접 사용 후 작성한 리뷰이며, 오늘의집 리뷰 정책에
                동의합니다.
              </span>
            </div>
            <button className="complete">완료</button>
          </div>
        </div>
        <div className="reviewPolicy">
          <ul>
            <li>
              비구매 상품 리뷰 포인트는 심사 후 지급됩니다.(영업일 기준 2~3일
              소요)
            </li>
            <li>포인트는 최초 작성한 리뷰를 기준으로 지급됩니다.</li>
            <li>
              사진 첨부시
              <span>
                캡쳐, 도용, 유사상품 촬영, 동일상품 여부 식별이 불가한 경우
              </span>
              에는 등록이 거절되며 사유는 별도 안내되지 않습니다.
            </li>
            <li>
              상품과 무관한 내용이나 사진, 동일 문자 반복 등의 부적합한 리뷰는
              사전 경고 없이 삭제 및 포인트 회수될 수 있습니다.
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default ReviewModal;
